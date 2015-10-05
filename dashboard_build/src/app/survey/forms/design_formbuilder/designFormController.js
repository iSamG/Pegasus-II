/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prFormBuilderController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl','$localStorage','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $localStorage, $timeout ){

            var surveyData;
            console.log("outside" ,$localStorage);
            if ( $localStorage.survey ) {
                var data = JSON.parse($localStorage.survey);
                console.log(data);
                surveyData = data.fields
            }

            var formbuilder  = new Formbuilder({
                selector: '#formbuilder',
                bootstrapData: surveyData
            });

            formbuilder.on('save', function(payload){

                var data = JSON.parse(payload);

                if (data.fields && data.fields.length) {
                    $timeout(function () {
                        $localStorage.survey = payload;
                    });
                }
            });



            $scope.saveQuestionnaire = function () {

                if ($localStorage.survey) {
                    var surveyData = JSON.parse($localStorage.survey);
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
                                unique_question_id : eachArrayItem.cid,
                                question_type : question_type, /*open, close'*/
                                question_position : question_position, /*'beginning', 'middle', 'end' */
                                question : eachArrayItem.label,
                                entry_question_unique_id : entry_question_unique_id,
                                exit_question_unique_id : exit_question_unique_id
                            });



                        }
                        console.log('questionsArray', questionsArray);
                        console.log('answerArray', answerArray);

                        surveyService.saveQuestions(questionsArray)
                            .success(function (data) {
                                if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                                    growl.success('Questions saved successfully on the server');
                                }
                            })
                            .error(function () {
                                growl.error('An error occurred while attempting to save');

                            });
                        if (answerArray.length) {
                            surveyService.saveAnswers(answerArray)
                                .success(function (data) {
                                    if (data.code == '200' && data.status.toLowerCase() == 'ok') {
                                        growl.success('Answers saved successfully on the server');
                                    }
                                })
                                .error(function () {
                                    growl.error('An error occurred while attempting to save');

                                })

                        }
                    }

                }
            };

            $('#saveQuestionnaire').click(function () {
                $scope.saveQuestionnaire();
            });

        }]);

