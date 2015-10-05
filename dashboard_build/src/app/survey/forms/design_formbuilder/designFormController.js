/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prFormBuilderController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl','$localStorage','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $localStorage, $timeout ){

            var surveyData;
            console.log("outside" ,$localStorage);
            if ( $localStorage.survey ) {
                var data = JSON.parse($localStorage.survey);
                console.log(data);
                surveyData = data.fields
            }

            var formbuilder  = new Formbuilder({
                selector: '#formbuilder',
                bootstrapData: surveyData
            });

            formbuilder.on('save', function(payload){

                var data = JSON.parse(payload);

                if (data.fields && data.fields.length) {
                    $timeout(function () {
                        $localStorage.survey = payload;
                    });
                }
            })
        }]);

