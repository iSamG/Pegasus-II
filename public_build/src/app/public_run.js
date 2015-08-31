angular.module('bid2winApp')
    .run(['$rootScope', '$state', '$stateParams','$localStorage','$sessionStorage','B2WConstants',
        'Punter','Auction','Pusher','Advertising', 'sortDate',
        function($rootScope, $state, $stateParams ,$localStorage, $sessionStorage, B2WConstants,
                 Punter, Auction, Pusher, Advertising, sortDate){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $localStorage.$default({
                authentication: false,
                punter : {}
            });

            $rootScope.$storage = $localStorage;
            //delete $localStorage.counter;
            //$localStorage.$reset()
            //$localStorage.$reset({
            //    counter: 42
            //});

            $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
                $rootScope.pageLoading = true;
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                Advertising.monitorStateAndUpdateTakeOver();
            });

            $rootScope.$on('$viewContentLoading',function(event){
                //cfpLoadingBar.inc();
                $('.showAfterAngularLoads').show();
            });

            $rootScope.$on('$viewContentLoaded',function(event){
                //cfpLoadingBar.complete();
                $rootScope.pageLoading = false;
            });


            //Assign defaults to the rootScope
            $rootScope.authentication =  $localStorage.authentication || false;
            $rootScope.app_name = B2WConstants.app_name;
            $rootScope.app_url = B2WConstants.app_url;
            $rootScope.app_email = B2WConstants.app_email;
            $rootScope.credit_symbol = B2WConstants.credit_symbol;
            $rootScope.credit_name_singular = B2WConstants.credit_name_singular;
            $rootScope.credit_name_plural = B2WConstants.credit_name_plural;
            $rootScope.goBackInHistory = function () {
                window.history.back();
            };
            $rootScope.onLocalHost = function () {
                return window.location.host == "bid2win.app";
            };

            $rootScope.punter = $localStorage.punter || {} ;

            var logoutCounter = 0;
            $rootScope.$watch('punter', function (newVal, oldValue) {
                if (!newVal.id && logoutCounter > 3) {
                    $rootScope.logoutPunter()
                }
                logoutCounter ++;
            }) ;

            //sortDate.getCurrentTime();

            //Initialiaze
        }]);
