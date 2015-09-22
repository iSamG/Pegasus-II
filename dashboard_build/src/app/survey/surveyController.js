/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyController', ['$rootScope', '$scope', 'homeService', 'growl','surveysList','questionData',
        'submittedResponsesData','$location','$modal','surveyService','$interval',
        function($rootScope, $scope, homeService, growl, surveysList, questionData,
                 submittedResponsesData, $location, $modal, surveyService, $interval){

            $scope.surveyData = questionData.data;

            $scope.listOfSurveys = {
                surveys : []
            };

            if (surveysList) {
                //if ($.trim(surveysList.data.surveys) != 'No surveys set up') {
                //    $scope.listOfSurveys = surveysList.data;
                //}
            }


            $scope.notifyRespondents = function(survey_name){
                $location.path('/surveys/respondents').search({survey : survey_name })
            };
            //submittedResponsesData.data = {
            //    submissions : [{ formId :'journalis_survey_id', i :1},{formId :'journalis_survey_id', w:2},{formId :'journalis_survey_id', e:3}]
            //};
            $scope.submittedResponses = submittedResponsesData.data;

            $scope.$on('reloadSurvey', function (info) {
                growl.info('Reloading survey list...', {});
                surveyService.getAllSurveys()
                    .success(function (surveysListData) {
                        $scope.listOfSurveys = surveysListData.data;
                        growl.info('Survey list has been reloaded', {});
                    })
                    .error(function (data) {
                        growl.info('Survey list data could not be loaded. Please refresh your browser', {});
                    })
            });

            //$interval(function () {
            //    $scope.reloadSurveyData();
            //}, 6000, 10000);


            $scope.reloadSurveyData = function () {
                //$rootScope.$broadcast('reloadSurvey');
                surveyService.getAllResponses()
                    .success(function (surveyResponsesData) {
                        console.log("before");
                        console.log($scope.submittedResponses);

                        $rootScope.$broadcast('updateSubmissions', surveyResponsesData);
                        //surveyResponsesData.data = {
                        //    submissions : [{formId :'journalis_survey_id',i :1},{formId :'journalis_survey_id', w:2},{formId :'journalis_survey_id', e:6},{formId :'journalis_survey_id', i :6},{formId :'journalis_survey_id', w:9},{formId :'journalis_survey_id', e:0},{formId :'journalis_survey_id', i :32},{formId :'journalis_survey_id', w:42},{formId :'journalis_survey_id', e:73},{formId :'journalis_survey_id', i :61},{formId :'journalis_survey_id', w:72},{e:903}]
                        //};
                        //angular.forEach(surveyResponsesData.data.submissions, function (resp, index) {
                        //    $scope.submittedResponses.submissions.push(resp);
                        //});
                        $scope.submittedResponses = surveyResponsesData;
                        console.log("after");
                        console.log($scope.submittedResponses);
                        //$scope.listOfSurveys = surveysListData.data;
                        //growl.info('Survey responses refreshed', {});
                    })
                    .error(function (data) {
                        growl.info('Survey responses data could not be loaded. Please refresh your browser', {});
                    })
                    .then(function () {
                    })
            };

            $scope.openDeleteModal = function(survey_name, form_id, num_of_questions, num_of_responses){
                $modal.open({
                    templateUrl : 'modals/deleteSurveyModal.tpl.html',
                    controller : deleteSurveyModalController,
                    size : 'lg',
                    resolve : {
                        selected_survey : function(){
                            return {
                                survey_name : survey_name,
                                form_id : form_id,
                                questions_length : num_of_questions,
                                responses_length : num_of_responses
                            }
                        }
                    }
                });

                function deleteSurveyModalController ($rootScope, $scope, $modalInstance, surveyService, selected_survey, growl ){

                    $scope.selected_survey = selected_survey;

                    $scope.deleteSurvey = function(){

                        surveyService.deleteSurvey(selected_survey)
                            .success(function (data) {
                                console.log('delete - ' , data);
                                growl.success('Survey deleted successfully', {title : 'Delete Survey'});
                                $rootScope.$broadcast('reloadSurvey');
                            })
                            .error(function (data) {
                                growl.error('Survey could not be deleted', {title : 'Delete Survey'});
                            }).then(function () {
                                $scope.close();
                            });

                    };

                    $scope.close = function(){
                        $modalInstance.dismiss('cancel')
                    }
                }
            }
        }])



    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService','surveyService', 'growl','uiGmapGoogleMapApi',
        'questionData', 'submittedResponsesData','$stateParams','cfpLoadingBar','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, uiGmapGoogleMapApi, questionData, submittedResponsesData,
                 $stateParams, cfpLoadingBar, $timeout){

            $scope.surveyData = questionData.data;

            $scope.submittedResponsesData = submittedResponsesData.data;

            $scope.surveyName = $stateParams.survey;

            $scope.surveyFormId = $stateParams.form_id;

            var questionHolder = {};
            var indexHolder = null;

            $scope.$on('updateSubmissions', function (evt, data) {
                $scope.submittedResponsesData = data;
                if (indexHolder) {
                    $scope.selectQuestion($scope.selected_question, indexHolder);
                }
            });

            //This is the object to be sent to google charts
            $scope.chartObject = {
                data : {
                    cols : [],
                    rows : []
                }
            };

            $scope.selectQuestion = function(question, index){
                //Empty the scope object or declare if undefined
                $scope.selected_question = {};

                //Assign the selected/clicked question to the declared scope variable
                $scope.selected_question = question;
                questionHolder = question;

                //Assign the index too for detailed analytics view
                $scope.selected_question.index = index;
                indexHolder = index;

                //for close ended questions,
                if ($scope.selected_question.question_type == 'close_ended') {

                    //Get the individual answers value
                    $scope.selected_question.answer_values = $scope.selected_question.possible_answers.split(',');
                    $scope.selected_question.answer_labels = $scope.selected_question.possible_answers_labels.split(',');
                    $scope.selected_question.answers = {};
                    $scope.chartObject.data= {
                        cols: [
                            {id: 'A', label: 'question_field', type: 'string'},
                            {id: 'B', label: 'Responses', type: 'number'}
                        ],
                        rows : []
                    };
                    //Assign the split answer value as a key in a property of the selected question's answer object
                    angular.forEach($scope.selected_question.answer_values, function (option, index) {

                        //In the selected question object, assign each possible answer to a property in the "answer" property of the question
                        if ($.trim(option) != '') {
                            $scope.selected_question.answers[ $.trim(option) ] = 0;

                        }
                    });

                    //Loop over the submitted responses submitted
                    angular.forEach($scope.submittedResponsesData.submissions, function (responseObject, indexObject) {

                        if (responseObject.formId == $stateParams['form_id'] ) {
                            //Loop over the data field in the responses submitted
                            angular.forEach(responseObject.data, function (responseData, indexData) {

                                //if the supplied answer is a multiple choice one, loop over and increment each option
                                if (typeof (responseData[$scope.selected_question.question_field]) == 'object') {
                                    angular.forEach(responseData[$scope.selected_question.question_field], function (choice, index) {

                                        //And Increment the answer chosen in the chosen question's answer object
                                        $scope.selected_question.answers [choice]++
                                    });
                                }
                                else {
                                    //Increment the answer chosen in the chosen question's answer object
                                    $scope.selected_question.answers [responseData[$scope.selected_question.question_field]]++
                                }


                            })
                        }
                    });

                    //Assign answer count to chart rows for chart display
                    angular.forEach($scope.selected_question.answer_values, function (option, indexOption) {
                        if ($.trim(option) != '') {

                            $scope.chartObject.data.rows.push({
                                c : [ {v: $scope.selected_question.answer_labels[indexOption]},
                                    {v : $scope.selected_question.answers[option],   f: $scope.selected_question.answers[option] }]
                            });
                        }

                    });



                    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
                    $scope.chartObject.type = 'BarChart';
                    $scope.chartObject.options = {
                        "title": $scope.selected_question.question,
                        "fill": 20,
                        "displayExactValues": true
                        //"is3D": true,

                    };
                }else{
                    $scope.chartObject = {
                        data : {
                            cols : [],
                            rows : []
                        }
                    };
                    questionHolder = {};
                    indexHolder = null;
                    //Empty answer variable or declare if undefined
                    $scope.selected_question.answers = [];

                    //Loop over the submitted responses submitted
                    angular.forEach($scope.submittedResponsesData.submissions, function (responseObject, indexObject) {

                        if (responseObject.formId == $stateParams['form_id'] ) {
                            //Loop over the data field in the responses submitted
                            angular.forEach(responseObject.data, function (responseData, indexData) {

                                //Check if the content of the answer is a media one
                                if (typeof (responseData[$scope.selected_question.question_field]) == 'object') {

                                    $scope.selected_question.answers.push({
                                        url: responseData[$scope.selected_question.question_field].url,
                                        type: responseData[$scope.selected_question.question_field].type,
                                        filename: responseData[$scope.selected_question.question_field].filename,
                                        submitted_date: responseData['*meta-submission-date*']
                                    });
                                    $scope.selected_question.answer_format_type = 'image';

                                }else{
                                    if($scope.selected_question.question_field == 'location') {
                                        //If the question is for maps
                                        $scope.selected_question.answers.push(
                                            {
                                                latitude : responseData['location:Latitude'],
                                                longitude : responseData['location:Longitude'],
                                                business_name : responseData['name_of_business'],
                                                submitted_date: responseData['*meta-submission-date*']
                                            });
                                        $scope.selected_question.answer_format_type = 'location';
                                    }else{
                                        $scope.selected_question.answers.push({
                                            value: responseData[$scope.selected_question.question_field],
                                            submitted_date: responseData['*meta-submission-date*']
                                        });
                                        $scope.selected_question.answer_format_type = 'regular';
                                    }
                                }

                            });
                        }
                    });

                }

            };

            $scope.changeChartType = function (chartType) {
                if ($scope.chartObject.data.rows.length) {
                    $scope.chartObject.type = chartType;
                    if (chartType != 'BarChart') {
                        $scope.chartObject.options.vAxis =  {
                            "title": "Responses"
                            //"gridlines": {"count": 6}
                        };
                        $scope.chartObject.options.hAxis =  {
                            "title": "Possible Answers"
                        }
                    }else{
                        $scope.chartObject.options.vAxis =  {
                            "title": "Possible Answers"
                            //"gridlines": {"count": 6}
                        };
                        $scope.chartObject.options.hAxis =  {
                            "title": "Responses"
                        }
                    }
                }
            };

            $scope.reloadSurvey = function(){
                cfpLoadingBar.start();
                growl.info("Reloading survey", {});
                cfpLoadingBar.set(0.3);
                $timeout(function () {
                    growl.info("Checking available survey submissions", {});
                    console.log("before");
                    console.log($scope.submittedResponsesData);
                    cfpLoadingBar.set(0.6);
                    surveyService.getAllResponses()
                        .success(function (dataReturned) {
                            growl.success("Refresh complete", {});
                            $timeout(function () {
                                cfpLoadingBar.complete();
                            }, 2500);
                            $scope.submittedResponsesData = dataReturned;
                            console.log("dataReturned");
                            console.log(dataReturned);
                            console.log("AFTER");
                            console.log($scope.submittedResponsesData);
                            if (questionHolder.question && indexHolder != null) {
                                $scope.selectQuestion(questionHolder, indexHolder);
                                console.log("reloaded submission and reassigned");
                            }
                            //$scope.$apply();
                        });
                }, 2000)
            };



        }])

    .controller('prDetailedAnalyticsSurveyController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        'questionData','submittedResponsesData','$stateParams','uiGmapGoogleMapApi','cfpLoadingBar','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, questionData, submittedResponsesData, $stateParams, uiGmapGoogleMapApi, cfpLoadingBar, $timeout ){

            $scope.surveyData = questionData.data;

            $scope.selected_question = $scope.surveyData.questions_details[ $stateParams.index ];

            $scope.submittedResponsesData = submittedResponsesData.data;

            $scope.$on('updateSubmissions', function (evt, data) {
                if (!$scope.mapAccordionIsOpen) {
                    $scope.submittedResponsesData = data;
                    $scope.selectQuestion($scope.selected_question, $stateParams.index);
                }
            });

            //This is the object to be sent to google charts
            $scope.chartObject = {
                data : {
                    cols : [],
                    rows : []
                }
            };


            $scope.selectQuestion = function(question, index){
                //Empty the scope object or declare if undefined
                $scope.selected_question = {};

                //Assign the selected/clicked question to the declared scope variable
                $scope.selected_question = question;

                //Assign the index too for detailed analytics view
                $scope.selected_question.index = index;

                //for close ended questions,
                if ($scope.selected_question.question_type == 'close_ended') {

                    //Get the individual answers value
                    $scope.selected_question.answer_values = $scope.selected_question.possible_answers.split(',');
                    $scope.selected_question.answer_labels = $scope.selected_question.possible_answers_labels.split(',');
                    $scope.selected_question.answers = {};
                    $scope.chartObject.data= {
                        cols: [
                            {id: 'A', label: 'question_field', type: 'string'},
                            {id: 'B', label: 'Responses', type: 'number'}
                        ],
                        rows : []
                    };
                    //Assign the split answer value as a key in a property of the selected question's answer object
                    angular.forEach($scope.selected_question.answer_values, function (option, index) {

                        //In the selected question object, assign each possible answer to a property in the "answer" property of the question
                        if ($.trim(option) != '') {
                            $scope.selected_question.answers[ $.trim(option) ] = 0;

                        }
                    });

                    //Loop over the submitted responses submitted
                    angular.forEach($scope.submittedResponsesData.submissions, function (responseObject, indexObject) {

                        if (responseObject.formId == $stateParams['form_id'] ) {

                            //Loop over the data field in the responses submitted
                            angular.forEach(responseObject.data, function (responseData, indexData) {

                                //if the supplied answer is a multiple choice one, loop over and increment each option
                                if (typeof (responseData[$scope.selected_question.question_field]) == 'object') {
                                    angular.forEach(responseData[$scope.selected_question.question_field], function (choice, index) {

                                        //And Increment the answer chosen in the chosen question's answer object
                                        $scope.selected_question.answers [choice]++
                                    });
                                } else {
                                    //Increment the answer chosen in the chosen question's answer object
                                    $scope.selected_question.answers [responseData[$scope.selected_question.question_field]]++
                                }
                            })
                        }

                    });

                    //Assign answer count to chart rows for chart display
                    angular.forEach($scope.selected_question.answer_values, function (option, indexOption) {
                        if ($.trim(option) != '') {

                            $scope.chartObject.data.rows.push({
                                c : [ {v: $scope.selected_question.answer_labels[indexOption]},
                                    {v : $scope.selected_question.answers[option],   f: $scope.selected_question.answers[option].toString() }]
                            });
                        }

                    });



                    // $routeParams.chartType == BarChart or PieChart or ColumnChart...
                    $scope.chartObject.type = 'BarChart';
                    $scope.chartObject.options = {
                        "title": $scope.selected_question.question,
                        "fill": 20,
                        "displayExactValues": true
                        //"is3D": true,

                    };
                }
                else{
                    $scope.chartObject = {
                        data : {
                            cols : [],
                            rows : []
                        }
                    };


                    //Empty answer variable or declare if undefined
                    $scope.selected_question.answers = [];
                    var answersHolder = [];

                    //Loop over the submitted responses submitted
                    angular.forEach($scope.submittedResponsesData.submissions, function (responseObject, indexObject) {

                        if (responseObject.formId == $stateParams['form_id'] ) {

                            //Loop over the data field in the responses submitted
                            angular.forEach(responseObject.data, function (responseData, indexData) {

                                //Check if the content of the answer is a media one
                                if (typeof (responseData[$scope.selected_question.question_field]) == 'object') {


                                    $scope.selected_question.answers.push({
                                        url: responseData[$scope.selected_question.question_field].url,
                                        type: responseData[$scope.selected_question.question_field].type,
                                        filename: responseData[$scope.selected_question.question_field].filename,
                                        submitted_date: responseData['*meta-submission-date*']
                                    });
                                    $scope.selected_question.answer_format_type = 'image';


                                }else{
                                    $scope.selected_question.answers.push({
                                        value: responseData[$scope.selected_question.question_field],
                                        submitted_date: responseData['*meta-submission-date*']
                                    });
                                    //Double Hold the dat so we can slice one into another when paginating
                                    answersHolder.push({
                                        value: responseData[$scope.selected_question.question_field],
                                        submitted_date: responseData['*meta-submission-date*']
                                    });

                                    //pagination start
                                    $scope.totalItems =    $scope.selected_question.answers.length;
                                    $scope.currentPage = 1;
                                    $scope.maxSize = 5;
                                    $scope.nextPage = 0;
                                    //pagination end


                                    $scope.pageChanged = function(currentPage) {
                                        $scope.nextPage = ($scope.maxSize  * currentPage) - $scope.maxSize;
                                        $scope.selected_question.answers =  answersHolder.slice($scope.nextPage , ($scope.nextPage + $scope.maxSize) );
                                    };

                                    $scope.pageChanged($scope.currentPage);
                                }


                            });
                        }
                    });

                }

                $scope.loadMarkers();
            };


            $scope.loadMarkers =  function  (){
                if ($scope.selected_question){

                    $scope.markers = [];
                    var uniqueMapCounter = 23;

                    //These variable will determine the center of the map
                    var centerLatitude =  5.5912087;
                    var centerLongitude = -0.1797294;

                    //Loop over the data field in the responses submitted
                    angular.forEach($scope.submittedResponsesData.submissions, function (responseObject, indexObject) {

                        if (responseObject.formId == $stateParams['form_id'] ) {

                            uniqueMapCounter ++;
                            //Loop over the data field in the responses submitted
                            angular.forEach(responseObject.data, function (responseData, indexData) {
                                if (responseData['location:Latitude'] && responseData['location:Longitude'] ) {
                                    $scope.markers.push({
                                        id : parseInt(uniqueMapCounter) + 1,
                                        points : {latitude: responseData['location:Latitude'], longitude: responseData['location:Longitude'] }
                                    });
                                }

                                //Assign the center variables to the last point in the array pf submissions
                                centerLatitude = responseData['location:Latitude'];
                                centerLongitude = responseData['location:Longitude'];
                            });

                            console.log($scope.markers);

                        }

                    });
                    $scope.map = { center:
                    { latitude: centerLatitude, longitude: centerLongitude },
                        zoom: 8,
                        style : {
                            height : '500px',
                            width : '100%'
                        }
                    }
                }
            };

            $scope.mapAccordionIsOpen = true;

            $scope.selectQuestion($scope.selected_question, $stateParams.index);

            $scope.changeChartType = function (chartType) {

                if ($scope.chartObject.data.rows.length) {
                    $scope.chartObject.type = chartType;
                    if (chartType != 'BarChart') {
                        $scope.chartObject.options.vAxis =  {
                            "title": "Responses"
                            //"gridlines": {"count": 6}
                        };
                        $scope.chartObject.options.hAxis =  {
                            "title": "Possible Answers"
                        }
                    }else{
                        $scope.chartObject.options.vAxis =  {
                            "title": "Possible Answers"
                            //"gridlines": {"count": 6}
                        };
                        $scope.chartObject.options.hAxis =  {
                            "title": "Responses"
                        }
                    }
                }
                $rootScope.$broadcast('resizeMsg');
            };

            $scope.resizeChart = function () {
                $rootScope.$broadcast('resizeMsg');
            };

            $scope.callSuperBoxGallery = function () {
                $timeout(function () {
                    $('.superbox').SuperBox();
                }, 500, 3)
            };


            // uiGmapGoogleMapApi is a promise.
            // The "then" callback function provides the google.maps object.
            //uiGmapGoogleMapApi.then(function(maps) {
            //
            //});

            $scope.colourTypeSelectionClass = function (question, $index) {
                if ( question.question_type == 'open_ended') {
                    return $index == $scope.selected_question.index ? 'blue_bg' : 'list-group-item-success';
                }
                if ( question.question_type == 'close_ended') {
                    return $index == $scope.selected_question.index ? 'blue_bg' : 'list-group-item-danger';
                }
            };


            $scope.reloadSubmissions = function(){
                cfpLoadingBar.start();
                growl.info("Reloading survey submissions", {});
                cfpLoadingBar.set(0.5);
                surveyService.getAllResponses()
                    .success(function (dataReturned) {
                        $timeout(function () {
                            cfpLoadingBar.complete();
                            growl.success("Reloaded successfully", {});
                        }, 1500);
                        $scope.submittedResponsesData = dataReturned;
                        $scope.selectQuestion($scope.selected_question, $stateParams.index);
                    });
            };

        }])

    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        'questionData','submittedResponsesData','surveysList','$location','$timeout',
        function($rootScope, $scope, homeService,surveyService, growl, questionData, submittedResponsesData, surveysList, $location, $timeout ){

            //get email address of logged in user from the backend
            var from = $('#user_logged_in_email').text();

            $scope.surveyData = questionData.data;

            $scope.listOfSurveys = surveysList.data;

            $scope.surveyName = $location.search().survey;

            /*
             *Email Respondent Section
             * */
            $scope.respondent_form = {
                emails  : [],
                recipients  : [],
                from : from,
                survey :  $scope.surveyName
            };

            $scope.sendEmail = function(){
                if ($scope.respondent_form.emails.length > 0) {
                    $scope.respondent_form.recipients = [];
                    angular.forEach($scope.respondent_form.emails, function (email, index) {
                        $scope.respondent_form.recipients.push(email.text)
                    });
                    if ($scope.respondent_form.survey) {
                        surveyService.sendRespondentEmail($scope.respondent_form)
                            .success(function () {
                                var plural = $scope.respondent_form.recipients.length > 1 ? 's' : '';
                                var emailRecipientCount = $scope.respondent_form.recipients.length;
                                growl.info("Email" + plural +" successfully queued on the server", {title : 'Email Queue'});

                                angular.forEach( $scope.respondent_form.recipients, function (email, index) {
                                    $timeout(function () {
                                        growl.success("Email sent to " + email, {title : 'Email Success Notification'});
                                        emailRecipientCount --;

                                        if (emailRecipientCount == 0) {
                                            $timeout(function () {
                                                growl.info("No errors occurred in sending email" + plural, {title : 'Email Delivery Notice'});
                                            }, 3000)
                                        }
                                    }, (3500 * (index + 1) ));
                                });
                                $scope.respondent_form = {
                                    emails  : [],
                                    recipients  : [],
                                    from : from,
                                    survey :  $scope.surveyName
                                };
                            })
                            .error(function () {
                                growl.error("Emails could not be sent", {});

                            })
                    }else{
                        growl.warning("Please select a survey", {});
                    }

                }else{
                    growl.warning("Please type at least one recipient email", {});
                }
            };

            /*
             * End email section
             * */


            /*
             * SMS Send Section
             * */
            $scope.sms_respondent_form = {
                phone_numbers  : [],
                recipients  : [],
                from : "PegasusRises",
                survey :  $scope.surveyName
            };

            $scope.sendSMS = function(){
                if ($scope.sms_respondent_form.phone_numbers.length > 0) {
                    $scope.respondent_form.recipients = [];
                    angular.forEach($scope.sms_respondent_form.phone_numbers, function (number, index) {
                        $scope.sms_respondent_form.recipients.push(number.text)
                    });
                    if ($scope.sms_respondent_form.survey) {
                        surveyService.sendRespondentSMS($scope.sms_respondent_form)
                            .success(function () {
                                growl.success("SMS sent successfully", {});
                                $scope.respondent_form.recipients = [];
                                $scope.respondent_form.phone_numbers = [];
                            })
                            .error(function () {
                                growl.error("SMS could not be sent", {});

                            })
                    }else{
                        growl.info("Please select a survey", {});
                    }

                }else{
                    growl.info("Please type at least one recipient phone number", {});
                }
            };

            /*
             * Send SMS end
             * */

        }]);
