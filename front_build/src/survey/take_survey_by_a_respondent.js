/**
 * Created by Kaygee on 23/03/2015.
 */
angular.module('pegasusrisesSurvey', [
    'ui.bootstrap',
    'ngCookies',
    'ngStorage',
    'ngTouch',
    'angular-growl',
    'oitozero.ngSweetAlert',
    'angularMoment',
    'angular-loading-bar'
])
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
    .service('PGTakeSurveyService', ['$rootScope','$http','$q','$location',
        function ($rootScope, $http, $q, $location) {

            var surveyService = {};
            var URL = {
                getSurvey : '/answer/survey',
                submitSurvey : '/save/responses/to/survey'
            };

            function getURLParams(name){
                var results = new RegExp('[\?&]'+ name + '=([^&#]*)').exec(window.location.href);
                if (results == null) {
                    return null
                }else{
                    return results[1] || null;
                }
            }

            surveyService.getSurvey = function () {
                var queryString = "http://bissame.com/survey?unique_id=" + getURLParams('unique_id');

                return $http.get(URL.getSurvey, {params : { unique_id : queryString }})
            };

            surveyService.submitSurvey = function (survey) {
                return $http.post(URL.submitSurvey,  survey);
            };

            return surveyService;

        }])
    .controller('PGTakeSurveyController', ['$rootScope', '$scope', 'PGTakeSurveyService','growl','prFieldTypes',
        function ($rootScope, $scope, PGTakeSurveyService, growl, prFieldTypes) {

            PGTakeSurveyService.getSurvey()
                .success(function (successData) {
                    if(successData.code == '200' && successData.status.toLowerCase() == 'ok'){
                        $scope.survey_name = successData.data.survey_name;
                        prepFormComponents(successData.data.question_tree, successData.data.id);
                    }
                })
                .error(function () {

                });


            var prepFormComponents = function (surveyText, surveyId) {
                var surveyData = JSON.parse(surveyText).fields, formArray = [], schema = {};

                if (surveyData) {
                    for(var i = 0; i < surveyData.length; i++){
                        var itemInLoop = surveyData[i], enumholder = [];

                        schema[itemInLoop.cid] = {
                            type: prFieldTypes[itemInLoop.field_type], /*[string, number(numbers, including floating numbers), integer, boolean, array, object ]*/
                            title: itemInLoop.label,
                            "default" : '',
                            required: itemInLoop.required,
                            "description": itemInLoop.field_options.description
                        };

                        if (itemInLoop.field_type == "radio" || itemInLoop.field_type == "checkboxes" ||  itemInLoop.field_type == "dropdown"){

                            if (itemInLoop.field_options.options && itemInLoop.field_options.options.length) {

                                for(var e = 0; e < itemInLoop.field_options.options.length; e++) {
                                    enumholder.push( itemInLoop.field_options.options[e].label);
                                }

                                if (itemInLoop.field_type == 'radio') {
                                    formArray.push({
                                        key: itemInLoop.cid,
                                        type: "radios"
                                    });
                                    schema[itemInLoop.cid].enum = enumholder;

                                }else if (itemInLoop.field_type == 'checkboxes') {
                                    formArray.push({
                                        key: itemInLoop.cid,
                                        type: "checkboxes"
                                    });
                                    schema[itemInLoop.cid].items = {
                                        "type": "string",
                                        "title": itemInLoop.label,
                                        "enum": enumholder
                                    };
                                }else if (itemInLoop.field_type == 'dropdown') {
                                    schema[itemInLoop.cid].enum = enumholder;
                                    formArray.push({
                                        key: itemInLoop.cid,
                                        type: "select"
                                    });
                                }
                            }
                        }else{
                            switch(itemInLoop.field_type)  {
                                case 'text' :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "text",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "paragraph" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "textarea",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "email" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "email",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "date" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "date",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "time" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "time",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "number" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "time",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "website" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "url",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                case  "price" :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "text",
                                    fieldHtmlClass : 'input-md'

                                }); break;

                                default :  formArray.push({
                                    key: itemInLoop.cid,
                                    type: "text",
                                    fieldHtmlClass : 'input-md'
                                })
                            }
                        }

                    }
                }

                /*Add the submit button*/
                formArray.push({
                    type: "submit",
                    htmlClass : 'btn-success col-md-4 col-sm-6 col-xs-8 center-block',
                    title : 'Submit Survey'
                });

                var modal = $("#successModal");

                modal.on('hide.bs.modal', function () {
                    growl.info('Redirecting to home page', {ttl : 2000});
                });

                modal.on('hidden.bs.modal', function () {
                    location.href = '/';
                });

                //$('#formContainer').jsonForm({
                $('form').jsonForm({
                    schema: schema,
                    form: formArray,
                    onSubmit: function (errors, values) {
                        growl.info('Data submitting...', {ttl : 5000});

                        $('input[ type = "radio" ]:checked').each(function (index, elem) {
                            values[$(elem).attr('name')] = $(elem).attr('value');
                        });

                        var dataToSend = {
                            survey_id : surveyId,
                            name_of_respondent : '',
                            email : '',
                            phone_number : '',
                            answer_response : JSON.stringify(values)
                        };

                        PGTakeSurveyService.submitSurvey(dataToSend)
                            .success(function (successData) {
                                if(successData.code == '200' && successData.status.toLowerCase() == 'ok'){
                                    growl.success('Data submitted successfully.', {ttl : 5000});
                                    modal.modal({
                                        backdrop : 'static',
                                        keyboard : false
                                    });
                                }
                            })
                            .error(function () {

                            });

                    }
                })

            };

        }]);


