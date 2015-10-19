/**
 * Created by Kaygee on 03/10/2015.
 */

angular.module('directives')
    .directive('deleteSurvey', ['surveyService','$modal', function (surveyService, $modal) {

        return {
            scope: {
                survey_id : '@deleteSurvey'
            },

            link : function ($scope, elem, attrs) {
                elem.bind('click', function () {
                    $modal.open({
                        controller : ['$scope','$modalInstance','growl', DeleteSurveyModalController],
                        templateUrl : 'common/modals/deleteSurveyModal.tpl.html',
                        size : 'sm'
                    });

                    function DeleteSurveyModalController($scope,$modalInstance, growl){
                        $scope.close = function () {
                            $modalInstance.dismiss();
                        };

                        $scope.selected_survey = surveyService.surveyLookup[attrs.deleteSurvey];

                        $scope.deleteSurvey = function () {
                            surveyService.deleteSurvey(attrs.deleteSurvey)
                                .success(function (data) {
                                    if (data.code == '200') {
                                        growl.success('Survey deleted successfully');
                                        surveyService.loadAllSurveys()
                                            .then(function (status) {
                                                if (status) {
                                                    $scope.close()
                                                }
                                            })
                                    }
                                })
                        };
                    }
                })
            }
        }

    }]);