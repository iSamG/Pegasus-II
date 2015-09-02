/**
 * Created by Kaygee on 30/03/2015.
 */


angular.module('pegasusApp.services').service('blobber', [function(){

    this.blobify = function(dataURI) {
        //console.log(dataURI);
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for(var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: mimeString});
    };

}]);