/* Bid2Win - v0.0.1 - 2015-08-31
 * http://bid2win.herokuapp.com
 * Copyright (c) 2015 PollAfrique Ltd;
 * Licensed MIT
 */
var bid2winApp;

angular.module('bid2winApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ngTouch',
    'angular-growl',
    'oitozero.ngSweetAlert',
    'angularMoment',
    'ngImgCrop',
    'pasvaz.bindonce',
    'ngDialog',
    'rt.popup',
    'angularFileUpload',
    'angular-datepicker',
    'angular-cache',
    'doowb.angular-pusher',
    'angular-loading-bar',
    'mgo-angular-wizard',
    'templates.app',
    'templates.common',
    '720kb.socialshare',
    'satellizer',
    'bid2winApp.constants',
    'pegasus.directives',
    'bid2winApp.services',
    'punters',
    'auctions',
    'public',
    'authentication',
    'punterCache',
    'advertisement'
])
    .config(['$stateProvider','$urlRouterProvider','B2WConstants','growlProvider','CacheFactoryProvider',
        '$rootScopeProvider','PusherServiceProvider','$locationProvider','$provide','$authProvider',
        function($stateProvider, $urlRouterProvider, B2WConstants, growlProvider, CacheFactoryProvider,
                 $rootScopeProvider, PusherServiceProvider, $locationProvider, $provide, $authProvider){

            $locationProvider.html5Mode(true);

            //this is to simulate html5 mode in a not compatible browser
            //$provide.decorator('$sniffer', function($delegate) {
            //    $delegate.history = false;
            //    return $delegate;
            //});

            //urlRouter uses the 'when' function to redirect to the main dashboard
            $urlRouterProvider.when('', function () {
                return '/';
            });
            //$urlRouterProvider.when('/', function () {
            //    return '/app';
            //});

            //This happens when a url does not exist.
            // for any unmatched url, redirect to the state '/'
            //$urlRouterProvider.otherwise('/app/error');
            //$urlRouterProvider.otherwise('/');

            growlProvider.globalTimeToLive({
                success: 10000,
                error: 10000,
                warning: 10000,
                info: 10000
            });
            //top-left | top-right | bottom-left | bottom-right | top-center  | bottom-center
            growlProvider.globalPosition('top-center');

            //Pusher token
            //PusherServiceProvider.setToken(B2WConstants.pusherToken);
            //            .setOptions({});


            angular.extend(CacheFactoryProvider.defaults, {
                //maxAge:  2 * 60 * 60 * 1000,// Items added to this cache expire after 2hours
                storageMode : 'sessionStorage',//memory| sessionStorage | localStorage
                storagePrefix : 'b2w',
                //cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
                deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
            });

            //$authProvider.facebook({
            //    clientId: B2WConstants.fbId,
            //    url: '/facebook/callback',
            //    redirectUri: window.location.origin + '/facebook/callback',
            //    scope: ['public_profile', 'email'],
            //    popupOptions: { width: 700, height: 450 }
            //});

            $authProvider.oauth2({
                name: 'foursquare',
                url: '/auth/foursquare',
                redirectUri: window.location.origin,
                clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
                authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
            });

        }]);

angular.module('public', []);

