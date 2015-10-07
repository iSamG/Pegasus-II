

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