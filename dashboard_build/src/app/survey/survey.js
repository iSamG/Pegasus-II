/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'app/survey/survey_list.tpl.html',
                controller : 'prSurveyController',
                metadata : "Surveys",
                resolve : {
                    surveyService : 'surveyService',

                    surveysList : function(surveyService){
                        //return surveyService.getAllSurveys()
                        return []
                    },

                    questionData : function(surveyService){
                        //return surveyService.getSurveyQuestionDetails()
                        return []
                    },

                    submittedResponsesData : function(surveyService){
                        //return surveyService.getAllResponses()
                        return []
                    }
                }
            })
            .state('surveys.analytics', {
                url : '/analytics/:survey/:form_id/:index',
                templateUrl : 'app/survey/detailed_analytics.tpl.html',
                controller : 'prDetailedAnalyticsSurveyController',
                metadata : "Survey Analytics"
            })
            .state('surveys.respondents', {
                url : '/respondents',
                templateUrl : 'app/survey/respondents.tpl.html',
                controller : 'prSurveyRespondentsController',
                metadata : "Invite Respondents"
            })
            .state('surveys.selected_survey', {
                url : '/select/:form_id/:survey',
                templateUrl : 'app/survey/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController',
                metadata : 'View Survey'
            })
            .state('surveys.create_new', {
                url : '/create/new',
                templateUrl : 'app/survey/create/create_server_wizard.tpl.html',
                controller : 'prCreateSurveyController',
                metadata : 'Create Survey'
            })
            .state('surveys.build_new_form', {
                url : '/build/new/form',
                templateUrl : 'app/survey/forms/new_form/build_new_form.tpl.html',
                controller : 'prBuildNewFormController',
                metadata : 'Survey Form Builder'
            })
    }]);