angular.module('public')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.
            state('public_home', {
                url: '/app',
                templateUrl: 'public/home/public_home.tpl.html',
                controller: 'BwPublicHomeController',
                metadata: "Bid2Win Home",
                link_active : 'false',
                resolve: {
                    B2WAuth : 'B2WAuth',

                    authentication : function (B2WAuth) {
                        return  B2WAuth.checkIfUserIsAuthenticated()
                    }

                    //publicService : 'publicService',
                    //
                    //auctions : function(publicService){
                    //    return publicService.getActiveAuctions()
                    //}
                }
            })
            .state('public_home.item_select', {
                url: '/auction/:id',
                templateUrl: 'public/auction_select/auction_select.tpl.html',
                controller: 'BwPublicItemSelectController',
                metadata: "Auction Page",
                link_active : 'false',
                resolve: {
                    authenticate: authenticate,
                    Auction : 'Auction',

                    auctionExists : function (Auction, $stateParams, $location, $rootScope) {

                        if(!Auction.auctionIdLookup[$stateParams.id] ){
                            $rootScope.$on('auctionsLoadedAndPrepped', function () {
                                if(!Auction.auctionIdLookup[$stateParams.id]){
                                    $location.path('/error');
                                }
                                // Reject the authentication promise to prevent the state from loading
                                //return $q.reject()
                            });
                        }
                    }

                }
            })
            .state('public_home.login', {
                url: '/login/:channel',
                templateUrl: 'public/login/public_login.tpl.html',
                controller: 'BwPublicLoginController',
                link_active : 'false',
                metadata: "Login"
            })
            .state('public_home.account_confirmation', {
                url: '/account_confirmation',
                templateUrl: 'public/account_confirmation/public_account_confirmation.tpl.html',
                controller: 'BwPublicAccountConfirmationController',
                metadata: "Account Confirmation",
                link_active : 'true',
                resolve: { authenticate: authenticate }
            })
            .state('public_home.register', {
                url: '/register',
                templateUrl: 'public/register/public_register.tpl.html',
                controller: 'BwPublicRegisterController',
                link_active : 'false',
                metadata: "Register"
            })
            .state('public_home.topup', {
                url: '/top_up',
                templateUrl: 'public/topup/public_topup.tpl.html',
                controller: 'BwPublicTopupController',
                metadata: "Wallet Top Up",
                link_active : 'true',
                resolve: { authenticate: authenticate }
            })
            .state('public_home.profile', {
                url: '/profile',
                templateUrl: 'public/profile/public_profile.tpl.html',
                controller: 'BwPublicProfileController',
                metadata: "Profile",
                link_active : 'true',
                resolve: { authenticate: authenticate }
            })
            .state('public_home.privacy_policy', {
                url: '/privacy_policy',
                templateUrl: 'public/policy/privacy_policy.tpl.html',
                controller: 'BwPrivacyController',
                link_active : 'false',
                metadata: "Privacy Policy"
            })
            .state('public_home.terms_conditions', {
                url: '/terms_and_conditions',
                templateUrl: 'public/policy/terms_conditions.tpl.html',
                controller: 'BwPrivacyController',
                link_active : 'false',
                metadata: "Terms and Conditions"
            })
            .state('public_home.about', {
                url: '/about',
                templateUrl: 'public/about/about.tpl.html',
                controller: 'BwAboutController',
                link_active : 'false',
                metadata: "About"
            })
            .state('public_home.contact', {
                url: '/contact',
                templateUrl: 'public/contact/contact.tpl.html',
                controller: 'BwContactController',
                link_active : 'false',
                metadata: "Contact"
            })
            .state('public_home.error', {
                url: '/error',
                templateUrl: 'public/error/error.tpl.html',
                controller: 'BwErrorController',
                link_active : 'false',
                metadata: "Error 404 - Not Found"
            });

        function authenticate($q, $rootScope, $localStorage, $state, $timeout) {
            if ($rootScope.authentication || $localStorage.authentication) {
                // Resolve the promise successfully
                return $q.when()
            }
            else {
                // The next bit of code is asynchronously tricky.

                $timeout(function() {
                    // This code runs after the authentication promise has been rejected.
                    // Go to the ome page
                    $state.go('public_home')
                });

                // Reject the authentication promise to prevent the state from loading
                return $q.reject()
            }
        }
    }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('BwAboutController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','B2WAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, B2WAuth) {


        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicAccountConfirmationController',
    ['$rootScope', '$scope','$state','B2WConstants', '$modal','B2WAuth', 'Punter','growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, B2WConstants, $modal, B2WAuth, Punter, growl, SweetAlert, $location, $timeout) {


            $scope.resendCode = Punter.resendPunterCode;


            $scope.verifyCode = function(){

                var data_to_post = {
                    user_id : $scope.punter.id,
                    phone_number : $scope.punter.phone_number,
                    email : $scope.punter.email,
                    code : $scope.code
                };

                //Submit if details have been entered
                if ($scope.code && $scope.code.length > 4) {
                    Punter.verifyPunterCode(data_to_post)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                                growl.success("Your account has been confirmed", {title : "Account Verified"});
                                B2WAuth.checkIfUserIsAuthenticated();
                                //the punter came to registration page from trying to bid on an item, redirect back to the item page
                                /*rf is reference id*/
                                if ($location.search().rf) {
                                    $state.go('public_home.item_select', {id : $location.search().rf})
                                }else{
                                    $state.go('public_home', {}, {reload : true})
                                }
                            }else{
                                $scope.codeError = true;
                                $timeout(function () {
                                    $scope.codeError = false;
                                }, 5000);
                            }

                        })
                        .error(function (data) {
                            growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Verification Error'});
                        });
                }
                else{
                    $scope.codeError = true;
                    $timeout(function () {
                        $scope.codeError = false;
                    }, 5000);
                    growl.warning('The code entered is incomplete', {title : 'Invalid Code'});
                }
            } ;
            /*End Punter verification form*/

        }]);
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
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('BwContactController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','B2WAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, B2WAuth) {


        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('BwErrorController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','B2WAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, B2WAuth) {


        }]);
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
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicLoginController',
    ['$rootScope', '$scope','$state','$stateParams', 'B2WConstants', '$modal', 'B2WAuth'
        ,'growl','SweetAlert','$location','$timeout','ngDialog',
        function ($rootScope, $scope, $state, $stateParams, B2WConstants, $modal, B2WAuth,
                  growl, SweetAlert, $location, $timeout, ngDialog) {


            /*Begin Punter login form*/
            $scope.submittingLoginForm = false;
            $scope.punter_login_form = {
                username : '',
                password : ''
            };

            //A variable that displays that there's an error with the submission
            $scope.loginError = false;

            $scope.loginPunter = function(){

                //Change to true when form is being submitted
                $scope.submittingLoginForm = true;

                //Submit if details have been entered
                if ($scope.punter_login_form.username && $scope.punter_login_form.password) {
                    B2WAuth.login($scope.punter_login_form)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                                growl.success("Welcome, " + successData.data.username, {title : "Login Success"});
                                B2WAuth.checkIfUserIsAuthenticated();
                                //the punter came to registration page from trying to bid on an item, redirect back to the item page
                                /*rf is reference id*/
                                $scope.hidePopover();
                                if ($location.search().rf) {
                                    //Change authentication to true(briefly) so the redirect to the item select passes the check
                                    $rootScope.authentication = true;
                                    $state.go('public_home.item_select', {id : $location.search().rf})
                                }else{
                                    $state.go('public_home', {}, {reload : true});
                                }
                            }else if(successData.code == '400'){
                                growl.error("Check your username and password.", {title : "Invalid Login Credentials"});
                                $scope.loginError = true;
                            }

                        })
                        .error(function (data) {
                            growl.error("Your submission could not be processed at this time. Please try again at a later time", {title: 'Login Error'});
                        })
                        .then(function () {
                            $scope.submittingLoginForm = false;
                        });
                }
                else{
                    growl.warning('Both username and password fields are required', {title : 'Required Field'});
                }
            } ;
            /*End Punter login form*/

        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('BwPrivacyController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','B2WAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, B2WAuth) {


        }]);
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
/**
 * Created by Kaygee on 27/03/2015.
 */

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

