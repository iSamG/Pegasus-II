/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicAccountConfirmationController',
    ['$rootScope', '$scope','$state','B2WConstants', '$modal','B2WAuth', 'Punter','growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, B2WConstants, $modal, B2WAuth, Punter, growl, SweetAlert, $location, $timeout) {


            $scope.resendCode = Punter.resendPunterCode;


            $scope.verifyCode = function(){

                var data_to_post = {
                    user_id : $scope.punter.id,
                    phone_number : $scope.punter.phone_number,
                    email : $scope.punter.email,
                    code : $scope.code
                };

                //Submit if details have been entered
                if ($scope.code && $scope.code.length > 4) {
                    Punter.verifyPunterCode(data_to_post)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                                growl.success("Your account has been confirmed", {title : "Account Verified"});
                                B2WAuth.checkIfUserIsAuthenticated();
                                //the punter came to registration page from trying to bid on an item, redirect back to the item page
                                /*rf is reference id*/
                                if ($location.search().rf) {
                                    $state.go('public_home.item_select', {id : $location.search().rf})
                                }else{
                                    $state.go('public_home', {}, {reload : true})
                                }
                            }else{
                                $scope.codeError = true;
                                $timeout(function () {
                                    $scope.codeError = false;
                                }, 5000);
                            }

                        })
                        .error(function (data) {
                            growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Verification Error'});
                        });
                }
                else{
                    $scope.codeError = true;
                    $timeout(function () {
                        $scope.codeError = false;
                    }, 5000);
                    growl.warning('The code entered is incomplete', {title : 'Invalid Code'});
                }
            } ;
            /*End Punter verification form*/

        }]);