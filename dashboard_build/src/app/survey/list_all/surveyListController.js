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
