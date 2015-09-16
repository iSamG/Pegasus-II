angular.module('public')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.
            state('public_home', {
                url: '/app',
                templateUrl: 'public/home/public_home.tpl.html',
                controller: 'PGPublicHomeController',
                metadata: "Pegasus Home",
                link_active : 'false',
                resolve: {
                    PGAuth : 'PGAuth',

                    authentication : function (PGAuth) {
                        return  PGAuth.checkIfUserIsAuthenticated()
                    }

                }
            })
            .state('public_home.privacy_policy', {
                url: '/privacy_policy',
                templateUrl: 'public/policy/privacy_policy.tpl.html',
                controller: 'PGPrivacyController',
                link_active : 'false',
                metadata: "Privacy Policy"
            })
            .state('public_home.terms_conditions', {
                url: '/terms_and_conditions',
                templateUrl: 'public/policy/terms_conditions.tpl.html',
                controller: 'PGPrivacyController',
                link_active : 'false',
                metadata: "Terms and Conditions"
            })
            .state('public_home.about', {
                url: '/about',
                templateUrl: 'public/about/about.tpl.html',
                controller: 'PGAboutController',
                link_active : 'false',
                metadata: "About"
            })
            .state('public_home.contact', {
                url: '/contact',
                templateUrl: 'public/contact/contact.tpl.html',
                controller: 'PGContactController',
                link_active : 'false',
                metadata: "Contact"
            })
            .state('public_home.error', {
                url: '/error',
                templateUrl: 'public/error/error.tpl.html',
                controller: 'PGErrorController',
                link_active : 'false',
                metadata: "Error 404 - Not Found"
            });

    }]);