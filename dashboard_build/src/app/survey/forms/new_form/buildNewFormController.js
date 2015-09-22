/**
 * Created by Kaygee on 24/02/2015.
 */

angular.module('survey')
    .controller('prBuildNewFormController', ['$rootScope', '$scope', 'homeService', 'surveyService', 'growl','$location','$timeout',
        function($rootScope, $scope, homeService, surveyService, growl, $location, $timeout ){

            $("#newForm").alpaca({
                "data": {
                    "name": "Sam Dzidzornu",
                    "feedback": "Very impressive.",
                    "ranking": "excellent"
                },
                "schema": {
                    "title":"User Feedback",
                    "description":"What do you think about Alpaca?",
                    "type":"object",
                    "properties": {
                        "name": {
                            "type":"string",
                            "title":"Name",
                            required : true
                        },
                        "feedback": {
                            "type":"string",
                            "title":"Feedback"
                        },
                        "ranking": {
                            "type":"string",
                            "title":"Ranking",
                            "enum":['excellent','ok','so so']
                        }
                    }
                },
                "options": {
                    "renderForm":true,
                    "form":{
                        "attributes":{
                            "action":"examples/endpoints/save.php",
                            "method":"post"
                        },
                        "buttons":{
                            "submit":{}
                        }
                    },
                    "helper": "Tell us what you think about Alpaca!",
                    "fields": {
                        "name": {
                            "size": 20,
                            "helper": "Please enter your name.",
                            "placeholder": "Enter your name"
                        },
                        "feedback" : {
                            "type": "textarea",
                            "rows": 5,
                            "cols": 40,
                            "helper": "Please enter your feedback."
                        },
                        "ranking": {
                            "type": "select",
                            "helper": "Select your ranking.",
                            "optionLabels": ["Awesome!",
                                "It's Ok",
                                "Hmm..."]
                        }
                    }
                },
                "view" : "VIEW_WEB_EDIT_LIST"
            });

        }]);