angular.module('bid2winApp.constants', [])
    .constant('B2WConstants', {
        app_name : 'i-Bid2Win',
        app_url : 'http://www.i-bid2win.com',
        app_email : 'support@i-bid2win.com',
        credit_symbol : 'bcs',
        credit_name_singular : 'credit',
        credit_name_plural : 'credits',
        fbId : '384423575082172', //facebookId
        pusherToken : '48d1c62b0717d8444d92',
        pusher_public_channel : 'bid2win_public_channel',
        pusher_admin_channel : 'bid2win_admin_channel',
        cacheMaxAge : 61 * 60 * 1000, // 1 hour 1minute,

        /*Account Type Formatting*/
        confirmed : "Confirmed",
        inactive : "Inactive",
        paid_subscription : "Subscribed"
    })
    .constant('B2WRoutes', {
        authentication : '/auth/user',
        getRunningAuctions : '../homepage/auctions',
        getAuctionLeaderboard : 'auction/bidders/leaders/board',
        getAuctionTips : 'active/auction/tips',
        verifyPunterCode : 'punter/account/confirmation',
        resendPunterCode : 'punter/account/confirmation/resend',
        sendPasswordResetToken : 'user/send/password/link',
        wallet : 'punter/wallet',
        topUpWallet : window.location.origin + '/punter/wallet/topup',/*the origin is added so it redirects on all platforms*/
        walletTopUpHistory : 'punter/wallet/topup/history',
        editPunterProfile : 'punter/profile/edit',
        editPunterProfileAfterSocialMediaSignup : 'punter/update/social/media/profile',
        paySubscription : 'punter/pay/for/subscription',
        uploadAvatar : '/upload/image',
        allPunterBids : 'punter/bids',
        allPunterBidTotal : 'punter/bids/totals',
        punterBidsPerAuction : 'punter/total/bid/under/auction',
        allAuctionsParticipated : 'punter/all/auctions/participated',
        placeABid : 'punter/place/bid',
        register : '/register',
        login : '/login',
        logout : '/logout',
        activeAdverts : 'active/adverts',
        endorsedAuctionWinner : 'auction/endorsed/winner',

        /*Facebook on the Server*/
        facebook : 'facebook/login',
        /*Foursquare on the Server*/
        foursquare : 'foursquare/login',

        adSizes : {
            leaderboard : {
                name : 'Leaderboard',
                type : 'leaderboard',
                width : 728,
                height : 90
            },
            take_over : {
                name : 'Take Over',
                type : 'take_over',
                width : 2000,
                height : 1200
            },
            //wide_skyscraper : {
            //    name : 'Wide Skyscraper',
            //    type : 'wide_skyscraper',
            //    width : 160,
            //    height : 600
            //},
            //skyscraper : {
            //    name : 'Wide Skyscraper',
            //    type : 'skyscraper',
            //    width : 120,
            //    height : 600
            //},
            square_pop_up : {
                name : 'Square pop-up',
                type : 'square_pop_up',
                width : 250,
                height : 250
            },
            //rectangle : {
            //    name : 'Rectangle',
            //    type : 'rectangle',
            //    width : 180,
            //    height : 150
            //},
            //square_button : {
            //    name : 'Square Button',
            //    type : 'square_button',
            //    width : 125,
            //    height : 125
            //}
            home_page_carousel : {
                name : 'Home Page Slider',
                type : 'home_page_carousel',
                width : 1440,
                height : 504
            }
        }
    });
