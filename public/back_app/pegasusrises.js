/**
 * Created by kaygee on 2/16/15.
 */
angular.module('admin', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('settings', {
                url : '/settings',
                templateUrl : 'app/admin/settings.tpl.html',
                controller : 'prAdminSettingsCtrl'
            })
            .state('profile', {
                url : '/profile',
                templateUrl : 'app/admin/profile.tpl.html',
                controller : 'prAdminProfileCtrl'
            })
    }])
    .controller('prAdminSettingsCtrl', ['$rootScope', '$scope','$localStorage','growl', function($rootScope, $scope, $localStorage, growl){
        $scope.status = {
            isopen: false
        };

        $scope.themes = [
            {name : 'White (Default)', key : 'light_theme'},
            {name : 'Red' , key : 'red_thm'},
            {name : 'Green', key : 'green_thm'},
            {name : 'Blue', key : 'blue_thm'},
            {name : 'Magento', key : 'magento_thm'}
        ];

        $scope.themeChoice = $scope.themes[0];

        $scope.changeTheme = function(choice){
            $scope.themeChoice = choice;
             var body = $('body');
                body.removeClass('blue_thm');
                body.removeClass('red_thm');
                body.removeClass('magento_thm');
                body.removeClass('green_thm');
                body.addClass(choice.key);
        };

          $scope.headerOptions = [
            {name : 'Fixed header', key : 'fixed_header', description : 'The header will be fixed to the top whiles scrolling up and down.'},
            {name : 'Scroll with body (Unfixed)', key : 'unfixed', description: 'The header will scroll together with the body.'}
        ];

        $scope.headerChoice = $scope.headerOptions[0];

        $scope.changeHeaderType = function(choice){
            $scope.headerChoice = choice;
            var body = $('body');
            if(body.hasClass('fixed_header') && $scope.headerChoice.key == 'unfixed'){
                body.removeClass('fixed_header');
            }else if(!(body.hasClass('fixed_header')) && $scope.headerChoice.key != 'unfixed'){
                body.addClass('fixed_header');
            }
        };

          $scope.navOptions = [
            {name : 'Fixed Side Navigation', key : 'left_nav_fixed', description : 'The side navigation will be fixed in position whiles scrolling up and down.'},
            {name : 'Scroll Side Navigation', key : 'unfixed', description: 'The side navigation will scroll together with the body.'}
        ];

        $scope.navChoice = $scope.navOptions[0];

        $scope.changeNavType = function(choice){
            $scope.headerChoice = choice;
            var body = $('body');
            if(body.hasClass('left_nav_fixed') && $scope.headerChoice.key == 'unfixed'){
                body.removeClass('left_nav_fixed');
            }else if(!(body.hasClass('left_nav_fixed')) && $scope.headerChoice.key != 'unfixed'){
                body.addClass('left_nav_fixed');
            }
        };


        $scope.clearStorage = function(){
            $localStorage.$reset({
                first_timer : true
            });

            growl.success('Storage cleared successfully', {});
        }



    }])
    .controller('prAdminProfileCtrl', ['$rootScope', '$scope', function($rootScope, $scope){

    }]);
/**
 * Created by kaygee on 2/16/15.
 */

