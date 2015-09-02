/**
 * Created by Kaygee on 05/04/2015.
 */



angular.module('pegasusApp.services').
    service('imageUploader', ['$upload','blobber','B2WRoutes', function($upload, blobber, B2WRoutes) {




        this.upload = function (imageURI, filename) {
            var file = blobber.blobify(imageURI);
            return $upload.upload({
                url: B2WRoutes.uploadAvatar,
                //fields: {'uri': $scope.myCroppedImage},
                file: file,
                fileName : filename,
                fileFormDataName : 'image'
            });
        };

    }]);