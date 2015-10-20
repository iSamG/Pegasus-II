/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        '$stateParams','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $stateParams, $timeout ){

            $scope.sendEmail = function () {
                if (!$scope.respondent_form.survey_url) {
                    growl.info('Select a survey to be sent', {title : 'No Survey Selected', ttl : 5000});
                    return
                }
                if (!$scope.respondent_form.emails) {
                    growl.info('Specify at least one email recipient', {title : 'No Email Recipient', ttl : 5000});
                    return
                }

                surveyService.sendEmail($scope.respondent_form)
                    .success(function (successData) {
                        if (successData) {
                            growl.success('Email Sent Successfully', {title : 'Email Sent', ttl : 5000});
                        }

                    })
                    .error(function () {
                        growl.error('Email can not be sent at this time. Check internet connection', {title : 'Email Not Sent', ttl : 5000});

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
