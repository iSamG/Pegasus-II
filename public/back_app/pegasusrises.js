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
angular.module('admin')
    .factory('adminService' , ['$rootScope', '$http', '$q','prRoutes', function($rootScope, $http, $q, prRoutes) {
        var adminService = {};

        adminService.getAuthUser = function () {
            var defer = $q.defer();
            $http.get(prRoutes.getAuthUser)
                .success(function (successData) {
                    if (successData.code == '200' && successData.status.toLowerCase() == 'ok') {
                        $('body').removeClass('hidden');
                        $rootScope.user = successData.data;
                        defer.resolve(true);
                    }
                    else{
                        goToPublicHome();
                        defer.reject(false);
                    }
                });
            return defer.promise;
        };

        adminService.logoutUser =  $rootScope.logoutUser  = function () {
            $http.get(prRoutes.logoutUser)
                .success(function (successData) {
                    if (successData.code == '200' && successData.status.toLowerCase() == 'ok') {
                        goToPublicHome();
                    }
                })
        };

        function goToPublicHome(){
            location.href='/';
        }

        return adminService;
    }]);

/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('admin').controller('prBreadCrumbCtrl', ['$scope', '$state' ,function($scope, $state){

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



}])
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
    'doowb.angular-pusher',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    //'uiGmapgoogle-maps',
    'ngStorage',
    'ngTagsInput',
    'perfect_scrollbar',
    'mgo-angular-wizard'
])
    .config(['$stateProvider','$urlRouterProvider',
        'growlProvider', '$httpProvider','prConstantKeys','PusherServiceProvider',
        function($stateProvider, $urlRouterProvider,
                 growlProvider, $httpProvider, prConstantKeys, PusherServiceProvider){
            //for any unmatched url, redirect to the state '/home'
            $urlRouterProvider.otherwise('/');

            //globally time the growl toatser to stay visible for 5seconds
            growlProvider.globalTimeToLive(5000);

            //Pusher token
            //key = '21469ff0850de21291e1'
            //secret = '750f5c48dfd5ad48adac'

            PusherServiceProvider.setToken('21469ff0850de21291e1');
            //            .setOptions({});


        }]);




angular.module('pegasusrises')
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar','$localStorage','surveyService','adminService',
        function($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage, surveyService, adminService){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            //$localStorage.$default({
            //    first_timer : true
            //});

            $rootScope.fromNow = function(datetime){
                return moment(datetime).fromNow();
            };

            $rootScope.formatDate = function(datetime){
                //return moment(datetime).format('Do, MMMM  YYYY, h:mm:ss a');
                return moment(datetime).format('Do, MMM  YYYY');
            };
            //$table->enum('input_type', ['radio', 'checkboxes','text','date','dropdown','time','number','website','email','price','address','gps','image','video']);
            $rootScope.formatFieldType = {
                radio : 'Single Choice',
                checkboxes : 'Multiple Choice',
                text : 'Text field',
                paragraph : 'Text field',
                date : 'Date',
                dropdown : 'Single Choice',
                time : 'Time',
                number : 'Number',
                website : 'Website',
                email : 'Email Address',
                price : 'Currency',
                address : 'Address',
                gps : 'Location',
                image : 'Image',
                video : 'Video',
                file : 'File'
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

            adminService.getAuthUser()
                .then(function (status) {
                    if (status) {
                        surveyService.loadAllSurveys();
                    }

            });


            $rootScope.reloadSurveyData = function () {
                surveyService.loadAllSurveys();
            }

        }]);
