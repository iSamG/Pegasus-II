/**
 * Created by Kaygee on 04/04/2015.
 */
angular.module('pegasusApp.services')
    .factory('PGAuth', ['$http','PGConstants','PGRoutes','$rootScope','$location','$timeout','$localStorage',
        function ($http, PGConstants, PGRoutes, $rootScope, $location, $timeout, $localStorage) {

            var authentication = {};


            return authentication;
        }]);