//var ngPegasusApp =
angular.module('pegasusrises', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'templates.app',
    'home',
    'admin',
    'survey',
    'directives',
    'lk-google-picker',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    'uiGmapgoogle-maps',
    'googlechart',
    'ngStorage',
    'ngTagsInput',
    'perfect_scrollbar',
    'mgo-angular-wizard'
])

    //'angular-loading-bar',
    .constant('prConstantKeys', {
        google_api_key: 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU',
        google_client_id : '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com'
    })

    .config(['$stateProvider','$urlRouterProvider','lkGoogleSettingsProvider',
        'growlProvider', '$httpProvider', 'uiGmapGoogleMapApiProvider','prConstantKeys',
        function($stateProvider, $urlRouterProvider, lkGoogleSettingsProvider,
                 growlProvider, $httpProvider, uiGmapGoogleMapApiProvider, prConstantKeys){
            //for any unmatched url, redirect to the state '/home'
            $urlRouterProvider.otherwise('/');

            //This is the configuration for the Google Picker API
            lkGoogleSettingsProvider.configure({
                apiKey   :  prConstantKeys.google_api_key,
                clientId : prConstantKeys.google_client_id,
                scopes   : ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.readonly'],
                locale   : 'en',
                features : [],
                views    : [
                    'DocsView().setMimeTypes("application/vnd.google-apps.spreadsheet")'
                ]
            });
            //globally time the growl toatser to stay visible for 5seconds
            growlProvider.globalTimeToLive(5000);

            uiGmapGoogleMapApiProvider.configure({
                key : prConstantKeys.google_api_key,
                v: '3.17',
                //libraries: 'weather,geometry,visualization'
                libraries: ''
            });


        }])
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar','$localStorage' ,function($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $localStorage.$default({
            first_timer : true
        });

        $rootScope.fromNow = function(datetime){
            return moment(datetime).fromNow();
        };

        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            cfpLoadingBar.start();
            $rootScope.loading = true;
        });

        $rootScope.$on('$viewContentLoading',function(event){
            cfpLoadingBar.inc();
        });

        $rootScope.$on('$viewContentLoaded',function(event){
            cfpLoadingBar.complete();
            $rootScope.loading = false;
        });

    }]);

angular.module('pegasusrises').controller('prBreadCrumbCtrl', ['$scope', '$state' ,function($scope, $state){
    $scope.$watch('$state', function(oldVal, newVal){
        $scope.subtitle = ($state.current.name).toUpperCase();
    });

    $scope.configJoyRide = [
        {
            type: "title",
            heading: "Welcome to the Pegasus Tutorial",
            text: '<div class="row">' +
            '<div id="title-text" style="font-size: medium;" class=" text-center col-md-12"><br>' +
            'This walkthrough will help you familiarize with the Pegasus Build System</div></div>',
            scroll: true
        },
        {
            type: "element",
            selector: "#ngJoyRide_1_gdrive",
            heading: "Create a Server",
            text: "<span class=''  style='font-size: medium;'>This button will open your Google Drive in this interface to allow you select the XLS file that will be used to generate the server</span>" +
            "<br><span  style='font-size: small;'>Clicking \"NEXT\'</span>",
            placement: "left",
            scroll: true
        },
        {
            type : 'function',
            fn : function(){
                $scope.startJoyRide = false;
                $('#ngJoyRide_1_gdrive').trigger('click');
            }
        },
        {
            type : 'element',
            selector : '#ngJoyRide_2_upload',
            heading : "<span class='text-center'  style='font-size: medium;'>Upload the selected Google Sheet to begin creating your server</span>",
            scroll : true,
            placement : "left"
        }

    ];

    $scope.startJoyRide = function(){
        $scope.startJoyRide = !$scope.startJoyRide
    };

    $scope.onFinish = function(){
        //alert("Joy ride ends")
    };



}]);
/**
 * Home Template
 *
 * Created by kaygee on 2/12/15.
 */

angular.module('home', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'app/home/home.tpl.html',
                controller : 'prHomeController',
                metadata : 'Home'
                //resolve : {
                //    surveyService : 'surveyService',
                //
                //    surveyData : function(surveyService){
                //        return {}
                //    }
                //
                //}
            })
    }]);
/**
 * Created by kaygee on 2/18/15.
 */

