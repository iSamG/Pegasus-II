angular.module('pegasusApp.directives')
    .directive('resetPassword', ['SweetAlert','Punter','$q','$state','B2WAuth', function (SweetAlert, Punter, $q, $state, B2WAuth) {

        return {

            restrict : 'EA',
            scope : true,
            link : function (scope, elem, attr) {

                scope.verify = function (inputValue) {
                    var defer = $q.defer();
                    var data_to_post = {
                        password_reset_email : inputValue
                    };
                    Punter.sendPasswordResetToken(data_to_post)
                        .success(function (successData) {
                            defer.resolve(true);
                        })
                        .error(function (data) {
                            defer.reject("An error occurred. Please refresh the page and try again.");
                        });

                    return defer.promise;
                };


                /*Begin punter verify modal*/
                elem.bind('click', function () {
                    {
                        SweetAlert.swal({
                                title: "Reset Password",
                                text: "Enter the email you created the account with.",
                                type: "input",
                                animation: "slide-from-top",
                                allowEscapeKey : true,
                                allowOutsideClick : true,

                                confirmButtonText: "Reset",
                                confirmButtonColor: "#7bae23",
                                closeOnConfirm: false,

                                showCancelButton: true,
                                cancelButtonText: "Close, not now.",
                                closeButtonColor: "#C72907",
                                closeOnCancel: true
                            },
                            function(inputValue){
                                if (inputValue) {
                                    scope.verify(inputValue).then(
                                        /*success callback*/
                                        function () {
                                            SweetAlert.swal({
                                                title: "Password Reset",
                                                text: "Follow the link sent to <code>" + inputValue + "</code> to reset your password",
                                                type : "success",
                                                html : true,
                                                allowEscapeKey : true,
                                                allowOutsideClick : true,

                                                confirmButtonText: "Close",
                                                confirmButtonColor: "#6892C7",
                                                closeOnConfirm: true,

                                                showCancelButton: false,
                                                cancelButtonText: "No thanks",
                                                closeButtonColor: "#C72907",
                                                closeOnCancel: true
                                            });
                                            //    function (isConfirm) {
                                            //    if (isConfirm) {
                                            //        $state.go('public_home.topup')
                                            //    } else {
                                            //        SweetAlert.swal("Notice", "You will be required to top up your bid wallet to place bids.", 'info');
                                            //    }
                                            //})
                                        },
                                        /*error callback*/
                                        function(message){
                                            SweetAlert.swal("Error", message || "Server error occurred", "error");
                                        });
                                }else{
                                    swal.showInputError("You need to type a valid email address!");
                                }

                            });
                    }
                });
                /*End Punter Verify Modal*/
            },
            template : '',
            replace : false

        };





    }]);