/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('pegasusrises')
    .constant('prConstantKeys', {
        google_api_key: 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU',
        google_client_id : '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com'
    })
    .constant('prFieldTypes', {
        /*[string, number(numbers, including floating numbers), integer, boolean, array, object ]*/
        radio : 'boolean', /*'boolean',*/
        checkboxes : 'array',
        text : 'string',
        paragraph : 'string',
        date : 'string',
        dropdown : 'string',
        time : 'string',
        number : 'number',
        website : 'string',
        email : 'string',
        price : 'string',
        address : 'string',
        gps : 'string',
        image : 'string',
        video : 'string',
        file : 'string'
    })
    .constant('prConstantOptions', {
        colors : [
            "#FF0F00", "#FF6600", "#FF9E01", "#FCD202","#F8FF01","#B0DE09", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0",
            "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333",  "#000000"]
    })

    .constant('prRoutes', {
        createSurvey : '/create/survey',
        editSurvey : '/edit/survey',
        deleteSurvey : '/delete/survey',
        retrieveAllSurveys : '/retrieve/all/surveys',
        retrieveOneSurvey : '/retrieve/a/survey',

        saveQuestions : '/create/a/survey/question',
        editQuestions : '/edit/a/survey/question',
        deleteQuestions : '/delete/a/survey/question',

        retrieveQuestions : '/retrieve/a/survey/with/questions',
        retrieveAnswersToASurvey : '/retrieve/answers/to/survey',


        sendEmail : '/sendEmail',


        getAuthUser : '/auth/user',
        logoutUser : '/logout'

    });
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

            $scope.loadingSurveys = true;

            function loadSurveys() {
                $scope.surveys = surveyService.surveys;
                $scope.loadingSurveys = false;
            }

            if (surveyService.surveys) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });

        }]);
/**
 * Created by kaygee on 2/13/15.
 */


angular.module('home')
    .factory('homeService', ['$http','prConstantKeys', function($http, prConstantKeys){
        var homeService = {};

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
                templateUrl : 'app/survey/list_all/survey_list.tpl.html',
                controller : 'prSurveyController',
                metadata : "Surveys"
            })
            .state('surveys.analytics', {
                url : '/analytics/:survey/:form_id/:index',
                templateUrl : 'app/survey/analytics/detailed_analytics.tpl.html',
                controller : 'prDetailedAnalyticsSurveyController',
                metadata : "Survey Analytics"
            })
            .state('surveys.respondents', {
                url : '/respondents/:survey_id',
                templateUrl : 'app/survey/respondents/respondents.tpl.html',
                controller : 'prSurveyRespondentsController',
                metadata : "Respondents"
            })
            .state('surveys.selected_survey', {
                url : '/select/:survey_id',
                templateUrl : 'app/survey/selected/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController',
                metadata : 'View Survey',
                resolve : {
                    '$stateParams' : '$stateParams',
                    'surveyService' : 'surveyService',
                    answersData : function ($stateParams, surveyService) {
                        return surveyService.retrieveAnswersToASurvey($stateParams.survey_id)
                    }
                }
            })
            .state('surveys.create_new', {
                url : '/create/new',
                templateUrl : 'app/survey/create/create_server_wizard.tpl.html',
                controller : 'prCreateSurveyController',
                metadata : 'Create Survey'
            })
            .state('surveys.form_builder', {
                url : '/:survey_id/build/questionnaire/form',
                templateUrl : 'app/survey/forms/design_formbuilder/design_form.tpl.html',
                controller : 'prFormBuilderController',
                metadata : 'Survey Form Builder'
            })
    }]);
/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prDetailedAnalyticsSurveyController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        '$stateParams','cfpLoadingBar','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $stateParams, cfpLoadingBar, $timeout ){



        }]);

/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prCreateSurveyController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl','$state','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $state, $timeout ){



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

            $scope.createSurveyForm = {
                user_id : $scope.user.id,
                survey_type : 'public',
                survey_medium : 'email'
            };

            $scope.surveyNameEntered = function () {
                if (!$scope.createSurveyForm.survey_name || $scope.createSurveyForm.survey_name.length < 5) {
                    growl.warning("Please enter a valid name of at least 5 characters to proceed", {title : "Survey name is required"});
                    return false;
                }
                return true;
            };

            $scope.surveyDurationEntered = function () {
                if (!$scope.createSurveyForm.start_date && !$scope.createSurveyForm.end_date) {
                    growl.warning("Please select a valid duration to proceed", {title : "Survey duration is required"});
                    return false;
                }
                return true;
            };

            $scope.submitForm = function () {
                surveyService.createSurvey($scope.createSurveyForm)
                    .success(function () {
                       growl.success('Survey created successfully');
                        surveyService.loadAllSurveys()
                            .then(function () {
                                $state.go('surveys');
                            })
                    })
                    .error(function () {
                        growl.error('Survey creation failed');

                    })
            };

        }]);