angular.module('bid2winApp')
    .run(['$rootScope', '$state', '$stateParams','$localStorage','$sessionStorage','B2WConstants',
        'Punter','Auction','Pusher','Advertising', 'sortDate',
        function($rootScope, $state, $stateParams ,$localStorage, $sessionStorage, B2WConstants,
                 Punter, Auction, Pusher, Advertising, sortDate, B2WAuth){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $localStorage.$default({
                authentication: false,
                punter : {}
            });

            $rootScope.$storage = $localStorage;
            //delete $localStorage.counter;
            //$localStorage.$reset()
            //$localStorage.$reset({
            //    counter: 42
            //});

            $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
                $rootScope.pageLoading = true;
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                Advertising.monitorStateAndUpdateTakeOver();
            });

            $rootScope.$on('$viewContentLoading',function(event){
                //cfpLoadingBar.inc();
                $('.showAfterAngularLoads').show();
            });

            $rootScope.$on('$viewContentLoaded',function(event){
                //cfpLoadingBar.complete();
                $rootScope.pageLoading = false;
                B2WAuth.checkIfUserIsAuthenticated();

            });


            //Assign defaults to the rootScope
            $rootScope.authentication =  $localStorage.authentication || false;
            $rootScope.app_name = B2WConstants.app_name;
            $rootScope.app_url = B2WConstants.app_url;
            $rootScope.app_email = B2WConstants.app_email;
            $rootScope.credit_symbol = B2WConstants.credit_symbol;
            $rootScope.credit_name_singular = B2WConstants.credit_name_singular;
            $rootScope.credit_name_plural = B2WConstants.credit_name_plural;
            $rootScope.goBackInHistory = function () {
                window.history.back();
            };
            $rootScope.onLocalHost = function () {
                return window.location.host == "bid2win.app";
            };

            $rootScope.punter = $localStorage.punter || {} ;

            var logoutCounter = 0;
            $rootScope.$watch('punter', function (newVal, oldValue) {
                if (!newVal.id && logoutCounter > 3) {
                    $rootScope.logoutPunter()
                }
                logoutCounter ++;
            }) ;

            //sortDate.getCurrentTime();

            //Initialiaze
        }]);

angular.module('pegasus.directives', []);
/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasus.directives')
    .directive('loginModal', ['$modal', function($modal){
        return function(scope, element, attrs) {
            element.bind('click', function () {
                $modal.open({
                    controller : [ '$scope', '$modalInstance', '$state', 'growl', '$timeout', '$rootScope', loginModalController],
                    size : 'sm',
                    templateUrl: 'modals/loginModal.tpl.html'
                });

                function loginModalController
                ($scope, $modalInstance, $state, growl, $timeout, $rootScope){

                    $scope.cancel = function(){
                        $modalInstance.dismiss('cancel');
                    }
                }
            })
        }
    }]);
/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasus.directives')
    .directive('prettyImage', function(){
        return function(scope, element, attrs) {
            if (attrs.imageUrl) {
                element.bind('click', function () {
                    $.prettyPhoto.open( attrs.imageUrl, '', attrs.title);
                });
            }else{
                $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false});
            }
        }
    });
