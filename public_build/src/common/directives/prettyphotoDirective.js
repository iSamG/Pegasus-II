/*
 * Created by Kaygee on 10/11/2014.
 */
angular.module('pegasusApp.directives')
    .directive('prettyImage', function(){
        return function(scope, element, attrs) {
            if (attrs.imageUrl) {
                element.bind('click', function () {
                    $.prettyPhoto.open( attrs.imageUrl, '', attrs.title);
                });
            }else{
                $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false});
            }
        }
    });