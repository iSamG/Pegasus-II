/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicGeneralController', [
        '$rootScope', '$scope','$state', '$stateParams', '$location','Auction','growl','$timeout','Advertising','$interval',
        function ($rootScope, $scope, $state, $stateParams, $location, Auction, growl, $timeout, Advertising, $interval) {

            $scope.subscribeNewsletter = function () {
                growl.success('Thanks for signing up to our newsletter. You can unsubscribe at any time.');
                return false;
            };

            var images_for_leaderboard = [
                {
                    advert_image_url :  "/punters/assets/images/leaderimages/02_sa_32_tv_bundle_ps_banner.jpg",
                    advert_position : 'leaderboard',
                    click_destination_url : 'http://www.google.com',
                    customer : 'Test'
                },{
                    advert_image_url :  "/punters/assets/images/leaderimages/bannerwhatsapp.png",
                    advert_position : 'leaderboard',
                    click_destination_url : 'http://www.whatsapp.com',
                    customer : 'Samsung'
                },{
                    advert_image_url :  "/punters/assets/images/leaderimages/samsungawd_banner728_webMarketing.jpg",
                    advert_position : 'leaderboard',
                    click_destination_url : 'http://www.samsung.com',
                    customer : 'Samsung'
                },{
                    advert_image_url : "punters/assets/images/leaderimages/super-banner-samsung-galaxy-tab.gif",
                    advert_position : 'leaderboard',
                    click_destination_url : 'http://www.samsunggalaxy.com',
                    customer : 'Samsung'
                }
            ];

            function initAdArrays() {
                var maximumLeadersAvailable;
                if ( !(Advertising.leaderboardArray)) {
                    Advertising.leaderboardArray  = images_for_leaderboard;
                    maximumLeadersAvailable = images_for_leaderboard.length;
                }else{
                    maximumLeadersAvailable = Advertising.leaderboardArray.length;
                }

                var currentLeaderImageBeingDisplayedCounter = 0;

                if (maximumLeadersAvailable) {
                    $scope.leaderImages = Advertising.leaderboardArray[currentLeaderImageBeingDisplayedCounter];
                    $interval(function () {
                        if (currentLeaderImageBeingDisplayedCounter <= (maximumLeadersAvailable - 2) ) {
                            currentLeaderImageBeingDisplayedCounter ++
                        }else {
                            currentLeaderImageBeingDisplayedCounter = 0;
                        }
                        $scope.leaderImages = Advertising.leaderboardArray[currentLeaderImageBeingDisplayedCounter];
                    }, 10000);
                }


                if (Advertising.take_overArray && Advertising.take_overArray.length > 0) {
                    Advertising.monitorStateAndUpdateTakeOver();
                }

                if (Advertising.home_page_carouselArray && Advertising.home_page_carouselArray.length > 0) {
                    $rootScope.sliderImages = Advertising.home_page_carouselArray;
                    $rootScope.sliderImagesCounter = [];
                    for(var i = 0; i < Advertising.home_page_carouselArray.length; i ++){
                        $rootScope.sliderImagesCounter.push(i);
                    }
                }else{
                    $rootScope.sliderImages = [];
                    $rootScope.sliderImagesCounter = [];
                    for(var j = 0; j < 4; j ++){
                        var temp = {
                            advert_image_url: "/punters/assets/images/slider/bg" +( j + 1)+".jpg",
                            advert_position: "home_page_carousel",
                            advert_status: 1,
                            click_destination_url: "http://www.i-bid2win.com",
                            created_at : new Date(),
                            customer: "Samsung LTE" + j + (j * 7432)
                        };
                        $rootScope.sliderImagesCounter.push(j);
                        $rootScope.sliderImages.push(temp);
                    }
                }


                if (Advertising.square_pop_upArray && Advertising.square_pop_upArray.length > 0) {
                    var currentsquare_pop_upImageBeingDisplayedCounter = 0;
                    $rootScope.square_pop_upImages = Advertising.square_pop_upArray[currentsquare_pop_upImageBeingDisplayedCounter];
                    $interval(function () {

                        if (currentsquare_pop_upImageBeingDisplayedCounter <= (Advertising.square_pop_upArray.length - 2)) {
                            currentsquare_pop_upImageBeingDisplayedCounter ++
                        }else {
                            currentsquare_pop_upImageBeingDisplayedCounter = 0;
                        }

                        $rootScope.square_pop_upImages = Advertising.square_pop_upArray[currentsquare_pop_upImageBeingDisplayedCounter];
                    }, 10000);
                }




            }

            $scope.$on('AdvertsLoadedAndPrepped', function () {
                if (window.innerWidth > 1300) {/*don't show on small screens*/
                    initAdArrays();
                }
            });

            $scope.gotoDashboard = function () {
                window.location.href = 'admin/login';
            };

            $scope.onHidden = function () {
                console.log("tried to close");
                return false;
            };

            /*The hidden class exists on the top bar so that when reloading on a webpage, the
             top part of the site is not empty*/
            $('.top-bar').removeClass('hidden');
        }]);