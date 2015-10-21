angular.module('pegasusApp')
    .run(['$rootScope', '$state', '$stateParams','$localStorage','$sessionStorage','PGConstants', 'sortDate','User',
        function($rootScope, $state, $stateParams ,$localStorage, $sessionStorage, PGConstants,
                 sortDate, User){
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $localStorage.$default({
                authentication: false
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
            });

            $rootScope.$on('$viewContentLoading',function(event){
                //cfpLoadingBar.inc();
                $('.showAfterAngularLoads').show();
            });

            $rootScope.$on('$viewContentLoaded',function(event){
                //cfpLoadingBar.complete();
                $rootScope.pageLoading = false;
                User.checkIfUserIsAuthenticated();

            });


            //Assign defaults to the rootScope
            $rootScope.authentication =  $localStorage.authentication || false;
            $rootScope.app_name = PGConstants.app_name;
            $rootScope.app_url = PGConstants.app_url;
            $rootScope.app_email = PGConstants.app_email;

            $rootScope.goBackInHistory = function () {
                window.history.back();
            };
            $rootScope.onLocalHost = function () {
                return window.location.host != "pegasusrises.com";
            };

            $rootScope.user = $localStorage.user || {} ;

        }]);
