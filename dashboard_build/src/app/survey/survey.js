/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.
            state('surveys', {
                url : '/surveys',
                templateUrl : 'app/survey/list_all/survey_list.tpl.html',
                controller : 'prSurveyController',
                metadata : "Surveys"
            })
            .state('surveys.analytics', {
                url : '/analytics/:survey/:form_id/:index',
                templateUrl : 'app/survey/analytics/detailed_analytics.tpl.html',
                controller : 'prDetailedAnalyticsSurveyController',
                metadata : "Survey Analytics"
            })
            .state('surveys.respondents', {
                url : '/respondents',
                templateUrl : 'app/survey/respondents/respondents.tpl.html',
                controller : 'prSurveyRespondentsController',
                metadata : "Respondents"
            })
            .state('surveys.selected_survey', {
                url : '/select/:form_id/:survey',
                templateUrl : 'app/survey/selected/selected_survey.tpl.html',
                controller : 'prSelectedSurveyController',
                metadata : 'View Survey'
            })
            .state('surveys.create_new', {
                url : '/create/new',
                templateUrl : 'app/survey/create/create_server_wizard.tpl.html',
                controller : 'prCreateSurveyController',
                metadata : 'Create Survey'
            })
            .state('surveys.form_builder', {
                url : '/build/questionnaire/form',
                templateUrl : 'app/survey/forms/design_formbuilder/design_form.tpl.html',
                controller : 'prFormBuilderController',
                metadata : 'Survey Form Builder'
            })
    }]);