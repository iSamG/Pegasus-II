angular.module('templates.app', ['public/about/about.tpl.html', 'public/error/error.tpl.html', 'public/login/public_login.tpl.html', 'public/register/public_register.tpl.html']);

angular.module("public/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/about/about.tpl.html",
    "\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <!-- Start Page Banner -->\n" +
    "    <div class=\"page-banner\" style=\"padding:10px 0;\">\n" +
    "        <div class=\"\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-11 col-sm-10\" style=\"padding-left :40px \">\n" +
    "                    <h2>About </h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 hidden\">\n" +
    "                    <ul class=\"breadcrumbs\">\n" +
    "                        <li><a href=\"#/\">Home</a></li>\n" +
    "                        <li>About</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End Page Banner -->\n" +
    "    <div class=\"\">\n" +
    "        <div class=\"page-content\" style=\"padding: 0 50px\" ><!--ng-if=\"onLocalHost()\"-->\n" +
    "\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-xs-12\">\n" +
    "\n" +
    "                    <!-- Classic Heading -->\n" +
    "                    <h4 class=\"classic-title\"><span>{{ app_name }}</span></h4>\n" +
    "\n" +
    "                    <!-- Some Text -->\n" +
    "                    <p class=\"text-justify\">i-bid2win.com (I-Bid2Win) is a service provided by Phunki Media Group. I-Bid2Win is an online, TV, and mobile based bidding auction game targeted at corporate workers, social work groups and associations members, families, students, and individuals between 18-55 years. It was borne out of the realization that most, if not all SMS based competitions, are not interactive enough in terms providing a dynamic offering.</p>\n" +
    "\n" +
    "                    <p class=\"text-justify\">A promotional auction bidding platform, I-Bid2W offers products and services at 70% discount from the recommended retail price of products and services listed. The items are offered to the general public to place bids, with the highest bidder at the end of the auction period paying the auction price to buy the item. The bidding model is not based on incremental bids placed by bidders, but rather each bidder is required to make at least the non-refundable minimum cost per bid.</p>\n" +
    "\n" +
    "                    <p class=\"text-justify\"> A maximum of eight live auctions are selected to run at any given time on the site with the minimum duration per auction pegged at a month. Bidders have the means to top up their bidding wallet using the Mpower payment system. I-Bid2Win allows its subscribers to connect and place bids through the online and mobile site, as well as the Android application which can be downloaded from <a href=\"https://play.google.com/store/apps/details?id=com.pollafrique.ibid2win\">Google's Play Store</a> .</p>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <!-- Divider -->\n" +
    "            <div class=\"hidden hr1\" style=\"margin-bottom:50px;\"></div>\n" +
    "\n" +
    "            <!-- Classic Heading -->\n" +
    "            <h4 class=\"hidden classic-title\"><span>The Team</span></h4>\n" +
    "\n" +
    "            <!-- Start Team Members -->\n" +
    "            <div class=\"hidden row\">\n" +
    "\n" +
    "                <!-- Start Memebr 1 -->\n" +
    "                <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"team-member\">\n" +
    "                        <!-- Memebr Photo, Name & Position -->\n" +
    "                        <div class=\"member-photo\">\n" +
    "                            <img alt=\"\" src=\"images/team/face_1.png\">\n" +
    "                            <div class=\"member-name\">John Doe <span>Developer</span></div>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Words -->\n" +
    "                        <div class=\"member-info\">\n" +
    "                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Social Links -->\n" +
    "                        <div class=\"member-socail\">\n" +
    "                            <a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                            <a class=\"gplus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "                            <a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                            <a class=\"flickr\" href=\"#\"><i class=\"fa fa-flickr\"></i></a>\n" +
    "                            <a class=\"mail\" href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- End Memebr 1 -->\n" +
    "\n" +
    "                <!-- Start Memebr 2 -->\n" +
    "                <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"team-member\">\n" +
    "                        <!-- Memebr Photo, Name & Position -->\n" +
    "                        <div class=\"member-photo\">\n" +
    "                            <img alt=\"\" src=\"images/team/face_2.png\">\n" +
    "                            <div class=\"member-name\">Silly Sally <span>Developer</span></div>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Words -->\n" +
    "                        <div class=\"member-info\">\n" +
    "                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Social Links -->\n" +
    "                        <div class=\"member-socail\">\n" +
    "                            <a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                            <a class=\"gplus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "                            <a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                            <a class=\"flickr\" href=\"#\"><i class=\"fa fa-flickr\"></i></a>\n" +
    "                            <a class=\"mail\" href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- End Memebr 2 -->\n" +
    "\n" +
    "                <!-- Start Memebr 3 -->\n" +
    "                <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"team-member\">\n" +
    "                        <!-- Memebr Photo, Name & Position -->\n" +
    "                        <div class=\"member-photo\">\n" +
    "                            <img alt=\"\" src=\"images/team/face_3.png\">\n" +
    "                            <div class=\"member-name\">Chris John <span>Developer</span></div>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Words -->\n" +
    "                        <div class=\"member-info\">\n" +
    "                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Social Links -->\n" +
    "                        <div class=\"member-socail\">\n" +
    "                            <a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                            <a class=\"gplus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "                            <a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                            <a class=\"flickr\" href=\"#\"><i class=\"fa fa-flickr\"></i></a>\n" +
    "                            <a class=\"mail\" href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- End Memebr 3 -->\n" +
    "\n" +
    "                <!-- Start Memebr 4 -->\n" +
    "                <div class=\"col-md-3 col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"team-member\">\n" +
    "                        <!-- Memebr Photo, Name & Position -->\n" +
    "                        <div class=\"member-photo\">\n" +
    "                            <img alt=\"\" src=\"images/team/face_4.png\">\n" +
    "                            <div class=\"member-name\">Sara John <span>Developer</span></div>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Words -->\n" +
    "                        <div class=\"member-info\">\n" +
    "                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>\n" +
    "                        </div>\n" +
    "                        <!-- Memebr Social Links -->\n" +
    "                        <div class=\"member-socail\">\n" +
    "                            <a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                            <a class=\"gplus\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a>\n" +
    "                            <a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n" +
    "                            <a class=\"flickr\" href=\"#\"><i class=\"fa fa-flickr\"></i></a>\n" +
    "                            <a class=\"mail\" href=\"#\"><i class=\"fa fa-envelope\"></i></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- End Memebr 4 -->\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- End Team Members -->\n" +
    "\n" +
    "            <!-- Divider -->\n" +
    "            <div class=\"hidden hr1\" style=\"margin-bottom:50px;\"></div>\n" +
    "\n" +
    "            <!-- Start Clients Carousel -->\n" +
    "            <div class=\"hidden our-clients\">\n" +
    "\n" +
    "                <!-- Classic Heading -->\n" +
    "                <h4 class=\"classic-title\"><span>Our Happy Clients</span></h4>\n" +
    "\n" +
    "                <div class=\"clients-carousel custom-carousel touch-carousel owl-carousel owl-theme\" data-appeared-items=\"5\" style=\"opacity: 1; display: block;\">\n" +
    "\n" +
    "                    <!-- Client 1 -->\n" +
    "                    <div class=\"owl-wrapper-outer\"><div class=\"owl-wrapper\" style=\"width: 3648px; left: 0px; display: block;\"><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c1.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c2.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c3.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c4.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c5.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c6.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c7.png\" alt=\"\"></a>\n" +
    "                    </div></div><div class=\"owl-item\" style=\"width: 228px;\"><div class=\"client-item item\">\n" +
    "                        <a href=\"#\"><img src=\"images/c8.png\" alt=\"\"></a>\n" +
    "                    </div></div></div></div>\n" +
    "\n" +
    "                    <!-- Client 2 -->\n" +
    "\n" +
    "\n" +
    "                    <!-- Client 3 -->\n" +
    "\n" +
    "\n" +
    "                    <!-- Client 4 -->\n" +
    "\n" +
    "\n" +
    "                    <!-- Client 5 -->\n" +
    "\n" +
    "\n" +
    "                    <!-- Client 6 -->\n" +
    "\n" +
    "\n" +
    "                    <!-- Client 7 -->\n" +
    "\n" +
    "\n" +
    "                    <!-- Client 8 -->\n" +
    "\n" +
    "\n" +
    "                    <div class=\"owl-controls clickable\"><div class=\"owl-buttons\"><div class=\"owl-prev\"><i class=\"fa fa-angle-left\"></i></div><div class=\"owl-next\"><i class=\"fa fa-angle-right\"></i></div></div></div></div>\n" +
    "            </div>\n" +
    "            <!-- End Clients Carousel -->\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("public/error/error.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/error/error.tpl.html",
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"page-content\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"error-page\">\n" +
    "                <h1>404</h1>\n" +
    "                <h3>Page Not Found</h3>\n" +
    "                <p>Oops! Looks like the page you were looking for doesn't exist.</p>\n" +
    "                <div class=\"text-center\"><a href=\"#/\" class=\"btn-system btn-small\">Back To Home</a></div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("public/login/public_login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/login/public_login.tpl.html",
    "<!--<div class=\"page-banner\" style=\"padding:20px 0; background: #f9f9f9;\">-->\n" +
    "<!--<div class=\"\">-->\n" +
    "<!--<div class=\"row\" style=\"margin: 10px !important;\">-->\n" +
    "<!--<div class=\"col-md-6\">-->\n" +
    "<!--<h2>Login</h2>-->\n" +
    "<!--&lt;!&ndash;<p>Sign in page</p>&ndash;&gt;-->\n" +
    "<!--</div>-->\n" +
    "<!--<div class=\"col-md-6\">-->\n" +
    "<!--<ul class=\"breadcrumbs\">-->\n" +
    "<!--<li><a href=\"#/\">Home</a></li>-->\n" +
    "<!--<li>Login</li>-->\n" +
    "<!--</ul>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <div class=\"\">\n" +
    "\n" +
    "        <div class=\"row\" style=\"margin: 10px !important;\">\n" +
    "            <!-- Classic Heading -->\n" +
    "\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h2 class=\"classic-title\"><span>Enter login details below</span></h2>\n" +
    "                <form id=\"login-form\" ng-submit=\"loginPunter()\">\n" +
    "                    <div class=\"row\">\n" +
    "\n" +
    "                        <div class=\"col-sm-6 col-xs-10 center-block \">\n" +
    "\n" +
    "                            <fieldset>\n" +
    "                                <div class=\"alert alert-danger text-center h4\" ng-if=\"loginError\"><i class=\"fa fa-warning\"></i> Invalid login credentials!</div>\n" +
    "                                <div class=\"row\">\n" +
    "                                    <label for=\"username\">Username<span class=\"required\">*</span></label>\n" +
    "                                    <input type=\"text\" id=\"username\" placeholder=\"Your Username\" ng-model=\"punter_login_form.username\" class=\"form-control input-lg\" required=\"\">\n" +
    "                                </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "                                <div class=\"row margin-top\">\n" +
    "                                    <label for=\"password\">Password<span class=\"required\">*</span></label>\n" +
    "\n" +
    "                                    <div class=\" has-feedback\" style=\"display: block\">\n" +
    "                                        <input type=\"password\" id=\"password\" placeholder=\"Your Password\"  ng-model=\"punter_login_form.password\" class=\"form-control input-lg\" required=\"\">\n" +
    "                                        <span class=\"form-control-feedback\" aria-hidden=\"true\" style=\"width: 120px!important;\"><a href=\"\" reset-password=\"\" > Forgot password?</a></span>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div><!-- End .input-group -->\n" +
    "\n" +
    "                                <div class=\"margin-top center-block\">\n" +
    "                                    <div class=\"center-block text-center\">\n" +
    "\n" +
    "                                        <div class=\"input-group center-block\">\n" +
    "                                            <input type=\"checkbox\" ng-model=\"punter_login_form.remember_me_token\">\n" +
    "                                            <span style=\"margin-left: 10px \"><b>Remember me!</b></span>\n" +
    "                                        </div><!-- End .input-group -->\n" +
    "                                    </div><!-- End  col-xs-12-->\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row margin-top\">\n" +
    "\n" +
    "                                    <div class=\"col-xs-12 text-center\">\n" +
    "\n" +
    "                                        <input type=\"submit\" class=\"btn btn-success btn-lg\" value=\"LOG ME IN\">\n" +
    "                                    </div><!-- End .col-md-6 -->\n" +
    "                                </div><!-- End .row -->\n" +
    "\n" +
    "                            </fieldset>\n" +
    "\n" +
    "\n" +
    "                        </div><!-- End .col-md-6 -->\n" +
    "\n" +
    "                    </div><!-- End .row -->\n" +
    "\n" +
    "                    <!--Verify Punter-->\n" +
    "                    <div class=\"row margin-top\">\n" +
    "                        <code class=\"col-xs-6 pointer btn text-success text-center force-custom-font center-block text-center\" verify-punter-modal=\"\"><i class=\"fa fa-key\"></i>  Enter verification code</code>\n" +
    "                    </div><!--End Verify Punter-->\n" +
    "\n" +
    "\n" +
    "                </form>\n" +
    "            </div><!-- End .col-md-12 -->\n" +
    "\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h2 class=\"classic-title\" style=\"\"><span>Login with Social Media Account</span></h2>\n" +
    "\n" +
    "                <div class=\"row\" style=\"margin-top: 45px\">\n" +
    "                    <!---->\n" +
    "                    <!--href=\"/facebook/login\" target=\"_blank\"-->\n" +
    "                    <button class=\"facebook btn btn-lg btn-facebook center-block\"  social-media-login=\"facebook\"><i class=\"fa fa-facebook-official\"></i>   Login with Facebook</button>\n" +
    "                    <div style=\"margin: 60px 0\"></div>\n" +
    "                    <button class=\"btn-foursquare btn-lg btn center-block\" social-media-login=\"foursquare\"><i class=\"fa fa-foursquare\"></i>  Connect with Foursquare</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row margin-90\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <p class=\"text-center h3\"><a ui-sref=\"public_home.register\">Don't have an account? Click here to register</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End content -->\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("public/register/public_register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/register/public_register.tpl.html",
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <div class=\"\">\n" +
    "\n" +
    "        <div class=\"row\" style=\"margin: 10px !important;\">\n" +
    "            <!-- Classic Heading -->\n" +
    "\n" +
    "            <h2 class=\"classic-title\"><span>Fill all required details to register</span></h2>\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <form id=\"register-form\" name=\"punterRegistrationForm\"  novalidate>\n" +
    "                    <!--ng-submit=\"registerPunter(punterRegistrationForm.$valid)\"-->\n" +
    "                    <div class=\"row\">\n" +
    "                        <wizard on-finish=\"registerPunter(punterRegistrationForm.$valid)\" hide-indicators=\"true\">\n" +
    "                            <wz-step title=\"Step 1 of 3\" class=\"nga-default nga-stagger nga-slide-left\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "                              <span ng-include=\"'public/register/public_register_step_1.tpl.html' \"></span>\n" +
    "\n" +
    "                            </wz-step>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                            <!-- Step 2 -->\n" +
    "\n" +
    "                            <wz-step title=\"Step 2 of 3\" class=\"nga-default nga-stagger nga-slide-right\" style=\"overflow: visible !important;\">\n" +
    "\n" +
    "                                <span ng-include=\" 'public/register/public_register_step_2.tpl.html' \"></span>\n" +
    "\n" +
    "                            </wz-step>\n" +
    "\n" +
    "                            <wz-step title=\"Step 3 of 3\" class=\"nga-default nga-stagger nga-slide-right\">\n" +
    "\n" +
    "                                <span ng-include=\" 'public/register/public_register_step_3.tpl.html' \"></span>\n" +
    "\n" +
    "                                <!--<input type=\"submit\"  value=\"Finish now\" />-->\n" +
    "                            </wz-step>\n" +
    "                        </wizard>\n" +
    "                    </div><!-- End .row -->\n" +
    "\n" +
    "                </form>\n" +
    "            </div><!-- End .col-md-12 -->\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row margin-90\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <p class=\"text-center h3\"><a ui-sref=\"public_home.login\">Already have an account? Click here to login</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End content -->\n" +
    "");
}]);
