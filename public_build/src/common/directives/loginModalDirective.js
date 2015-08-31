/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasus.directives')
    .directive('loginModal', ['$modal', function($modal){
        return function(scope, element, attrs) {
            element.bind('click', function () {
                $modal.open({
                    controller : [ '$scope', '$modalInstance', '$state', 'growl', '$timeout', '$rootScope', loginModalController],
                    size : 'sm',
                    templateUrl: 'modals/loginModal.tpl.html'
                });

                function loginModalController
                ($scope, $modalInstance, $state, growl, $timeout, $rootScope){

                    $scope.cancel = function(){
                        $modalInstance.dismiss('cancel');
                    }
                }
            })
        }
    }]);