angular.module('home')
    .controller('prHomeController', ['$rootScope', '$scope','$state', 'homeService','surveyService', 'growl',
        'cfpLoadingBar', '$localStorage', '$sessionStorage','$timeout','$interval',
        function($rootScope, $scope, $state, homeService, surveyService, growl, cfpLoadingBar, $localStorage, $sessionStorage,
                 $timeout, $interval){
            $scope.files = [];

            $scope.first_timer = $localStorage.first_timer;

            $scope.uploadSheet = function(){
                var fileToUpload = $scope.files[ $scope.files.length - 1 ];
                homeService.uploadGoogleSheet(fileToUpload).
                    success(function(data, status, headers, config) {
                        growl.success("Data was posted successfully", {});
                    }).
                    error(function(data, status, headers, config) {
                        growl.error("Something went wrong on the server", {});
                    });
            };

            $scope.tabletop= function(){
                if ($scope.files.length) {
                    $scope.surveyDataReturned = {};
                    Tabletop.init( {
                        key: $scope.files[ $scope.files.length - 1].id,
                        callback: function(data, tabletop) {
                            console.dir(data);
                            angular.forEach(data, function(val, prop){
                                $scope.surveyDataReturned [ prop ] = {
                                    column_names :  data[prop].column_names,
                                    elements :  data[prop].elements,
                                    name :  data[prop].name,
                                    original_columns : data[prop].original_columns,
                                    pretty_columns : data[prop].pretty_columns
                                };
                                $scope.surveyDataReturned.form_id = $scope.files[$scope.files.length-1].name;
                            });
                            if (data) {
                                homeService.uploadGoogleSheetContentsAsJson($scope.surveyDataReturned)
                                    .success(function(data){
                                        //$localStorage.first_timer = false;
                                        growl.success("Data was posted successfully", {});
                                    })
                                    .error(function(){
                                        growl.error("Something went wrong on the server", {});
                                    })
                            }else{
                                alert("The file has not been shared to the public")
                            }
                        },
                        simpleSheet: false
                    })
                }else{
                    alert("No file selected")
                }
            };

            $scope.getFile = function(){
                homeService.getFileFromGoogle($scope.files[ $scope.files.length - 1].id)
                    .success(function(data, stuff, more, headers){
                        console.log(data);
                        var infoToPost = {
                            downloadUrl : data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
                            filename : $scope.files[ $scope.files.length - 1].name
                        };

                        homeService.sendXLSDownloadUrl(infoToPost)

                    })
            };

            $scope.processServer = function(){
                cfpLoadingBar.start();
                growl.info('Getting file from Google Spreadsheets...', {});


                $timeout(function(){
                    growl.success('File downloaded successfully', {});
                    cfpLoadingBar.set(0.3);


                    $scope.tabletop();


                    $timeout(function(){
                        growl.info('Processing and saving file content into database', {});

                        $timeout(function(){
                            growl.success('File saved successfully', {});
                            cfpLoadingBar.set(0.6);

                            $timeout(function(){
                                cfpLoadingBar.set(0.8);
                                growl.info('Deploying survey for participation...', {});

                                $timeout(function(){
                                    growl.success('Successfully created server', {});
                                    cfpLoadingBar.complete();
                                    //$localStorage.first_timer = false;
                                    $state.go('surveys.respondents')
                                }, 2000);

                            }, 3500);

                        }, 3500);

                    }, 3000);


                }, 2000);



            };

            $scope.disableServerCreateButton = false;

            $scope.beginPegasusServer = function(){
                $scope.disableServerCreateButton = true;
                cfpLoadingBar.start();
                growl.info('Downloading file from Google Spreadsheets...', {});

                homeService.getFileFromGoogle($scope.files[ $scope.files.length - 1].id)
                    .success(function(data, stuff, more, headers){
                        growl.success('File downloaded successfully from Google', {});
                        var infoToPost = {
                            downloadUrl : data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
                            filename : $scope.files[ $scope.files.length - 1].name
                        };
                        var retryCounter = 0;
                        $scope.sendFileForConversion = function () {
                            $scope.disableServerCreateButton = true;
                            growl.info('Converting file to XForms', {});
                            homeService.sendXLSDownloadUrl(infoToPost)
                                .success(function (data) {
                                    if (data.status == 'success') {

                                        growl.success('File converted successfully', {});
                                        cfpLoadingBar.set(0.3);

                                        growl.info('Processing and saving file content into database', {});
                                        if ($scope.files.length) {
                                            $scope.surveyDataReturned = {};
                                            Tabletop.init({
                                                key: $scope.files[$scope.files.length - 1].id,
                                                callback: function (data, tabletop) {
                                                    angular.forEach(data, function (val, prop) {
                                                        $scope.surveyDataReturned [prop] = {
                                                            column_names: data[prop].column_names,
                                                            elements: data[prop].elements,
                                                            name: data[prop].name,
                                                            original_columns: data[prop].original_columns,
                                                            pretty_columns: data[prop].pretty_columns
                                                        };
                                                        if (prop == 'settings') {
                                                            angular.forEach($scope.surveyDataReturned.settings.elements, function (form, index) {
                                                                if (form.form_id != '') {
                                                                    $scope.surveyDataReturned.form_id = form.form_id;
                                                                }else{
                                                                    $scope.surveyDataReturned.form_id = $scope.files[$scope.files.length - 1].name;
                                                                }
                                                            })
                                                        }

                                                    });
                                                    if (data) {
                                                        homeService.uploadGoogleSheetContentsAsJson($scope.surveyDataReturned)
                                                            .success(function (data) {
                                                                growl.success("Spreadsheet contents saved successfully", {});
                                                                cfpLoadingBar.set(0.6);

                                                                $timeout(function () {
                                                                    cfpLoadingBar.set(0.8);
                                                                    growl.info('Deploying survey for participation...', {});

                                                                    $timeout(function () {
                                                                        growl.success('Successfully created survey server', {});
                                                                        cfpLoadingBar.complete();
                                                                        //$localStorage.first_timer = false;
                                                                        $state.go('surveys.respondents')
                                                                    }, 2000);

                                                                }, 3500);
                                                            })
                                                            .error(function () {
                                                                cfpLoadingBar.complete();
                                                                growl.error("File contents could not be processed. Please check if all required parameters are in place.", {title : "File Processing Error"});
                                                                $scope.files = [];
                                                            })
                                                    } else {
                                                        growl.error("The file has not been shared to the public", {})
                                                    }
                                                },
                                                simpleSheet: false
                                            })
                                        } else {
                                            growl.error(data.content, {});
                                        }
                                    } else if (data.status == 'failed') {
                                        if (data.content == "timeout_exception") {
                                            if (retryCounter < 3) {
                                                growl.info("A timeout occurred on the server. Retrying file conversion...", {});
                                                $timeout(function () {
                                                    $scope.sendFileForConversion();
                                                    retryCounter ++
                                                }, 2500);
                                            }else{
                                                growl.error("There was a problem converting the file selected", {});
                                            }
                                        }else{
                                            growl.error(data.content, {});
                                        }
                                        console.log('conversion error---   ', data);
                                    }
                                })
                                .error(function (data) {
                                    console.log('error--', data);
                                    cfpLoadingBar.complete();
                                    growl.error("Something went wrong on the server. Please retry", {});
                                })
                                .then(function () {
                                    $scope.disableServerCreateButton = false;
                                    cfpLoadingBar.complete();
                                });
                        };

                        /*Send an Email to dev to alert them to publish data*/
                        var recipients = {
                            from : "Publish Data on Aggregate",
                            recipients : ["team@pollafrique.com","lostsaux@gmail.com", "aliuwahab@gmail.com"]
                        };
                        surveyService.sendRespondentEmail(recipients)
                            .success(function () {
                                $scope.sendFileForConversion();
                            });
                    })
                    .error(function () {
                        cfpLoadingBar.complete();
                        growl.error("Could not download file from Google. Please ensure the file has been published to the web and retry.", {});
                        $scope.files = [];

                    });

            };

            $scope.dataFromAggregate = function() {
                surveyService.getDataFromPegasus()
                    .success(function (data) {
                        console.log('data');
                        $scope.returnedDataSingle = data;
                        angular.forEach(data, function (setInfo, index) {
                            console.log(JSON.parse(setInfo));
                            $scope.returnedData = JSON.parse(setInfo);

                        });
                    })
            }

        }]);
