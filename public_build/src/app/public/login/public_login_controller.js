/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicLoginController',
    ['$rootScope', '$scope','$state','$stateParams', 'B2WConstants', '$modal', 'B2WAuth'
        ,'growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, $stateParams, B2WConstants, $modal, B2WAuth,
                  growl, SweetAlert, $location, $timeout) {


            /*Begin Punter login form*/
            $scope.submittingLoginForm = false;
            $scope.punter_login_form = {
                username : '',
                password : ''
            };

            //A variable that displays that there's an error with the submission
            $scope.loginError = false;

            $scope.loginPunter = function(){

                //Change to true when form is being submitted
                $scope.submittingLoginForm = true;

                //Submit if details have been entered
                if ($scope.punter_login_form.username && $scope.punter_login_form.password) {
                    B2WAuth.login($scope.punter_login_form)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                                growl.success("Welcome, " + successData.data.username, {title : "Login Success"});
                                B2WAuth.checkIfUserIsAuthenticated();
                                //the punter came to registration page from trying to bid on an item, redirect back to the item page
                                /*rf is reference id*/
                                $scope.hidePopover();
                                if ($location.search().rf) {
                                    //Change authentication to true(briefly) so the redirect to the item select passes the check
                                    $rootScope.authentication = true;
                                    $state.go('public_home.item_select', {id : $location.search().rf})
                                }else{
                                    $state.go('public_home', {}, {reload : true});
                                }
                            }else if(successData.code == '400'){
                                growl.error("Check your username and password.", {title : "Invalid Login Credentials"});
                                $scope.loginError = true;
                            }

                        })
                        .error(function (data) {
                            growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Login Error'});
                        })
                        .then(function () {
                            $scope.submittingLoginForm = false;
                        });
                }
                else{
                    growl.warning('Both username and password fields are required', {title : 'Required Field'});
                }
            } ;
            /*End Punter login form*/

        }]);