/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')

    .controller('prSelectedSurveyController', ['$rootScope', '$scope', 'homeService','surveyService', 'growl',
        '$stateParams','cfpLoadingBar','$timeout','answersData', 'prConstantOptions',
        function($rootScope, $scope, homeService, surveyService, growl,
                 $stateParams, cfpLoadingBar, $timeout, answersData, prConstantOptions){
            //prConstantOptions.colors[0];
            $scope.chartData = [];

            var questionHolder = {};
            function loadSurveys() {
                $scope.loadingSurveys = false;

                $scope.selected_survey = surveyService.surveyLookup[$stateParams.survey_id];

                /*loop through the questions and use their c-ids to form a key with the answers as values*/
                for (var q = 0; q < $scope.selected_survey.question_tree.length; q++){/*q = question*/
                    var questionItem = $scope.selected_survey.question_tree[q];
                    questionHolder[questionItem.cid] = {
                        field_type : questionItem.field_type,
                        label : questionItem.label,
                        answer_options : []
                    };
                    if (questionItem.field_type == 'checkboxes' || questionItem.field_type == 'radio' || questionItem.field_type == 'dropdown' ) {
                        questionHolder[questionItem.cid].answer_options = {};
                        /*prepare the options for checkboxes*/
                        for (var a = 0; a < questionItem.field_options.options.length; a++ ){/*a = answer*/
                            var option = questionItem.field_options.options[a];
                            questionHolder[questionItem.cid].answer_options[$.trim(option.label)] = 0;
                        }
                    }
                }

                for (var i = 0; i < answersData.data.data.answers.length; i++) {
                    var response = answersData.data.data.answers[i];

                    /*Parse the response string to JSON*/
                    var userAnswers = JSON.parse(response.answer_response);

                    /*loop through each of the answer keys of the json object*/
                    angular.forEach(userAnswers, function (value, prop) {

                        //get the question of the answer in the loop and find the type of response required
                        /*if check boxes, update the count of each option in the array*/
                        if (questionHolder[prop].field_type == 'checkboxes' || questionHolder[prop].field_type == 'radio') {
                            for(var a_o = 0; a_o < value.length; a_o++){/* a_o = answer option*/
                                questionHolder[prop].answer_options[ value[a_o] ] ++ ;
                            }
                        }else if(questionHolder[prop].field_type == 'dropdown'){
                            for(var d_a_o = 0; d_a_o < value.length; d_a_o++){/*d_a_o = dropdown answer option*/
                                questionHolder[prop].answer_options[ value ] ++ ;
                            }
                        }else{
                            questionHolder[prop].answer_options.push({
                                name : userAnswers.name_of_respondent,
                                email : userAnswers.email,
                                phone_number : userAnswers.phone_number,
                                created_at : userAnswers.created_at,
                                content : value
                            }) ;
                        }
                    });
                }

                console.log(questionHolder);
            }

            if (surveyService.surveys && surveyService.surveys.length) {
                loadSurveys();
            }

            $scope.$on('surveysLoadedAndPrepped', function(){
                loadSurveys();
            });

            $scope.changeChartType = function (chartType) {

            };

            $scope.selectQuestion = function (question_clicked) {
                $scope.selected_question = question_clicked;
                $scope.chartData = [];
                if (questionHolder[question_clicked.cid].field_type == 'checkboxes' ||
                    questionHolder[question_clicked.cid].field_type == 'radio'||
                    questionHolder[question_clicked.cid].field_type == 'dropdown'){
                    var colorOptionTracker = 0;
                    angular.forEach(questionHolder[question_clicked.cid].answer_options, function (value, key) {
                        $scope.chartData.push({
                            "country": key,
                            "visits": value,
                            "color": prConstantOptions.colors[colorOptionTracker++]
                        })
                    });
                    console.log($scope.chartData);
                }

            }

        }]);