/**
 * Created by kaygee on 2/13/15.
 */


angular.module('home')
    .factory('homeService', ['$http','prConstantKeys', function($http, prConstantKeys){
        var homeService = {};

        homeService.uploadGoogleSheet = function(fileObject){
            return $http.post('/post/google/sheet', fileObject);
        };

        homeService.uploadGoogleSheetContentsAsJson = function(fileObject){
            return $http.post('/google/sheet/json', fileObject);
        };

        homeService.sendXLSDownloadUrl = function( data ){
            return $http.post('/gcs', data);
        };

        homeService.getFileFromGoogle = function(fileId){
            var url = 'https://www.googleapis.com/drive/v2/files/' + fileId;
            return $http.get(url, {params : { key : prConstantKeys.google_api_key}});
        };

        return homeService;
    }]);
/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'app/survey/survey_list.tpl.html',
                controller : 'prSurveyController',
                metadata : "Surveys",
                resolve : {
                    surveyService : 'surveyService',

                    surveysList : function(surveyService){
                        //return surveyService.getAllSurveys()
                        return []
                    },

                    questionData : function(surveyService){
                        //return surveyService.getSurveyQuestionDetails()
                        return []
                    },

                    submittedResponsesData : function(surveyService){
                        //return surveyService.getAllResponses()
                        return []
                    }
                }
            })
            .state('surveys.analytics', {
                url : 'analytics/:survey/:form_id/:index',
                templateUrl : 'app/survey/detailed_analytics.tpl.html',
                controller : 'prDetailedAnalyticsSurveyController',
                metadata : "Survey Analytics"
            })
            .state('surveys.respondents', {
                url : '/respondents',
                templateUrl : 'app/survey/respondents.tpl.html',
                controller : 'prSurveyRespondentsController',
                metadata : "Invite Respondents"
            })
            .state('surveys.selected_survey', {
                url : 'select/:form_id/:survey',
                templateUrl : 'app/survey/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController',
                metadata : 'View Survey'
            })
            .state('surveys.create_new', {
                url : 'survey/create/new',
                templateUrl : 'app/survey/create_server_wizard.tpl.html',
                controller : 'prCreateSurveyController',
                metadata : 'Create Survey'
            })
    }]);
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

        }])
    .controller('prCreateSurveyController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl','$location','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $location, $timeout ){


            // Disable weekend selection
            //$scope.disabled = function(date, mode) {
            //    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
            //};

            $scope.toggleMin = function() {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
            $scope.toggleMin();
            $scope.maxDate = new Date(2020, 5, 22);

            $scope.status = {
                opened : false
            };

            $scope.open = function($event) {
                $scope.status.opened = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.format = "dd-MMMM-yyyy";

            $scope.createSurveyForm = {};


            $scope.surveyNameEntered = function () {
                if (!$scope.createSurveyForm.survey_name || $scope.createSurveyForm.survey_name.length < 5) {
                    growl.warning("Please enter a valid name of at least 5 characters to proceed", {title : "Survey name is required"});
                    return false;
                }
                return true;
            };

            $scope.surveyDurationEntered = function () {
                if (!$scope.createSurveyForm.startDate && !$scope.createSurveyForm.endDate) {
                    growl.warning("Please select a valid duration to proceed", {title : "Survey duration is required"});
                    return false;
                }
                return true;
            };

            $scope.submitForm = function () {
                surveyService.createSurvey($scope.createSurveyForm)
                    .success(function () {
                        alert("success")
                    })
                    .error(function () {
                        alert("failed")
                    })
            };

        }]);


