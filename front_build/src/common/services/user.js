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
                return $http.post(PGRoutes.login, formObject);
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