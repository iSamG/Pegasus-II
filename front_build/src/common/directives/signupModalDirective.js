/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasusApp.directives')
    .directive('signupModal', ['$modal', function($modal){
        return function(scope, element, attrs) {
            element.bind('click', function () {
                $modal.open({
                    controller : [ '$scope', '$modalInstance', '$state', 'growl', '$timeout', '$rootScope', signupModalController],
                    size : 'sm',
                    templateUrl: 'modals/signupModal.tpl.html'
                });

                function signupModalController
                ($scope, $modalInstance, $state, growl, $timeout, $rootScope){

                    $scope.cancel = function(){
                        $modalInstance.dismiss('cancel');
                    }
                }
            })
        }
    }]);