/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prFormBuilderController', ['$rootScope', '$scope','$state', 'homeService', 'surveyService', 'growl','$localStorage','$timeout',
        function($rootScope, $scope,$state,  homeService, surveyService, growl, $localStorage, $timeout ){

            var surveyPayLoad;
            function loadSurveys() {
                $scope.surveys = surveyService.surveys;
                $scope.loadingSurveys = false;

                var surveyData;
                $scope.selected_survey = surveyService.surveyLookup[$scope.$stateParams.survey_id];

                if ($scope.selected_survey && $scope.selected_survey.question_tree && $scope.selected_survey.question_tree.length) {
                    surveyData =$scope.selected_survey.question_tree;
                }
                //else if ( $localStorage.survey ) {
                //    surveyData = JSON.parse($localStorage.survey).fields;
                //}

                var formbuilder  = new Formbuilder({
                    selector: '#formbuilder',
                    bootstrapData: surveyData
                });

                formbuilder.on('save', function(payload){
                    var data = JSON.parse(payload);
                    if (data.fields && data.fields.length) {
                        $timeout(function () {
                            surveyPayLoad = payload;
                        });
                    }
                });

                $timeout(function () {
                    $('#saveQuestionnaire').click(function () {
                        console.log('log');
                        $scope.saveQuestionnaire();
                    });
                });
            }

            if (surveyService.surveys) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });





            $scope.saveQuestionnaire = function () {

                if (surveyPayLoad) {
                    var surveyData = JSON.parse(surveyPayLoad);
                    var questionsArray = [], answerArray = [];

                    if (surveyData.fields.length) {

                        for (var i = 0; i < surveyData.fields.length; i++) {
                            var eachArrayItem = surveyData.fields[i];

                            var question_type = 'open',
                                question_position = 'middle',
                                exit_question_unique_id = '',
                                entry_question_unique_id = '';

                            if (eachArrayItem.field_type == 'radio' || eachArrayItem.field_type == 'checkboxes') {
                                question_type = 'close';

                                for(var a = 0; a < eachArrayItem.field_options.options.length; a++){
                                    answerArray.push({
                                        question_id : eachArrayItem.cid,
                                        answer_option : eachArrayItem.field_options.options[a].label
                                    })
                                }
                            }

                            /*position of question*/
                            if ( i == 0) {
                                question_position = 'beginning';
                            }else if ( i  == (surveyData.fields.length - 1) && surveyData.fields.length > 1){
                                question_position = 'end';
                            }

                            /*next question's id*/
                            if ( i == 0 && surveyData.fields.length == 1) {
                                exit_question_unique_id = eachArrayItem.cid;

                            }else if ( i == 0 && surveyData.fields.length > 1){
                                exit_question_unique_id = surveyData.fields[i + 1].cid;
                            }

                            else if ( question_position == 'middle'){
                                entry_question_unique_id = surveyData.fields[i - 1].cid;
                                exit_question_unique_id = surveyData.fields[i + 1].cid;
                            }

                            else if ( question_position == 'end'){
                                entry_question_unique_id = surveyData.fields[i - 1].cid;
                                exit_question_unique_id = '';
                            }




                            questionsArray.push({
                                survey_id : $scope.$stateParams.survey_id,
                                question_type : question_type, /*open_ended, close_ended'*/
                                unique_question_id : eachArrayItem.cid,
                                //question_unique_code : '',
                                question_position : question_position, /*'beginning', 'middle', 'end' */
                                input_type : eachArrayItem.field_type,/*'radio', 'checkboxes','text','date','dropdown','time','number','website','email','price','address','gps','image','video'*/
                                question : eachArrayItem.label,
                                answer_options : JSON.stringify(answerArray)
                                //entry_question_unique_id : entry_question_unique_id,
                                //exit_question_unique_id : exit_question_unique_id
                            });



                        }

                        surveyService.editSurvey({
                            survey_id : $scope.$stateParams.survey_id,
                            question_tree : surveyPayLoad
                        })
                            .success(function (data) {
                                if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                                    growl.success('Uploading and processing questions to the server...');

                                    surveyService.loadAllSurveys()
                                        .then(function (status) {
                                            growl.success("Survey reloaded successfully");
                                            $state.go('surveys');
                                        });
                                }
                            })
                            .error(function () {
                                growl.error('An error occurred while attempting to upload');

                            });


                    }

                }else{
                    console.log("nothing");
                }
            };



        }]);


