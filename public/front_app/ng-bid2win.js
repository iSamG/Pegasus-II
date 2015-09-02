/* Bid2Win - v0.0.1 - 2015-08-31
 * http://bid2win.herokuapp.com
 * Copyright (c) 2015 PollAfrique Ltd;
 * Licensed MIT
 */
angular.module('pegasusApp', [
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
    'pegasusApp.services',
    'pegasusApp.directives',
    'pegasusApp.services',
    'public'
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

    .controller('BwErrorController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','B2WAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, B2WAuth) {


        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('BwPublicLoginController',
    ['$rootScope', '$scope','$state','$stateParams', 'B2WConstants', '$modal', 'B2WAuth'
        ,'growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, $stateParams, B2WConstants, $modal, B2WAuth,
                  growl, SweetAlert, $location, $timeout) {


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
 * Created by Kaygee on 27/03/2015.
 */

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

angular.module('pegasusApp.services', [])
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
angular.module('pegasusApp')
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

angular.module('pegasusApp.directives', []);
/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasusApp.directives')
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
angular.module('pegasusApp.directives')
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
angular.module('pegasusApp.directives')
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
angular.module('pegasusApp.directives')
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
 * Created by Kaygee on 04/04/2015.
 */
angular.module('pegasusApp.services')
    .factory('B2WAuth', ['$http','Punter','B2WConstants','B2WRoutes','$rootScope','$location','$timeout','$localStorage',
        function ($http, Punter, B2WConstants, B2WRoutes, $rootScope, $location, $timeout, $localStorage) {

            var authentication = {};


            return authentication;
        }]);
/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('pegasusApp.services')
    .factory('Punter', ['$http','B2WConstants', 'B2WRoutes', '$rootScope','$localStorage','$timeout','growl','$modal',
        function ($http, B2WConstants, B2WRoutes, $rootScope, $localStorage, $timeout, growl, $modal) {

            var User = {};

            var checkingAuthentication = false;
            User.checkIfUserIsAuthenticated = function () {
                if (!checkingAuthentication) {
                    checkingAuthentication = true;
                    /*
                     * Check the user authentication route if the user has signed in before
                     * */
                    $http.get(B2WRoutes.authentication)

                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {

                                //Put the cached response in a session storage using angular-cache defined as a service
                                //BwPublicCache.cache.put(B2WRoutes.authentication, successData.data);

                                //Save a token  in the local storage for authentication on refresh
                                $localStorage.authentication = true;

                                //set how long it should take for the cache to clear itself
                                //BwPublicCache.cache.setMaxAge(B2WConstants.cacheMaxAge);

                                //Set the on expire function to check if the user is still logged in from the server
                                //BwPublicCache.cache.setOnExpire(function (key, value) {
                                //    if (key == B2WRoutes.authentication) {
                                //        User.checkIfUserIsAuthenticated()
                                //    }
                                //});

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
                                //BwPublicCache.cache.removeAll();
                            }
                        })
                        .error(function () {
                            /*pass*/
                        }).finally(function () {
                            checkingAuthentication = false;
                        });
                }
            };

            User.register = function(formObject){
                return $http.post(B2WRoutes.register, formObject);
            };

            User.login = function(formObject){
                return $http.post(B2WRoutes.login, formObject);
            };

            $rootScope.logoutUser = function(){
                $rootScope.authentication = false;
                $localStorage.authentication = false;
                $location.path('/');
                $http.get(B2WRoutes.logout)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                            User.checkIfUserIsAuthenticated()
                        }
                    });
            };

            return User;

        }]);
/**
 * Created by Kaygee on 14/05/2015.
 */
angular.module('pegasusApp.services', []);
/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('pegasusApp.services')
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



angular.module('pegasusApp.services').
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


angular.module('pegasusApp.services').service('CheckPhoneNumber', [function(){

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


angular.module('pegasusApp.services').service('blobber', [function(){

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