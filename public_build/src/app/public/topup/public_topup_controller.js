/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('BwPublicTopupController', ['$rootScope', '$scope', '$state', '$stateParams','$timeout','growl',
        'B2WAuth','Punter','B2WRoutes','$window','$localStorage',
        function ($rootScope, $scope, $state, $stateParams, $timeout, growl, B2WAuth, Punter, B2WRoutes, $window, $localStorage) {

            if (!$scope.punter.id) {
                $state.go('public_home');
            }

            var defaultAmount = 0;
            if ($scope.punter.punter_current_status == 'confirmed') {
                defaultAmount  =   1
            }

            if ($localStorage.last_auction_bidding_attempt) {
                $scope.creditMultiplierValue = defaultAmount +
                    parseInt(JSON.parse($localStorage.last_auction_bidding_attempt).bid_amount) / 100;

            }else{
                $scope.creditMultiplierValue = defaultAmount + 1
            }

            var data_to_post = {
                user_id : $scope.punter.id,
                email : $scope.punter.email,
                phone_number : $scope.punter.phone_number,
                username : $scope.punter.username,
                top_up_amount : $scope.creditMultiplierValue
            };
            $scope.topUpUrl = B2WRoutes.topUpWallet +'?'+ $.param(data_to_post) ;

            $scope.$watch("creditMultiplierValue", function (newVal, oldVal) {
                if (newVal > 0) {
                    data_to_post.top_up_amount = newVal;
                    $timeout(function () {
                        $scope.topUpUrl = B2WRoutes.topUpWallet +'?'+ $.param(data_to_post);
                    });
                }else{
                    $scope.creditMultiplierValue = 0;
                }
            });

            /*This is not beign used because changing URL from IE crashes the app*/
            $scope.initiateTopup = function (amount) {
                if (amount) {

                    //if (amount < defaultAmount) {
                    //    growl.warning('Please specify an amount that includes the registration fee of GHc1', {title : 'Top Up Error'});
                    //    return false;
                    //}
                    data_to_post.top_up_amount = amount;

                    $localStorage.last_auction_bidding_attempt ='';
                    $window.location.href = B2WRoutes.topUpWallet +'?'+ $.param(data_to_post) ;
                    //return false;
                }
                else{
                    growl.warning('Please specify an amount', {title : 'Top Up Error'});
                    return false;
                }
            };

        }]);