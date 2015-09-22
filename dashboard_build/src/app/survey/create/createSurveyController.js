/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
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
                        alert("success")
                    })
                    .error(function () {
                        alert("failed")
                    })
            };

        }]);

