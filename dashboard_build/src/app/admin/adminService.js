/**
 * Created by kaygee on 2/16/15.
 */
angular.module('admin')
    .factory('adminService' , ['$rootScope', '$http', '$q','prRoutes', function($rootScope, $http, $q, prRoutes) {
        var adminService = {};

        adminService.getAuthUser = function () {
            $http.get(prRoutes.getAuthUser)
                .success(function (successData) {
                    $rootScope.user = successData.data;
                })
        };

        adminService.logoutUser = function () {
            return $http.get(prRoutes.logoutUser)
        };

        return adminService;
    }]);
