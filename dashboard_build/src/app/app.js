//var ngPegasusApp =
angular.module('pegasusrises', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'templates.app',
    'home',
    'admin',
    'survey',
    'directives',
    //'lk-google-picker',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    //'uiGmapgoogle-maps',
    'googlechart',
    'ngStorage',
    'ngTagsInput',
    'perfect_scrollbar',
    'mgo-angular-wizard'
])
    .config(['$stateProvider','$urlRouterProvider',
        'growlProvider', '$httpProvider','prConstantKeys',
        function($stateProvider, $urlRouterProvider,
                 growlProvider, $httpProvider, prConstantKeys){
            //for any unmatched url, redirect to the state '/home'
            $urlRouterProvider.otherwise('/');

            //globally time the growl toatser to stay visible for 5seconds
            growlProvider.globalTimeToLive(5000);

        }]);

