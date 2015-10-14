/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .factory('surveyService' , ['$rootScope', '$http', '$q','prRoutes', function($rootScope, $http, $q, prRoutes){
        var surveyService = {};

        surveyService.createSurvey = function(form){
            return $http.post(prRoutes.createSurvey, form)
        };

        surveyService.editSurvey = function(form){
            return $http.post(prRoutes.editSurvey, form)
        };

        surveyService.deleteSurvey = function(surveyId){
            return $http.post(prRoutes.deleteSurvey, {survey_id : surveyId})
        };

        surveyService.retrieveAllSurveys = function(){
            return $http.get(prRoutes.retrieveAllSurveys, {params : { admin_id : $rootScope.user.id}})
        };

        surveyService.retrieveOneSurvey = function(){
            return $http.get(prRoutes.retrieveOneSurvey)
        };

        surveyService.getAllResponses = function( ){
            return $http.get(prRoutes.createSurvey);
        };

        surveyService.retrieveQuestions = function(form){
            return $http.get(prRoutes.retrieveQuestions, form)
        };

        surveyService.saveQuestions = function(form){
            return $http.post(prRoutes.saveQuestions, form)
        };

        surveyService.editQuestions = function(form){
            return $http.post(prRoutes.editQuestions, form)
        };

        surveyService.deleteQuestions = function(form){
            return $http.post(prRoutes.deleteQuestions, form)
        };






        function initObjectsAndArrays(){
            surveyService.surveys = [];
            surveyService.surveyLookup = {};
        }



        function initiateSurveys() {
            for (var i = 0; i <  surveyService.surveys.length; i++){
                var each =  surveyService.surveys[i];

                if (typeof each.question_tree == 'string') {
                    try{
                        each.question_tree = JSON.parse(each.question_tree).fields;
                    }catch(e){
                        each.question_tree = [];
                    }
                }else{
                    console.log("each.question_tree", each.question_tree);
                }

                surveyService.surveyLookup[each.id] = each;
            }
            $rootScope.$broadcast('surveysLoadedAndPrepped');
        }


        surveyService.loadAllSurveys = function () {
            var defer = $q.defer();
            initObjectsAndArrays();


            this.retrieveAllSurveys()
                .success(function (data) {
                    if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                        surveyService.surveys = data.data;
                        initiateSurveys();
                        defer.resolve(true);
                    }
                })
                .error(function () {
                    defer.reject(false);

                });

            return defer.promise;

        };



        return surveyService;
    }]);