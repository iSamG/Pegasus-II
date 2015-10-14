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
    'angular-cache',
    'doowb.angular-pusher',
    'angular-loading-bar',
    'templates.app',
    'templates.common',
    'pegasusApp.services',
    'pegasusApp.directives',
    'pegasusApp.constants',
    'public'
])
    .config(['$stateProvider','$urlRouterProvider','PGConstants','growlProvider','CacheFactoryProvider',
        '$rootScopeProvider', 'PusherServiceProvider','$locationProvider','$provide',
        function($stateProvider, $urlRouterProvider, PGConstants, growlProvider, CacheFactoryProvider,
                 $rootScopeProvider, PusherServiceProvider, $locationProvider, $provide){

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
            //PusherServiceProvider.setToken(PGConstants.pusherToken);
            //            .setOptions({});


            angular.extend(CacheFactoryProvider.defaults, {
                //maxAge:  2 * 60 * 60 * 1000,// Items added to this cache expire after 2hours
                storageMode : 'sessionStorage',//memory| sessionStorage | localStorage
                storagePrefix : 'b2w',
                //cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
                deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
            });

        }]);
