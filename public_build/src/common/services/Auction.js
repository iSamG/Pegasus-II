/**
 * Created by Kaygee on 25/03/2015.
 */
angular.module('auctions', [])
    .factory('Auction', ['$http','CacheFactory','B2WConstants', 'B2WRoutes','$rootScope', 'BwPublicCache',
        function ($http, CacheFactory, B2WConstants, B2WRoutes, $rootScope, BwPublicCache) {

            var Auction = {};

            function initObjectsAndArrays(){
                Auction.runningAuctions = [];
                Auction.auctionLookup = {}; //using home position
                Auction.auctionIdLookup = {}; //using auction_id

                Auction.progressLengthMax = {};

                Auction.progressLength = {};

                Auction.type = {};

                Auction.info = {};
            }


            Auction.newAuctionCreated = function (runningAuctions) {
                initObjectsAndArrays();
                Auction.runningAuctions = runningAuctions;
                initiateAuctions();
            };

            function initiateAuctions() {
                /*This is to prevent the auctions without indexes to throw errors*/
                for (var i = 1; i < 9; i++) {
                    Auction.auctionLookup[i] = {};
                    //This is for auctions without images
                    Auction.auctionLookup[i].item = {
                        item_thumbnail_url : "http://placehold.it/150/ebebeb&text="+B2WConstants.app_name
                    }
                }

                angular.forEach(Auction.runningAuctions, function (auction, index) {
                    //Separate time component from the date
                    //Without the split, Firefox can't get the time value of this date

                    auction.auction_start_date = auction.auction_start_date.split(' ')[0];//Split is used because firefox doesn't render the time portion that is coming from server
                    auction.auction_end_date = auction.auction_end_date.split(' ')[0];

                    //Create a new Date from the lft part of the separation
                    var startDate =   new Date( auction.auction_start_date );
                    var endDate =   new Date(  auction.auction_end_date );

                    //Get todays date and the time in milliseconds of each date parameter
                    var todaysDate =   new Date(Auction.serverTime); //We get today's date from the server so a user doesn't trick the system by resetting his time
                    var todaysDateTime = todaysDate.getTime();
                    var startDateTime = startDate.getTime();
                    var endDateTime = endDate.getTime();
                    var timeDiff;


                    /*If today's date is greater than the auction's start date but less than the end time*/
                    if (todaysDateTime >= startDateTime && todaysDateTime < endDateTime  ) {
                        /*the auction is still running*/
                        timeDiff = Math.abs(todaysDateTime - startDateTime);
                        auction.startStatus = 'running';

                        /*If today's date is greater than the auction's end date*/
                    }else if( todaysDateTime >= endDateTime){
                        /*the auction is past*/
                        timeDiff = Math.abs(todaysDateTime - endDateTime);
                        auction.startStatus = 'completed';

                        /*If today's date is lesser than the auction's start date*/
                    }else{
                        /*hasn't started yet*/
                        timeDiff = Math.abs(startDateTime - todaysDateTime);
                        auction.startStatus = 'not_started';
                    }

                    auction.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    var daysLeftplural = auction.daysLeft == 1 ? '' : 's';


                    //Get the total days the auction is set for
                    Auction.progressLengthMax[auction.auction_position_on_home_page] = Math.ceil( (Math.abs(endDateTime - startDateTime)) / (1000 * 3600 * 24));

                    var type, info, value;
                    if (auction.startStatus == 'running') {
                        auction.progressTitle = auction.daysLeft + " out of " +  Auction.progressLengthMax[auction.auction_position_on_home_page] + " days.";
                        value = Math.floor(( auction.daysLeft * 100) / Auction.progressLengthMax[auction.auction_position_on_home_page]);

                        if (value < 45) {
                            type = 'success';
                            info = '';
                        } else if (value < 85) {
                            type = 'warning';
                            info = 'Time is running out';
                        } else {
                            type = 'danger';
                            info = 'Auction about to end';
                        }

                        auction.progressValue = value;
                        auction.progessType = type;
                        auction.progressInfo = info;
                    }
                    else if (auction.startStatus == 'completed') {
                        auction.progressValue = 100;
                        auction.progessType = 'danger';
                        auction.progressInfo = 'Auction has ended';
                        auction.progressTitle = "About " +auction.daysLeft + " day" + daysLeftplural +" ago.";
                    }
                    else {
                        auction.progressValue = 0;
                        auction.progessType = 'primary';
                        auction.progressInfo = '';
                        auction.progressTitle = "Unavailable";
                    }
                    auction.progressMax = 100;

                    //Unserialize the image gallery of the auction
                    auction.gallery_images  =   JSON.parse(auction.item.images[0].gallery_images);
                    auction.gallery_images_indicators = [];
                    //get the number of carousel markers to display
                    for (var ci=0; ci <=  auction.gallery_images.length; ci++ ) {
                        auction.gallery_images_indicators.push(ci)
                    }
                    //Put the main image in the gallery array also
                    auction.gallery_images.unshift(auction.item.item_thumbnail_url);
                    Auction.auctionLookup[auction.auction_position_on_home_page] = auction;
                    Auction.auctionIdLookup[auction.id] = auction;
                });

                $rootScope.$broadcast('auctionsLoadedAndPrepped');
            }


            Auction.getRunningAuctions = function() {
                initObjectsAndArrays();
                $http.get(B2WRoutes.getRunningAuctions)
                    .success(function (successData) {
                        if (successData.code == '200' && $.trim(successData.status.toLowerCase()) == 'ok') {
                            Auction.runningAuctions = successData.data;
                            Auction.serverTime = successData.time.date.split(' ')[0]; //Split is used because firefox doesn't render the time portion that is coming from server
                            Auction.prepAuctions();
                        }
                    });
            };

            Auction.getAuctionLeaderboard = function(auction_id) {
                return $http.get(B2WRoutes.getAuctionLeaderboard, {params : {auction_id : auction_id }});
            };

            Auction.getAuctionTips = function(auction_id) {
                return $http.get(B2WRoutes.getAuctionTips, {params : {auction_id : auction_id }});
            };



            Auction.prepAuctions = function () {
                if (Auction.runningAuctions.length) {
                    initiateAuctions();
                }
            };



            return Auction;

        }]);