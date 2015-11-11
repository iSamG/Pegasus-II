/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('pegasusrises')
    .constant('prConstantKeys', {
        google_api_key: 'AIzaSyDSBIljWNHZ9xMXuaROc4oAypA8LT5xmaU',
        google_client_id : '982002203062-qllsi843lackaof6acad3308p7m1j5pr.apps.googleusercontent.com',
        pusher_key : '21469ff0850de21291e1',
    })
    .constant('prFieldTypes', {
        /*[string, number(numbers, including floating numbers), integer, boolean, array, object ]*/
        radio : 'boolean', /*'boolean',*/
        checkboxes : 'array',
        text : 'string',
        paragraph : 'string',
        date : 'string',
        dropdown : 'string',
        time : 'string',
        number : 'number',
        website : 'string',
        email : 'string',
        price : 'string',
        address : 'string',
        gps : 'string',
        image : 'string',
        video : 'string',
        file : 'string'
    })
    .constant('prConstantOptions', {
        colors : [
            "#FF0F00", "#FF6600", "#FF9E01", "#FCD202","#F8FF01","#B0DE09", "#04D215", "#0D8ECF", "#0D52D1", "#2A0CD0",
            "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333",  "#000000"]
    })

    .constant('prRoutes', {
        createSurvey : '/create/survey',
        editSurvey : '/edit/survey',
        deleteSurvey : '/delete/survey',
        retrieveAllSurveys : '/retrieve/all/surveys',
        retrieveOneSurvey : '/retrieve/a/survey',

        saveQuestions : '/create/a/survey/question',
        editQuestions : '/edit/a/survey/question',
        deleteQuestions : '/delete/a/survey/question',

        retrieveQuestions : '/retrieve/a/survey/with/questions',
        retrieveAnswersToASurvey : '/retrieve/answers/to/survey',


        sendEmail : '/sendEmail',


        getAuthUser : '/auth/user',
        logoutUser : '/logout'

    });