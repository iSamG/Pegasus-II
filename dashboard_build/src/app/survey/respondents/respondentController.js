/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        '$stateParams','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $stateParams, $timeout ){

            $scope.sendEmail = function () {
                surveyService.sendEmail()
                    .success(function (successData) {
                        console.log("success", successData);

                    })
                    .error(function () {
                        console.log("error");
                    })
            };

            $scope.loadingSurveys = true;

            function loadSurveys() {

                $scope.sms_respondent_form = {
                    from : $scope.user.phone_number,
                    survey : $stateParams.survey_id || 0

                };
                $scope.respondent_form = {
                    from : $scope.user.email,
                    survey : $stateParams.survey_id || 0
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
