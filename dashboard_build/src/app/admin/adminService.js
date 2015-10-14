/**
 * Created by kaygee on 2/16/15.
 */
angular.module('admin')
    .factory('adminService' , ['$rootScope', '$http', '$q','prRoutes', function($rootScope, $http, $q, prRoutes) {
        var adminService = {};

        adminService.getAuthUser = function () {
            var defer = $q.defer();
            $http.get(prRoutes.getAuthUser)
                .success(function (successData) {
                    if (successData.code == '200' && successData.status.toLowerCase() == 'ok') {
                        $('body').removeClass('hidden');
                        $rootScope.user = successData.data;
                        defer.resolve(true);
                    }
                    else{
                        goToPublicHome();
                        defer.reject(false);
                    }
                });
            return defer.promise;
        };

        adminService.logoutUser =  $rootScope.logoutUser  = function () {
            $http.get(prRoutes.logoutUser)
                .success(function (successData) {
                    if (successData.code == '200' && successData.status.toLowerCase() == 'ok') {
                        goToPublicHome();
                    }
                })
        };

        function goToPublicHome(){
            location.href='/';
        }

        return adminService;
    }]);
