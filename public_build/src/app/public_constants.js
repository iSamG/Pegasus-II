/**
 * Created by Kaygee on 27/03/2015.
 */

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

angular.module('bid2winApp.constants', [])
    .constant('B2WConstants', {
        app_name : 'i-Bid2Win',
        app_url : 'http://www.i-bid2win.com',
        app_email : 'support@i-bid2win.com',
        credit_symbol : 'bcs',
        credit_name_singular : 'credit',
        credit_name_plural : 'credits',
        fbId : '384423575082172', //facebookId
        pusherToken : '48d1c62b0717d8444d92',
        pusher_public_channel : 'bid2win_public_channel',
        pusher_admin_channel : 'bid2win_admin_channel',
        cacheMaxAge : 61 * 60 * 1000, // 1 hour 1minute,

        /*Account Type Formatting*/
        confirmed : "Confirmed",
        inactive : "Inactive",
        paid_subscription : "Subscribed"
    })
    .constant('B2WRoutes', {
        authentication : '/auth/user',
        getRunningAuctions : '../homepage/auctions',
        getAuctionLeaderboard : 'auction/bidders/leaders/board',
        getAuctionTips : 'active/auction/tips',
        verifyPunterCode : 'punter/account/confirmation',
        resendPunterCode : 'punter/account/confirmation/resend',
        sendPasswordResetToken : 'user/send/password/link',
        wallet : 'punter/wallet',
        topUpWallet : window.location.origin + '/punter/wallet/topup',/*the origin is added so it redirects on all platforms*/
        walletTopUpHistory : 'punter/wallet/topup/history',
        editPunterProfile : 'punter/profile/edit',
        editPunterProfileAfterSocialMediaSignup : 'punter/update/social/media/profile',
        paySubscription : 'punter/pay/for/subscription',
        uploadAvatar : '/upload/image',
        allPunterBids : 'punter/bids',
        allPunterBidTotal : 'punter/bids/totals',
        punterBidsPerAuction : 'punter/total/bid/under/auction',
        allAuctionsParticipated : 'punter/all/auctions/participated',
        placeABid : 'punter/place/bid',
        register : '/register',
        login : '/login',
        logout : '/logout',
        activeAdverts : 'active/adverts',
        endorsedAuctionWinner : 'auction/endorsed/winner',

        /*Facebook on the Server*/
        facebook : 'facebook/login',
        /*Foursquare on the Server*/
        foursquare : 'foursquare/login',

        adSizes : {
            leaderboard : {
                name : 'Leaderboard',
                type : 'leaderboard',
                width : 728,
                height : 90
            },
            take_over : {
                name : 'Take Over',
                type : 'take_over',
                width : 2000,
                height : 1200
            },
            //wide_skyscraper : {
            //    name : 'Wide Skyscraper',
            //    type : 'wide_skyscraper',
            //    width : 160,
            //    height : 600
            //},
            //skyscraper : {
            //    name : 'Wide Skyscraper',
            //    type : 'skyscraper',
            //    width : 120,
            //    height : 600
            //},
            square_pop_up : {
                name : 'Square pop-up',
                type : 'square_pop_up',
                width : 250,
                height : 250
            },
            //rectangle : {
            //    name : 'Rectangle',
            //    type : 'rectangle',
            //    width : 180,
            //    height : 150
            //},
            //square_button : {
            //    name : 'Square Button',
            //    type : 'square_button',
            //    width : 125,
            //    height : 125
            //}
            home_page_carousel : {
                name : 'Home Page Slider',
                type : 'home_page_carousel',
                width : 1440,
                height : 504
            }
        }
    });