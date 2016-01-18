/* pegasusrises - v2.0 - 2016-01-18
 * pegasusrises.com
 * Copyright (c) 2016 BBG Digital Innovation Lab;
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
    'angular-cache',
    'angular-loading-bar',
    'templates.app',
    'templates.common',
    'pegasusApp.services',
    'pegasusApp.directives',
    'pegasusApp.constants',
    'public'
])
    .config(['$stateProvider','$urlRouterProvider','PGConstants','growlProvider','CacheFactoryProvider',
        '$rootScopeProvider','$locationProvider','$provide',
        function($stateProvider, $urlRouterProvider, PGConstants, growlProvider, CacheFactoryProvider,
                 $rootScopeProvider, $locationProvider, $provide){

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

angular.module('public', []);

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
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('PGAboutController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','PGAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, PGAuth) {


        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')

    .controller('PGErrorController', ['$rootScope', '$scope', '$state', '$stateParams','$location','growl','PGAuth',
        function ($rootScope, $scope, $state, $stateParams, $location, growl, PGAuth) {


        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('PGPublicLoginController',
    ['$rootScope', '$scope','$state','$stateParams', 'PGConstants', '$modal', 'User'
        ,'growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, $stateParams, PGConstants, $modal, User,
                  growl, SweetAlert, $location, $timeout) {


            /*Begin User login form*/
            $scope.submittingLoginForm = false;
            $scope.user_login_form = {
                username : '',
                password : ''
            };

            //A variable that displays that there's an error with the submission
            $scope.loginError = false;

            $scope.loginUser = function(){

                //Change to true when form is being submitted
                $scope.submittingLoginForm = true;

                //Submit if details have been entered
                if ($scope.user_login_form.username && $scope.user_login_form.password) {
                    User.login($scope.user_login_form)
                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                                growl.success("Welcome, " + successData.data.username, {title : "Login Success"});
                                location.href ='/dashboard';
                                $scope.cancel();

                            }else if(successData.code == '401'){
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
            /*End User login form*/

        }]);
/**
 * Created by Kaygee on 23/03/2015.
 */

angular.module('public')
    .controller('PGPublicSignUpModalController',
    ['$rootScope', '$scope','$state','PGConstants', '$localStorage', 'User','growl','SweetAlert','$location','$timeout',
        function ($rootScope, $scope, $state, PGConstants, $localStorage, User, growl, SweetAlert, $location, $timeout) {


            //A variable to check if the for is undergoing submission
            $scope.submittingRegistrationForm = false;
            $scope.submittingRegistrationFormLoader = false;

            if ($localStorage.user_register_form) {
                $scope.user_register_form = $localStorage.user_register_form;
                if ($localStorage.signup_validation) {
                    $scope.validation = $localStorage.signup_validation;
                }
            }else{
                //Begin user register form
                $scope.user_register_form = $localStorage.user_register_form = {
                    email : "",
                    country : "gh"
                };
                $scope.validation = $localStorage.signup_validation = {};

            }



            $scope.registerUser = function(isValid){
                $scope.user_register_form.country = 'gh';

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
                if ($scope.user_register_form.password.length < 6) {
                    $scope.validation.password = 'The password must be at least six characters' ;
                    return false
                }

                //End password  validation

                $scope.submittingRegistrationFormLoader = true;

                //send form to the server to be saved
                User.register($scope.user_register_form)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok' ) {
                            growl.success("You have successfully created an account on "+ PGConstants.app_name +". Thank you.", {title : "Registration"});
                            $scope.user_register_form = $localStorage.user_register_form = {};
                            location.href ='/dashboard';
                            $scope.cancel();

                        }else if(successData.code == '403') {
                            growl.error(successData.message, {title: "Duplicate Credentials"});
                            $scope.loginError = true;
                        }
                        else if(successData.code == '401'){
                            growl.error("Some of the fields already exist.", {title : "Duplicate Credentials"});
                            $scope.loginError = true;
                        }
                    })
                    .error(function (errorData) {
                        angular.forEach(errorData, function (value, prop) {
                            /*The regex strips the square brackets from the server response*/
                            $scope.validation[prop] = value.toString().replace(/[\[\]"]+/g, "");
                        });
                        growl.error("Your submission could not be processed at this time.", {title: 'Registration'});
                    })
                    .finally(function () {
                        $scope.submittingRegistrationFormLoader = false;
                    });
            } ;
            //End user register form


        }]);
/**
 * Created by Kaygee on 27/03/2015.
 */

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

