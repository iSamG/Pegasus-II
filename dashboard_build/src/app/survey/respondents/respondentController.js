/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSurveyRespondentsController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl',
        '$stateParams','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $stateParams, $timeout ){

            $scope.sendingEmails = false;/*a variable to disable the send button*/

            $scope.sendEmail = function () {
                $scope.sendingEmails = true;
                if (!$scope.respondent_form.survey_id) {
                    growl.info('Select a survey to be sent', {title : 'No Survey Selected', ttl : 5000});
                    $scope.sendingEmails = false;
                    return
                }
                if (!$scope.respondent_form.emails) {
                    growl.info('Specify at least one email recipient', {title : 'No Email Recipient', ttl : 5000});
                    $scope.sendingEmails = false;
                    return
                }
                if (!$scope.respondent_form.survey_description) {
                    $scope.respondent_form.survey_description = 'Survey created on <a href="http://www.pegasusrises.com">Pegasus</a>.';
                }
                $scope.respondent_form.from_email  =  $scope.user.email;
                $scope.respondent_form.survey_url = surveyService.surveyLookup[$scope.respondent_form.survey_id].survey_unique_public_url;
                $scope.respondent_form.survey_name = surveyService.surveyLookup[$scope.respondent_form.survey_id].survey_name;

                surveyService.sendEmail($scope.respondent_form)
                    .success(function (successData) {
                        if (successData) {
                            growl.success('Email Sent Successfully', {title : 'Email Sent', ttl : 5000});
                            $timeout(function () {
                                $scope.sendingEmails = false;
                                $scope.loadSurveys();
                            }, 2000);
                        }

                    })
                    .error(function () {
                        growl.error('Email can not be sent at this time. Check internet connection', {title : 'Email Not Sent', ttl : 5000});
                        $scope.sendingEmails = false;
                    })
            };

            $scope.loadingSurveys = true;

            $scope.loadSurveys = function() {
                $scope.surveys = surveyService.surveys;
                $scope.sms_respondent_form = {
                    from_phone_number : $scope.user.phone_number,
                    survey_id : $stateParams.survey_id || '0'
                };

                $scope.respondent_form = {
                    from_email : $scope.user.email,
                    survey_id : $stateParams.survey_id || '0',
                    emails : []
                };

                $scope.loadingSurveys = false;
            };

            if (surveyService.surveys && surveyService.surveys.length) {
                $scope.loadSurveys()
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                $scope.loadSurveys()
            });

        }]);
