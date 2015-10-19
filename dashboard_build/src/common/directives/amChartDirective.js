/**
 * Created by Kaygee on 07/03/2015.
 */



angular.module('directives', []);


angular.module('directives')
    .directive('amChart', [function(){
        return {

            replace: true,

            scope: {
                chartData: '=',
                chartType : '@',
                titleField : '@',
                valueField : '@'
            },

            controller : function ($scope) {
                $scope.$watch('chartData', function (newVal, oldVal) {
                    $scope.doChart();
                })

            },

            link : function (scope, elem, attrs) {
                var chart, graph;
                scope.doChart = function(){
                    if (!scope.chartData || !scope.chartData.length) {
                        $('#barChartDiv').hide();
                        $('#pieChartDiv').hide();
                        $('#columnChartDiv').hide();
                        return;
                    }
                    switch (scope.chartType) {
                        case 'bar' :
                            chart = new AmCharts.AmSerialChart();
                            chart.dataProvider = scope.chartData;
                            chart.categoryField = scope.titleField || "option";
                            chart.angle = 30;
                            chart.depth3D = 15;
                            chart.creditsPosition = "top-right";
                            chart.rotate = true;


                            graph = new AmCharts.AmGraph();
                            graph.valueField = scope.valueField || "response";
                            graph.type = "column";
                            graph.balloonText = "[[category]]: <b>[[value]]</b>";
                            graph.fillAlphas = 0.8;
                            graph.colorField = "color";
                            graph.lineAlpha = 0;

                            chart.addGraph(graph);
                            $('#barChartDiv').show();
                            chart.write('barChartDiv');
                            break;

                        case 'pie' :
                            // PIE CHART
                            chart = new AmCharts.AmPieChart();
                            chart.dataProvider = scope.chartData;
                            chart.titleField = scope.titleField || "option";
                            chart.valueField = scope.valueField || "response";
                            chart.outlineColor = "#FFFFFF";
                            chart.outlineAlpha = 0.8;
                            chart.outlineThickness = 2;
                            chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
                            // this makes the chart 3D
                            chart.depth3D = 15;
                            chart.angle = 30;
                            chart.creditsPosition = "top-right";

                            // WRITE
                            $('#pieChartDiv').show();
                            chart.write("pieChartDiv");
                            break;

                        case 'column' :
                            // SERIAL CHART
                            chart = new AmCharts.AmSerialChart();
                            chart.dataProvider =  scope.chartData;
                            chart.categoryField = scope.titleField || "option";
                            // the following two lines makes chart 3D
                            chart.depth3D = 20;
                            chart.angle = 30;

                            // AXES
                            // category
                            var categoryAxis = chart.categoryAxis;
                            categoryAxis.labelRotation = 90;
                            categoryAxis.dashLength = 5;
                            categoryAxis.gridPosition = "start";

                            // value
                            var valueAxis = new AmCharts.ValueAxis();
                            valueAxis.title = "Visitors";
                            valueAxis.dashLength = 5;
                            chart.addValueAxis(valueAxis);

                            // GRAPH
                            graph = new AmCharts.AmGraph();
                            graph.valueField = scope.valueField || "response";
                            graph.colorField = "color";
                            graph.balloonText = "<span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                            graph.type = "column";
                            graph.lineAlpha = 0;
                            graph.fillAlphas = 1;
                            chart.addGraph(graph);

                            // CURSOR
                            var chartCursor = new AmCharts.ChartCursor();
                            chartCursor.cursorAlpha = 0;
                            chartCursor.zoomable = false;
                            chartCursor.categoryBalloonEnabled = false;
                            chart.addChartCursor(chartCursor);

                            chart.creditsPosition = "top-right";


                            // WRITE
                            $('#columnChartDiv').show();
                            chart.write("columnChartDiv");

                            break;


                    }
                };
            },

            template: function (template, scope) {
                if(scope.chartType == 'bar'){
                    return '<div id="barChartDiv" style="width: 100%; height: 400px;"></div>'
                }else if(scope.chartType == 'pie'){
                    return '<div id="pieChartDiv" style="width: 100%; height: 400px;"></div>'
                }else {
                    return '<div id="columnChartDiv" style="width: 100%; height: 400px;"></div>'
                }
            }
        }
    }]);