angular.module('pegasusApp.constants', [])
    .constant('PGConstants', {
        app_name : 'Pegasus',
        app_url : 'http://www.pegasusrises.com',
        app_email : 'support@pegasusrises.com',
        cacheMaxAge : 61 * 60 * 1000 // 1 hour 1minute,
    })
    .constant('PGRoutes', {
        authentication : '/auth/user',
        sendPasswordResetToken : 'user/send/password/link',
        register : '/register',
        login : '/login',
        reset : '/password/email',
        logout : '/logout'
    });
angular.module('pegasusApp')
    .run(['$rootScope', '$state', '$stateParams','$localStorage','$sessionStorage','PGConstants', 'sortDate','User',
        function($rootScope, $state, $stateParams ,$localStorage, $sessionStorage, PGConstants,
                 sortDate, User){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $localStorage.$default({
                authentication: false
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
            });

            $rootScope.$on('$viewContentLoading',function(event){
                //cfpLoadingBar.inc();
                $('.showAfterAngularLoads').show();
            });

            $rootScope.$on('$viewContentLoaded',function(event){
                //cfpLoadingBar.complete();
                $rootScope.pageLoading = false;
                User.checkIfUserIsAuthenticated();

            });


            //Assign defaults to the rootScope
            $rootScope.authentication =  $localStorage.authentication || false;
            $rootScope.app_name = PGConstants.app_name;
            $rootScope.app_url = PGConstants.app_url;
            $rootScope.app_email = PGConstants.app_email;

            $rootScope.goBackInHistory = function () {
                window.history.back();
            };
            $rootScope.onLocalHost = function () {
                return window.location.host != "pegasusrises.com";
            };

            $rootScope.user = $localStorage.user || {} ;

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
    .directive('resetPassword', ['SweetAlert','$q','$state','User', function (SweetAlert, $q, $state, User) {

        return {

            restrict : 'EA',
            scope : true,
            link : function (scope, elem, attr) {

                scope.verify = function (inputValue) {
                    var defer = $q.defer();
                    var data_to_post = {
                        email : inputValue
                    };
                    User.sendPasswordResetToken(data_to_post)
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
 * Created by Kaygee on 14/05/2015.
 */
angular.module('pegasusApp.services', []);
/**
 * Created by Kaygee on 04/04/2015.
 */
angular.module('pegasusApp.services')
    .factory('PGAuth', ['$http','PGConstants','PGRoutes','$rootScope','$location','$timeout','$localStorage',
        function ($http, PGConstants, PGRoutes, $rootScope, $location, $timeout, $localStorage) {

            var authentication = {};


            return authentication;
        }]);
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
    service('imageUploader', ['$upload','blobber','PGRoutes', function($upload, blobber, PGRoutes) {




        this.upload = function (imageURI, filename) {
            var file = blobber.blobify(imageURI);
            return $upload.upload({
                url: PGRoutes.uploadAvatar,
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
/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('pegasusApp.services')
    .factory('User', ['$http','PGConstants', 'PGRoutes', '$rootScope','$localStorage','$timeout','growl','$modal','$location',
        function ($http, PGConstants, PGRoutes, $rootScope, $localStorage, $timeout, growl, $modal, $location) {

            var User = {};

            var checkingAuthentication = false;
            User.checkIfUserIsAuthenticated = function () {
                if (!checkingAuthentication) {
                    checkingAuthentication = true;
                    /*
                     * Check the user authentication route if the user has signed in before
                     * */
                    $http.get(PGRoutes.authentication)

                        .success(function (successData) {
                            if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {

                                //Put the cached response in a session storage using angular-cache defined as a service
                                //BwPublicCache.cache.put(PGRoutes.authentication, successData.data);

                                //Save a token  in the local storage for authentication on refresh
                                $localStorage.authentication = true;

                                //set how long it should take for the cache to clear itself
                                //BwPublicCache.cache.setMaxAge(PGConstants.cacheMaxAge);

                                //Set the on expire function to check if the user is still logged in from the server
                                //BwPublicCache.cache.setOnExpire(function (key, value) {
                                //    if (key == PGRoutes.authentication) {
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
                return $http.post(PGRoutes.register, formObject);
            };

            User.login = function(formObject){
                return $http.post(PGRoutes.login, formObject);
            };

            User.sendPasswordResetToken = function(formObject){
                return $http.post(PGRoutes.reset, formObject);
            };

            $rootScope.logoutUser = function(){
                $rootScope.authentication = false;
                $localStorage.authentication = false;
                $location.path('/');
                $http.get(PGRoutes.logout)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                            User.checkIfUserIsAuthenticated()
                        }
                    });
            };

            return User;

        }]);