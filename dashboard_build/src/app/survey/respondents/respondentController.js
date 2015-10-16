/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
      '$location','$timeout',
        function($rootScope, $scope, homeService,surveyService, growl, $location, $timeout ){

            $scope.sendEmail = function () {
                surveyService.sendEmail()
                    .success(function (successData) {
                        console.log("success", successData);

                    })
                    .error(function () {
                        console.log("error");
                    })
            }

        }]);