angular.module('pegasus.directives')
    .directive('resetPassword', ['SweetAlert','Punter','$q','$state','B2WAuth', function (SweetAlert, Punter, $q, $state, B2WAuth) {

        return {

            restrict : 'EA',
            scope : true,
            link : function (scope, elem, attr) {

                scope.verify = function (inputValue) {
                    var defer = $q.defer();
                    var data_to_post = {
                        password_reset_email : inputValue
                    };
                    Punter.sendPasswordResetToken(data_to_post)
                        .success(function (successData) {
                            defer.resolve(true);
                        })
                        .error(function (data) {
                            defer.reject("An error occurred. Please refresh the page and try again.");
                        });

                    return defer.promise;
                };


                /*Begin punter verify modal*/
                elem.bind('click', function () {
                    {
                        SweetAlert.swal({
                                title: "Reset Password",
                                text: "Enter the email you created the account with.",
                                type: "input",
                                animation: "slide-from-top",
                                allowEscapeKey : true,
                                allowOutsideClick : true,

                                confirmButtonText: "Reset",
                                confirmButtonColor: "#7bae23",
                                closeOnConfirm: false,

                                showCancelButton: true,
                                cancelButtonText: "Close, not now.",
                                closeButtonColor: "#C72907",
                                closeOnCancel: true
                            },
                            function(inputValue){
                                if (inputValue) {
                                    scope.verify(inputValue).then(
                                        /*success callback*/
                                        function () {
                                            SweetAlert.swal({
                                                title: "Password Reset",
                                                text: "Follow the link sent to <code>" + inputValue + "</code> to reset your password",
                                                type : "success",
                                                html : true,
                                                allowEscapeKey : true,
                                                allowOutsideClick : true,

                                                confirmButtonText: "Close",
                                                confirmButtonColor: "#6892C7",
                                                closeOnConfirm: true,

                                                showCancelButton: false,
                                                cancelButtonText: "No thanks",
                                                closeButtonColor: "#C72907",
                                                closeOnCancel: true
                                            });
                                            //    function (isConfirm) {
                                            //    if (isConfirm) {
                                            //        $state.go('public_home.topup')
                                            //    } else {
                                            //        SweetAlert.swal("Notice", "You will be required to top up your bid wallet to place bids.", 'info');
                                            //    }
                                            //})
                                        },
                                        /*error callback*/
                                        function(message){
                                            SweetAlert.swal("Error", message || "Server error occurred", "error");
                                        });
                                }else{
                                    swal.showInputError("You need to type a valid email address!");
                                }

                            });
                    }
                });
                /*End Punter Verify Modal*/
            },
            template : '',
            replace : false

        };





    }]);
/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasus.directives')
    .directive('signupModal', ['$modal', function($modal){
        return function(scope, element, attrs) {
            element.bind('click', function () {
                $modal.open({
                    controller : [ '$scope', '$modalInstance', '$state', 'growl', '$timeout', '$rootScope', signupModalController],
                    size : 'sm',
                    templateUrl: 'modals/signupModal.tpl.html'
                });

                function signupModalController
                ($scope, $modalInstance, $state, growl, $timeout, $rootScope){

                    $scope.cancel = function(){
                        $modalInstance.dismiss('cancel');
                    }
                }
            })
        }
    }]);
/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('advertisement', [])
    .factory('Advertising', ['$http','CacheFactory','B2WConstants', 'B2WRoutes','$rootScope', 'BwPublicCache','$q','$stateParams',
        function ($http, CacheFactory, B2WConstants, B2WRoutes, $rootScope, BwPublicCache, $q, $stateParams) {

            var Advert = {};

            var advertCache;
            // Check to make sure the cache doesn't already exist
            if (!CacheFactory.get('publicAdvertCache')) {
                advertCache = CacheFactory('publicAdvertCache', {
                    maxAge: 15 * 60 * 1000, // 15 minutes,
                    deleteOnExpire: 'aggressive',
                    onExpire: function (key, value) {
                        $http.get(key).success(function (returnedData) {
                            if (returnedData.code == '200' && $.trim(returnedData.status.toLowerCase()) == 'ok') {
                                advertCache.put(key, returnedData.data);
                            }
                        });
                    }
                });
            }else{
                advertCache = CacheFactory('publicAdvertCache')
            }



            function initAdArrays() {
                Advert.advertisments = [];
                angular.forEach(B2WConstants.adSizes, function (value, key) {
                    Advert[key+'Array'] = [];
                });
            }

            function prepAdvertisements() {
                angular.forEach(Advert.advertisments, function (value, key) {
                    try{
                        Advert[value.advert_position +'Array'].push(value);
                    }catch(e){
                        Advert[value.advert_position +'Array'] = [value];
                    }

                });

                $rootScope.$broadcast('AdvertsLoadedAndPrepped')

            }



            Advert.getActiveAdverts = function() {
                var defer = $q.defer();
                //var cachedData = advertCache.get(B2WRoutes.activeAdverts);
                initAdArrays();


                //if (!cachedData) {
                $http.get(B2WRoutes.activeAdverts)
                    .success(function (returnedData) {
                        if (returnedData.code == '200' && $.trim(returnedData.status.toLowerCase()) == 'ok') {
                            //advertCache.put(B2WRoutes.activeAdverts, returnedData.data);
                            Advert.advertisments = returnedData.data;
                            prepAdvertisements();
                            defer.resolve(true);
                        }
                    });
                //}else{
                //    Advert.advertisments = cachedData;
                //    prepAdvertisements();
                //    defer.resolve(true);
                //}

                return defer.promise;

            };

            Advert.monitorStateAndUpdateTakeOver = function () {
                function changeBodyTakeOver(adItemImageURL) {
                    var body =  $('body');
                    if (adItemImageURL != "empty") {
                        body
                            .css(
                            "background-image", "url( \' " + adItemImageURL + " \' )")
                            .css("background-position", "center 0");
                    }else{
                        body.removeAttr( 'style' );
                    }

                }

                if (Advert.take_overArray && Advert.take_overArray.length > 0) {
                    for (var i = 0; i < Advert.take_overArray.length; i++) {
                        var adItem = Advert.take_overArray[i];
                        if ($stateParams.id) { /*has id on only auction pages*/
                            if (adItem.auction_id == $stateParams.id) {
                                changeBodyTakeOver(adItem.advert_image_url);/*Assign the selected auction's takeover*/
                                break;
                            }else{
                                changeBodyTakeOver("empty");/*remove take over from selected auction page*/
                            }
                        }else{
                            if (!adItem.auction_id) { /*if the auction id is 0*/
                                changeBodyTakeOver(adItem.advert_image_url);/*not an auction page, put last available ad
                                 that has no auction ID in background*/
                            }
                        }
                    }
                }
            };


            return Advert;

        }]);
