/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('pegasusrises')
    .constant('prConstantKeys', {
        google_api_key: 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU',
        google_client_id : '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com'
    })
    .constant('prRoutes', {
        createSurvey : '/create/survey',
        editSurvey : '/edit/survey',
        deleteSurvey : '/delete/survey',
        retrieveAllSurveys : '/retrieve/all/surveys',
        retrieveOneSurvey : '/retrieve/a/survey',

        saveQuestions : '/retrieve/a/survey',
        editQuestions : '/retrieve/a/survey',
        deleteQuestions : '/retrieve/a/survey',
        retrieveQuestions : '/retrieve/a/survey',

        saveAnswers : '/retrieve/a/survey'
    });