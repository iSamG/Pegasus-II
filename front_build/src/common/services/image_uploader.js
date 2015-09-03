/**
 * Created by Kaygee on 05/04/2015.
 */



angular.module('pegasusApp.services').
    service('imageUploader', ['$upload','blobber','PGRoutes', function($upload, blobber, PGRoutes) {




        this.upload = function (imageURI, filename) {
            var file = blobber.blobify(imageURI);
            return $upload.upload({
                url: PGRoutes.uploadAvatar,
                //fields: {'uri': $scope.myCroppedImage},
                file: file,
                fileName : filename,
                fileFormDataName : 'image'
            });
        };

    }]);