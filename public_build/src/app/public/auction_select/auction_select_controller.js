/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('BwPublicItemSelectController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl',
        'B2WAuth','Auction','$localStorage','Punter',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, B2WAuth, Auction, $localStorage, Punter) {




            $scope.loadingPunterBids = false;
            $scope.loadPunterBids = function () {
                if (!$scope.loadingPunterBids) {
                    $scope.loadingPunterBids = true;
                    $scope.punterBids = 0;
                    Punter.punterBidsPerAuction($scope.selected_auction.id)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                                if (successData.data.length) {
                                    if(successData.data[0].total_bids.length){
                                        $scope.punterBids = successData.data[0].total_bids[0].total_bid_amount;
                                    }
                                }
                            }
                        }).error(function () {
                            $scope.loadingPunterBids = false;
                        }).then(function () {
                            $scope.loadingPunterBids = false;
                            calculateAverageBidsToWin();
                        })
                        .finally(function () {
                            calculateAverageBidsToWin();
                        });
                }
            };


            $scope.loadingLeaderBoard = false;
            $scope.loadLeaderBoard = function () {
                if (!$scope.loadingLeaderBoard) {
                    $scope.loadingLeaderBoard = true;
                    Auction.getAuctionLeaderboard($scope.selected_auction.id)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                                successData.data.sort(function (a,b) {
                                    return b.total_bid_amount - a.total_bid_amount
                                });
                                successData.data.sort(function (a,b) {
                                    return ((new Date(b.date_of_record).getTime()) - (new Date(a.date_of_record).getTime()));
                                });
                                $scope.leaderBoard = successData.data;
                            }
                        })
                        .error(function () {
                            $scope.loadingLeaderBoard = false;
                        })
                        .then(function () {
                            $scope.loadingLeaderBoard = false;
                            calculateAverageBidsToWin();
                        })
                        .finally(function () {
                            calculateAverageBidsToWin();
                        });
                }

            };

            $scope.loadingAuctionTips = false;
            $scope.loadAuctionTips = function () {
                if (!$scope.loadingAuctionTips) {
                    $scope.loadingAuctionTips = true;
                    Auction.getAuctionTips($scope.selected_auction.id)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                                $scope.auction_tips = successData.data;
                            }
                        })
                        .error(function () {
                            $scope.loadingAuctionTips = false;
                        }).then(function () {
                            $scope.loadingAuctionTips = false;
                        });
                }};


            function runAuctionPreps() {
                $scope.selected_auction = Auction.auctionIdLookup[$stateParams.id];

                //bidAmountQuantity is the amount to multiply the minim cost per bid value by
                $scope.bidAmountQuantity = $scope.selected_auction.auction_allowed_bid_amount;

                if ($localStorage.last_auction_bidding_attempt) {
                    var last_auction_bidding_attempt = JSON.parse($localStorage.last_auction_bidding_attempt);

                    if ($stateParams.id == last_auction_bidding_attempt.auction_id) {
                        //bidAmountQuantity is the amount to multiply the minim cost per bid value by
                        $scope.bidAmountQuantity =  parseInt(last_auction_bidding_attempt.bid_amount);
                    }
                }

                $scope.averageBidsToWin = ($scope.selected_auction.auction_allowed_bid_amount * 10)  + ' bcs';

                $scope.loadLeaderBoard();
                $scope.loadPunterBids();
                $scope.loadAuctionTips();
            }

            if (Auction.runningAuctions.length) {
                runAuctionPreps();
            }
            $scope.$on('auctionsLoadedAndPrepped', function () {
                runAuctionPreps();
            });


            $scope.$on('newBidPlaced', function () {
                $scope.loadPunterBids();
            });


            $scope.$on('newBidPlacedPusher', function (evt, pusherData) {
                if (pusherData.auction_id == $scope.selected_auction.id) {
                    $scope.leaderBoard = pusherData.leader_board;
                    $scope.lastBidder = pusherData.bidder_name;
                }
            });



            $scope.$on('newAuctionTipPublished', function (evt, pusherData) {
                //console.log("received the tip event - ", pusherData );

                if (pusherData.auction.id == $scope.selected_auction.id) {
                    //console.log("id is the same");
                    $scope.auction_tips = pusherData.auction.tips;
                }
            });

            $scope.incrementBidValue = function () {
                if ( $scope.bidAmountQuantity <  ($scope.selected_auction.auction_allowed_bid_amount * 5)) {
                    $scope.bidAmountQuantity  = $scope.bidAmountQuantity + $scope.selected_auction.auction_allowed_bid_amount;
                    return false;
                }
            };

            $scope.decrementBidValue = function () {
                if ($scope.bidAmountQuantity > $scope.selected_auction.auction_allowed_bid_amount ){
                    $scope.bidAmountQuantity = $scope.bidAmountQuantity - $scope.selected_auction.auction_allowed_bid_amount;
                    return false;
                } else return false;
            };


            function calculateAverageBidsToWin(){
                var highestBidValue = 0,
                    extraTopUpAmount = $scope.selected_auction.auction_allowed_bid_amount * 10,
                    amountLeftToWin = 0;
                if ($scope.leaderBoard && $scope.leaderBoard.length > 0) {
                    highestBidValue = $scope.leaderBoard[0].total_bid_amount;
                    extraTopUpAmount = $scope.selected_auction.auction_allowed_bid_amount;
                    amountLeftToWin = (highestBidValue + extraTopUpAmount);


                }
                if ($scope.punterBids) {
                    if ($scope.punterBids < highestBidValue) {
                        $scope.averageBidsToWin = amountLeftToWin - $scope.punterBids  + ' bcs';

                    }
                    else{
                        $scope.averageBidsToWin = "In the lead";
                    }
                }else{
                    $scope.averageBidsToWin = highestBidValue + extraTopUpAmount + ' bcs';
                }
            }

            $scope.goToTopUp = function () {
                growl.info("You need to top up to place bids." ,{title : "Top Up Wallet"});
                $state.go('public_home.topup');
                return false;
            };

        }]);