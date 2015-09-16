/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .factory('surveyService' , [ '$http', function($http){
        var surveyService = {};

        surveyService.createSurvey = function(form){
            return $http.post('/create/survey', form)
        };

        surveyService.getAllSurveys = function(){
            return $http.get('/user/surveys/read')
        };

        surveyService.getSurveyQuestionDetails = function( ){
            return $http.get('/questions/properties/read');
            //return $http.get('/frontend/dummyloader/questions.json')
        };

        surveyService.getAllResponses = function( ){
            return $http.get('/data/submissions/read');
            //return $http.get('/frontend/dummyloader/submissions.json')
        };

        surveyService.sendRespondentEmail = function(data){
            return $http.post('/sendmail', data)
        };

        surveyService.sendRespondentSMS = function(data){
            return $http.post('/send/sms', data)
        };

        surveyService.deleteSurvey = function(data){
            return $http.post('/delete/user/surveys', data)
        };

        return surveyService;
    }]);