/* pegasusrises - v2.0 - 2016-01-13
 * pegasusrises.com
 * Copyright (c) 2016 BBG Digital Innovation Lab;
 * Licensed MIT
 */

angular.module('templates.common', ['modals/loginModal.tpl.html', 'modals/signupModal.tpl.html']);

angular.module("modals/loginModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modals/loginModal.tpl.html",
    "<div class=\"modal-content\" ng-controller=\"PGPublicLoginController\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\"><i class=\"fa fa-times\"></i></button>\n" +
    "        <h4 class=\"modal-title\"><i class=\"fa fa-unlock\"></i>  Login</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <form class=\"form-horizontal\" role=\"form\" ng-submit=\"loginUser()\">\n" +
    "                    <fieldset>\n" +
    "\n" +
    "                        <!--Username-->\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <input type=\"text\" id=\"username\" placeholder=\"Username\"\n" +
    "                                       ng-model=\"user_login_form.username\" class=\"form-control input-sm\" required=\"\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--Password-->\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <div class=\" has-feedback\" style=\"display: block\">\n" +
    "                                    <input type=\"password\" id=\"password\" placeholder=\"Password\"  ng-model=\"user_login_form.password\" class=\"form-control input-sm\" required=\"\">\n" +
    "                                    <!--<span class=\"form-control-feedback\" aria-hidden=\"true\" style=\"width: 120px!important;\"><a href=\"\" reset-password=\"\" > Forgot password?</a></span>-->\n" +
    "                                </div>\n" +
    "                                <p class=\"help-block text-center\" reset-password=\"\" ng-click=\"cancel()\" ><a href=\"\">I forgot my password.</a></p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row margin-top-15\">\n" +
    "                            <!--<div class=\"col-xs-12 text-center\">-->\n" +
    "                                <button type=\"submit\"  class=\"btn btn-warning col-xs-10 center-block\" ng-disabled=\"submittingLoginForm\" >\n" +
    "                                    <span ng-hide=\"submittingLoginForm\">LOG ME IN</span>\n" +
    "                                    <span ng-show=\"submittingLoginForm\"><i class=\"fa fa-spinner fa-spin\"></i>  Processing Log In...</span>\n" +
    "                                </button>\n" +
    "                            <!--</div>&lt;!&ndash; End .col-md-6 &ndash;&gt;-->\n" +
    "                        </div><!-- End .row -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    </fieldset>\n" +
    "                </form>\n" +
    "            </div><!-- /.col-lg-12 -->\n" +
    "        </div><!-- /.row -->\n" +
    "\n" +
    "        <hr class=\"hr1hidden\">\n" +
    "\n" +
    "        <div class=\"row hidden\" style=\"margin-top: 20px\">\n" +
    "            <!---->\n" +
    "            <!--href=\"/facebook/login\" target=\"_blank\"-->\n" +
    "            <button class=\"facebook btn btn-sm btn-facebook center-block col-xs-10\"  social-media-login=\"facebook\"><i class=\"fa fa-facebook-official\"></i>   Login with Facebook</button>\n" +
    "            <div style=\"margin: 15px 0\"></div>\n" +
    "            <button class=\"btn-foursquare btn-sm btn center-block col-xs-10\" social-media-login=\"foursquare\"><i class=\"fa fa-foursquare\"></i>  Login with Foursquare</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer hidden\">\n" +
    "        <button class=\"btn btn-default pull-left\" ng-click=\"cancel()\">Cancel</button>\n" +
    "        <button  class=\"btn btn-primary\">Save</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("modals/signupModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modals/signupModal.tpl.html",
    "<div class=\"modal-content\" ng-controller=\"PGPublicSignUpModalController\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\"><i class=\"fa fa-times\"></i></button>\n" +
    "        <h4 class=\"modal-title\"><i class=\"fa fa-lock\"></i>  Sign Up</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <form class=\"form-horizontal\" name=\"userRegistrationForm\" role=\"form\" ng-submit=\"registerUser(userRegistrationForm.$valid)\">\n" +
    "                    <fieldset>\n" +
    "\n" +
    "                        <!--Email-->\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error  mag-bottom-5' : submittingRegistrationForm && userRegistrationForm.email.$error.email || validation.email || submittingRegistrationForm && userRegistrationForm.email.$error.required }\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <input  type=\"email\" id=\"email\" placeholder=\"Email\" ng-model=\"user_register_form.email\" name=\"email\"\n" +
    "                                        ng-pattern=\"/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4}/\" class=\"form-control\" required=\"\">\n" +
    "                                <span class=\"help-block text-left mag-bottom-25\" ng-show=\"submittingRegistrationForm && userRegistrationForm.email.$error.email\">Email address is not valid</span>\n" +
    "                                <span class=\"help-block text-left mag-bottom-25\" ng-show=\"validation.email\">{{ validation.email }}</span>\n" +
    "                            </div>\n" +
    "                        </div><!-- End .input-group -->\n" +
    "\n" +
    "                        <!--Username-->\n" +
    "                        <div class=\"form-group \" ng-class=\"{'has-error  mag-bottom-5' : validation.username || submittingRegistrationForm && userRegistrationForm.username.$error.required }\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <input type=\"text\" id=\"username\" placeholder=\"Username\" name=\"username\"\n" +
    "                                       ng-minlength=\"4\"\n" +
    "                                       minlength=\"4\"\n" +
    "                                       ng-model=\"user_register_form.username\" class=\"form-control \" required=\"\">\n" +
    "                                <span class=\"help-block text-left mag-bottom-25\" ng-show=\"validation.username\">{{validation.username}}</span>\n" +
    "                            </div>\n" +
    "                        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        <!--Phone number-->\n" +
    "                        <div class=\"form-group \" ng-class=\"{'has-error  mag-bottom-5' : validation.phone_number || submittingRegistrationForm && userRegistrationForm.phone_number.$error.required }\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <input type=\"text\" name=\"phone_number\" id=\"phone_number\"\n" +
    "                                       ng-maxlength=\"13\" maxlength=\"13\"\n" +
    "                                       ng-minlength=\"10\" minlength=\"10\"\n" +
    "                                       placeholder=\"Phone Number\" ng-model=\"user_register_form.phone_number\"  class=\"form-control\" required=\"\">\n" +
    "                                <span class=\"help-block text-left mag-bottom-25\" ng-show=\"submittingRegistrationForm &&  userRegistrationForm.phone_number.$error.required\">Please enter a valid phone number starting with +233, without the '0'.</span>\n" +
    "                                <span class=\"help-block text-left mag-bottom-25\" ng-show=\"validation.phone_number\">{{validation.phone_number}}</span>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "                        <!--Password-->\n" +
    "                        <div class=\"form-group \" ng-class=\"{'has-error  mag-bottom-5' : validation.password || submittingRegistrationForm && userRegistrationForm.password.$error.required }\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <input type=\"password\" id=\"password\" placeholder=\"Password \" name=\"password\"\n" +
    "                                       minlength=\"6\"\n" +
    "                                       ng-minlength=\"6\"\n" +
    "                                       ng-model=\"user_register_form.password\" class=\"form-control \" required=\"\">\n" +
    "                                <span class=\"help-block text-left mag-bottom-25\" ng-show=\"validation.password\">{{validation.password}}</span>\n" +
    "                            </div>\n" +
    "                        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "                        <!--<div class=\"form-group\" ng-class=\"{'has-error  mag-bottom-5' : validation.date_of_birth || submittingRegistrationForm && userRegistrationForm.date_of_birth.$error.required }\">-->\n" +
    "                            <!--&lt;!&ndash;<label for=\"date_of_birth\">Date of Birth<span class=\"required\">*</span></label>&ndash;&gt;-->\n" +
    "                            <!--<div class=\"col-sm-12\">-->\n" +
    "                                <!--<input id=\"date_of_birth\" type=\"text\"-->\n" +
    "                                       <!--placeholder=\"Your date of birth\"-->\n" +
    "                                       <!--name=\"date_of_birth\" ng-model=\"user_register_form.date_of_birth\" class=\"form-control datepicker\"-->\n" +
    "                                       <!--ng-init=\"statePickADate()\" data-value=\"{{user_register_form.date_of_birth}}\">-->\n" +
    "                            <!--<span class=\"help-block text-left mag-bottom-25\" ng-show=\"validation.date_of_birth\">{{validation.date_of_birth}}</span>-->\n" +
    "                            <!--</div>-->\n" +
    "                        <!--</div>&lt;!&ndash; End .input-group &ndash;&gt;-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        <div class=\"text-center col-sm-12\">\n" +
    "                            <div class=\"custom-checkbox\">\n" +
    "                                <!--<input id=\"agree_to_terms\" type=\"checkbox\" name=\"terms_and_conditions\" required=\"\"-->\n" +
    "                                <!--ng-model=\"user_register_form.agree_to_terms\"> <span class=\"checbox-container\">-->\n" +
    "                                <!--</span>-->\n" +
    "                                <!--I wish to subscribe to the Bid2Win newsletter.-->\n" +
    "                                <!--<span style=\"margin-left: 15px \">I have read and agree to the <a ui-sref=\"public_home.privacy_policy\">Privacy Policy</a>.</span>-->\n" +
    "                                <span>By clicking \"SIGN ME UP\", you agree to our\n" +
    "                                    <a ui-sref=\"public_home.privacy_policy\" ng-click=\"cancel()\">Privacy Policy</a>\n" +
    "                                    and\n" +
    "                                    <a ui-sref=\"public_home.terms_conditions\" ng-click=\"cancel()\">Terms and Conditions</a>\n" +
    "                                </span>\n" +
    "                            </div><!-- End .input-group -->\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row margin-top-15\">\n" +
    "                            <!--<div class=\"col-xs-12 text-center\">-->\n" +
    "                            <button type=\"submit\"  class=\"btn btn-success col-xs-10 center-block\" ng-disabled=\"submittingRegistrationFormLoader\" >\n" +
    "                                <span ng-hide=\"submittingRegistrationFormLoader\">SIGN ME UP</span>\n" +
    "                                <span ng-show=\"submittingRegistrationFormLoader\"><i class=\"fa fa-spinner fa-spin\"></i>  Processing Sign Up...</span>\n" +
    "                            </button>\n" +
    "                            <!--</div>&lt;!&ndash; End .col-md-6 &ndash;&gt;-->\n" +
    "                        </div><!-- End .row -->\n" +
    "\n" +
    "                    </fieldset>\n" +
    "                </form>\n" +
    "            </div><!-- /.col-lg-12 -->\n" +
    "        </div><!-- /.row -->\n" +
    "\n" +
    "        <hr class=\"hr1 hidden\">\n" +
    "\n" +
    "        <div class=\"row hidden\" style=\"margin-top: 20px\">\n" +
    "            <!---->\n" +
    "            <!--href=\"/facebook/login\" target=\"_blank\"-->\n" +
    "            <button class=\"facebook btn btn-sm btn-facebook center-block col-xs-10\"  social-media-login=\"facebook\"><i class=\"fa fa-facebook-official\"></i>   Register with Facebook</button>\n" +
    "            <div style=\"margin: 15px 0\"></div>\n" +
    "            <button class=\"btn-foursquare btn-sm btn center-block col-xs-10\" social-media-login=\"foursquare\"><i class=\"fa fa-foursquare\"></i>  Register with Foursquare</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer hidden\">\n" +
    "        <button class=\"btn btn-default pull-left\" ng-click=\"cancel()\">Cancel</button>\n" +
    "        <button  class=\"btn btn-primary\">Save</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
