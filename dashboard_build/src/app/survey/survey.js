/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'survey/survey_list.tpl.html',
                controller : 'prSurveyController',
                metadata : "Surveys",
                resolve : {
                    surveyService : 'surveyService',

                    surveysList : function(surveyService){
                        return surveyService.getAllSurveys()
                    },

                    questionData : function(surveyService){
                        return surveyService.getSurveyQuestionDetails()
                    },

                    submittedResponsesData : function(surveyService){
                        return surveyService.getAllResponses()
                    }
                }
            })
            .state('surveys.analytics', {
                url : '/analytics/:survey/:form_id/:index',
                templateUrl : 'survey/detailed_analytics.tpl.html',
                controller : 'prDetailedAnalyticsSurveyController',
                metadata : "Survey Analytics"
            })
            .state('surveys.respondents', {
                url : '/respondents',
                templateUrl : 'survey/respondents.tpl.html',
                controller : 'prSurveyRespondentsController',
                metadata : "Invite Respondents"
            })
            .state('surveys.selected_survey', {
                url : '/select/:form_id/:survey',
                templateUrl : 'survey/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController',
                metadata : 'View Survey'
            })
    }]);