

angular.module('pegasusrises')
    .run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar','$localStorage','surveyService','adminService','Pusher',
        function($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage, surveyService, adminService, Pusher){
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


            Pusher.subscribe('new_survey_response', 'NewSurveyResponse', function (item) {

                console.log('pusher event', item);
            });
        }]);