/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyController', ['$rootScope', '$scope', 'growl','surveyService',
        function($rootScope, $scope, growl, surveyService){

            $scope.loadingSurveys = true;

            function loadSurveys() {
                $scope.surveys = surveyService.surveys;
                $scope.loadingSurveys = false;
            }

            if (surveyService.surveys) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });

        }]);

/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        '$stateParams','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $stateParams, $timeout ){

            $scope.sendEmail = function () {
                $scope.sendingEmails = true;
                if (!$scope.respondent_form.survey_id) {
                    growl.info('Select a survey to be sent', {title : 'No Survey Selected', ttl : 5000});
                    return
                }
                if (!$scope.respondent_form.emails) {
                    growl.info('Specify at least one email recipient', {title : 'No Email Recipient', ttl : 5000});
                    return
                }
                $scope.respondent_form.survey_url = surveyService.surveyLookup[$scope.respondent_form.survey_id].survey_unique_public_url;
                $scope.respondent_form.survey_name = surveyService.surveyLookup[$scope.respondent_form.survey_id].survey_name;

                surveyService.sendEmail($scope.respondent_form)
                    .success(function (successData) {
                        if (successData) {
                            growl.success('Email Sent Successfully', {title : 'Email Sent', ttl : 5000});
                            $scope.sendingEmails = false;
                            $timeout(function () {
                                loadSurveys();
                            });
                        }

                    })
                    .error(function () {
                        growl.error('Email can not be sent at this time. Check internet connection', {title : 'Email Not Sent', ttl : 5000});
                        $scope.sendingEmails = false;
                    })
            };

            $scope.loadingSurveys = true;

            function loadSurveys() {
                $scope.sms_respondent_form = {
                    from_phone_number : $scope.user.phone_number
                };

                $scope.respondent_form = {
                    from_email : $scope.user.email
                };

                $scope.loadingSurveys = false;
                $scope.surveys = surveyService.surveys;
            }

            if (surveyService.surveys && surveyService.surveys.length) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });

        }]);

