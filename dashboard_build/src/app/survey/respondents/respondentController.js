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
