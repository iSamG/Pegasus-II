/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicHomeController', ['$rootScope', '$scope','$state','$location','Auction','growl','$timeout',
        function ($rootScope, $scope, $state, $location, Auction, growl, $timeout) {


            $scope.runAuctionPreps = function () {
                $scope.auctionPostionOnHomePage = Auction.auctionLookup;
            };

            if (Auction.runningAuctions.length) {
                $scope.runAuctionPreps();
            }

            $rootScope.$on('auctionsLoadedAndPrepped', function () {
                $scope.runAuctionPreps();
            });


            $scope.bidNow = function (auction_id) {
                if (!auction_id) {
                    growl.warning('The auction has been disabled by admin. Try another option.', {});
                    return false;
                }
                if (Auction.auctionIdLookup[auction_id].startStatus == 'completed') {
                    growl.error('You can\'t bid on this item. Try an open option.', {title : "Auction Ended"});
                    return false;
                }
                if (!$scope.punter.account_active && $scope.punter.punter_current_status == 'inactive') {
                    $('#verifyModal').focus().trigger("click");
                    return false;
                }
                if ($scope.authentication) {
                    $state.go('public_home.item_select', {id : auction_id});
                }else{
                    //growl.info('You need to be logged into you account to bid. You will be redirected to the login page shortly...', {});
                    $timeout(function () {
                        //$state.go('public_home.login', {id : auction_id});
                        $('#loginButton').focus().trigger("click");
                        //$location.path('/app/login/').search({rf : auction_id })
                    }, 100);

                }
            };

            $scope.showRegistration = function () {

                $timeout(function () {
                    //$state.go('public_home.register', {id : auction_id});
                    $('#signupButton').focus().trigger("click");
                    //$location.path('/app/register').search({rf : auction_id })
                }, 100);

            };

        }]);