/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .factory('surveyService' , [ '$http', function($http){
        var surveyService = {};

        surveyService.createSurvey = function(form){
            return $http.post('/create/survey', form)
        };

        surveyService.getAllSurveys = function(){
            return $http.get('/user/surveys/read')
        };

        surveyService.getSurveyQuestionDetails = function( ){
            return $http.get('/questions/properties/read');
            //return $http.get('/frontend/dummyloader/questions.json')
        };

        surveyService.getAllResponses = function( ){
            return $http.get('/data/submissions/read');
            //return $http.get('/frontend/dummyloader/submissions.json')
        };

        surveyService.sendRespondentEmail = function(data){
            return $http.post('/sendmail', data)
        };

        surveyService.sendRespondentSMS = function(data){
            return $http.post('/send/sms', data)
        };

        surveyService.deleteSurvey = function(data){
            return $http.post('/delete/user/surveys', data)
        };

        return surveyService;
    }]);
/**
 * Created by Kaygee on 07/03/2015.
 */

angular.module('directives', []);


angular.module('directives')
    .directive('openClosed', [function(){
        return {
            restrict: 'ECA',

            replace: false,

            scope: {
                type: '@'
            },

            controller: function ($scope) {
                $scope.label = {
                    open_ended : 'OPEN',
                    close_ended : 'CLOSED'
                };

                $scope.class = {
                    open_ended : 'label-success',
                    close_ended : 'label-danger'
                }            },

            template: '<span class="label" ng-title="{{  label [ type ] - ENDED }}" ng-class="class[ type ]" style="font-size: smaller">{{ label [ type ] }}</span>'
        }
    }]);