/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('advertisement', [])
    .factory('Advertising', ['$http','CacheFactory','B2WConstants', 'B2WRoutes','$rootScope', 'BwPublicCache','$q','$stateParams',
        function ($http, CacheFactory, B2WConstants, B2WRoutes, $rootScope, BwPublicCache, $q, $stateParams) {

            var Advert = {};

            var advertCache;
            // Check to make sure the cache doesn't already exist
            if (!CacheFactory.get('publicAdvertCache')) {
                advertCache = CacheFactory('publicAdvertCache', {
                    maxAge: 15 * 60 * 1000, // 15 minutes,
                    deleteOnExpire: 'aggressive',
                    onExpire: function (key, value) {
                        $http.get(key).success(function (returnedData) {
                            if (returnedData.code == '200' && $.trim(returnedData.status.toLowerCase()) == 'ok') {
                                advertCache.put(key, returnedData.data);
                            }
                        });
                    }
                });
            }else{
                advertCache = CacheFactory('publicAdvertCache')
            }



            function initAdArrays() {
                Advert.advertisments = [];
                angular.forEach(B2WConstants.adSizes, function (value, key) {
                    Advert[key+'Array'] = [];
                });
            }

            function prepAdvertisements() {
                angular.forEach(Advert.advertisments, function (value, key) {
                    try{
                        Advert[value.advert_position +'Array'].push(value);
                    }catch(e){
                        Advert[value.advert_position +'Array'] = [value];
                    }

                });

                $rootScope.$broadcast('AdvertsLoadedAndPrepped')

            }



            Advert.getActiveAdverts = function() {
                var defer = $q.defer();
                //var cachedData = advertCache.get(B2WRoutes.activeAdverts);
                initAdArrays();


                //if (!cachedData) {
                $http.get(B2WRoutes.activeAdverts)
                    .success(function (returnedData) {
                        if (returnedData.code == '200' && $.trim(returnedData.status.toLowerCase()) == 'ok') {
                            //advertCache.put(B2WRoutes.activeAdverts, returnedData.data);
                            Advert.advertisments = returnedData.data;
                            prepAdvertisements();
                            defer.resolve(true);
                        }
                    });
                //}else{
                //    Advert.advertisments = cachedData;
                //    prepAdvertisements();
                //    defer.resolve(true);
                //}

                return defer.promise;

            };

            Advert.monitorStateAndUpdateTakeOver = function () {
                function changeBodyTakeOver(adItemImageURL) {
                    var body =  $('body');
                    if (adItemImageURL != "empty") {
                        body
                            .css(
                            "background-image", "url( \' " + adItemImageURL + " \' )")
                            .css("background-position", "center 0");
                    }else{
                        body.removeAttr( 'style' );
                    }

                }

                if (Advert.take_overArray && Advert.take_overArray.length > 0) {
                    for (var i = 0; i < Advert.take_overArray.length; i++) {
                        var adItem = Advert.take_overArray[i];
                        if ($stateParams.id) { /*has id on only auction pages*/
                            if (adItem.auction_id == $stateParams.id) {
                                changeBodyTakeOver(adItem.advert_image_url);/*Assign the selected auction's takeover*/
                                break;
                            }else{
                                changeBodyTakeOver("empty");/*remove take over from selected auction page*/
                            }
                        }else{
                            if (!adItem.auction_id) { /*if the auction id is 0*/
                                changeBodyTakeOver(adItem.advert_image_url);/*not an auction page, put last available ad
                                 that has no auction ID in background*/
                            }
                        }
                    }
                }
            };


            return Advert;

        }]);