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
    //'lk-google-picker',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    //'uiGmapgoogle-maps',
    'googlechart',
    'ngStorage',
    'ngTagsInput',
    'perfect_scrollbar',
    'mgo-angular-wizard'
])
    .config(['$stateProvider','$urlRouterProvider',
        'growlProvider', '$httpProvider','prConstantKeys',
        function($stateProvider, $urlRouterProvider,
                 growlProvider, $httpProvider, prConstantKeys){
            //for any unmatched url, redirect to the state '/home'
            $urlRouterProvider.otherwise('/');

            //globally time the growl toatser to stay visible for 5seconds
            growlProvider.globalTimeToLive(5000);

        }]);




angular.module('pegasusrises')
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar','$localStorage','surveyService',
        function($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage, surveyService){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            //$localStorage.$default({
            //    first_timer : true
            //});

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


            surveyService.loadAllSurveys();
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
    .constant('prRoutes', {
        createSurvey : '/create/survey',
        editSurvey : '/edit/survey',
        deleteSurvey : '/delete/survey',
        retrieveAllSurveys : '/retrieve/all/surveys',
        retrieveOneSurvey : '/retrieve/a/survey',

        saveQuestions : '/retrieve/a/survey',
        editQuestions : '/retrieve/a/survey',
        deleteQuestions : '/retrieve/a/survey',
        retrieveQuestions : '/retrieve/a/survey'
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
                url : '/respondents',
                templateUrl : 'app/survey/respondents/respondents.tpl.html',
                controller : 'prSurveyRespondentsController',
                metadata : "Respondents"
            })
            .state('surveys.selected_survey', {
                url : '/select/:form_id/:survey',
                templateUrl : 'app/survey/selected/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController',
                metadata : 'View Survey'
            })
            .state('surveys.create_new', {
                url : '/create/new',
                templateUrl : 'app/survey/create/create_server_wizard.tpl.html',
                controller : 'prCreateSurveyController',
                metadata : 'Create Survey'
            })
            .state('surveys.form_builder', {
                url : '/build/questionnaire/form',
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
                user_id : 1,
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
    .controller('prFormBuilderController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl','$localStorage','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $localStorage, $timeout ){

            var surveyData;
            console.log("outside" ,$localStorage);
            if ( $localStorage.survey ) {
                var data = JSON.parse($localStorage.survey);
                console.log(data);
                surveyData = data.fields
            }

            var formbuilder  = new Formbuilder({
                selector: '#formbuilder',
                bootstrapData: surveyData
            });

            formbuilder.on('save', function(payload){

                var data = JSON.parse(payload);

                if (data.fields && data.fields.length) {
                    $timeout(function () {
                        $localStorage.survey = payload;
                    });
                }
            });



            $scope.saveQuestionnaire = function () {
                console.log("$localStorage.survey", $localStorage.survey);
                if ($localStorage.survey) {
                    var surveyData = JSON.parse($localStorage.survey);
                    console.log('surveyData', surveyData);
                    var questionsArray = [];
                    if (surveyData.fields.length) {
                        console.log(surveyData.fields.length);
                        for (var i = 0; i < surveyData.fields.length; i++) {
                            var eachArrayItem = surveyData.fields[i];
                            console.log('eachArrayItem', eachArrayItem);

                            var question_type = 'open';
                            if (eachArrayItem.field_type == 'radio') {
                                question_type = 'close';
                            }

                            var question_position = 'middle';
                            if ( i == 0) {
                                question_position = 'beginning';
                            }else if ( i  == (surveyData.fields.length - 1) && surveyData.fields.length > 1){
                                question_position = 'end';
                            }

                            questionsArray.push({
                                unique_question_id : eachArrayItem.cid,
                                question_type : question_type, /*open, close'*/
                                question_position : question_position, /*'beginning', 'middle', 'end' */
                                question : eachArrayItem.label,
                                entry_question_unique_id : '',
                                exit_question_unique_id : ''
                            });

                        }
                        console.log('questionsArray', questionsArray);

                        surveyService.saveQuestions(questionsArray)
                            .success(function (data) {
                                if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                                    growl.success('Questions saved successfully on the server');
                                }
                            })
                            .error(function () {
                                growl.error('An error occurred while attempting to save');

                            })
                    }

                }
            };

            $('#saveQuestionnaire').click(function () {
                $scope.saveQuestionnaire();
            });

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
      '$location','$timeout',
        function($rootScope, $scope, homeService,surveyService, growl, $location, $timeout ){


        }]);

/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

       .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService','surveyService', 'growl',
        '$stateParams','cfpLoadingBar','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl,
                 $stateParams, cfpLoadingBar, $timeout){





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
            return $http.get(prRoutes.retrieveAllSurveys, {params : { admin_id : 1}})
        };

        surveyService.retrieveOneSurvey = function(){
            return $http.get(prRoutes.retrieveOneSurvey)
        };

        surveyService.getAllResponses = function( ){
            return $http.get(prRoutes.createSurvey);
        };

        surveyService.retrieveQuestions = function(form){
            return $http.get(prRoutes.saveQuestions, form)
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






        function initObjectsAndArrays(){
            surveyService.surveys = [];
            surveyService.surveyLookup = {};
        }



        function initiateSurveys() {
            for (var i = 0; i <  surveyService.surveys.length; i++){
                var each =  surveyService.surveys[i];
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
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives', []);


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
;
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