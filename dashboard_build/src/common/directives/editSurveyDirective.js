/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives')
    .directive('editSurvey', ['surveyService','$modal', function (surveyService, $modal) {

        return {
            scope: {
                survey_id : '@editSurvey'
            },

            link : function ($scope, elem, attrs) {
                elem.bind('click', function () {
                    $modal.open({
                        controller : ['$scope','$modalInstance','growl', EditSurveyModalController],
                        templateUrl : 'common/modals/editSurveyModal.tpl.html',
                        size : 'md'
                    });

                    function EditSurveyModalController($scope,$modalInstance, growl){
                        $scope.close = function () {
                            $modalInstance.dismiss();
                        };

                        $scope.toggleMin = function() {
                            $scope.minDate = $scope.minDate ? null : new Date();
                        };
                        $scope.toggleMin();
                        $scope.maxDate = new Date(2020, 5, 22);

                        $scope.status = {
                            opened : false
                        };

                        $scope.open = function($event) {
                            $scope.status.opened = true;
                        };

                        $scope.dateOptions = {
                            formatYear: 'yy',
                            startingDay: 1
                        };

                        $scope.format = "dd-MMMM-yyyy";


                        $scope.selected_survey = angular.copy(surveyService.surveyLookup[attrs.editSurvey]);

                        $scope.selected_survey.survey_id = attrs.editSurvey;
                        $scope.selected_survey.question_tree = JSON.stringify($scope.selected_survey.question_tree);

                        $scope.editSurvey = function () {
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
                })
            }
        }

    }]);