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
    'doowb.angular-pusher',
    'cfp.loadingBar',
    'angular-growl',
    'angularFileUpload',
    'ngResource',
    'ngJoyRide',
    //'uiGmapgoogle-maps',
    'ngStorage',
    'ngTagsInput',
    'perfect_scrollbar',
    'mgo-angular-wizard'
])
    .config(['$stateProvider','$urlRouterProvider',
        'growlProvider', '$httpProvider','prConstantKeys','PusherServiceProvider',
        function($stateProvider, $urlRouterProvider,
                 growlProvider, $httpProvider, prConstantKeys, PusherServiceProvider){
            //for any unmatched url, redirect to the state '/home'
            $urlRouterProvider.otherwise('/');

            //globally time the growl toatser to stay visible for 5seconds
            growlProvider.globalTimeToLive(5000);

            //Pusher token
            //key = '21469ff0850de21291e1'
            //secret = '750f5c48dfd5ad48adac'

            PusherServiceProvider.setToken('21469ff0850de21291e1');
            //            .setOptions({});


        }]);

