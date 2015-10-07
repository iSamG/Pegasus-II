/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService','surveyService', 'growl',
        '$stateParams','cfpLoadingBar','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl,
                 $stateParams, cfpLoadingBar, $timeout){

            function loadSurveys() {
                $scope.loadingSurveys = false;

                $scope.selected_survey = surveyService.surveyLookup[$stateParams.survey_id];

            }

            if (surveyService.surveys) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });


        }]);


