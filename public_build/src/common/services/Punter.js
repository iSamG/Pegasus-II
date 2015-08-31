/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('punters', [])
    .factory('Punter', ['$http','BwPublicCache','B2WConstants', 'B2WRoutes', '$rootScope','$localStorage','$timeout','growl','$modal',
        function ($http, BwPublicCache, B2WConstants, B2WRoutes, $rootScope, $localStorage, $timeout, growl, $modal) {

            var Punter = {};

            Punter.authentication = false;

            var loadingWallet = false;//This prevent loading twice
            $rootScope.$on('newBidPlaced', function () {
                if (!loadingWallet) {
                    loadingWallet = true;
                    Punter.getWallet($rootScope.punter.id)
                        .success(function (walletSuccessData) {
                            if (walletSuccessData.data.length) {
                                walletSuccessData.data[0].punter_current_status_format =
                                    B2WConstants[ walletSuccessData.data[0].punter_current_status];
                                $rootScope.punter = walletSuccessData.data[0];
                                $localStorage.punter = walletSuccessData.data[0];
                                loadingWallet = false;
                            }
                        });
                }
            });



            Punter.runningAuctions = function() {
                return $http.get(B2WRoutes.runningAuctions);
            };

            Punter.verifyPunterCode = function(dataObject) {
                return $http.post(B2WRoutes.verifyPunterCode, dataObject);
            };

            Punter.resendPunterCode = function() {
                var data_to_post = {
                    user_id : $rootScope.punter.id,
                    phone_number : $rootScope.punter.phone_number,
                    email : $rootScope.punter.email
                };
                $http.post(B2WRoutes.resendPunterCode, data_to_post)
                    .success(function (successData) {
                        growl.success("Your code will be sent to you shortly", {title: 'Resending Verification Code'});
                        //if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                        //    growl.success("Your code will be sent to you shortly", {title: 'Resending Verification Code'});
                        //}else if(successData.code == '401' && $.trim(successData.status.toLowerCase()) == 'failed'  ){
                        //    growl.warning(successData.message, {title: 'Wrong Verification Code'});
                        //}
                        //else{
                        //    growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Verification Error'});
                        //}
                    })
                    .error(function () {
                        growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Verification Error'});
                    });
            };

            Punter.getWallet = function(user_id) {
                return $http.get(B2WRoutes.wallet, {params : {user_id : user_id }})
            };

            Punter.punterBidsPerAuction = function(auction_id) {
                if ($rootScope.punter) {
                    return $http.get(B2WRoutes.punterBidsPerAuction, {params : {
                        auction_id : auction_id,
                        punter_id : $rootScope.punter.id || 0
                    }})
                }
            };

            Punter.allAuctionsParticipated = function() {
                if ($rootScope.punter) {
                    return $http.get(B2WRoutes.allAuctionsParticipated, {params : {
                        user_id : $rootScope.punter.id || 0
                    }})
                }
            };

            Punter.walletTopUpHistory = function() {
                if ($rootScope.punter) {
                    return $http.get(B2WRoutes.walletTopUpHistory, {params : {
                        user_id : $rootScope.punter.id || 0
                    }})
                }
            };

            Punter.allPunterBids = function() {
                if ($rootScope.punter) {
                    return $http.get(B2WRoutes.allPunterBids, {params : {
                        punter_id : $rootScope.punter.id || 0
                    }})
                }
            };

            Punter.allPunterBidTotal = function() {
                if ($rootScope.punter) {
                    return $http.get(B2WRoutes.allPunterBidTotal, {params : {
                        punter_id : $rootScope.punter.id || 0
                    }})
                }
            };

            Punter.topUpWallet = function(dataObject) {
                //var  walletUrl = B2WRoutes.wallet+'?user_id='+dataObject.bidder_id;
                //BwPublicCache.cache.remove(walletUrl);
                return $http.post(B2WRoutes.topUpWallet, dataObject);
            };

            Punter.placeABid = function(dataObject) {
                return $http.post(B2WRoutes.placeABid, dataObject);
            };

            Punter.uploadAvatar = function(dataObject) {
                return $http.post(B2WRoutes.uploadAvatar, dataObject);
            };

            Punter.editPunterProfile = function(dataObject) {
                return $http.post(B2WRoutes.editPunterProfile, dataObject);
            };

            Punter.editPunterProfileAfterSocialMediaSignup = function(dataObject) {
                return $http.post(B2WRoutes.editPunterProfileAfterSocialMediaSignup, dataObject);
            };

            Punter.paySubscription = function(dataObject) {
                return $http.post(B2WRoutes.paySubscription, dataObject);
            };

            Punter.sendPasswordResetToken = function(dataObject) {
                return $http.post(B2WRoutes.sendPasswordResetToken, dataObject);
            };

            Punter.endorsedAuctionWinner = function(posted_auction_id) {
                return $http.get(B2WRoutes.endorsedAuctionWinner, {params : {auction_id : posted_auction_id}});
            };

            Punter.updateUserDetails = function(user){
                $modal.open({
                    controller : ['$scope', '$modalInstance', '$state', 'growl', 'B2WAuth', 'user', 'CheckPhoneNumber', 'Punter', updateDetailsModalController],
                    size : 'md',
                    backdrop : 'static', //this prevents the modal from closing when outside the modal is clicked
                    keyboard : false, //This prevents closing the modal with ESC key
                    templateUrl: 'modals/updatePunterDetailsModal.tpl.html',
                    resolve : {
                        user : function(){
                            return user
                        }
                    }
                });

                function updateDetailsModalController
                ($scope, $modalInstance, $state, growl, B2WAuth, user, CheckPhoneNumber, Punter){

                    $scope.detailsUpdateError = '';
                    $scope.updating = false;

                    if (user.first_name == user.other_names) {
                        var nameArrays = $.trim(user.first_name).split(' ');
                        user.first_name = nameArrays[0];
                        if (nameArrays.length > 1) {
                            for (var i = 1; i < nameArrays.length; i++) {
                                user.other_names = nameArrays[i] + " "
                            }
                        }
                        user.other_names = $.trim(user.other_names);
                    }
                    $scope.punter_update_form = {
                        punter_id : user.id,
                        first_name : user.first_name,
                        other_names : user.other_names
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
                            max:  - (10 * 366) //Must be 18 years to register
                        });
                    };

                    $scope.updateDetails = function () {
                        $scope.validation = {};
                        if (!$scope.punter_update_form.username) {
                            growl.warning("Username is required", {});
                            return false;
                        }
                        var phoneNumberVerification = CheckPhoneNumber.verify( $scope.punter_update_form.phone_number);
                        if (!phoneNumberVerification.status) {
                            growl.warning(phoneNumberVerification.message, {});
                            phoneNumberVerification = {};
                            return false;
                        }else{
                            $scope.punter_update_form.phone_number =  phoneNumberVerification.numberInternationalFormat;
                        }

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
                        $scope.punter_update_form.date_of_birth = setDate;



                        /*the second phone number check is here because
                        * the number field empties when the date is under age*/
                        if (!$scope.punter_update_form.phone_number){
                            growl.warning("Please enter phone number.", {});
                            return false;
                        }

                        $scope.updating = true;

                        Punter.editPunterProfileAfterSocialMediaSignup($scope.punter_update_form)
                            .success(function (successData) {
                                if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                                    growl.success('Details updated successfully', {title : "Punter Registration"});
                                    $modalInstance.dismiss('cancel');
                                    B2WAuth.checkIfUserIsAuthenticated();
                                    $state.go('public_home');
                                }else if (successData.code == '401'){
                                    angular.forEach(successData.data, function (value, prop) {
                                        /*The regex strips the square brackets from the server response*/
                                        $scope.validation[prop] = value.toString().replace(/[\[\]"]+/g, "");
                                    });
                                    growl.error("Some of your choices have already been used", {title : "Duplicate Entries"});
                                }else{
                                    $timeout(function () {
                                        growl.success('Details updated successfully', {title : "Punter Registration"});
                                        $modalInstance.dismiss('cancel');
                                        B2WAuth.checkIfUserIsAuthenticated();
                                        $state.go('public_home');
                                    }, 3000)
                                }
                            })
                            .error(function (errorData) {
                                $timeout(function () {
                                    growl.success('Details updated successfully', {title : "Punter Registration"});
                                    $modalInstance.dismiss('cancel');
                                    B2WAuth.checkIfUserIsAuthenticated();
                                    $state.go('public_home');
                                }, 3000)
                            })
                            .finally(function(){
                                $scope.updating = false;
                            })

                    };

                    //$scope.close = function(){
                    //    $modalInstance.dismiss('cancel');
                    //}

                }
            };


            return Punter;

        }]);