/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService','surveyService', 'growl',
        '$stateParams','cfpLoadingBar','$timeout','answersData', 'prConstantOptions',
        function($rootScope, $scope, homeService, surveyService, growl,
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

                for (var i = 0; i < answersData.data.data.answers.length; i++) {
                    var response = answersData.data.data.answers[i];

                    /*Parse the response string to JSON*/
                    var userAnswers = JSON.parse(response.answer_response);

                    /*loop through each of the answer keys of the json object*/
                    angular.forEach(userAnswers, function (value, prop) {

                        //get the question of the answer in the loop and find the type of response required
                        /*if check boxes, update the count of each option in the array*/
                        if (questionHolder[prop].field_type == 'checkboxes' || questionHolder[prop].field_type == 'radio') {
                            for(var a_o = 0; a_o < value.length; a_o++){/* a_o = answer option*/
                                questionHolder[prop].answer_options[ value[a_o] ] ++ ;
                            }
                        }else if(questionHolder[prop].field_type == 'dropdown'){
                            for(var d_a_o = 0; d_a_o < value.length; d_a_o++){/*d_a_o = dropdown answer option*/
                                questionHolder[prop].answer_options[ value ] ++ ;
                            }
                        }else{
                            questionHolder[prop].answer_options.push({
                                name : userAnswers.name_of_respondent,
                                email : userAnswers.email,
                                phone_number : userAnswers.phone_number,
                                created_at : userAnswers.created_at,
                                content : value
                            }) ;
                        }
                    });
                }

                console.log(questionHolder);
            }

            if (surveyService.surveys && surveyService.surveys.length) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });

            $scope.changeChartType = function (chartType) {

            };

            $scope.selectQuestion = function (question_clicked) {
                $scope.selected_question = question_clicked;
                $scope.chartData = [];
                if (questionHolder[question_clicked.cid].field_type == 'checkboxes' ||
                    questionHolder[question_clicked.cid].field_type == 'radio'||
                    questionHolder[question_clicked.cid].field_type == 'dropdown'){
                    var colorOptionTracker = 0;
                    angular.forEach(questionHolder[question_clicked.cid].answer_options, function (value, key) {
                        $scope.chartData.push({
                            "country": key,
                            "visits": value,
                            "color": prConstantOptions.colors[colorOptionTracker++]
                        })
                    });
                    console.log($scope.chartData);
                }

            }

        }]);



/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .factory('surveyService' , ['$rootScope', '$http', '$q','prRoutes', function($rootScope, $http, $q, prRoutes){
        var surveyService = {};

        surveyService.createSurvey = function(form){
            return $http.post(prRoutes.createSurvey, form)
        };

        surveyService.editSurvey = function(form){
            return $http.post(prRoutes.editSurvey, form)
        };

        surveyService.deleteSurvey = function(surveyId){
            return $http.post(prRoutes.deleteSurvey, {survey_id : surveyId})
        };

        surveyService.retrieveAllSurveys = function(){
            return $http.get(prRoutes.retrieveAllSurveys, {params : { admin_id : $rootScope.user.id}})
        };

        surveyService.retrieveOneSurvey = function(){
            return $http.get(prRoutes.retrieveOneSurvey)
        };

        surveyService.getAllResponses = function( ){
            return $http.get(prRoutes.createSurvey);
        };

        surveyService.retrieveQuestions = function(form){
            return $http.get(prRoutes.retrieveQuestions, form)
        };

        surveyService.saveQuestions = function(form){
            return $http.post(prRoutes.saveQuestions, form)
        };

        surveyService.editQuestions = function(form){
            return $http.post(prRoutes.editQuestions, form)
        };

        surveyService.deleteQuestions = function(form){
            return $http.post(prRoutes.deleteQuestions, form)
        };

        surveyService.retrieveAnswersToASurvey = function(surveyId){
            return $http.get(prRoutes.retrieveAnswersToASurvey, { params : { survey_id : surveyId }});
        };

        surveyService.sendEmail = function(form){
            return $http.post(prRoutes.sendEmail, form);
        };




        function initObjectsAndArrays(){
            surveyService.surveys = [];
            surveyService.surveyLookup = {};
        }



        function initiateSurveys() {
            for (var i = 0; i <  surveyService.surveys.length; i++){
                var each =  surveyService.surveys[i];

                if (typeof each.question_tree == 'string') {
                    try{
                        each.question_tree = JSON.parse(each.question_tree).fields;
                    }catch(e){
                        each.question_tree = [];
                    }
                }else{
                    console.log("each.question_tree", each.question_tree);
                }

                surveyService.surveyLookup[each.id] = each;
            }
            $rootScope.$broadcast('surveysLoadedAndPrepped');
        }


        surveyService.loadAllSurveys = function () {
            var defer = $q.defer();
            initObjectsAndArrays();


            this.retrieveAllSurveys()
                .success(function (data) {
                    if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                        surveyService.surveys = data.data;
                        initiateSurveys();
                        defer.resolve(true);
                    }
                })
                .error(function () {
                    defer.reject(false);

                });

            return defer.promise;

        };



        return surveyService;
    }]);
