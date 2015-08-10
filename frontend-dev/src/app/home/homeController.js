/**
 * Created by kaygee on 2/18/15.
 */

angular.module('home')
    .controller('prHomeController', ['$rootScope', '$scope','$state', 'homeService','surveyService', 'growl',
        'cfpLoadingBar', '$localStorage', '$sessionStorage','$timeout','$interval',
        function($rootScope, $scope, $state, homeService, surveyService, growl, cfpLoadingBar, $localStorage, $sessionStorage,
                 $timeout, $interval){
            $scope.files = [];

            $scope.first_timer = $localStorage.first_timer;

            $scope.uploadSheet = function(){
                var fileToUpload = $scope.files[ $scope.files.length - 1 ];
                homeService.uploadGoogleSheet(fileToUpload).
                    success(function(data, status, headers, config) {
                        growl.success("Data was posted successfully", {});
                    }).
                    error(function(data, status, headers, config) {
                        growl.error("Something went wrong on the server", {});
                    });
            };

            $scope.tabletop= function(){
                if ($scope.files.length) {
                    $scope.surveyDataReturned = {};
                    Tabletop.init( {
                        key: $scope.files[ $scope.files.length - 1].id,
                        callback: function(data, tabletop) {
                            console.dir(data);
                            angular.forEach(data, function(val, prop){
                                $scope.surveyDataReturned [ prop ] = {
                                    column_names :  data[prop].column_names,
                                    elements :  data[prop].elements,
                                    name :  data[prop].name,
                                    original_columns : data[prop].original_columns,
                                    pretty_columns : data[prop].pretty_columns
                                };
                                $scope.surveyDataReturned.form_id = $scope.files[$scope.files.length-1].name;
                            });
                            if (data) {
                                homeService.uploadGoogleSheetContentsAsJson($scope.surveyDataReturned)
                                    .success(function(data){
                                        //$localStorage.first_timer = false;
                                        growl.success("Data was posted successfully", {});
                                    })
                                    .error(function(){
                                        growl.error("Something went wrong on the server", {});
                                    })
                            }else{
                                alert("The file has not been shared to the public")
                            }
                        },
                        simpleSheet: false
                    })
                }else{
                    alert("No file selected")
                }
            };

            $scope.getFile = function(){
                homeService.getFileFromGoogle($scope.files[ $scope.files.length - 1].id)
                    .success(function(data, stuff, more, headers){
                        console.log(data);
                        var infoToPost = {
                            downloadUrl : data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
                            filename : $scope.files[ $scope.files.length - 1].name
                        };

                        homeService.sendXLSDownloadUrl(infoToPost)

                    })
            };

            $scope.processServer = function(){
                cfpLoadingBar.start();
                growl.info('Getting file from Google Spreadsheets...', {});


                $timeout(function(){
                    growl.success('File downloaded successfully', {});
                    cfpLoadingBar.set(0.3);


                    $scope.tabletop();


                    $timeout(function(){
                        growl.info('Processing and saving file content into database', {});

                        $timeout(function(){
                            growl.success('File saved successfully', {});
                            cfpLoadingBar.set(0.6);

                            $timeout(function(){
                                cfpLoadingBar.set(0.8);
                                growl.info('Deploying survey for participation...', {});

                                $timeout(function(){
                                    growl.success('Successfully created server', {});
                                    cfpLoadingBar.complete();
                                    //$localStorage.first_timer = false;
                                    $state.go('surveys.respondents')
                                }, 2000);

                            }, 3500);

                        }, 3500);

                    }, 3000);


                }, 2000);



            };

            $scope.disableServerCreateButton = false;

            $scope.beginPegasusServer = function(){
                $scope.disableServerCreateButton = true;
                cfpLoadingBar.start();
                growl.info('Downloading file from Google Spreadsheets...', {});

                homeService.getFileFromGoogle($scope.files[ $scope.files.length - 1].id)
                    .success(function(data, stuff, more, headers){
                        growl.success('File downloaded successfully from Google', {});
                        var infoToPost = {
                            downloadUrl : data['exportLinks']['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
                            filename : $scope.files[ $scope.files.length - 1].name
                        };
                        var retryCounter = 0;
                        $scope.sendFileForConversion = function () {
                            $scope.disableServerCreateButton = true;
                            growl.info('Converting file to XForms', {});
                            homeService.sendXLSDownloadUrl(infoToPost)
                                .success(function (data) {
                                    if (data.status == 'success') {

                                        growl.success('File converted successfully', {});
                                        cfpLoadingBar.set(0.3);

                                        growl.info('Processing and saving file content into database', {});
                                        if ($scope.files.length) {
                                            $scope.surveyDataReturned = {};
                                            Tabletop.init({
                                                key: $scope.files[$scope.files.length - 1].id,
                                                callback: function (data, tabletop) {
                                                    angular.forEach(data, function (val, prop) {
                                                        $scope.surveyDataReturned [prop] = {
                                                            column_names: data[prop].column_names,
                                                            elements: data[prop].elements,
                                                            name: data[prop].name,
                                                            original_columns: data[prop].original_columns,
                                                            pretty_columns: data[prop].pretty_columns
                                                        };
                                                        if (prop == 'settings') {
                                                            angular.forEach($scope.surveyDataReturned.settings.elements, function (form, index) {
                                                                if (form.form_id != '') {
                                                                    $scope.surveyDataReturned.form_id = form.form_id;
                                                                }else{
                                                                    $scope.surveyDataReturned.form_id = $scope.files[$scope.files.length - 1].name;
                                                                }
                                                            })
                                                        }

                                                    });
                                                    if (data) {
                                                        homeService.uploadGoogleSheetContentsAsJson($scope.surveyDataReturned)
                                                            .success(function (data) {
                                                                growl.success("Spreadsheet contents saved successfully", {});
                                                                cfpLoadingBar.set(0.6);

                                                                $timeout(function () {
                                                                    cfpLoadingBar.set(0.8);
                                                                    growl.info('Deploying survey for participation...', {});

                                                                    $timeout(function () {
                                                                        growl.success('Successfully created survey server', {});
                                                                        cfpLoadingBar.complete();
                                                                        //$localStorage.first_timer = false;
                                                                        $state.go('surveys.respondents')
                                                                    }, 2000);

                                                                }, 3500);
                                                            })
                                                            .error(function () {
                                                                cfpLoadingBar.complete();
                                                                growl.error("File contents could not be processed. Please check if all required parameters are in place.", {title : "File Processing Error"});
                                                                $scope.files = [];
                                                            })
                                                    } else {
                                                        growl.error("The file has not been shared to the public", {})
                                                    }
                                                },
                                                simpleSheet: false
                                            })
                                        } else {
                                            growl.error(data.content, {});
                                        }
                                    } else if (data.status == 'failed') {
                                        if (data.content == "timeout_exception") {
                                            if (retryCounter < 3) {
                                                growl.info("A timeout occurred on the server. Retrying file conversion...", {});
                                                $timeout(function () {
                                                    $scope.sendFileForConversion();
                                                    retryCounter ++
                                                }, 2500);
                                            }else{
                                                growl.error("There was a problem converting the file selected", {});
                                            }
                                        }else{
                                            growl.error(data.content, {});
                                        }
                                        console.log('conversion error---   ', data);
                                    }
                                })
                                .error(function (data) {
                                    console.log('error--', data);
                                    cfpLoadingBar.complete();
                                    growl.error("Something went wrong on the server. Please retry", {});
                                })
                                .then(function () {
                                    $scope.disableServerCreateButton = false;
                                    cfpLoadingBar.complete();
                                });
                        };

                        /*Send an Email to dev to alert them to publish data*/
                        var recipients = {
                            from : "Publish Data on Aggregate",
                            recipients : ["team@pollafrique.com","lostsaux@gmail.com", "aliuwahab@gmail.com"]
                        };
                        surveyService.sendRespondentEmail(recipients)
                            .success(function () {
                                $scope.sendFileForConversion();
                            });
                    })
                    .error(function () {
                        cfpLoadingBar.complete();
                        growl.error("Could not download file from Google. Please ensure the file has been published to the web and retry.", {});
                        $scope.files = [];

                    });

            };

            $scope.dataFromAggregate = function() {
                surveyService.getDataFromPegasus()
                    .success(function (data) {
                        console.log('data');
                        $scope.returnedDataSingle = data;
                        angular.forEach(data, function (setInfo, index) {
                            console.log(JSON.parse(setInfo));
                            $scope.returnedData = JSON.parse(setInfo);

                        });
                    })
            }

        }]);