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
    'pegasusApp.constants',
    'public'
])
    .config(['$stateProvider','$urlRouterProvider','B2WConstants','growlProvider','CacheFactoryProvider',
        '$rootScopeProvider', 'PusherServiceProvider','$locationProvider','$provide','$authProvider',
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
