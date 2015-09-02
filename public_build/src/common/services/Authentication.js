/**
 * Created by Kaygee on 04/04/2015.
 */
angular.module('pegasusApp.services')
    .factory('B2WAuth', ['$http','Punter','B2WConstants','B2WRoutes','$rootScope','$location','$timeout','$localStorage',
        function ($http, Punter, B2WConstants, B2WRoutes, $rootScope, $location, $timeout, $localStorage) {

            var authentication = {};


            return authentication;
        }]);