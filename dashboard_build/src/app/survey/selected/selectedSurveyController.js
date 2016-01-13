/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService','surveyService', 'growl', '$state',
        '$stateParams','cfpLoadingBar','$timeout','answersData', 'prConstantOptions',
        function($rootScope, $scope, homeService, surveyService, growl, $state,
                 $stateParams, cfpLoadingBar, $timeout, answersData, prConstantOptions){
            //prConstantOptions.colors[0];
            $scope.chartData = [];

            var questionHolder = {};
            function loadSurveys() {
                $scope.loadingSurveys = false;

                $scope.selected_survey = surveyService.surveyLookup[$stateParams.survey_id];

                /*loop through the questions and use their c-ids to form a key with the answers as values*/
                for (var q = 0; q < $scope.selected_survey.question_tree.length; q++){/*q = question*/
                    var questionItem = $scope.selected_survey.question_tree[q];
                    questionHolder[questionItem.cid] = {
                        field_type : questionItem.field_type,
                        label : questionItem.label,
                        answer_options : []
                    };
                    if (questionItem.field_type == 'checkboxes' || questionItem.field_type == 'radio' || questionItem.field_type == 'dropdown' ) {
                        questionHolder[questionItem.cid].answer_options = {};
                        /*prepare the options for checkboxes*/
                        for (var a = 0; a < questionItem.field_options.options.length; a++ ){/*a = answer*/
                            var option = questionItem.field_options.options[a];
                            questionHolder[questionItem.cid].answer_options[$.trim(option.label)] = 0;
                        }
                    }
                }

                $scope.selected_survey.answers = answersData.data.data.answers.length;

                for (var i = 0; i < answersData.data.data.answers.length; i++) {
                    var response = answersData.data.data.answers[i];

                    /*Parse the response string to JSON*/
                    var userAnswers = JSON.parse(response.answer_response);

                    console.log('questionHolder', questionHolder);
                    console.log('userAnswers', userAnswers);
                    /*loop through each of the answer keys of the json object*/
                    angular.forEach(userAnswers, function (value, prop) {
                        //get the question of the answer in the loop and find the type of response required
                        /*check if the answer and the question property match, i.e. nothing has been edited*/
                        if (questionHolder[prop] !== undefined) {
                            /*if check boxes, update the count of each option in the array*/
                            if (questionHolder[prop].field_type == 'checkboxes') {
                                for(var a_o = 0; a_o < value.length; a_o++){/* a_o = answer option*/
                                    questionHolder[prop].answer_options[ value[a_o] ] ++ ;
                                }
                            }else if(questionHolder[prop].field_type == 'radio' || questionHolder[prop].field_type == 'dropdown'){

                                questionHolder[prop].answer_options[ value ] ++ ;

                            }else{
                                /*keep all other answer types in an array with the respondents' details in an object*/
                                questionHolder[prop].answer_options.push({
                                    name : response.name_of_respondent,
                                    email : response.email,
                                    phone_number : response.phone_number,
                                    created_at : response.created_at,
                                    content : value
                                }) ;
                            }
                        }

                    });
                }

            }

            if (surveyService.surveys && surveyService.surveys.length) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });

            $scope.$on('newSurveyResponse', function(evt, data){
                if (data.survey_id == $stateParams.survey_id) {
                    answersData.data.data.answers.push(data);
                    loadSurveys();
                    if (! _.isEmpty($scope.selected_question)) {
                    $scope.selectQuestion($scope.selected_question);
                    }
                }
            });

            $scope.reloadAnswers = function () {
                $state.reload(true)
            };

            $scope.changeChartType = function (chartType) {
            };
            $scope.selectQuestion = function (question_clicked) {
                $scope.selected_question = question_clicked;
                $scope.searchResponse = '';
                $scope.reverse = true;
                $scope.chartData = [];

                if (questionHolder[question_clicked.cid].field_type == 'checkboxes' ||
                    questionHolder[question_clicked.cid].field_type == 'radio'||
                    questionHolder[question_clicked.cid].field_type == 'dropdown'){
                    var colorOptionTracker = 0;
                    $scope.selected_question.type = 'closed';
                    angular.forEach(questionHolder[question_clicked.cid].answer_options, function (value, key) {
                        $scope.chartData.push({
                            "country": key,
                            "visits": value,
                            "color": prConstantOptions.colors[colorOptionTracker++]
                        })
                    });
                    $scope.selected_question.answers = answersData.data.data.answers.length;
                }else{
                    $scope.selected_question.answers = questionHolder[question_clicked.cid].answer_options;
                    $scope.selected_question.type = 'opened';

                }

            }

        }]);


