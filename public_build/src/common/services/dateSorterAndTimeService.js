/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('bid2winApp.services')
    .service('sortDate', ['$http', function($http){

        /*first date first*/
        this.inAscendingOrder = function (date1, date2) {
            if ((new Date(date1.created_at).getTime()) < (new Date(date2.created_at)).getTime()) return -1;
            if ((new Date(date1.created_at).getTime()) > (new Date(date2.created_at)).getTime()) return 1;
            return 0;
        };

        /*last date first*/
        this.inDescendingOrder = function (date1, date2) {
            if ((new Date(date1.created_at).getTime()) < (new Date(date2.created_at)).getTime()) return 1;
            if ((new Date(date1.created_at).getTime()) > (new Date(date2.created_at)).getTime()) return -1;
            return 0;
        };

        function jsonp_callback(data){
            console.log(data);
        }

        this.getCurrentTime = function () {
            //console.log('nw oo');
            //
            //$.ajax({
            //    type: "POST",
            //    dataType: 'jsonp',
            //    url : 'http://timeapi.org/utc/now.json?callback=jsonp_callback',
            //    success : function (data) {
            //        console.log('jquery' , data);
            //    }
            //});
            //$http.jsonp('http://timeapi.org/utc/now.json?callback=jsonp_callback')
            //    .success(function (returnedJson) {
            //        console.log(returnedJson);
            //        $rootScope.curentTime = new Date(returnedJson.dateString)
            //    })
        }



    }]);