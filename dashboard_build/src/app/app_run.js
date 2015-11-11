

angular.module('pegasusrises')
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar','$localStorage','surveyService','adminService','Pusher','growl',
        function($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage, surveyService, adminService, Pusher, growl){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            //$localStorage.$default({
            //    first_timer : true
            //});

            $rootScope.fromNow = function(datetime){
                return moment(datetime).fromNow();
            };

            $rootScope.formatDate = function(datetime, full){
                //return moment(datetime).format('Do, MMMM  YYYY, h:mm:ss a');
                if (full) {
                    return moment(datetime).format('dddd  Do MMMM,  YYYY');
                }
                return moment(datetime).format('Do, MMM  YYYY');
            };
            //$table->enum('input_type', ['radio', 'checkboxes','text','date','dropdown','time','number','website','email','price','address','gps','image','video']);
            $rootScope.formatFieldType = {
                radio : 'Single Choice',
                checkboxes : 'Multiple Choice',
                text : 'Text field',
                paragraph : 'Text field',
                date : 'Date',
                dropdown : 'Single Choice',
                time : 'Time',
                number : 'Number',
                website : 'Website',
                email : 'Email Address',
                price : 'Currency',
                address : 'Address',
                gps : 'Location',
                image : 'Image',
                video : 'Video',
                file : 'File'
            };

            $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
                cfpLoadingBar.start();
                $rootScope.loading = true;
            });

            $rootScope.$on('$viewContentLoading',function(event){
                cfpLoadingBar.inc();
            });

            $rootScope.$on('$viewContentLoaded',function(event){
                cfpLoadingBar.complete();
                $rootScope.loading = false;
            });

            adminService.getAuthUser()
                .then(function (status) {
                    if (status) {
                        surveyService.loadAllSurveys();
                    }
                });


            $rootScope.reloadSurveyData = function () {
                surveyService.loadAllSurveys();
            };


            Pusher.subscribe('new_survey_response', 'App\\Events\\NewSurveyResponse', function (item) {
                console.log('pusher event', item);

                /*if the survey lookup os not empty and the survey response recorded belongs to the admin*/
                if (!(_.isEmpty(surveyService.surveyLookup)) && surveyService.surveyLookup[item.surveyAnswerObject.survey_id] != undefined) {
                    growl.info('New response submitted', {title : surveyService.surveyLookup[item.surveyAnswerObject.survey_id].survey_name } );
                    $rootScope.$broadcast('newSurveyResponse', item.surveyAnswerObject);
                }
                //surveyAnswerObject: Object
                //answer_response: "{"c2":"rre","c16":"03:04","c20":"","c21":"0004-04-04","c33":"04:44","c48":"http://www.google.com","c17":""}"
                //    created_at: "2015-11-06 15:27:42"
                //email: 0
                //id: 50
                //name_of_respondent: 0
                //phone_number: 0
                //survey_id: 5
                //updated_at: "2015-11-06 15:27:42"
            });
        }]);