/**
 * Created by Kaygee on 07/03/2015.
 */



angular.module('directives', []);


angular.module('directives')
    .directive('amChart', [function(){
        return {

            replace: true,

            scope: {
                chartData: '=',
                chartType : '@',
                titleField : '@',
                valueField : '@'
            },

            controller : function ($scope) {
                $scope.$watch('chartData', function (newVal, oldVal) {
                    $scope.doChart();
                })

            },

            link : function (scope, elem, attrs) {
                var chart, graph;
                scope.doChart = function(){
                    if (!scope.chartData || !scope.chartData.length) {
                        $('#barChartDiv').hide();
                        $('#pieChartDiv').hide();
                        $('#columnChartDiv').hide();
                        return;
                    }
                    switch (scope.chartType) {
                        case 'bar' :
                            chart = new AmCharts.AmSerialChart();
                            chart.dataProvider = scope.chartData;
                            chart.categoryField = scope.titleField || "option";
                            chart.angle = 30;
                            chart.depth3D = 15;
                            chart.creditsPosition = "top-right";
                            chart.rotate = true;


                            graph = new AmCharts.AmGraph();
                            graph.valueField = scope.valueField || "response";
                            graph.type = "column";
                            graph.balloonText = "[[category]]: <b>[[value]]</b>";
                            graph.fillAlphas = 0.8;
                            graph.colorField = "color";
                            graph.lineAlpha = 0;

                            chart.addGraph(graph);
                            $('#barChartDiv').show();
                            chart.write('barChartDiv');
                            break;

                        case 'pie' :
                            // PIE CHART
                            chart = new AmCharts.AmPieChart();
                            chart.dataProvider = scope.chartData;
                            chart.titleField = scope.titleField || "option";
                            chart.valueField = scope.valueField || "response";
                            chart.outlineColor = "#FFFFFF";
                            chart.outlineAlpha = 0.8;
                            chart.outlineThickness = 2;
                            chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
                            // this makes the chart 3D
                            chart.depth3D = 15;
                            chart.angle = 30;
                            chart.creditsPosition = "top-right";

                            // WRITE
                            $('#pieChartDiv').show();
                            chart.write("pieChartDiv");
                            break;

                        case 'column' :
                            // SERIAL CHART
                            chart = new AmCharts.AmSerialChart();
                            chart.dataProvider =  scope.chartData;
                            chart.categoryField = scope.titleField || "option";
                            // the following two lines makes chart 3D
                            chart.depth3D = 20;
                            chart.angle = 30;

                            // AXES
                            // category
                            var categoryAxis = chart.categoryAxis;
                            categoryAxis.labelRotation = 90;
                            categoryAxis.dashLength = 5;
                            categoryAxis.gridPosition = "start";

                            // value
                            var valueAxis = new AmCharts.ValueAxis();
                            valueAxis.title = "Visitors";
                            valueAxis.dashLength = 5;
                            chart.addValueAxis(valueAxis);

                            // GRAPH
                            graph = new AmCharts.AmGraph();
                            graph.valueField = scope.valueField || "response";
                            graph.colorField = "color";
                            graph.balloonText = "<span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                            graph.type = "column";
                            graph.lineAlpha = 0;
                            graph.fillAlphas = 1;
                            chart.addGraph(graph);

                            // CURSOR
                            var chartCursor = new AmCharts.ChartCursor();
                            chartCursor.cursorAlpha = 0;
                            chartCursor.zoomable = false;
                            chartCursor.categoryBalloonEnabled = false;
                            chart.addChartCursor(chartCursor);

                            chart.creditsPosition = "top-right";


                            // WRITE
                            $('#columnChartDiv').show();
                            chart.write("columnChartDiv");

                            break;


                    }
                };
            },

            template: function (template, scope) {
                if(scope.chartType == 'bar'){
                    return '<div id="barChartDiv" style="width: 100%; height: 400px;"></div>'
                }else if(scope.chartType == 'pie'){
                    return '<div id="pieChartDiv" style="width: 100%; height: 400px;"></div>'
                }else {
                    return '<div id="columnChartDiv" style="width: 100%; height: 400px;"></div>'
                }
            }
        }
    }]);
