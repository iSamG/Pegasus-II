/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicSignUpModalController',
    ['$rootScope', '$scope','$state','B2WConstants', '$localStorage', 'B2WAuth','growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, B2WConstants, $localStorage, B2WAuth, growl, SweetAlert, $location, $timeout) {


            //A variable to check if the for is undergoing submission
            $scope.submittingRegistrationForm = false;
            $scope.submittingRegistrationFormLoader = false;


            if ($localStorage.punter_register_form) {
                $scope.punter_register_form = $localStorage.punter_register_form;
                if ($localStorage.signup_validation) {
                    $scope.validation = $localStorage.signup_validation;
                }
            }else{
                //Begin punter register form
                $scope.punter_register_form = $localStorage.punter_register_form = {
                    email : ""
                };
                $scope.validation = $localStorage.signup_validation = {};

            }



            $scope.registerPunter = function(isValid){
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
                if ($scope.punter_register_form.password.length < 6) {
                    $scope.validation.password = 'The password must be at least six characters' ;
                    return false
                }

                //End password  validation


                $scope.submittingRegistrationFormLoader = true;


                /*Assign an avatar*/
                $scope.punter_register_form.avatar_url = 'http://www.i-bid2win.com/punters/assets/images/male.jpg';

                //send form to the server to be saved
                B2WAuth.register($scope.punter_register_form)
                    .success(function (successData) {
                        $scope.cancel();
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                            growl.success("You have successfully registered on "+ B2WConstants.app_name +". An SMS confirmation code will be sent to " + $scope.punter_register_form.phone_number + " shortly. Thank you.", {title : "Registration"});
                            $scope.punter_register_form = $localStorage.punter_register_form = {};

                            //the punter came to registration page from trying to bid on an item, redirect back to the item page
                            /*rf is reference id*/
                            if ($location.search().rf) {
                                B2WAuth.isAuthenticated = true;
                                B2WAuth.user = successData.data;
                                $state.go('public_home.item_select', {id : $location.search().rf}, {reload : true})
                            }else{
                                B2WAuth.isAuthenticated = true;
                                B2WAuth.user = successData.data;
                                $state.go('public_home', {}, {reload : true});
                                //growl.error("Your submission could not be processed at this time. Please check internet connection and try again", {title: 'Punter Registration'});
                                //$state.go('public_home', {}, {reload : true})
                            }
                        }else{
                            $timeout(function () {
                                growl.success("You have successfully registered on "+ B2WConstants.app_name +". " +
                                    "Your activation code will be sent to " + $scope.punter_register_form.phone_number + " shortly via SMS. Thank you.",
                                    {title : "Punter Registration"});
                                $state.go('public_home', {}, {reload : true});
                            }, 3000)
                        }
                    })
                    .error(function (errorData) {
                        angular.forEach(errorData, function (value, prop) {
                            /*The regex strips the square brackets from the server response*/
                            $scope.validation[prop] = value.toString().replace(/[\[\]"]+/g, "");
                        });
                        growl.error("Your submission could not be processed at this time. Please check the following fields and try again", {title: 'Registration'});
                    })
                    .finally(function () {
                        $scope.submittingRegistrationFormLoader = false;
                    });
            } ;
            //End punter register form


        }]);