/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('auctions', [])
    .factory('Auction', ['$http','CacheFactory','B2WConstants', 'B2WRoutes','$rootScope', 'BwPublicCache',
        function ($http, CacheFactory, B2WConstants, B2WRoutes, $rootScope, BwPublicCache) {

            var Auction = {};

            function initObjectsAndArrays(){
                Auction.runningAuctions = [];
                Auction.auctionLookup = {}; //using home position
                Auction.auctionIdLookup = {}; //using auction_id

                Auction.progressLengthMax = {};

                Auction.progressLength = {};

                Auction.type = {};

                Auction.info = {};
            }


            Auction.newAuctionCreated = function (runningAuctions) {
                initObjectsAndArrays();
                Auction.runningAuctions = runningAuctions;
                initiateAuctions();
            };

            function initiateAuctions() {
                /*This is to prevent the auctions without indexes to throw errors*/
                for (var i = 1; i < 9; i++) {
                    Auction.auctionLookup[i] = {};
                    //This is for auctions without images
                    Auction.auctionLookup[i].item = {
                        item_thumbnail_url : "http://placehold.it/150/ebebeb&text="+B2WConstants.app_name
                    }
                }

                angular.forEach(Auction.runningAuctions, function (auction, index) {
                    //Separate time component from the date
                    //Without the split, Firefox can't get the time value of this date

                    auction.auction_start_date = auction.auction_start_date.split(' ')[0];//Split is used because firefox doesn't render the time portion that is coming from server
                    auction.auction_end_date = auction.auction_end_date.split(' ')[0];

                    //Create a new Date from the lft part of the separation
                    var startDate =   new Date( auction.auction_start_date );
                    var endDate =   new Date(  auction.auction_end_date );

                    //Get todays date and the time in milliseconds of each date parameter
                    var todaysDate =   new Date(Auction.serverTime); //We get today's date from the server so a user doesn't trick the system by resetting his time
                    var todaysDateTime = todaysDate.getTime();
                    var startDateTime = startDate.getTime();
                    var endDateTime = endDate.getTime();
                    var timeDiff;


                    /*If today's date is greater than the auction's start date but less than the end time*/
                    if (todaysDateTime >= startDateTime && todaysDateTime < endDateTime  ) {
                        /*the auction is still running*/
                        timeDiff = Math.abs(todaysDateTime - startDateTime);
                        auction.startStatus = 'running';

                        /*If today's date is greater than the auction's end date*/
                    }else if( todaysDateTime >= endDateTime){
                        /*the auction is past*/
                        timeDiff = Math.abs(todaysDateTime - endDateTime);
                        auction.startStatus = 'completed';

                        /*If today's date is lesser than the auction's start date*/
                    }else{
                        /*hasn't started yet*/
                        timeDiff = Math.abs(startDateTime - todaysDateTime);
                        auction.startStatus = 'not_started';
                    }

                    auction.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    var daysLeftplural = auction.daysLeft == 1 ? '' : 's';


                    //Get the total days the auction is set for
                    Auction.progressLengthMax[auction.auction_position_on_home_page] = Math.ceil( (Math.abs(endDateTime - startDateTime)) / (1000 * 3600 * 24));

                    var type, info, value;
                    if (auction.startStatus == 'running') {
                        auction.progressTitle = auction.daysLeft + " out of " +  Auction.progressLengthMax[auction.auction_position_on_home_page] + " days.";
                        value = Math.floor(( auction.daysLeft * 100) / Auction.progressLengthMax[auction.auction_position_on_home_page]);

                        if (value < 45) {
                            type = 'success';
                            info = '';
                        } else if (value < 85) {
                            type = 'warning';
                            info = 'Time is running out';
                        } else {
                            type = 'danger';
                            info = 'Auction about to end';
                        }

                        auction.progressValue = value;
                        auction.progessType = type;
                        auction.progressInfo = info;
                    }
                    else if (auction.startStatus == 'completed') {
                        auction.progressValue = 100;
                        auction.progessType = 'danger';
                        auction.progressInfo = 'Auction has ended';
                        auction.progressTitle = "About " +auction.daysLeft + " day" + daysLeftplural +" ago.";
                    }
                    else {
                        auction.progressValue = 0;
                        auction.progessType = 'primary';
                        auction.progressInfo = '';
                        auction.progressTitle = "Unavailable";
                    }
                    auction.progressMax = 100;

                    //Unserialize the image gallery of the auction
                    auction.gallery_images  =   JSON.parse(auction.item.images[0].gallery_images);
                    auction.gallery_images_indicators = [];
                    //get the number of carousel markers to display
                    for (var ci=0; ci <=  auction.gallery_images.length; ci++ ) {
                        auction.gallery_images_indicators.push(ci)
                    }
                    //Put the main image in the gallery array also
                    auction.gallery_images.unshift(auction.item.item_thumbnail_url);
                    Auction.auctionLookup[auction.auction_position_on_home_page] = auction;
                    Auction.auctionIdLookup[auction.id] = auction;
                });

                $rootScope.$broadcast('auctionsLoadedAndPrepped');
            }


            Auction.getRunningAuctions = function() {
                initObjectsAndArrays();
                $http.get(B2WRoutes.getRunningAuctions)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                            Auction.runningAuctions = successData.data;
                            Auction.serverTime = successData.time.date.split(' ')[0]; //Split is used because firefox doesn't render the time portion that is coming from server
                            Auction.prepAuctions();
                        }
                    });
            };

            Auction.getAuctionLeaderboard = function(auction_id) {
                return $http.get(B2WRoutes.getAuctionLeaderboard, {params : {auction_id : auction_id }});
            };

            Auction.getAuctionTips = function(auction_id) {
                return $http.get(B2WRoutes.getAuctionTips, {params : {auction_id : auction_id }});
            };



            Auction.prepAuctions = function () {
                if (Auction.runningAuctions.length) {
                    initiateAuctions();
                }
            };



            return Auction;

        }]);
