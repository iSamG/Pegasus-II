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