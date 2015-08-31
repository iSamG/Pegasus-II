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
                    bidder_rank_type : 'newbie',
                    is_punter : 1,
                    is_admin : 0,
                    date_of_birth : '',
                    email : "",
                    first_name: "",
                    other_names : ""
                };
                $scope.validation = $localStorage.signup_validation = {};

            }

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
                    max:  - (10 * 366) //Must be 18 years to register
                });
            };


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

                //Phone number validations
                if (!($scope.punter_register_form.phone_number.length > 9 && $scope.punter_register_form.phone_number.length < 14)) {
                    $scope.validation.phone_number = 'The phone number is incomplete' ;
                    return false
                }
                if ($scope.punter_register_form.phone_number.slice(0,4) == '+233') {
                    if ($scope.punter_register_form.phone_number.length == 13) {
                        $scope.punter_register_form.formatted_phone_number = '0' + $scope.punter_register_form.phone_number.slice(4).toString()
                    }else{
                        $scope.validation.phone_number = 'The phone number is incomplete' ;
                        return false
                    }
                }
                else if($scope.punter_register_form.phone_number.slice(0,1) == '0') {
                    if ($scope.punter_register_form.phone_number.length == 10) {
                        $scope.punter_register_form.formatted_phone_number = $scope.punter_register_form.phone_number;
                        $scope.punter_register_form.phone_number = '+233' + $scope.punter_register_form.phone_number.slice(1).toString();
                    }else if ($scope.punter_register_form.phone_number.length > 10) {
                        $scope.validation.phone_number = 'The phone number has too many characters' ;
                        return false
                    }else{
                        $scope.validation.phone_number = 'The phone number is incomplete' ;
                        return false
                    }

                }else{
                    $scope.validation.phone_number = 'The phone number is invalid' ;
                    return false
                }
                //End phone number validation

                //Validate user date of birth
                var setDate = $('input[name ="date_of_birth_submit"]').val();
                if (setDate) {
                    var today = new Date(),
                        setDateInSecs = new Date(setDate);
                    var timeDiff = today.getTime() - setDateInSecs.getTime();
                    if (Math.floor(timeDiff / (1000 * 3600 * 24 * 7 * 52)) < 18) {
                        $scope.validation.date_of_birth = 'You need to be over 18years to sign up.' ;
                        growl.warning("You need to be over 18years to sign up.", {title : "Age Limit"});
                        return false
                    }
                }else{
                    growl.warning("You need to be over 18years to sign up.", {title : "Age Limit"});
                    $scope.validation.date_of_birth = 'Date of birth is required' ;
                    return false
                }

                //change the date to a format accepted in the db
                $scope.punter_register_form.date_of_birth = setDate;


                $scope.submittingRegistrationFormLoader = true;


                /*Assign an avatar*/
                $scope.punter_register_form.avatar_url = 'http://www.i-bid2win.com/punters/assets/images/male.jpg';

                //send form to the server to be saved
                B2WAuth.register($scope.punter_register_form)
                    .success(function (successData) {
                        $scope.hidePopover();
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