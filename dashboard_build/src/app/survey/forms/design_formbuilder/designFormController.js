/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prFormBuilderController', ['$rootScope', '$scope','$state', 'homeService', 'surveyService',
        'growl','$localStorage','$timeout', '$q',
        function($rootScope, $scope,$state,  homeService, surveyService, growl, $localStorage, $timeout, $q ){

            var surveyPayLoad;
            function loadSurveys() {
                $scope.surveys = surveyService.surveys;
                $scope.loadingSurveys = false;

                var surveyData;
                $scope.selected_survey = surveyService.surveyLookup[$scope.$stateParams.survey_id];

                if ($scope.selected_survey && $scope.selected_survey.question_tree && $scope.selected_survey.question_tree.length) {
                    surveyData =$scope.selected_survey.question_tree;
                }
                //else if ( $localStorage.survey ) {
                //    surveyData = JSON.parse($localStorage.survey).fields;
                //}

                var formbuilder  = new Formbuilder({
                    selector: '#formbuilder',
                    bootstrapData: surveyData
                });

                formbuilder.on('save', function(payload){
                    var data = JSON.parse(payload);
                    if (data.fields && data.fields.length) {
                        $timeout(function () {
                            surveyPayLoad = payload;
                        });
                    }
                });

                $timeout(function () {
                    $('#saveQuestionnaire').click(function () {
                        var saveButton = $(this);
                        saveButton.html( '<span><i class=\'fa fa-spinner fa spin\'></i>&nbsp; Saving...</span>').attr('disabled', true);
                        $scope.saveQuestionnaire()
                            .then(function () {
                                saveButton.html('Save Questionnaire').attr('disabled', false);
                            })
                    });
                });
            }

            if (surveyService.surveys) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });





            $scope.saveQuestionnaire = function () {
                var defer = $q.defer();
                if (surveyPayLoad) {
                    $scope.savingQuestionnaire = true;
                    var surveyData = JSON.parse(surveyPayLoad);
                    var questionsArray = [], answerArray = [];

                    if (surveyData.fields.length) {

                        for (var i = 0; i < surveyData.fields.length; i++) {
                            var eachArrayItem = surveyData.fields[i];

                            var question_type = 'open',
                                question_position = 'middle',
                                exit_question_unique_id = '',
                                entry_question_unique_id = '';

                            if (eachArrayItem.field_type == 'radio' || eachArrayItem.field_type == 'checkboxes') {
                                question_type = 'close';

                                for(var a = 0; a < eachArrayItem.field_options.options.length; a++){
                                    answerArray.push({
                                        question_id : eachArrayItem.cid,
                                        answer_option : eachArrayItem.field_options.options[a].label
                                    })
                                }
                            }

                            /*position of question*/
                            if ( i == 0) {
                                question_position = 'beginning';
                            }else if ( i  == (surveyData.fields.length - 1) && surveyData.fields.length > 1){
                                question_position = 'end';
                            }

                            /*next question's id*/
                            if ( i == 0 && surveyData.fields.length == 1) {
                                exit_question_unique_id = eachArrayItem.cid;

                            }else if ( i == 0 && surveyData.fields.length > 1){
                                exit_question_unique_id = surveyData.fields[i + 1].cid;
                            }

                            else if ( question_position == 'middle'){
                                entry_question_unique_id = surveyData.fields[i - 1].cid;
                                exit_question_unique_id = surveyData.fields[i + 1].cid;
                            }

                            else if ( question_position == 'end'){
                                entry_question_unique_id = surveyData.fields[i - 1].cid;
                                exit_question_unique_id = '';
                            }




                            questionsArray.push({
                                survey_id : $scope.$stateParams.survey_id,
                                question_type : question_type, /*open_ended, close_ended'*/
                                unique_question_id : eachArrayItem.cid,
                                //question_unique_code : '',
                                question_position : question_position, /*'beginning', 'middle', 'end' */
                                input_type : eachArrayItem.field_type,/*'radio', 'checkboxes','text','date','dropdown','time','number','website','email','price','address','gps','image','video'*/
                                question : eachArrayItem.label,
                                answer_options : JSON.stringify(answerArray)
                                //entry_question_unique_id : entry_question_unique_id,
                                //exit_question_unique_id : exit_question_unique_id
                            });



                        }

                        surveyService.editSurvey({
                            survey_id : $scope.$stateParams.survey_id,
                            question_tree : surveyPayLoad
                        })
                            .success(function (data) {
                                if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                                    growl.info('Uploading and processing questions to the server...');

                                    surveyService.loadAllSurveys()
                                        .then(function (status) {
                                            growl.success("Survey saved successfully");
                                            $scope.savingQuestionnaire = false;
                                            defer.resolve(true);
                                            //$state.go('surveys');
                                        });
                                }else if(data.code == '401'){
                                    defer.resolve(true);
                                    $scope.savingQuestionnaire = false;

                                }
                            })
                            .error(function () {
                                growl.error('An error occurred while attempting to upload');
                                defer.resolve(false);
                                $scope.savingQuestionnaire = false;
                            });
                    }
                }
                else if($scope.selected_survey.question_tree.length){
                    growl.info('Everything up to date.');
                    defer.resolve(true);
                }else{
                    growl.info('Add questions to save and preview');
                    defer.resolve(false);
                }
                return defer.promise;
            };



        }]);

