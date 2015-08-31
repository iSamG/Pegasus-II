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