/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicProfileController',
    ['$rootScope', '$scope','$state','B2WConstants', 'B2WRoutes',  '$modal','Punter',
        'B2WAuth','growl','SweetAlert','$location','$timeout','sortDate',
        function ($rootScope, $scope, $state, B2WConstants, B2WRoutes, $modal, Punter,
                  B2WAuth, growl, SweetAlert, $location, $timeout, sortDate) {

            $scope.unEditMode = true;
            $scope.changeEditMode = function () {
                $scope.unEditMode = !$scope.unEditMode;
                if (!$scope.unEditMode) {
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
                        max:  - (18 * 366) //new Date(2015,7,14)
                    });
                }
            };


            $scope.punterProfile = angular.copy($scope.punter);

            $scope.editPunterProfile = function(){
                if ($scope.unEditMode) {
                    growl.info("Editing has been disabled", {title: 'Profile Updated'});
                    return false;
                }
                var objectToSend = angular.copy($scope.punterProfile );
                delete objectToSend.user_wallet;
                delete objectToSend.punter_current_status_format;

                //change the date to a format accepted in the db
                objectToSend.date_of_birth = $('input[name ="date_of_birth_submit"]').val();


                //Change to true when form is being submitted
                $scope.submittingLoginForm = true;

                //Submit if details have been entered
                Punter.editPunterProfile(objectToSend)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                            growl.success("Your profile has been updated successfully", {title: 'Profile Updated'});
                            $rootScope.$broadcast('newBidPlaced');//This causes a reload of punter and wallet just like a new bid placed by punter does
                        }else{

                        }
                    })
                    .error(function (data) {
                        growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Profile Update'});
                        $scope.submittingLoginForm = false;
                        $scope.unEditMode = false;
                    })
                    .then(function () {
                        $scope.submittingLoginForm = false;
                        $scope.unEditMode = true;
                    });
            };


            function getAuctionDetails(){
                var totals = {
                    bids_placed : 0,
                    bcs_spent : 0,
                    auctions : $scope.auctionsParticipatedIn.length
                };
                angular.forEach($scope.auctionsParticipatedIn, function (value, key) {
                    totals.bids_placed += value.number_of_bids;
                    totals.bcs_spent += value.total_bid_amount;
                });
                $scope.auctionsDetails = totals;
            }


            Punter.allAuctionsParticipated().success(function (data) {
                if (data.code == '200' && $.trim(data.status.toLowerCase()) =='ok') {
                    if (data.data.length) {
                        $scope.auctionsParticipatedIn = data.data[0].total_bids;
                        getAuctionDetails();
                    }
                }
            });

            function getTopupDetails(){
                var totals = {
                    money_in_total : 0,
                    bcs_in_total : 0
                };
                angular.forEach($scope.topupHistory, function (value, key) {
                    totals.money_in_total += value.money_topped_up;
                    totals.bcs_in_total += value.amount_in_bid2win_credit;
                });

                $scope.punterTopupObject  = totals;
            }
            Punter.walletTopUpHistory().success(function (data) {
                if (data.code == '200' && $.trim(data.status.toLowerCase()) =='ok') {
                    $scope.topupHistory = data.data.user_wallet_top_ups;

                    $scope.topupHistory.sort(sortDate.inDescendingOrder);
                    getTopupDetails()
                }
            });

            $scope.resendCode = Punter.resendPunterCode;


            $scope.numberOfAuctionsToShow = 5;

            $scope.addToShowingAuctions = function (){
                $timeout(function () {
                    $scope.numberOfAuctionsToShow += 5;
                });
            }

        }]);