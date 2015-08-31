/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicRegisterController',
    ['$rootScope', '$scope','$state','B2WConstants', '$modal', 'B2WAuth','growl','SweetAlert','$location','$timeout','WizardHandler',
        function ($rootScope, $scope, $state, B2WConstants, $modal, B2WAuth, growl, SweetAlert, $location, $timeout, WizardHandler) {




            //Begin punter register form
            $scope.punter_register_form = {
                bidder_rank_type : 'newbie',
                is_punter : 1,
                is_admin : 0,
                date_of_birth : '1980-01-01'
            };

            $scope.statePickADate = function () {
                $('.datepicker').pickadate({
                    today: '',
                    clear: 'Clear',
                    close: 'Close',
                    closeOnSelect: true,
                    closeOnClear: false,
                    selectMonths: true,
                    selectYears: 25,
                    format : 'dddd d mmmm, yyyy',
                    formatSubmit: 'yyyy-mm-dd',
                    //min: new Date(2015,3,20),
                    max:  - (18 * 366) //Must be 18 years to register
                });
            };

            //A variable to check if the for is undergoing submission
            $scope.submittingRegistrationForm = false;
            $scope.submittingRegistrationFormLoader = false;
            $scope.login_validation = {};

            $scope.registerPunter = function(isValid){

                //Change to true when form is being submitted
                $scope.submittingRegistrationForm = true;
                $scope.submittingRegistrationFormLoader = true;

                //Begin registration validation checks

                //if the form has angular errors return false
                if (!isValid) {
                    growl.warning('Oops! Looks like you left some fields blank.', {title : 'Required Field'});
                    if (!$scope.punter_register_form.first_name || !$scope.punter_register_form.other_names
                        || !$scope.punter_register_form.email || !$scope.punter_register_form.gender|| !$scope.punter_register_form.username) {
                    WizardHandler.wizard().goTo(0);
                    }
                   else if (!$scope.punter_register_form.password ||  !$scope.punter_register_form.confirm_password || !$scope.punter_register_form.phone_number) {
                        WizardHandler.wizard().goTo(0);
                    }
                    else if ($scope.punter_register_form.agree_to_terms) {
                        WizardHandler.wizard().goTo(1);
                    }
                    return false;
                }

                //Password Validations
                if ($scope.punter_register_form.password.length < 6) {
                    growl.warning('The password must be at least six characters', {title : 'Password Field'});
                    WizardHandler.wizard().goTo(0);
                    return false
                }

                if ($scope.punter_register_form.password != $scope.punter_register_form.confirm_password) {
                    growl.warning('The passwords do not match', {title : 'Confirm Password Field'});
                    WizardHandler.wizard().goTo(0);
                    return false
                }
                //End password  validation

                //Phone number validations
                if (!($scope.punter_register_form.phone_number.length > 9 && $scope.punter_register_form.phone_number.length < 14)) {
                    growl.warning('The phone number is incomplete', {title : 'Phone Number'});
                    WizardHandler.wizard().goTo(0);
                    return false
                }
                if ($scope.punter_register_form.phone_number.slice(0,4) == '+233') {
                    if ($scope.punter_register_form.phone_number.length == 13) {
                        $scope.punter_register_form.formatted_phone_number = '0' + $scope.punter_register_form.phone_number.slice(4).toString()
                    }else{
                        growl.warning('The phone number is incomplete', {title : 'Phone Number'});
                        WizardHandler.wizard().goTo(0);
                        return false
                    }
                }
                else if($scope.punter_register_form.phone_number.slice(0,1) == '0') {
                    if ($scope.punter_register_form.phone_number.length == 10) {
                        $scope.punter_register_form.formatted_phone_number = $scope.punter_register_form.phone_number;
                        $scope.punter_register_form.phone_number = '+233' + $scope.punter_register_form.phone_number.slice(1).toString();
                    }else if ($scope.punter_register_form.phone_number.length > 10) {
                        growl.warning('The phone number has too many characters', {title : 'Phone Number'});
                        WizardHandler.wizard().goTo(0);
                        return false
                    }else{
                        growl.warning('The phone number is incomplete', {title : 'Phone Number'});
                        WizardHandler.wizard().goTo(0);
                        return false
                    }

                }else{
                    growl.warning('The phone number is invalid', {title : 'Phone Number'});
                    WizardHandler.wizard().goTo(0);
                    return false
                }
                //End phone number validation

                /*Assign an avatar*/
                var domain = window.location.origin || "http://www.i-bid2win.com";
                $scope.punter_register_form.avatar_url = domain + '/punters/assets/images/male.jpg';

                //change the date to a format accepted in the db
                $scope.punter_register_form.date_of_birth = $('input[name ="date_of_birth_submit"]').val();

                //send form to the server to be saved
                B2WAuth.register($scope.punter_register_form)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                            growl.success("You have successfully registered on "+ B2WConstants.app_name +". An SMS confirmation code will be sent to " + $scope.punter_register_form.phone_number + " shortly. Thank you.", {title : "Registration"});
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
                            $scope.login_validation[prop] = value;
                        });
                        WizardHandler.wizard().goTo(0);
                        growl.error("Your submission could not be processed at this time. Please check the following fields and try again", {title: 'Registration'});
                    })
                    .finally(function () {
                        $scope.submittingRegistrationFormLoader = false;
                    });
            } ;
            //End punter register form


        }]);