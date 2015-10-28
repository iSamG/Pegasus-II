/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives')
    .directive('previewSurvey', ['surveyService','$modal', '$timeout', function (surveyService, $modal, $timeout) {

        return {
            scope: {
                survey_id : '@previewSurvey',
                savePayload : ' &savePayload',
                callSave : '@callSave'
            },

            link : function ($scope, elem, attrs) {


                elem.bind('click', function () {
                    if ($scope.callSave == 'yes'){

                        var initialTextInElement = $(elem).html();
                        $timeout(function () {
                            $(elem).html(initialTextInElement).attr('disabled', false);
                        }, 15000);

                        $(elem).html('<i class="fa fa-spinner fa-spin"></i>&nbsp; Rendering...').attr('disabled', true);

                        $scope.savePayload().then(function (value) {
                            $(elem).html(initialTextInElement).attr('disabled', false);
                            openModal();
                        });
                    }else{
                        openModal();
                    }

                    function openModal() {
                        $modal.open({
                            controller: ['$scope', '$modalInstance', 'growl', 'prFieldTypes', PreviewSurveyModalController],
                            templateUrl: 'common/modals/previewSurveyFormModal.tpl.html',
                            size: 'md'
                        });
                        function PreviewSurveyModalController($scope,$modalInstance, growl, prFieldTypes){
                            $scope.close = function () {
                                $modalInstance.dismiss();
                            };
                            var surveyData, formArray = [], schema = {};

                            var prepFormComponents = function () {
                                $scope.selected_survey = surveyService.surveyLookup[attrs.previewSurvey];

                                if ($scope.selected_survey && $scope.selected_survey.question_tree && $scope.selected_survey.question_tree.length) {
                                    surveyData =$scope.selected_survey.question_tree;
                                }else{
                                    $scope.close();
                                    growl.warning('Add questions before viewing preview', {title : 'No questions under this survey'});
                                    return;
                                }

                                if (surveyData) {
                                    for(var i = 0; i < surveyData.length; i++){
                                        var itemInLoop = surveyData[i], enumholder = [];

                                        schema[itemInLoop.cid] = {
                                            type: prFieldTypes[itemInLoop.field_type], /*[string, number(numbers, including floating numbers), integer, boolean, array, object ]*/
                                            title: itemInLoop.label,
                                            "default" : '',
                                            //maxLength : itemInLoop.field_options.maxlength,
                                            //minimum : itemInLoop.field_options.minlength,
                                            //readOnly : true,
                                            required: itemInLoop.required,
                                            "description": itemInLoop.field_options.description
                                            //"enum": ["male","female","alien"]/*minItems , maxItems*/
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
                                            //price : 'string',
                                            //address : 'string',
                                            //gps : 'string',
                                            //image : 'string',
                                            //video : 'string',
                                            //file : 'string'
                                            switch(itemInLoop.field_type)  {
                                                case 'text' :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "text"
                                                }); break;

                                                case  "paragraph" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "textarea"
                                                }); break;

                                                case  "email" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "email"
                                                }); break;

                                                case  "date" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "date"
                                                }); break;

                                                case  "time" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "time"
                                                }); break;

                                                case  "number" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "time"
                                                }); break;

                                                case  "website" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "url"
                                                }); break;

                                                case  "price" :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "text"
                                                }); break;

                                                default :  formArray.push({
                                                    key: itemInLoop.cid,
                                                    type: "text"
                                                })
                                            }
                                        }

                                    }
                                }
                                console.log('formArray', formArray);
                                console.log('schema', schema);

                                $('form').jsonForm({
                                    schema: schema,
                                    form: formArray,
                                    onSubmit: function (errors, values) {
                                        growl.info('This is for preview purposes only.');
                                        return false;
                                        //if (errors) {
                                        //    $('#res').html('<p>I beg your pardon?</p>');
                                        //}
                                        //else {
                                        //    $('#res').html('<p>Hello ' + values.name + '.' +
                                        //        (values.age ? '<br/>You are ' + values.age + '.' : '') +
                                        //        '</p>');
                                        //}
                                    }
                                })

                            };

                            $scope.initJSForm = function () {
                                prepFormComponents();
                            };

                            $scope.sendSurvey = function () {
                                surveyService.editSurvey($scope.selected_survey)
                                    .success(function (data) {
                                        if (data.code == '200') {
                                            growl.success('Survey edited successfully');
                                            surveyService.loadAllSurveys()
                                                .then(function (status) {
                                                    $scope.close()
                                                })
                                        }
                                    })
                            };
                        }

                    }
                })
            }
        }

    }]);