/**
 * Created by Kaygee on 04/04/2015.
 */
angular.module('authentication', [])
    .factory('B2WAuth', ['$http','BwPublicCache','Punter','B2WConstants','B2WRoutes','$rootScope','$location','$timeout','$localStorage',
        function ($http, BwPublicCache, Punter, B2WConstants, B2WRoutes, $rootScope, $location, $timeout, $localStorage) {

            var authentication = {};

            var checkingAuthentication = false;
            authentication.checkIfUserIsAuthenticated = function () {
                if (!checkingAuthentication) {
                    checkingAuthentication = true;
                    /*
                     * Check the user authentication route if the user has signed in before
                     * */
                    $http.get(B2WRoutes.authentication)

                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {

                                //Put the cached response in a session storage using angular-cache defined as a service
                                BwPublicCache.cache.put(B2WRoutes.authentication, successData.data);

                                //Save a token  in the local storage for authentication on refresh
                                $localStorage.authentication = true;

                                //set how long it should take for the cache to clear itself
                                BwPublicCache.cache.setMaxAge(B2WConstants.cacheMaxAge);

                                //Set the on expire function to check if the user is still logged in from the server
                                BwPublicCache.cache.setOnExpire(function (key, value) {
                                    if (key == B2WRoutes.authentication) {
                                        authentication.checkIfUserIsAuthenticated()
                                    }
                                });

                                /*Do some rootScope changes*/
                                $rootScope.authentication = true;

                                $rootScope.punter = successData.data[0];
                                $localStorage.punter = successData.data[0];

                                /*Or else, assign it from cache*/
                            }else{
                                /*If user hasn't signed in, put everything to false*/
                                $rootScope.authentication = false;
                                $localStorage.authentication = false;
                                $rootScope.punter = {};
                                $localStorage.punter = {};
                                BwPublicCache.cache.removeAll();
                            }
                        })
                        .error(function () {
                            /*pass*/
                        }).finally(function () {
                            checkingAuthentication = false;
                        });
                }
            };

            authentication.register = function(formObject){
                return $http.post(B2WRoutes.register, formObject);
            };

            authentication.login = function(formObject){
                return $http.post(B2WRoutes.login, formObject);
            };

            $rootScope.logoutUser = function(){
                $rootScope.authentication = false;
                $localStorage.authentication = false;
                $location.path('/');
                $http.get(B2WRoutes.logout)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                            authentication.checkIfUserIsAuthenticated()
                        }
                    });
            };
            return authentication;
        }]);
