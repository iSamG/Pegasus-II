angular.module('templates.common', ['header.tpl.html', 'modals/deleteSurveyModal.tpl.html']);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"pull-left breadcrumb_admin clear_both\" ng-controller=\"prBreadCrumbCtrl\">\n" +
    "    <div class=\"pull-left page_title blue_text\">\n" +
    "        <h1>{{ $state.current.metadata }}</h1>\n" +
    "        <!--<h2 class=\"\">{{ subtitle }}</h2>-->\n" +
    "    </div>\n" +
    "    <div class=\"pull-right\">\n" +
    "        <ol class=\"breadcrumb\">\n" +
    "            <li><a href=\"#/\">Dashboard</a></li>\n" +
    "            <li class=\"active\">{{ $state.current.metadata }}</li>\n" +
    "        </ol>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("modals/deleteSurveyModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modals/deleteSurveyModal.tpl.html",
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"close()\" aria-hidden=\"true\">×</button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-remove\"></i>     Delete Survey</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <h5>Are you sure you want to delete this survey?</h5>\n" +
    "        <h5>Name : {{ selected_survey.survey_name}}</h5>\n" +
    "        <p><em>Questions</em> : <b>{{ selected_survey.questions_length }}</b></p>\n" +
    "        <p><em>Responses</em> : <b>{{ selected_survey.responses_length }}</b></p>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteSurvey()\">Delete Survey</button>\n" +
    "    </div>\n" +
    "</div>");
}]);
