/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('PGPublicSignUpModalController',
    ['$rootScope', '$scope','$state','PGConstants', '$localStorage', 'User','growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, PGConstants, $localStorage, User, growl, SweetAlert, $location, $timeout) {


            //A variable to check if the for is undergoing submission
            $scope.submittingRegistrationForm = false;
            $scope.submittingRegistrationFormLoader = false;

            if ($localStorage.user_register_form) {
                $scope.user_register_form = $localStorage.user_register_form;
                if ($localStorage.signup_validation) {
                    $scope.validation = $localStorage.signup_validation;
                }
            }else{
                //Begin user register form
                $scope.user_register_form = $localStorage.user_register_form = {
                    email : "",
                    country : "gh"
                };
                $scope.validation = $localStorage.signup_validation = {};

            }



            $scope.registerUser = function(isValid){
                $scope.user_register_form.country = 'gh';

                $scope.validation = $localStorage.signup_validation =  {};// reset the validation errors
                //Change to true when form is being submitted
                $scope.submittingRegistrationForm = true;

                //Begin registration validation checks

                //if the form has angular errors return false
                if (!isValid) {
                    growl.warning('Invalid or blank fields detected.', {title : 'Oops!'});
                    return false;
                }

                //Password Validations
                if ($scope.user_register_form.password.length < 6) {
                    $scope.validation.password = 'The password must be at least six characters' ;
                    return false
                }

                //End password  validation

                $scope.submittingRegistrationFormLoader = true;

                //send form to the server to be saved
                User.register($scope.user_register_form)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                            growl.success("You have successfully created an account on "+ PGConstants.app_name +". Thank you.", {title : "Registration"});
                            $scope.user_register_form = $localStorage.user_register_form = {};
                            location.href ='/dashboard';
                            $scope.cancel();

                        }else if(successData.code == '403') {
                            growl.error(successData.message, {title: "Duplicate Credentials"});
                            $scope.loginError = true;
                        }
                        else if(successData.code == '401'){
                            growl.error("Some of the fields already exist.", {title : "Duplicate Credentials"});
                            $scope.loginError = true;
                        }
                    })
                    .error(function (errorData) {
                        angular.forEach(errorData, function (value, prop) {
                            /*The regex strips the square brackets from the server response*/
                            $scope.validation[prop] = value.toString().replace(/[\[\]"]+/g, "");
                        });
                        growl.error("Your submission could not be processed at this time.", {title: 'Registration'});
                    })
                    .finally(function () {
                        $scope.submittingRegistrationFormLoader = false;
                    });
            } ;
            //End user register form


        }]);