/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('punterCache', [])
    .factory('BwPublicCache', ['$http','CacheFactory','B2WConstants', 'B2WRoutes', '$rootScope',
        function ($http, CacheFactory, B2WConstants, B2WRoutes, $rootScope) {

            var punterAuthCache = {};


            // Check to make sure the cache doesn't already exist
            if (!CacheFactory.get('punterCache')) {
                punterAuthCache.cache = CacheFactory('punterCache', {
                    deleteOnExpire: 'aggressive'
                });
            }


            return punterAuthCache;

        }]);
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
/**
 * Created by Kaygee on 14/05/2015.
 */
angular.module('bid2winApp.services', []);
/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('bid2winApp.services')
    .service('sortDate', ['$http', function($http){

        /*first date first*/
        this.inAscendingOrder = function (date1, date2) {
            if ((new Date(date1.created_at).getTime()) < (new Date(date2.created_at)).getTime()) return -1;
            if ((new Date(date1.created_at).getTime()) > (new Date(date2.created_at)).getTime()) return 1;
            return 0;
        };

        /*last date first*/
        this.inDescendingOrder = function (date1, date2) {
            if ((new Date(date1.created_at).getTime()) < (new Date(date2.created_at)).getTime()) return 1;
            if ((new Date(date1.created_at).getTime()) > (new Date(date2.created_at)).getTime()) return -1;
            return 0;
        };

        function jsonp_callback(data){
            console.log(data);
        }

        this.getCurrentTime = function () {
            //console.log('nw oo');
            //
            //$.ajax({
            //    type: "POST",
            //    dataType: 'jsonp',
            //    url : 'http://timeapi.org/utc/now.json?callback=jsonp_callback',
            //    success : function (data) {
            //        console.log('jquery' , data);
            //    }
            //});
            //$http.jsonp('http://timeapi.org/utc/now.json?callback=jsonp_callback')
            //    .success(function (returnedJson) {
            //        console.log(returnedJson);
            //        $rootScope.curentTime = new Date(returnedJson.dateString)
            //    })
        }



    }]);
/**
 * Created by Kaygee on 05/04/2015.
 */



angular.module('bid2winApp.services').
    service('imageUploader', ['$upload','blobber','B2WRoutes', function($upload, blobber, B2WRoutes) {




        this.upload = function (imageURI, filename) {
            var file = blobber.blobify(imageURI);
            return $upload.upload({
                url: B2WRoutes.uploadAvatar,
                //fields: {'uri': $scope.myCroppedImage},
                file: file,
                fileName : filename,
                fileFormDataName : 'image'
            });
        };

    }]);
/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('bid2winApp.services').service('CheckPhoneNumber', [function(){

    this.verify = function (number) {
        var phone_number = angular.copy(number);
        var dataToReturn = {
            status : true,
            originalNumber  : phone_number,
            numberStartWithZero : '',
            numberInternationalFormat : '',
            message : 'Passed tests'
        };
        if (!(phone_number.length > 9 && phone_number.length < 14)) {
            dataToReturn.message = 'The phone number is incomplete';
            dataToReturn.status = false;
            return dataToReturn;
        }
        if (phone_number.slice(0,4) == '+233') {
            if (phone_number.length == 13) {
                dataToReturn.numberStartWithZero  = '0' + phone_number.slice(4).toString()
            }else{
                dataToReturn.message = 'The phone number is incomplete';
                dataToReturn.status = false;
                return dataToReturn
            }
        }
        else if(phone_number.slice(0,1) == '0') {
            if (phone_number.length == 10) {
                dataToReturn.numberStartWithZero = phone_number;
                dataToReturn.numberInternationalFormat = '+233' + phone_number.slice(1).toString();
            }else if (phone_number.length > 10) {
                dataToReturn.message = 'The phone number has too many characters';
                dataToReturn.status = false;
                return  dataToReturn;
            }else{
                dataToReturn.message = 'The phone number is incomplete';
                dataToReturn.status = false;
                return  dataToReturn;
            }

        }else{
            dataToReturn.message = 'The phone number is invalid';
            dataToReturn.status = false;
            return  dataToReturn;
        }
        //End phone number validation

        return dataToReturn;
    }

}]);
/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('bid2winApp.services').service('blobber', [function(){

    this.blobify = function(dataURI) {
        //console.log(dataURI);
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: mimeString});
    };

}]);