/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives')
    .directive('deleteSurvey', ['surveyService','$modal', function (surveyService, $modal) {

        return {
            scope: {
                survey_id : '@deleteSurvey'
            },

            link : function ($scope, elem, attrs) {
                elem.bind('click', function () {
                    $modal.open({
                        controller : ['$scope','$modalInstance','growl', DeleteSurveyModalController],
                        templateUrl : 'common/modals/deleteSurveyModal.tpl.html',
                        size : 'sm'
                    });

                    function DeleteSurveyModalController($scope,$modalInstance, growl){
                        $scope.close = function () {
                            $modalInstance.dismiss();
                        };

                        $scope.selected_survey = surveyService.surveyLookup[attrs.deleteSurvey];

                        $scope.deleteSurvey = function () {
                            surveyService.deleteSurvey(attrs.deleteSurvey)
                                .success(function (data) {
                                    if (data.code == '200') {
                                        growl.success('Survey deleted successfully');
                                        surveyService.loadAllSurveys()
                                            .then(function (status) {
                                                if (status) {
                                                    $scope.close()
                                                }
                                            })
                                    }
                                })
                        };
                    }
                })
            }
        }

    }]);
/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives')
    .directive('editSurvey', ['surveyService','$modal', function (surveyService, $modal) {

        return {
            scope: {
                survey_id : '@editSurvey'
            },

            link : function ($scope, elem, attrs) {
                elem.bind('click', function () {
                    $modal.open({
                        controller : ['$scope','$modalInstance','growl', EditSurveyModalController],
                        templateUrl : 'common/modals/editSurveyModal.tpl.html',
                        size : 'md'
                    });

                    function EditSurveyModalController($scope,$modalInstance, growl){
                        $scope.close = function () {
                            $modalInstance.dismiss();
                        };

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


                        $scope.selected_survey = angular.copy(surveyService.surveyLookup[attrs.editSurvey]);

                        $scope.selected_survey.survey_id = attrs.editSurvey;
                        $scope.selected_survey.question_tree = JSON.stringify($scope.selected_survey.question_tree);

                        $scope.editSurvey = function () {
                            surveyService.editSurvey($scope.selected_survey)
                                .success(function (data) {
                                    if (data.code == '200') {
                                        growl.success('Survey edited successfully');
                                        surveyService.loadAllSurveys()
                                            .then(function (status) {
                                                $scope.close()
                                            })
                                    }
                                })
                        };
                    }
                })
            }
        }

    }]);
