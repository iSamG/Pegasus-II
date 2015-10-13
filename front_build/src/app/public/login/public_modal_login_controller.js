/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('PGPublicLoginController',
    ['$rootScope', '$scope','$state','$stateParams', 'PGConstants', '$modal', 'User'
        ,'growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, $stateParams, PGConstants, $modal, User,
                  growl, SweetAlert, $location, $timeout) {


            /*Begin User login form*/
            $scope.submittingLoginForm = false;
            $scope.user_login_form = {
                username : '',
                password : ''
            };

            //A variable that displays that there's an error with the submission
            $scope.loginError = false;

            $scope.loginUser = function(){

                //Change to true when form is being submitted
                $scope.submittingLoginForm = true;

                //Submit if details have been entered
                if ($scope.user_login_form.username && $scope.user_login_form.password) {
                    User.login($scope.user_login_form)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                                growl.success("Welcome, " + successData.data.username, {title : "Login Success"});
                                //User.checkIfUserIsAuthenticated();
                                //$location.path('/dashboard');
                                location.href ='/dashboard';

                            }else if(successData.code == '401'){
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
            /*End User login form*/

        }]);