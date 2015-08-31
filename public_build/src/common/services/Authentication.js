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