/**
 * Created by Kaygee on 07/03/2015.
 */




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
/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives')
    .directive('previewSurvey', ['surveyService','$modal', function (surveyService, $modal) {

        return {
            scope: {
                survey_id : '@previewSurvey'
            },

            link : function ($scope, elem, attrs) {
                elem.bind('click', function () {
                    $modal.open({
                        controller : ['$scope','$modalInstance','growl','prFieldTypes', PreviewSurveyModalController],
                        templateUrl : 'common/modals/previewSurveyFormModal.tpl.html',
                        size : 'md'
                    });

                    function PreviewSurveyModalController($scope,$modalInstance, growl, prFieldTypes){
                        $scope.close = function () {
                            $modalInstance.dismiss();
                        };
                        var surveyData, formArray = [], schema = {};

                        var prepFormComponents = function () {
                            $scope.selected_survey = surveyService.surveyLookup[attrs.previewSurvey];

                            if ($scope.selected_survey && $scope.selected_survey.question_tree && $scope.selected_survey.question_tree.length) {
                                surveyData =$scope.selected_survey.question_tree;
                                console.log(surveyData);
                            }else{
                                $scope.close();
                                growl.warning('Add questions and save the survey before viewing preview');
                                return;
                            }

                            if (surveyData) {
                                for(var i = 0; i < surveyData.length; i++){
                                    var itemInLoop = surveyData[i], enumholder = [];

                                    schema[itemInLoop.cid] = {
                                        type: prFieldTypes[itemInLoop.field_type], /*[string, number(numbers, including floating numbers), integer, boolean, array, object ]*/
                                        title: itemInLoop.label,
                                        "default" : '',
                                        //maxLength : itemInLoop.field_options.maxlength,
                                        //minimum : itemInLoop.field_options.minlength,
                                        //readOnly : true,
                                        required: itemInLoop.required,
                                        "description": itemInLoop.field_options.description
                                        //"enum": ["male","female","alien"]/*minItems , maxItems*/
                                    };

                                    if (itemInLoop.field_type == "radio" || itemInLoop.field_type == "checkboxes" ||  itemInLoop.field_type == "dropdown"){

                                        if (itemInLoop.field_options.options && itemInLoop.field_options.options.length) {

                                            for(var e = 0; e < itemInLoop.field_options.options.length; e++) {
                                                enumholder.push( itemInLoop.field_options.options[e].label);
                                            }

                                            if (itemInLoop.field_type == 'radio') {
                                                formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "radios"
                                                });
                                                schema[itemInLoop.cid].enum = enumholder;

                                            }else if (itemInLoop.field_type == 'checkboxes') {
                                                formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "checkboxes"
                                                });
                                                schema[itemInLoop.cid].items = {
                                                    "type": "string",
                                                    "title": itemInLoop.label,
                                                    "enum": enumholder
                                                };
                                            }else if (itemInLoop.field_type == 'dropdown') {
                                                schema[itemInLoop.cid].enum = enumholder;
                                                formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "select"
                                                });
                                            }
                                        }
                                    }else{
                                        //price : 'string',
                                        //address : 'string',
                                        //gps : 'string',
                                        //image : 'string',
                                        //video : 'string',
                                        //file : 'string'
                                        switch(itemInLoop.field_type)  {
                                            case 'text' :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "text"
                                            }); break;

                                            case  "paragraph" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "textarea"
                                            }); break;

                                            case  "email" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "email"
                                            }); break;

                                            case  "date" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "date"
                                            }); break;

                                            case  "time" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "time"
                                            }); break;

                                            case  "number" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "time"
                                            }); break;

                                            case  "website" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "url"
                                            }); break;

                                            case  "price" :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "text"
                                            }); break;

                                            default :  formArray.push({
                                                key: itemInLoop.cid,
                                                type: "text"
                                            })
                                        }
                                    }

                                }
                            }
                            console.log('formArray', formArray);
                            console.log('schema', schema);

                            $('form').jsonForm({
                                schema: schema,
                                form: formArray,
                                onSubmit: function (errors, values) {
                                    growl.info('This is for preview purposes only.');
                                    return false;
                                    //if (errors) {
                                    //    $('#res').html('<p>I beg your pardon?</p>');
                                    //}
                                    //else {
                                    //    $('#res').html('<p>Hello ' + values.name + '.' +
                                    //        (values.age ? '<br/>You are ' + values.age + '.' : '') +
                                    //        '</p>');
                                    //}
                                }
                            })

                        };

                        $scope.initJSForm = function () {
                            prepFormComponents();
                        };

                        $scope.sendSurvey = function () {
                            surveyService.editSurvey($scope.selected_survey)
                                .success(function (data) {
                                    if (data.code == '200') {
                                        growl.success('Survey edited successfully');
                                        surveyService.loadAllSurveys()
                                            .then(function (status) {
                                                $scope.close()
                                            })
                                    }
                                })
                        };
                    }
                })
            }
        }

    }]);