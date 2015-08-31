/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('punterCache', [])
    .factory('BwPublicCache', ['$http','CacheFactory','B2WConstants', 'B2WRoutes', '$rootScope',
        function ($http, CacheFactory, B2WConstants, B2WRoutes, $rootScope) {

            var punterAuthCache = {};


            // Check to make sure the cache doesn't already exist
            if (!CacheFactory.get('punterCache')) {
                punterAuthCache.cache = CacheFactory('punterCache', {
                    deleteOnExpire: 'aggressive'
                });
            }


            return punterAuthCache;

        }]);