angular.module('templates.app', ['public/about/about.tpl.html', 'public/account_confirmation/public_account_confirmation.tpl.html', 'public/auction_select/auction_select.tpl.html', 'public/auction_select/auction_select_left_partial.tpl.html', 'public/auction_select/auction_select_middle_partial.tpl.html', 'public/auction_select/auction_select_right_partial.tpl.html', 'public/contact/contact.tpl.html', 'public/error/error.tpl.html', 'public/home/auction-item.tpl.html', 'public/home/public_home.tpl.html', 'public/login/public_login.tpl.html', 'public/policy/privacy_policy.tpl.html', 'public/policy/terms_conditions.tpl.html', 'public/profile/my_info.tpl.html', 'public/profile/public_profile.tpl.html', 'public/profile/punter_auctions.tpl.html', 'public/profile/punter_settings.tpl.html', 'public/profile/punter_wallet.tpl.html', 'public/register/public_register.tpl.html', 'public/register/public_register_step_1.tpl.html', 'public/register/public_register_step_2.tpl.html', 'public/register/public_register_step_3.tpl.html', 'public/topup/public_topup.tpl.html']);

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

angular.module("public/account_confirmation/public_account_confirmation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/account_confirmation/public_account_confirmation.tpl.html",
    "<!--<div class=\"page-banner\" style=\"padding:20px 0; background: #f9f9f9;\">-->\n" +
    "<!--<div class=\"\">-->\n" +
    "<!--<div class=\"row\" style=\"margin: 10px !important;\">-->\n" +
    "<!--<div class=\"col-md-6\">-->\n" +
    "<!--<h2>Verify Code</h2>-->\n" +
    "<!--&lt;!&ndash;<p>Sign in page</p>&ndash;&gt;-->\n" +
    "<!--</div>-->\n" +
    "<!--<div class=\"col-md-6\">-->\n" +
    "<!--<ul class=\"breadcrumbs\">-->\n" +
    "<!--<li><a href=\"#/\">Home</a></li>-->\n" +
    "<!--<li>Account Confirmation</li>-->\n" +
    "<!--</ul>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <h2 class=\"classic-title\"><span>Enter verification code that was sent to you</span></h2>\n" +
    "\n" +
    "    <div class=\"col-md-4 col-xs-12 center-block\">\n" +
    "        <form id=\"login-form\" ng-submit=\"verifyCode()\">\n" +
    "            <div class=\"row center\">\n" +
    "\n" +
    "                <div class=\"col-xs-12\">\n" +
    "\n" +
    "                    <fieldset>\n" +
    "                        <div class=\"alert alert-danger text-center h4\" ng-if=\"codeError\"><i class=\"fa fa-warning\"></i> Invalid verification code!</div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <label for=\"code\">Verification Code<span class=\"required\">*</span></label>\n" +
    "                            <input type=\"text\" id=\"code\" placeholder=\"Your verification code\" ng-model=\"code\" class=\"form-control\" required=\"\">\n" +
    "                        </div><!-- End .input-group -->\n" +
    "                        <!--<div class=\"row margin-top\">-->\n" +
    "                        <!--<label for=\"password\">Password<span class=\"required\">*</span></label>-->\n" +
    "                        <!--<input type=\"password\" id=\"password\" placeholder=\"Your Password\"  ng-model=\"punter_login_form.password\" class=\"form-control\" required=\"\">-->\n" +
    "                        <!--</div>&lt;!&ndash; End .input-group &ndash;&gt;-->\n" +
    "\n" +
    "                        <div class=\"row margin-top\">\n" +
    "                            <div class=\"col-md-8 col-sm-8 col-xs-12\">\n" +
    "\n" +
    "                                <div class=\"pull-left\">\n" +
    "                                    <b><a href=\"\" ng-click=\"resendCode()\"> Resend Verification Code</a></b>\n" +
    "                                </div><!-- End .input-group -->\n" +
    "                            </div><!-- End  ol-md-6 col-sm-6 col-xs-12-->\n" +
    "\n" +
    "\n" +
    "                            <div class=\"col-md-4 col-sm-4 col-xs-12\">\n" +
    "\n" +
    "                                <input type=\"submit\" class=\"btn btn-success pull-right btn-lg\" value=\"VERIFY ME\">\n" +
    "                            </div><!-- End .col-md-6 -->\n" +
    "                        </div><!-- End .row -->\n" +
    "\n" +
    "                    </fieldset>\n" +
    "\n" +
    "\n" +
    "                </div><!-- End .col-md-6 -->\n" +
    "\n" +
    "            </div><!-- End .row -->\n" +
    "\n" +
    "            <!--&lt;!&ndash;Verify Punter&ndash;&gt;-->\n" +
    "            <!--<div class=\"row\">-->\n" +
    "            <!--<code class=\"col-sm-4 col-sm-offset-4 col-xs-12 pointer btn text-success text-center force-custom-font\" ng-click=\"verifyPunterCode()\"><i class=\"fa fa-key\"></i>   I already have an account. Verify Me!</code>-->\n" +
    "            <!--</div>&lt;!&ndash;End Verify Punter&ndash;&gt;-->\n" +
    "\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row margin-90\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <p class=\"text-center h3\"><a ui-sref=\"public_home.register\">Don't have an account? Click here to register</a></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- End content -->\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("public/auction_select/auction_select.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/auction_select/auction_select.tpl.html",
    "<!--<div class=\"page-banner\">-->\n" +
    "    <!--<div class=\"\">-->\n" +
    "        <!--<div class=\"row\" style=\"margin: 10px !important;\" >-->\n" +
    "            <!--<div class=\"col-md-6\">-->\n" +
    "                <!--<h2>Auction Selected</h2>-->\n" +
    "            <!--</div>-->\n" +
    "            <!--<div class=\"col-md-6\">-->\n" +
    "                <!--<ul class=\"breadcrumbs\">-->\n" +
    "                    <!--<li><a href=\"#/\">Home</a></li>-->\n" +
    "                    <!--<li>Auction Selected</li>-->\n" +
    "                <!--</ul>-->\n" +
    "            <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px; padding-top: 25px\">\n" +
    "    <div class=\"\">\n" +
    "        <div class=\"row\" style=\"margin: 10px !important;\">\n" +
    "\n" +
    "            <h2 class=\"product-name classic-title\"><span ng-bind=\"selected_auction.item.item_name\"></span></h2>\n" +
    "\n" +
    "            <!--Left column-->\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\" ng-include=\" 'public/auction_select/auction_select_left_partial.tpl.html' \">\n" +
    "\n" +
    "            </div>\n" +
    "            <!--End left column-->\n" +
    "\n" +
    "\n" +
    "            <!-- Middle column -->\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\" style=\"margin-bottom: 15px\" ng-include=\" 'public/auction_select/auction_select_middle_partial.tpl.html' \">\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- End Middle column -->\n" +
    "\n" +
    "\n" +
    "            <!-- Right column -->\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\" ng-include=\" 'public/auction_select/auction_select_right_partial.tpl.html' \">\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- End Right column -->\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/auction_select/auction_select_left_partial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/auction_select/auction_select_left_partial.tpl.html",
    "\n" +
    "\n" +
    "<!--Carousel-->\n" +
    "<div id=\"main-slide\" class=\"carousel slide\" data-ride=\"carousel\" style=\"min-height: 270px\">\n" +
    "\n" +
    "    <!-- Indicators -->\n" +
    "    <ol class=\"carousel-indicators\">\n" +
    "        <li data-target=\"#main-slide\" data-slide-to=\"{{image_indicator}}\" ng-class=\"{'active' : $index == 0}\"\n" +
    "            class=\"pointer\" ng-repeat=\"image_indicator in selected_auction.gallery_images_indicators\"></li>\n" +
    "    </ol><!--/ Indicators end-->\n" +
    "\n" +
    "    <!-- Carousel inner -->\n" +
    "    <div class=\"carousel-inner\">\n" +
    "        <!--<div class=\"item  active\">-->\n" +
    "            <!--<img class=\"img-responsive\" src=\"/punters/assets/images/products/big-phone3.jpg\" alt=\"slider\" width=\"250px\" style=\"max-width: 250px\">-->\n" +
    "        <!--</div>&lt;!&ndash;/ Carousel item end &ndash;&gt;-->\n" +
    "        <div class=\"item\" ng-repeat=\"image in selected_auction.gallery_images\" ng-class=\"{'active' : $index == 0}\">\n" +
    "            <img class=\"img-responsive\" ng-src=\"{{image }}\" alt=\"{{selected_auction.item.item_name }}\" width=\"250px\" style=\"max-width: 250px\">\n" +
    "        </div><!--/ Carousel item end -->\n" +
    "    </div><!-- Carousel inner end-->\n" +
    "\n" +
    "    <!--&lt;!&ndash; Controls &ndash;&gt;#main-slide-->\n" +
    "    <a class=\"left carousel-control\" href=\"\" data-target=\"#main-slide\" data-slide=\"prev\">\n" +
    "        <span><i class=\"fa fa-angle-left\"></i></span>\n" +
    "    </a>\n" +
    "    <a class=\"right carousel-control\" href=\"\" data-target=\"#main-slide\" data-slide=\"next\">\n" +
    "        <span><i class=\"fa fa-angle-right\"></i></span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "<!--Carousel End-->\n" +
    "\n" +
    "<!--Start of prices display-->\n" +
    "<div class=\"\">\n" +
    "    <div class=\"col-xs-12 col-no-padding\">\n" +
    "        <div class=\"\" title=\"Recommended Retail Price\">\n" +
    "            <span  class=\"col-xs-6 retail-price text-left\">Retail Price</span>\n" +
    "            <span  class=\"col-xs-6 retail-price text-right\">-&nbsp;&nbsp;{{ selected_auction.auction_retail_price| currency : 'GHc '  :  2}}</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-no-padding\">\n" +
    "        <div class=\"\" title=\"Auction Price\">\n" +
    "            <span  class=\"col-xs-6 auction-price text-left\">Auction Price</span>\n" +
    "            <span  class=\"col-xs-6 auction-price text-right\">-&nbsp;&nbsp;{{ selected_auction.auction_price | currency : 'GHc '  :  2}}</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--End of Prices display-->\n" +
    "\n" +
    "<div class=\"clearfix\"></div>\n" +
    "\n" +
    "<div class=\"panel-group\" id=\"accordion\" style=\"margin-top: 12px\">\n" +
    "\n" +
    "    <!-- Start description -->\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <!-- Toggle Heading -->\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <span class=\"panel-title\">\n" +
    "                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"\" data-target=\"#description\" class=\"\">\n" +
    "                    <i class=\"fa fa-angle-up control-icon\"></i>\n" +
    "                    <i class=\"fa fa-newspaper-o\"></i>  Description\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <!-- Toggle Content -->\n" +
    "        <div id=\"description\" class=\"panel-collapse collapse in\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                {{ selected_auction.item.item_description || \"No description available\" }}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End description -->\n" +
    "\n" +
    "    <!-- Start info -->\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <!-- Toggle Heading -->\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <span class=\"panel-title\">\n" +
    "                <a data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#info\" href=\"\" class=\"collapsed\">\n" +
    "                    <i class=\"fa fa-angle-up control-icon\"></i>\n" +
    "                    <i class=\"fa fa-list-alt\"></i> Info\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <!-- Toggle Content -->\n" +
    "        <div id=\"info\" class=\"panel-collapse collapse\" style=\"height: 0px;\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                {{ selected_auction.auction_description || \"No statistics available\" }}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End info -->\n" +
    "\n" +
    "    <!-- Start reviews -->\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <!-- Toggle Heading -->\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <span class=\"panel-title\">\n" +
    "                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"\" data-target=\"#reviews\" class=\"collapsed\">\n" +
    "                    <i class=\"fa fa-angle-up control-icon\"></i>\n" +
    "                    <i class=\"fa fa-comments-o\"></i> Reviews\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <!-- Toggle Content -->\n" +
    "        <div id=\"reviews\" class=\"panel-collapse collapse\" style=\"height: 0px;\">\n" +
    "            <div class=\"panel-body\">\n" +
    "                {{ selected_auction.auction_reviews || \"No reviews available\" }}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End reviews -->\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/auction_select/auction_select_middle_partial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/auction_select/auction_select_middle_partial.tpl.html",
    "<div class=\" margin-60\">\n" +
    "    <table class=\"table table-responsive h5\">\n" +
    "        <tr class=\"h5 text-warning\">\n" +
    "            <td >Auction Code </td>\n" +
    "            <td >{{ selected_auction.auction_code || '0000' }}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td >Start Date </td>\n" +
    "            <td>{{ selected_auction.auction_start_date |  amDateFormat:' Do MMM, YYYY'  }}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td>End Date </td>\n" +
    "            <td>{{ selected_auction.auction_end_date |  amDateFormat:' Do MMM, YYYY'  }}</td>\n" +
    "\n" +
    "        </tr>\n" +
    "        <tr class=\"text-primary\">\n" +
    "            <td >Cost Per Bid</td>\n" +
    "            <td>{{ selected_auction.auction_allowed_bid_amount }}&nbsp;&nbsp;bcs</td>\n" +
    "        </tr>\n" +
    "        <tr class=\"text-danger\">\n" +
    "            <td >Average bids to win</td>\n" +
    "            <td>{{ averageBidsToWin || '---' }}</td>\n" +
    "        </tr>\n" +
    "        <tr class=\"text-success\">\n" +
    "            <td >Your bids</td>\n" +
    "            <td>{{ punterBids || '---'}}<span ng-show=\"punterBids\">&nbsp;&nbsp;bcs</span></td>\n" +
    "        </tr>\n" +
    "        <!--<tr>-->\n" +
    "            <!--<td>Brand:</td>-->\n" +
    "            <!--<td><a href=\"http://samsung.com\" target=\"_blank\">Samsung</a></td>-->\n" +
    "        <!--</tr>-->\n" +
    "    </table>\n" +
    "    <hr class=\"hr1\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row margin-top\">\n" +
    "    <div class=\"\" ng-if=\"(punter.account_active && punter.punter_current_status != 'inactive')\">\n" +
    "        <div class=\"form-group  col-xs-12\">\n" +
    "            <label class=\"control-label\" for=\"bidAmountQuantity\">Amount to bid : </label>\n" +
    "            <div class=\"input-group has-feedback\">\n" +
    "                <a href=\"\" class=\"input-group-addon pointer\" ng-show=\"bidAmountQuantity > 1\" ng-click=\"decrementBidValue()\"><span href=\"\"> <i class=\"fa fa-angle-down\"></i></span></a>\n" +
    "                <input type=\"text\" class=\"form-control input-lg has-success\" ng-disabled=\"true\" id=\"bidAmountQuantity\" ng-model=\"bidAmountQuantity\" name=\"bidAmountQuantity\">\n" +
    "                <span class=\"form-control-feedback hidden-sm hidden-xs\" aria-hidden=\"true\">{{ app_name }} credits</span>\n" +
    "                <span class=\"form-control-feedback hidden-md hidden-lg\" aria-hidden=\"true\" style=\"top: 5px !important; right: 30px !important;\">bcs</span>\n" +
    "                <a href=\"\" class=\"input-group-addon pointer\" ng-click=\"incrementBidValue()\"><span> <i class=\"fa fa-angle-up\"></i></span></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-12  text-center\" tooltip=\"Top up wallet before placing bid\"\n" +
    "             ng-if=\"!(punter.user_wallet && punter.user_wallet.amount_available_in_wallet)\">\n" +
    "            <!--col-xs-12 col-sm-4 col-sm-offset-4-->\n" +
    "            <a href=\"\" class=\"btn btn-warning btn-lg\"\n" +
    "                    ng-click=\"goToTopUp()\">Place Bid\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-12  text-center\" ng-if=\"(punter.user_wallet && punter.user_wallet.amount_available_in_wallet)\">\n" +
    "            <!--col-xs-12 col-sm-4 col-sm-offset-4-->\n" +
    "            <a href=\"\" class=\"btn btn-warning btn-lg\"\n" +
    "                    ng-disabled=\"placingBid\" place-bid-modal=\"\"\n" +
    "                    data-bid-amount=\"{{ bidAmountQuantity }}\"\n" +
    "                    data-auction-id=\"{{ selected_auction.id }}\">\n" +
    "\n" +
    "                <span ng-show=\"placingBid\"><i class=\"fa fa-spinner fa-spin\"></i> Processing ...</span>\n" +
    "                <span ng-hide=\"placingBid\">Place Bid</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row margin-top\" >\n" +
    "    <div class=\"col-sm-12\"  ng-if=\"leaderBoard.length\">\n" +
    "        <p class=\"text-center h4\">Leading Bid Value</p>\n" +
    "        <p class=\"text-center h3 text-success\">{{ leaderBoard[0].total_bid_amount}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-12 well\"  ng-if=\"lastBidder\">\n" +
    "        <p class=\"text-center h4\">Last Bidder</p>\n" +
    "        <p class=\"text-center h5 text-muted\">{{ lastBidder }}</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            ");
}]);

angular.module("public/auction_select/auction_select_right_partial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/auction_select/auction_select_right_partial.tpl.html",
    "<div class=\"leaderboad\">\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li class=\"text-center text-danger col-xs-12\" style=\"padding: 0 !important; margin-left: 1px !important;\"><a>Leaderboard</a></li>\n" +
    "    </ul>\n" +
    "    <table class=\"table table-responsive\" ng-if=\"leaderBoard.length\">\n" +
    "        <tr ng-repeat=\"leader in leaderBoard | limitTo : 5\">\n" +
    "            <td class=\"hidden-sm hidden-xs\">\n" +
    "                <img class=\"img-circle pointer text-center\"  ng-href=\"{{leader.bidder.avatar_url }}\" pretty-image rel=\"prettyPhoto\"\n" +
    "                     width=\"25px\"  title=\"{{leader.bidder.username}}'s avatar\" ng-src=\"{{ leader.bidder.avatar_url }}\" alt=\"{{leader.bidder.username }}'s avatar\" />\n" +
    "\n" +
    "            <td class=\"text-center  pointer\" image-url=\"{{leader.bidder.avatar_url }}\" pretty-image title=\"{{leader.bidder.username}}'s avatar\" >{{ leader.bidder.username }}</td>\n" +
    "\n" +
    "            <td class=\"text-center\"><span class=\"\">{{ leader.total_bid_amount }}&nbsp;bcs</span></td>\n" +
    "\n" +
    "            <td class=\"text-center\"><i class=\"fa fa-clock-o\"></i>&nbsp;&nbsp;<span  am-time-ago=\"leader.date_of_record\"></span></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    </table>\n" +
    "    <table class=\"table table-responsive\" ng-if=\"!leaderBoard.length\">\n" +
    "        <tr>\n" +
    "            <td class=\"\" style=\"padding: 70px 0\"><p class=\" text-center\">Leaderboard has no entries currently</p></td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "\n" +
    "    <div class=\" margin-60\" ng-show=\"loadingLeaderBoard\">\n" +
    "        <div >\n" +
    "            <div class=\"spinner\" style=\"top: 35%; left : 55% !important;\">\n" +
    "                <div class=\"dot1\"></div>\n" +
    "                <div class=\"dot2\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li class=\"text-center text-danger col-xs-12\" style=\"padding: 0 !important; margin-left: 1px !important;\"><a style=\"color: limegreen !important;\">Winning Tips</a></li>\n" +
    "    </ul>\n" +
    "    <table class=\"table table-responsive\">\n" +
    "        <tr ng-if=\"!(auction_tips.length)\">\n" +
    "            <td><p class=\"text-center\" >No tips available!</p></td>\n" +
    "        </tr>\n" +
    "        <tr ng-if=\"auction_tips.length\" ng-repeat=\"tip in auction_tips\">\n" +
    "            <td>\n" +
    "                <p><i class=\"fa fa-trophy text-success\"></i>&nbsp;|&nbsp;<span class=\"\">{{ tip.auction_tip }}</span></p>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <div class=\"row\">\n" +
    "            <p class=\"col-md-5 hidden-sm hidden-xs\" style=\"padding-top: 5px\">Lets Get Social</p>\n" +
    "            <div class=\"col-md-6 col-xs-12\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-4 \">\n" +
    "                        <div class=\"\">\n" +
    "                            <button\n" +
    "                                    class=\"btn btn-primary center-block\"\n" +
    "                                    tooltip=\"Share on Facebook\"\n" +
    "                                    socialshare\n" +
    "                                    socialshare-provider=\"facebook\"\n" +
    "                                    socialshare-url=\"http://www.i-bid2win.com/share/auction/{{$stateParams.id}}\">\n" +
    "                                <i class=\"fa fa-facebook\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-xs-4 \">\n" +
    "                        <div class=\"\">\n" +
    "                            <button\n" +
    "                                    class=\"btn btn-danger center-block\"\n" +
    "                                    tooltip=\"Share on Google +\"\n" +
    "                                    socialshare\n" +
    "                                    socialshare-provider=\"google+\"\n" +
    "                                    socialshare-url=\"http://www.i-bid2win.com/share/auction/{{$stateParams.id}}\">\n" +
    "                                <i class=\"fa fa-google-plus\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-4 \">\n" +
    "                        <div class=\"\">\n" +
    "                            <button\n" +
    "                                    class=\"btn btn-info center-block\"\n" +
    "                                    socialshare\n" +
    "                                    tooltip=\"Share on Twitter\"\n" +
    "                                    socialshare-provider=\"twitter\"\n" +
    "                                    socialshare-via=\"@ibid2win\"\n" +
    "                                    socialshare-text=\"{{ selected_auction.auction_description }}\"\n" +
    "                                    socialshare-hashtags=\"auction, bid, i-bid2win\"\n" +
    "                                    socialshare-media=\"{{ selected_auction.item.item_thumbnail_url }}\"\n" +
    "                                    socialshare-url=\"http://www.i-bid2win.com/share/auction/{{$stateParams.id}}\">\n" +
    "                                <i class=\"fa fa-twitter\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row margin-top\" ng-if=\"square_pop_upImages\" ng-controller=\"BwPublicGeneralController\">\n" +
    "    <div class=\"col-md-12 hidden-sm hidden-xs\">\n" +
    "        <a target=\"_blank\" class=\"\" ng-href=\"{{ square_pop_upImages.click_destination_url }}\">\n" +
    "            <img class=\"center-block \"  width=\"250\" height=\"250\"\n" +
    "                 style=\"max-width : 250px; max-height: 250px\" ng-src=\"{{ square_pop_upImages.advert_image_url }}\" alt=\"Advertisement\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("public/contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/contact/contact.tpl.html",
    "\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <!-- Start Page Banner -->\n" +
    "    <div class=\"page-banner\" style=\"padding:10px 0;\">\n" +
    "        <div class=\"\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-11 col-sm-10\" style=\"padding-left :40px \">\n" +
    "                    <h2>Contact Us </h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 hidden\">\n" +
    "                    <ul class=\"breadcrumbs\">\n" +
    "                        <li><a href=\"#/\">Home</a></li>\n" +
    "                        <li>Contact</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End Page Banner -->\n" +
    "          <div class=\"page-content\" style=\"padding: 10px 30px\"><!--ng-if=\"onLocalHost()\"-->\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <div class=\"col-md-8 col-xs-12\" style=\"overflow: hidden;\">\n" +
    "\n" +
    "                    <!-- Classic Heading -->\n" +
    "                    <h4 class=\"classic-title\"><span>Locate Us</span></h4>\n" +
    "\n" +
    "                    <!-- Start Contact Form -->\n" +
    "                    <div id=\"contact-form\" class=\"hidden contatct-form\">\n" +
    "                        <div class=\"loader\"></div>\n" +
    "                        <form class=\"contactForm\" name=\"cform\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-4 col-xs-12 form-group\">\n" +
    "                                    <label for=\"name\">Name<span class=\"required\">*</span></label>\n" +
    "                                    <input id=\"name\" class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"Enter your name\" >\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4 col-xs-12 form-group\">\n" +
    "                                    <label for=\"e-mail\">Email<span class=\"required\">*</span></label>\n" +
    "                                    <input id=\"e-mail\" class=\"form-control\" name=\"email\" type=\"email\" placeholder=\"Enter email\">\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4 col-xs-12  form-group\">\n" +
    "                                    <label for=\"reason\">Reason</label>\n" +
    "                                    <select id=\"reason\" name=\"reason\" class=\"form-control\">\n" +
    "                                        <option value=\"\">Select a reason</option>\n" +
    "                                        <option value=\"\">General</option>\n" +
    "                                        <option value=\"\">Error</option>\n" +
    "                                        <option value=\"\">Issue</option>\n" +
    "                                    </select>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <label for=\"message\">Add Your Comment</label>\n" +
    "                                    <span class=\"message-missing\">Say something!</span>\n" +
    "                                    <textarea id=\"message\" name=\"message\" cols=\"45\" rows=\"6\"></textarea>\n" +
    "                                    <input type=\"submit\" name=\"submit\" class=\"button\" id=\"submit_btn\" value=\"Send Message\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <!-- End Contact Form -->\n" +
    "\n" +
    "                    <!--Map-->\n" +
    "                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15883.011627920438!2d-0.2513906231016699!3d5.603472888793089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.6100278999999995!2d-0.2516555!4m5!1s0xfdf99066d7517cd%3A0x96f166b7d2f6302e!2sLapaz!3m2!1d5.6063205!2d-0.2502697!5e0!3m2!1sen!2sgh!4v1436192574043\" width=\"1000\" height=\"400\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n" +
    "                    <!--End Map-->\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-4 col-xs-12\">\n" +
    "\n" +
    "                    <!-- Classic Heading -->\n" +
    "                    <h4 class=\"classic-title\"><span>Reach Us</span></h4>\n" +
    "\n" +
    "                    <!-- Some Info -->\n" +
    "                    <p class=\"text-justify col-xs-12\">Our agents are ready to respond to your questions and feedback. Kindly reach us via:</p>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "                    <!-- Divider -->\n" +
    "                    <div class=\"hr1\" style=\"margin-bottom:10px;\"></div>\n" +
    "\n" +
    "                    <!-- Info - Icons List -->\n" +
    "                    <ul class=\"icons-list\" style=\"margin-top:15px;\">\n" +
    "                        <li class=\"col-xs-12\"> <strong>Address:</strong>188 East Citadel Street, Sphintex.</li>\n" +
    "                        <li class=\"col-xs-12\"> <strong>Email:</strong> support@ibid2win.com</li>\n" +
    "                        <li class=\"col-xs-12\"> <strong>Phone:</strong> +233 544 670 789</li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "                    <!-- Divider -->\n" +
    "                    <div class=\"hr1\" style=\"margin-bottom:15px;\"></div>\n" +
    "\n" +
    "                    <!-- Classic Heading -->\n" +
    "                    <h4 class=\"classic-title\" style=\"margin-top:15px;\"><span>Working Hours</span></h4>\n" +
    "\n" +
    "                    <!-- Info - List -->\n" +
    "                    <ul class=\"list-unstyled\">\n" +
    "                        <li><strong  class=\"col-xs-6\">Monday - Friday   :  </strong> <span class=\"col-xs-5\"> 9am to 5pm</span></li>\n" +
    "                        <li><strong class=\"col-xs-6\">Saturday   :   </strong>  <span class=\"col-xs-5\"> 9am to 2pm</span></li>\n" +
    "                        <li><strong class=\"col-xs-6\">Sunday   :  </strong> <span class=\"col-xs-5\">Closed</span></li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
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

angular.module("public/home/auction-item.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/home/auction-item.tpl.html",
    "<div class=\"auction-item\" style=\"min-height: 469px; margin: 0 0 20px 0 !important;\">\n" +
    "    <h3 class=\"item-name text-center\"><a ng-click=\"bidNow(auctionPostionOnHomePage[place].id)\" href=\"\">{{ auctionPostionOnHomePage[place].item.item_name || 'Auction Unavailable' }}</a></h3>\n" +
    "    <hr>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <span ng-if=\"auctionPostionOnHomePage[place].startStatus == 'completed' \" class=\"pointer closedStamp\"  show-endorsed-winner=\"{{auctionPostionOnHomePage[place].id}}\"><img src=\"punters/assets/images/closed-stamp.png\"></span>\n" +
    "        <figure class=\"text-center\" style=\"min-height: 150px\">\n" +
    "            <a ng-click=\"bidNow(auctionPostionOnHomePage[place].id)\" href=\"\">\n" +
    "                <!--src=\"/punters/assets/images/products/phone1.jpg\"-->\n" +
    "                <img ng-src=\"{{ auctionPostionOnHomePage[place].item.item_thumbnail_url }}\"  alt=\"{{ auctionPostionOnHomePage[place].item.item_name }}\" class=\"item-image\" ng-class=\"{'desaturate' : auctionPostionOnHomePage[place].startStatus == 'completed' }\" width=\"150px\">\n" +
    "            </a>\n" +
    "        </figure>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 \">\n" +
    "        <div class=\"row\" title=\"Recommended Retail Price\">\n" +
    "            <p class=\"col-xs-12 text-center\"><span>Retail Price</span>&nbsp;&nbsp;-&nbsp;&nbsp;\n" +
    "                <strong ng-show=\"auctionPostionOnHomePage[place].auction_retail_price\" style=\"text-decoration: line-through\">{{ (auctionPostionOnHomePage[place].auction_retail_price| currency : 'GHc '  :  2) }}</strong>\n" +
    "                <strong ng-hide=\"auctionPostionOnHomePage[place].auction_retail_price\"> 0.00</strong>\n" +
    "            </p>\n" +
    "\n" +
    "            <!--<span  class=\"col-xs-6 retail-price text-left\">Retail Price</span>-->\n" +
    "            <!--<span  class=\"col-xs-6 retail-price text-right\">-&nbsp;&nbsp;{{ auctionPostionOnHomePage[place].auction_retail_price| currency : 'GHc '  :  2 || '0.00'}}</span>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 \">\n" +
    "        <div class=\"row\" title=\"Auction Price\">\n" +
    "            <p class=\"col-xs-12 text-center\"><span>Auction Price</span>&nbsp;&nbsp;-&nbsp;&nbsp;<strong>{{ (auctionPostionOnHomePage[place].auction_price| currency : 'GHc '  :  2) || '0.00'}}</strong></p>\n" +
    "\n" +
    "            <!--<span  class=\"col-xs-6 auction-price text-left\">Auction Price</span>-->\n" +
    "            <!--<span  class=\"col-xs-6 auction-price text-right\">-&nbsp;&nbsp;{{ auctionPostionOnHomePage[place].auction_price | currency : 'GHc '  :  2 || '0.00'}}</span>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"row margin-top-15\" style=\"margin-bottom: 0 !important;padding-bottom: 0 !important;\">\n" +
    "        <span class=\"col-xs-12 text-center  hidden \">KofiCracker <span class=\"bid2win_credits hidden\"><i>(2000 bcs)</i></span></span>\n" +
    "\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <a  ng-if=\"auctionPostionOnHomePage[place].startStatus == 'running'\"\n" +
    "                ng-click=\"bidNow(auctionPostionOnHomePage[place].id)\" href=\"\"\n" +
    "                class=\"btn btn-warning  center-block text-center col-xs-6\">\n" +
    "                <span class=\"\">Bid Now</span>\n" +
    "            </a>\n" +
    "            <a ng-if=\"auctionPostionOnHomePage[place].startStatus == 'completed' \"\n" +
    "               class=\"btn btn-primary  center-block text-center col-xs-6\" href=\"\">\n" +
    "                <span class=\"endorsedWinnerButton\" show-endorsed-winner=\"{{auctionPostionOnHomePage[place].id}}\" >See Winner</span>\n" +
    "            </a>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <div class=\"row\">\n" +
    "        <p class=\"col-xs-12\"><span>Start Date</span>&nbsp;&nbsp;:&nbsp;&nbsp;<strong>{{(auctionPostionOnHomePage[place].auction_start_date |  amDateFormat:' Do MMM, YYYY' ) || 'Unavailable'}}</strong></p>\n" +
    "        <!--/  {{ max[place] }}--><!--class=\"col-xs-12!-->\n" +
    "        <progressbar  class=\"row progress-striped active\" title=\"{{ auctionPostionOnHomePage[place].progressTitle }}\" value=\"auctionPostionOnHomePage[place].progressValue\" max=\"100\" type=\"{{auctionPostionOnHomePage[place].progessType}}\"> <b>{{auctionPostionOnHomePage[place].progressInfo}}</b></progressbar>\n" +
    "\n" +
    "        <p class=\"col-xs-12 text-right\"><span>End Date</span>&nbsp;&nbsp;:&nbsp;&nbsp;<strong>{{(auctionPostionOnHomePage[place].auction_end_date |  amDateFormat:' Do MMM, YYYY' ) || 'Unavailable'}}</strong></p>\n" +
    "\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"row\">\n" +
    "        <span class=\"col-xs-12 minimum-bid-amount text-center text-capitalize\">Cost per bid</span>\n" +
    "        <span class=\"col-xs-12 minimum-bid-amount text-center\" title=\"Minimum Cost Per bid\">\n" +
    "            {{ auctionPostionOnHomePage[place].auction_allowed_bid_amount || '0'}}&nbsp;bcs</span>\n" +
    "\n" +
    "    </div>\n" +
    "</div><!--auction-item-->");
}]);

angular.module("public/home/public_home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/home/public_home.tpl.html",
    "<div class=\"\" ui-view=\"\" autoscroll=\"false\">\n" +
    "\n" +
    "\n" +
    "    <!--Carousel--><!--style=\"height: 424px; min-height: 424px; max-height: 424px\"-->\n" +
    "    <div id=\"main-slide\" class=\"carousel slide add-shadow\" data-ride=\"carousel\" >\n" +
    "\n" +
    "        <!-- Indicators -->\n" +
    "        <!--<ol class=\"carousel-indicators\">-->\n" +
    "        <!--<li data-target=\"#main-slide\" data-slide-to=\"0\" class=\"pointer active\"></li>-->\n" +
    "        <!--<li data-target=\"#main-slide\" data-slide-to=\"1\" class=\"pointer\"></li>-->\n" +
    "        <!--<li data-target=\"#main-slide\" data-slide-to=\"2\" class=\"pointer\"></li>-->\n" +
    "        <!--<li data-target=\"#main-slide\" data-slide-to=\"3\" class=\"pointer\"></li>-->\n" +
    "        <!--</ol>-->\n" +
    "        <!--/ Indicators end-->\n" +
    "\n" +
    "        <!-- Indicators -->\n" +
    "        <ol class=\"carousel-indicators\">\n" +
    "            <li data-target=\"#main-slide\" data-slide-to=\"{{image_indicator}}\" ng-class=\"{'active' : $index == 0}\"\n" +
    "                class=\"pointer\" ng-repeat=\"image_indicator in sliderImagesCounter\"></li>\n" +
    "        </ol><!--/ Indicators end-->\n" +
    "\n" +
    "\n" +
    "        <!-- Carousel inner -->\n" +
    "        <div class=\"carousel-inner\">\n" +
    "            <div class=\"item\" ng-repeat=\"image in sliderImages\" ng-class=\"{'active' : $index == 0}\">\n" +
    "                <!--/punters/assets/images/slider/bg1.jpg-->\n" +
    "                <img class=\"img-responsive\" ng-src=\"{{ image.advert_image_url }}\" alt=\"slider\">\n" +
    "                <div class=\"slider-content\" style=\"height: 424px; min-height: 424px; max-height: 424px\">\n" +
    "                    <div class=\"col-md-12 text-left hidden-sm hidden-xs\">\n" +
    "                        <!--<h3 class=\"animated2 white hidden\">-->\n" +
    "                            <!--<span>High quality products available</span>-->\n" +
    "                        <!--</h3>-->\n" +
    "                        <!--<h3 class=\"animated3 white hidden\">-->\n" +
    "                        <!--<span>The ultimate aim of auction fun</span>-->\n" +
    "                        <!--</h3>-->\n" +
    "                        <div class=\"animated4 pull-left\">\n" +
    "                            <a ng-href=\"{{ image.click_destination_url }}\" target=\"_blank\" class=\"slider btn btn-primary\" style=\"margin: 160px 0 0 140px;\">See More</a></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div><!--/ Carousel item end -->\n" +
    "        </div><!-- Carousel inner end-->\n" +
    "\n" +
    "        <!--&lt;!&ndash; Controls &ndash;&gt;#main-slide-->\n" +
    "        <a class=\"left carousel-control\" href=\"\" data-target=\"#main-slide\" data-slide=\"prev\">\n" +
    "            <span><i class=\"fa fa-angle-left\"></i></span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"\" data-target=\"#main-slide\" data-slide=\"next\">\n" +
    "            <span><i class=\"fa fa-angle-right\"></i></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <!--Carousel End-->\n" +
    "\n" +
    "\n" +
    "    <div class=\"section add-shadow\" style=\"margin: 20px 0; padding: 25px 0 1px; border-top:1px solid #eee; border-bottom:1px solid #eee; background:#f9f9f9;\">\n" +
    "        <!--style=\"padding: 0 0 0 3px !important; margin: auto 0 !important; width: 100% !important;\"-->\n" +
    "        <!--class=\"container\"-->\n" +
    "        <div  >\n" +
    "\n" +
    "            <div class=\"row\" style=\"margin: 0 0 10px 0 !important;\">\n" +
    "\n" +
    "                <!--Auction Position -->\n" +
    "                <div class=\" col-lg-3  col-sm-6 col-xs-12\" data-ng-repeat=\"place in [1,2,3,4]\">\n" +
    "                    <div ng-include=\" 'public/home/auction-item.tpl.html' \"></div><!--auction-item-->\n" +
    "                </div><!-- End .col-md-3 -->\n" +
    "                <!--End Auction Position -->\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"row\" style=\"margin: 0 0 10px 0 !important;\">\n" +
    "\n" +
    "                <!--Auction Position   [5,6,7,8]   -->\n" +
    "                <!--Auction Position -->\n" +
    "                <div class=\" col-lg-3  col-sm-6 col-xs-12\" data-ng-repeat=\"place in [5,6,7,8]\">\n" +
    "                    <div ng-include=\" 'public/home/auction-item.tpl.html' \"></div><!--auction-item-->\n" +
    "                </div><!-- End .col-md-3 -->\n" +
    "                <!--End Auction Position -->\n" +
    "                <!--End Auction Position -->\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div><!-- End .container -->\n" +
    "");
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

angular.module("public/policy/privacy_policy.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/policy/privacy_policy.tpl.html",
    "\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <!-- Start Page Banner -->\n" +
    "    <div class=\"page-banner\" style=\"padding:10px 0;\">\n" +
    "        <div class=\"\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-11 col-sm-10\" style=\"padding-left :40px \">\n" +
    "                    <h2>Privacy Policy</h2>\n" +
    "                    <!--<p>{{ app_name }}</p>-->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 hidden\">\n" +
    "                    <ul class=\"breadcrumbs\">\n" +
    "                        <li><a href=\"#/\">Home</a></li>\n" +
    "                        <li>Privacy Policy</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End Page Banner -->\n" +
    "    <div class=\"\">\n" +
    "        <div class=\"page-content\" style=\"padding: 0 50px\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <!--Scope -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Scope</span></h2>\n" +
    "\n" +
    "                    <!-- Text -->\n" +
    "                    <p class=\"text-justify\">i-bid2win.com (I-Bid2Win)  is a service provided by Phunki Media Group. We acknowledge and respect your personal privacy. This Privacy Policy describes all aspects relating to gathering information while you're visiting I-Bid2Win.</p>\n" +
    "                    <p class=\"text-justify\">Please read this Privacy Policy before using the I-Bid2Win website or submitting any personal information. By using the I-Bid2Win website, you accept and consent to the practices described in this Privacy Policy. By your continued use you expressly consent to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy. If you do not agree with these practices you are free to discontinue your use of the I-Bid2Win website at any time. </p>\n" +
    "                    <p class=\"text-justify\">If you have questions about our privacy policy, please email us at support@I-Bid2Win.com.</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Data Collection -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Data Collection</span></h2>\n" +
    "                    <p class=\"text-justify\">You may visit I-Bid2Win at any time without intentionally revealing any personal information about yourself. However, when you visit our website, we may collect and store your computer and connection information, statistics on page views, traffic to and from I-Bid2Win, advertisement data, IP address and standard web log information and information from other companies, such as demographic and navigation data. </p>\n" +
    "                    <p class=\"text-justify\">For you to actively participate in I-Bid2Win we do need some of your personal information. Once you provide us with your required personal information, you are no longer anonymous. In providing us with your personal information, you consent to the transfer and storage of such information on our servers. </p>\n" +
    "                    <p class=\"text-justify\">When you register on I-Bid2Win, we will collect the following required information: email address, first and last name, date of birth, and password; all transactional information based on your activities on I-Bid2Win; shipping, billing and other information relating to any purchase or shipping; any correspondence sent to us; financial information, such as your credit card information; and other supplemental information from third parties.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Use of Data -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Use of Data </span></h2>\n" +
    "                    <p class=\"text-justify\">Our purpose for collecting personal information is to provide you with a safe, efficient, and customized experience. By signing up, you agree that we may use your personal information to: provide the services and customer support you request; resolve disputes, collect fees, and troubleshoot problems; prevent potentially prohibited or illegal activities, and enforce our Terms & Conditions; customize, measure and improve our services, content and advertising; inform you about our services, targeted marketing, service updates, and promotions; and compare information and verify it with third parties for accuracy.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Disclosure of Personal Data-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Disclosure of Personal Data</span></h2>\n" +
    "                    <ul>\n" +
    "                        <li><p class=\"text-justify\">We may disclose personal information to respond to legal requirements, enforce our Terms & Conditions and Privacy Policy, respond to claims that a listing or other content violates the rights of others, or protect anyone's rights, property, or safety. This information will be disclosed under applicable laws and regulations.</p></li>\n" +
    "                        <li><p class=\"text-justify\">We may also share your personal information with third parties assisting our business operations under contract, including but not limited to fraud investigations and debt collection, with law enforcement or other governmental officials if required by law, and with other business entities, should we plan to merge with or be acquired by that business entity. </p></li>\n" +
    "                        <li><p class=\"text-justify\">We do not share your personal information with third party advertisers</p></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Your Information on I-Bid2Win-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Your Information on I-Bid2Win</span></h2>\n" +
    "                    <p class=\"text-justify\">Once you have been approved as a registered user with I-Bid2Win, you will be required to choose a user name. This user name will be displayed throughout I-Bid2Win and therefore provided to the public. If you win an auction, I-Bid2Win will display the number of bids and dollar value of those bids when the auction ends. Unless you associate your user name with your personal information, other users will not be able to personally identify your activities on I-Bid2Win.</p>\n" +
    "                    <p class=\"text-justify\">When visiting I-Bid2Win from a public or shared computer, certain information about you, such as your user name, may also be visible to others who may use that computer after your use. It is your responsibility to ensure private information is removed from the public or shared computer should you choose to use one.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Access, Review and Change of Personal Data-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Access, Review and Change of Personal Data</span></h2>\n" +
    "                    <p class=\"text-justify\">You can access, review and change most of your personal information by logging on to I-Bid2Win at any time. However, some of your personal information can only be changed by contacting our Customer Service. Accurate information is required for billing and delivery purposes. You are required to promptly update your personal information if changes occur or information is inaccurate.</p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Closing Your Account-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Closing Your Account</span></h2>\n" +
    "                    <p class=\"text-justify\">Upon closing your account, I-Bid2Win will remove your personal information from view as soon as reasonably possible, based on your account activity and in accordance with applicable law. We do retain personal information from closed accounts to comply with law, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations, enforce our <a ui-sref=\"public_home.terms_conditions\">Terms & Conditions</a>, and take other actions otherwise permitted by law. </p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Use of Cookies at our Website-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Use of Cookies at our Website</span></h2>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win uses so-called \"cookies\", which are files that are stored on your computer that can be retrieved to assist in customizing your experience with the online service. The information saved supports the functionality of the site, for example, by keeping track of your visual preferences or controlling the frequency of \"pop-up\" windows. You are free to prevent cookies from being saved on your hard drive by adjusting the corresponding settings in your browser. However, turning off these settings may result in limited functionality.</p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Security Measures-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Security Measures</span></h2>\n" +
    "                    <p class=\"text-justify\">Your I-Bid2Win account and profile and the information contained therein are password protected. Please note that you are not permitted to provide your password to anyone else. I-Bid2Win will never ask for your password in e-mail or over the phone. Please remember to log out of your account and to close your Internet browser window when you leave the I-Bid2Win site; this is especially important if you use a PC in public locations. We assume no liability for the abuse of login data and passwords used. </p>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win treats data as an asset that must be highly protected. We use security measures to protect your personal information against unauthorized access and disclosure. However, although we work very hard to protect your privacy, we do not promise, and you should not expect, that your personal information or private communications will always remain private.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Protection from Web Crawlers or Spam-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Protection from Web Crawlers or Spam</span></h2>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win assures you that we will use your e-mail address with your express consent only for the purposes stated in the help <a ui-sref=\"public_home.terms_conditions\">Terms & Conditions</a> . We will not rent or sell your e-mail address to third parties, and we will prevent your e-mail address from being recorded by \"web crawlers\" or \"web spiders\" to the best of our ability. If you believe that your e-mail address has been recorded in this way, please email us at <a mailto=\"support@I-Bid2Win.com\">support@I-Bid2Win.com</a> immediately. </p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Children / Minors-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Children / Minors</span></h2>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win is sensitive to the need to protect the privacy of children who use the Internet. I-Bid2Win does not knowingly collect or solicit personally identifiable information from or about children under the age of eighteen (18) consistent with and exceeding the requirements of the Children's Online Privacy Protection Act. If we discover or are otherwise notified that we have received any such information from a child in violation of this policy, we will delete that information. If you are under the age of eighteen (18), please do not attempt to provide any personally identifiable information on our Sites. If you believe that I-Bid2Win has any information from or about a child under the age of thirteen, please contact us immediately by clicking on \"Contact Us\" and sending us an e-mail and we will take appropriate steps to remove such information from our files.</p>\n" +
    "                    <p class=\"text-justify\">Please review the privacy policy of other sites you or your children elect to link to through I-Bid2Win for the children's privacy policy of those sites. I-Bid2Win is not responsible for the privacy policy or other content of any other website, including sites that are co-branded.</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--General-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>General</span></h2>\n" +
    "                    <p class=\"text-justify\">We may amend this Privacy Policy at any time by posting the new Privacy Policy on I-Bid2Win. I-Bid2Win reserves the right to change this Privacy Policy at any time without notice to You. Consequently, You should review this Privacy Policy for changes each time You visit I-Bid2Win.</p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("public/policy/terms_conditions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/policy/terms_conditions.tpl.html",
    "\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <!-- Start Page Banner -->\n" +
    "    <div class=\"page-banner\" style=\"padding:10px 0;\">\n" +
    "        <div class=\"\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-11 col-sm-10\" style=\"padding-left :40px \">\n" +
    "                    <h2>Privacy Policy</h2>\n" +
    "                    <!--<p>{{ app_name }}</p>-->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 hidden\">\n" +
    "                    <ul class=\"breadcrumbs\">\n" +
    "                        <li><a href=\"#/\">Home</a></li>\n" +
    "                        <li>Privacy Policy</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- End Page Banner -->\n" +
    "    <div class=\"\">\n" +
    "        <div class=\"page-content\" style=\"padding: 0 50px\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <!--Scope -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Scope</span></h2>\n" +
    "\n" +
    "                    <!-- Text -->\n" +
    "                    <p class=\"text-justify\">i-bid2win.com (I-Bid2Win)  is a service provided by Phunki Media Group. We acknowledge and respect your personal privacy. This Privacy Policy describes all aspects relating to gathering information while you're visiting I-Bid2Win.</p>\n" +
    "                    <p class=\"text-justify\">Please read this Privacy Policy before using the I-Bid2Win website or submitting any personal information. By using the I-Bid2Win website, you accept and consent to the practices described in this Privacy Policy. By your continued use you expressly consent to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy. If you do not agree with these practices you are free to discontinue your use of the I-Bid2Win website at any time. </p>\n" +
    "                    <p class=\"text-justify\">If you have questions about our privacy policy, please email us at support@I-Bid2Win.com.</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Data Collection -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Data Collection</span></h2>\n" +
    "                    <p class=\"text-justify\">You may visit I-Bid2Win at any time without intentionally revealing any personal information about yourself. However, when you visit our website, we may collect and store your computer and connection information, statistics on page views, traffic to and from I-Bid2Win, advertisement data, IP address and standard web log information and information from other companies, such as demographic and navigation data. </p>\n" +
    "                    <p class=\"text-justify\">For you to actively participate in I-Bid2Win we do need some of your personal information. Once you provide us with your required personal information, you are no longer anonymous. In providing us with your personal information, you consent to the transfer and storage of such information on our servers. </p>\n" +
    "                    <p class=\"text-justify\">When you register on I-Bid2Win, we will collect the following required information: email address, first and last name, date of birth, and password; all transactional information based on your activities on I-Bid2Win; shipping, billing and other information relating to any purchase or shipping; any correspondence sent to us; financial information, such as your credit card information; and other supplemental information from third parties.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Use of Data -->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Use of Data </span></h2>\n" +
    "                    <p class=\"text-justify\">Our purpose for collecting personal information is to provide you with a safe, efficient, and customized experience. By signing up, you agree that we may use your personal information to: provide the services and customer support you request; resolve disputes, collect fees, and troubleshoot problems; prevent potentially prohibited or illegal activities, and enforce our Terms & Conditions; customize, measure and improve our services, content and advertising; inform you about our services, targeted marketing, service updates, and promotions; and compare information and verify it with third parties for accuracy.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Disclosure of Personal Data-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Disclosure of Personal Data</span></h2>\n" +
    "                    <ul>\n" +
    "                        <li><p class=\"text-justify\">We may disclose personal information to respond to legal requirements, enforce our Terms & Conditions and Privacy Policy, respond to claims that a listing or other content violates the rights of others, or protect anyone's rights, property, or safety. This information will be disclosed under applicable laws and regulations.</p></li>\n" +
    "                        <li><p class=\"text-justify\">We may also share your personal information with third parties assisting our business operations under contract, including but not limited to fraud investigations and debt collection, with law enforcement or other governmental officials if required by law, and with other business entities, should we plan to merge with or be acquired by that business entity. </p></li>\n" +
    "                        <li><p class=\"text-justify\">We do not share your personal information with third party advertisers</p></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Your Information on I-Bid2Win-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Your Information on I-Bid2Win</span></h2>\n" +
    "                    <p class=\"text-justify\">Once you have been approved as a registered user with I-Bid2Win, you will be required to choose a user name. This user name will be displayed throughout I-Bid2Win and therefore provided to the public. If you win an auction, I-Bid2Win will display the number of bids and dollar value of those bids when the auction ends. Unless you associate your user name with your personal information, other users will not be able to personally identify your activities on I-Bid2Win.</p>\n" +
    "                    <p class=\"text-justify\">When visiting I-Bid2Win from a public or shared computer, certain information about you, such as your user name, may also be visible to others who may use that computer after your use. It is your responsibility to ensure private information is removed from the public or shared computer should you choose to use one.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Access, Review and Change of Personal Data-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Access, Review and Change of Personal Data</span></h2>\n" +
    "                    <p class=\"text-justify\">You can access, review and change most of your personal information by logging on to I-Bid2Win at any time. However, some of your personal information can only be changed by contacting our Customer Service. Accurate information is required for billing and delivery purposes. You are required to promptly update your personal information if changes occur or information is inaccurate.</p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Closing Your Account-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Closing Your Account</span></h2>\n" +
    "                    <p class=\"text-justify\">Upon closing your account, I-Bid2Win will remove your personal information from view as soon as reasonably possible, based on your account activity and in accordance with applicable law. We do retain personal information from closed accounts to comply with law, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations, enforce our <a ui-sref=\"public_home.terms_conditions\">Terms & Conditions</a>, and take other actions otherwise permitted by law. </p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Use of Cookies at our Website-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Use of Cookies at our Website</span></h2>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win uses so-called \"cookies\", which are files that are stored on your computer that can be retrieved to assist in customizing your experience with the online service. The information saved supports the functionality of the site, for example, by keeping track of your visual preferences or controlling the frequency of \"pop-up\" windows. You are free to prevent cookies from being saved on your hard drive by adjusting the corresponding settings in your browser. However, turning off these settings may result in limited functionality.</p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Security Measures-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Security Measures</span></h2>\n" +
    "                    <p class=\"text-justify\">Your I-Bid2Win account and profile and the information contained therein are password protected. Please note that you are not permitted to provide your password to anyone else. I-Bid2Win will never ask for your password in e-mail or over the phone. Please remember to log out of your account and to close your Internet browser window when you leave the I-Bid2Win site; this is especially important if you use a PC in public locations. We assume no liability for the abuse of login data and passwords used. </p>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win treats data as an asset that must be highly protected. We use security measures to protect your personal information against unauthorized access and disclosure. However, although we work very hard to protect your privacy, we do not promise, and you should not expect, that your personal information or private communications will always remain private.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Protection from Web Crawlers or Spam-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Protection from Web Crawlers or Spam</span></h2>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win assures you that we will use your e-mail address with your express consent only for the purposes stated in the help <a ui-sref=\"public_home.terms_conditions\">Terms & Conditions</a> . We will not rent or sell your e-mail address to third parties, and we will prevent your e-mail address from being recorded by \"web crawlers\" or \"web spiders\" to the best of our ability. If you believe that your e-mail address has been recorded in this way, please email us at <a mailto=\"support@I-Bid2Win.com\">support@I-Bid2Win.com</a> immediately. </p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--Children / Minors-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>Children / Minors</span></h2>\n" +
    "                    <p class=\"text-justify\">I-Bid2Win is sensitive to the need to protect the privacy of children who use the Internet. I-Bid2Win does not knowingly collect or solicit personally identifiable information from or about children under the age of eighteen (18) consistent with and exceeding the requirements of the Children's Online Privacy Protection Act. If we discover or are otherwise notified that we have received any such information from a child in violation of this policy, we will delete that information. If you are under the age of eighteen (18), please do not attempt to provide any personally identifiable information on our Sites. If you believe that I-Bid2Win has any information from or about a child under the age of thirteen, please contact us immediately by clicking on \"Contact Us\" and sending us an e-mail and we will take appropriate steps to remove such information from our files.</p>\n" +
    "                    <p class=\"text-justify\">Please review the privacy policy of other sites you or your children elect to link to through I-Bid2Win for the children's privacy policy of those sites. I-Bid2Win is not responsible for the privacy policy or other content of any other website, including sites that are co-branded.</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <!--General-->\n" +
    "                <div class=\"col-md-12\">\n" +
    "\n" +
    "                    <h2 class=\"classic-title\"><span>General</span></h2>\n" +
    "                    <p class=\"text-justify\">We may amend this Privacy Policy at any time by posting the new Privacy Policy on I-Bid2Win. I-Bid2Win reserves the right to change this Privacy Policy at any time without notice to You. Consequently, You should review this Privacy Policy for changes each time You visit I-Bid2Win.</p>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("public/profile/my_info.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/profile/my_info.tpl.html",
    "<div class=\"user-profile-content\">\n" +
    "    <form role=\"form\">\n" +
    "\n" +
    "        <div class=\"row small-width-margin-bottom\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "            <span class=\"btn \" ng-class=\"unEditMode ? 'btn-primary' : 'btn-warning' \"  ng-click=\"changeEditMode()\">\n" +
    "            <i class=\"fa \" ng-class=\"unEditMode ? 'fa-unlock' : 'fa-lock' \"></i> <span ng-if=\"unEditMode\">En</span><span ng-if=\"!(unEditMode)\">Dis</span>able Edit Mode</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"first_name\">First Name</label>\n" +
    "                <input type=\"text\" ng-disabled=\"unEditMode\" class=\"form-control\" id=\"first_name\" ng-model=\"punterProfile.first_name\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"other_names\">Other Names</label>\n" +
    "                <input type=\"text\" ng-disabled=\"unEditMode\" class=\"form-control\" id=\"other_names\" ng-model=\"punterProfile.other_names\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"email\">Email</label>\n" +
    "                <input type=\"email\" ng-disabled=\"true\" class=\"form-control\" id=\"email\" ng-model=\"punterProfile.email\" >\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"phone_number\">Phone Number</label>\n" +
    "                <input type=\"text\" ng-disabled=\"true\" class=\"form-control\" id=\"phone_number\" ng-model=\"punterProfile.phone_number\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"date_of_birth\">Date of Birth</label>\n" +
    "                <input id=\"date_of_birth\" type=\"text\"\n" +
    "                       placeholder=\"Your date of birth\"\n" +
    "                       ng-disabled=\"unEditMode\"\n" +
    "                       name=\"date_of_birth\" ng-model=\"punterProfile.date_of_birth\" class=\"form-control datepicker\"\n" +
    "                       data-value=\"{{punterProfile.date_of_birth}}\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"gender\">Gender</label>\n" +
    "                <select class=\"form-control\" ng-disabled=\"unEditMode\" id=\"gender\" ng-model=\"punterProfile.gender\">\n" +
    "                    <option value=\"\">Select an option</option>\n" +
    "                    <option value=\"male\">Male</option>\n" +
    "                    <option value=\"female\">Female</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"marital_status\">Marital Status</label>\n" +
    "                <select ng-disabled=\"unEditMode\" class=\"form-control\" id=\"marital_status\" ng-model=\"punterProfile.marital_status\">\n" +
    "                    <option value=\"\">Select an option</option>\n" +
    "                    <option value=\"single\">Single</option>\n" +
    "                    <option value=\"married\">Married</option>\n" +
    "                    <option value=\"divorced\">Divorced</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"occupation\">Occupation</label>\n" +
    "                <input ng-disabled=\"unEditMode\" type=\"text\" class=\"form-control\" id=\"occupation\" ng-model=\"punterProfile.occupation\">\n" +
    "\n" +
    "                <!--<select  class=\"form-control\" id=\"occupation\" ng-model=\"punterProfile.occupation\">-->\n" +
    "                <!--<option value=\"\">Select an option</option>-->\n" +
    "                <!--<option value=\"male\">Male</option>-->\n" +
    "                <!--<option value=\"female\">Female</option>-->\n" +
    "                <!--</select>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"region\">Region</label>\n" +
    "                <select ng-disabled=\"unEditMode\" class=\"form-control\" id=\"region\" ng-model=\"punterProfile.region\">\n" +
    "                    <option value=\"\">Select a region</option>\n" +
    "                    <option value=\"Greater Accra\">Greater Accra</option>\n" +
    "                    <option value=\"Ashanti\">Ashanti</option>\n" +
    "                    <option value=\"Brong Ahafo\">Brong Ahafo</option>\n" +
    "                    <option value=\"Central\">Central</option>\n" +
    "                    <option value=\"Eastern\">Eastern</option>\n" +
    "                    <option value=\"Western\">Western</option>\n" +
    "                    <option value=\"Volta\">Volta</option>\n" +
    "                    <option value=\"Northern\">Northern</option>\n" +
    "                    <option value=\"Upper East\">Upper East</option>\n" +
    "                    <option value=\"Upper West\">Upper East</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"city\">City</label>\n" +
    "                <input ng-disabled=\"unEditMode\" type=\"text\" class=\"form-control\" id=\"city\" ng-model=\"punterProfile.city\" >\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"suburb\">Suburb</label>\n" +
    "                <input ng-disabled=\"unEditMode\" type=\"text\" class=\"form-control\" id=\"suburb\" ng-model=\"punterProfile.suburb\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group col-xs-12 col-md-6\">\n" +
    "                <label for=\"postal_address\">Postal Address</label>\n" +
    "                <input ng-disabled=\"unEditMode\" type=\"text\" class=\"form-control\" id=\"postal_address\" ng-model=\"punterProfile.postal_address\">\n" +
    "\n" +
    "                <!--<select  class=\"form-control\" id=\"occupation\" ng-model=\"punterProfile.occupation\">-->\n" +
    "                <!--<option value=\"\">Select an option</option>-->\n" +
    "                <!--<option value=\"male\">Male</option>-->\n" +
    "                <!--<option value=\"female\">Female</option>-->\n" +
    "                <!--</select>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"AboutMe\">About Me</label>\n" +
    "            <textarea ng-disabled=\"unEditMode\" ng-model=\"punterProfile.bio\" class=\"form-control\" id=\"AboutMe\" style=\"height: 80px;\">{{ punterProfile.bio || 'Not updated'}}</textarea>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row small-width-margin-bottom\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <button ng-click=\"editPunterProfile()\" ng-if=\"!(unEditMode)\" ng-disabled=\"submittingLoginForm\" class=\"btn btn-success pull-right\">\n" +
    "                    <i class=\"fa fa-spinner fa-spin\" ng-show=\"submittingLoginForm\"></i>  Save</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("public/profile/public_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/profile/public_profile.tpl.html",
    "<!--<div class=\"row\" style=\"margin: 10px !important;\">-->\n" +
    "    <!--<div class=\"col-md-6\">-->\n" +
    "        <!--<h2>Profile</h2>-->\n" +
    "        <!--&lt;!&ndash;<p>Sign in page</p>&ndash;&gt;-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div class=\"col-md-6\">-->\n" +
    "        <!--<ul class=\"breadcrumbs\">-->\n" +
    "            <!--<li><a href=\"#/\">Home</a></li>-->\n" +
    "            <!--<li>Profile</li>-->\n" +
    "        <!--</ul>-->\n" +
    "    <!--</div>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <div class=\" clear_both padding_fix\" style=\"margin: 10px !important;\">\n" +
    "        <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "        <div class=\"page-content\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-5 col-xs-12\">\n" +
    "                    <div class=\"profile_bg center-block\">\n" +
    "                        <div class=\"user-profile-sidebar\">\n" +
    "                                <div class=\"col-md-4 col-xs-6\"  upload-avatar=\"\">\n" +
    "                                    <img width=\"150px\" height=\"150px\" ng-src=\"{{punter.avatar_url}}\" class=\"pointer img-circle\"  >\n" +
    "                                    <button class=\"btn btn-default\" style=\"font-size: 10px\">Change Avatar</button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-8 col-xs-6\">\n" +
    "                                    <div class=\"user-identity\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <h4 ng-if=\"punter.first_name && punter.other_names\"><strong>{{ punter.first_name }}&nbsp;{{ punter.other_names }}</strong><span>   &nbsp;({{ punter.username }})</span></h4>\n" +
    "                                            <h4 ng-if=\"!(punter.first_name && punter.other_names)\"><strong>{{ punter.username }}</strong></h4>\n" +
    "                                        </div>\n" +
    "                                        <p class=\"row\">\n" +
    "                                            Account Status : <span class=\"label label-warning\">{{ punter.punter_current_status_format  | uppercase }}</span></span>\n" +
    "                                        </p>\n" +
    "                                        <p class=\"row\" ng-show=\"punter.email\"><i class=\"fa fa-envelope\"></i>\n" +
    "                                            <span >{{ punter.email }}</span>\n" +
    "                                        </p>\n" +
    "                                        <p class=\"row\" ng-show=\"punter.phone_number\"><i class=\"fa fa-mobile-phone\"></i>\n" +
    "                                            <span >{{ punter.phone_number }}</span>\n" +
    "                                        </p>\n" +
    "                                        <p class=\"row\" ng-show=\"punter.suburb && punter.city && punter.region\"><i class=\"fa fa-map-marker\"></i>\n" +
    "                                            <span ng-show=\"punter.suburb\">{{ punter.suburb }}</span>\n" +
    "                                            <span ng-show=\"punter.city\"> - {{ punter.city }}</span>\n" +
    "                                            <span ng-show=\"punter.region\">, ({{ punter.region }})</span>\n" +
    "                                        </p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"account-status-data \">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-4 col-xs-12\">\n" +
    "                                    <h6 class=\"text-muted text-center\">Last Login<br>\n" +
    "                                        <strong>{{ ( punter.last_login | amDateFormat:' Do MMM, YYYY  HH:mm') }}</strong><br>\n" +
    "                                        <span ng-if=\"!(punter.last_login)\" class=\"text-warning\" style=\"margin-top: 15px; display: inline-block;\">Recently</span>\n" +
    "                                        <small><span  am-time-ago=\"punter.last_login\"></span></small>\n" +
    "                                    </h6>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4 col-xs-12\"  style=\"border-left: solid 1px rgb(204, 204, 204)\">\n" +
    "                                    <h6 class=\"text-muted text-center\">Last Bid Date<br>\n" +
    "                                        <strong ng-if=\"punter.last_bid_date\">{{ punter.last_bid_date | amDateFormat:' Do MMM, YYYY  HH:mm' }}</strong>\n" +
    "                                        <span ng-if=\"!(punter.last_bid_date)\" class=\"text-warning\" style=\"margin-top: 15px; display: inline-block;\">No bids placed</span>\n" +
    "                                        <br>\n" +
    "                                        <small><span  am-time-ago=\"punter.last_bid_date\"></span></small>\n" +
    "                                    </h6>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-4 col-xs-12\" style=\"border-left: solid 1px rgb(204, 204, 204)\">\n" +
    "                                    <h6 class=\"text-muted text-center\">Last Top Up<br>\n" +
    "                                        <strong ng-if=\"punter.user_wallet.date_of_latest_wallet_top\">{{ punter.user_wallet.date_of_latest_wallet_top | amDateFormat:' Do MMM, YYYY  HH:mm' }}</strong>\n" +
    "                                        <span ng-if=\"!(punter.user_wallet.date_of_latest_wallet_top)\" class=\"text-warning\" style=\"margin-top: 12px; display: inline-block;\">Never topped up</span>\n" +
    "                                        <br>\n" +
    "                                        <small><span  am-time-ago=\"punter.user_wallet.date_of_latest_wallet_top\"></span></small>\n" +
    "                                    </h6>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"user-button margin-top \">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div  class=\"col-xs-12 col-md-4 small-width-margin-bottom\" ng-if=\"punter.punter_current_status == 'inactive' \">\n" +
    "                                    <button type=\"button\" verify-punter-modal=\"\" class=\"btn btn-success btn-sm btn-rounded center-block button-width\"><i class=\"fa fa-check\"></i> Enter Code</button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-4 small-width-margin-bottom\" ng-if=\"punter.punter_current_status == 'inactive' \">\n" +
    "                                    <button type=\"button\" ng-click=\"resendCode()\" class=\"btn btn-primary btn-sm btn-rounded center-block button-width\"><i class=\"fa fa-send-o\"></i> Resend Code</button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-4 small-width-margin-bottom\" ng-if=\"!(punter.punter_current_status == 'inactive')\">\n" +
    "                                    <button type=\"button\" ng-click=\"$state.go('public_home.topup')\" class=\"btn btn-primary btn-sm btn-rounded center-block button-width\"><i class=\"fa fa-money\"></i> Top Up Wallet</button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-4 small-width-margin-bottom\" ng-if=\"!(punter.punter_current_status == 'inactive')\">\n" +
    "                                    <button type=\"button\" pay-annual-fee=\"\" class=\"btn btn-sm btn-default btn-rounded center-block button-width\"><i class=\"fa fa-calendar-o\"></i> Pay Annual Fee</button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-4 small-width-margin-bottom\">\n" +
    "                                    <button type=\"button\" ng-click=\"logoutPunter()\" class=\"btn btn-sm btn-danger btn-rounded center-block center-block button-width\"><i class=\"fa fa-sign-out\"></i> &nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row margin-top\" ng-if=\"square_pop_upImages\" ng-controller=\"BwPublicGeneralController\">\n" +
    "                            <div class=\"col-md-12 hidden-sm hidden-xs\">\n" +
    "                                <a target=\"_blank\" class=\"\" ng-href=\"{{ square_pop_upImages.click_destination_url }}\">\n" +
    "                                    <img class=\"center-block \"  width=\"250\" height=\"250\"\n" +
    "                                         style=\"max-width : 250px; max-height: 250px\" ng-src=\"{{ square_pop_upImages.advert_image_url }}\" alt=\"Advertisement\">\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!--/block-web-->\n" +
    "                </div>\n" +
    "                <!--/col-md-5-->\n" +
    "                <div class=\"col-md-7 col-xs-12\">\n" +
    "                    <div class=\"block-web full\">\n" +
    "                        <ul class=\"nav nav-tabs nav-justified nav_bg\">\n" +
    "                            <li class=\"active\"><a  href=\"\" data-target=\"#my_info\" data-toggle=\"tab\"><i class=\"fa fa-user\"></i> My Info</a></li>\n" +
    "                            <li class=\"\"><a href=\"\"  data-target=\"#wallet\" data-toggle=\"tab\"><i class=\"fa fa-briefcase\"></i> Wallet</a></li>\n" +
    "                            <li class=\"\"><a  href=\"\" data-target=\"#auctions\" data-toggle=\"tab\"><i class=\"fa fa-clock-o\"></i> Auctions</a></li>\n" +
    "                            <li class=\"\"><a href=\"\"  data-target=\"#preferences\" data-toggle=\"tab\"><i class=\"fa fa-cogs\"></i> Preferences</a></li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"tab-content\">\n" +
    "                            <div class=\"tab-pane animated fadeInRight active in\" id=\"my_info\">\n" +
    "                                <div ng-include=\"'public/profile/my_info.tpl.html' \"></div>\n" +
    "                            </div>\n" +
    "                            <div class=\"tab-pane animated fadeInRight\" id=\"wallet\">\n" +
    "                                <div ng-include=\"'public/profile/punter_wallet.tpl.html' \"></div>\n" +
    "                            </div>\n" +
    "                            <div class=\"tab-pane animated fadeInRight\" id=\"auctions\">\n" +
    "                                <div ng-include=\"'public/profile/punter_auctions.tpl.html' \"></div>\n" +
    "                            </div>\n" +
    "                            <div class=\"tab-pane animated fadeInRight\" id=\"preferences\">\n" +
    "                                <div ng-include=\"'public/profile/punter_settings.tpl.html' \"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!--/tab-content-->\n" +
    "                    </div>\n" +
    "                    <!--/block-web-->\n" +
    "                </div>\n" +
    "                <!--/col-md-7-->\n" +
    "            </div>\n" +
    "            <!--/row-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- End content -->\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("public/profile/punter_auctions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/profile/punter_auctions.tpl.html",
    "<div class=\"user-profile-content\" >\n" +
    "    <h5 ng-if=\"auctionsParticipatedIn.length\"><strong>Auction Statistics</strong></h5>\n" +
    "    <div ng-if=\"auctionsParticipatedIn.length\" class=\"table-responsive\">\n" +
    "        <table class=\"table table-bordered table-hover\">\n" +
    "            <tr>\n" +
    "                <td width=\"60%\">Auctions Participated In </td>\n" +
    "                <td class=\"center text-center\" width=\"40%\">{{ auctionsDetails.auctions + ' auction' }}<span ng-if=\"auctionsDetails.auctions != 1\">s</span></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Total BCS Spent</td>\n" +
    "                <td class=\"center text-center\" >{{ auctionsDetails.bcs_spent | number }} bcs</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Total Bids Placed </td>\n" +
    "                <td class=\"center text-center\" >{{ auctionsDetails.bids_placed + ' bid' }}<span ng-if=\"auctionsDetails.bids_placed != 1\">s</span></td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <hr ng-if=\"auctionsParticipatedIn.length\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <h5 ng-if=\"auctionsParticipatedIn.length\"><strong>Auction Breakdown</strong></h5>\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-bordered table-hover\" ng-if=\"auctionsParticipatedIn.length\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <td class=\"center text-center\">Last Bid Date</td>\n" +
    "                        <td class=\"center text-center\">Auctioned Item</td>\n" +
    "                        <td class=\"center text-center\">Auction Code</td>\n" +
    "                        <td class=\"center text-center\">BCS Spent</td>\n" +
    "                        <td class=\"center text-center\">Total Bids Placed</td>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"auction in auctionsParticipatedIn | limitTo : numberOfAuctionsToShow\">\n" +
    "                        <td class=\"center text-center\">{{ auction.date_of_record | amDateFormat:' Do MMM, YYYY HH:mm'}}</td>\n" +
    "                        <td class=\"center text-center\">{{ auction.auction.auction_tagline || '---' }}</td>\n" +
    "                        <td class=\"center text-center\">{{ auction.auction.auction_code }}</td>\n" +
    "                        <td class=\"center text-center\">{{ auction.total_bid_amount | number }} bcs</td>\n" +
    "                        <td class=\"center text-center\">{{ auction.number_of_bids +  ' bid' }}<span ng-if=\"auction.number_of_bids != 1\">s</span></td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                <p ng-if=\"auctionsParticipatedIn.length > numberOfAuctionsToShow\" ng-click=\"addToShowingAuctions()\" class=\"text-center center-block pointer btn btn-link btn-sm\">Show More</p>\n" +
    "\n" +
    "                <p ng-if=\"!(auctionsParticipatedIn.length)\" style=\"margin: 60px 0\" class=\"h4 text-center\">You haven't participated in any auctions.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("public/profile/punter_settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/profile/punter_settings.tpl.html",
    "<ul class=\"media-list\">\n" +
    "    <li class=\"media\" style=\"overflow: visible\">\n" +
    "        <div class=\"media-body\" style=\"overflow: visible\">\n" +
    "            <div class=\"media-heading\">\n" +
    "                <a href=\"\" class=\"h5\">Auction Alert</a> <small class=\"hidden\">notifications</small>\n" +
    "                <div class=\"btn-group pull-right\">\n" +
    "                    <button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                        {{ auction_alert }}  <span class=\"caret\"></span>\n" +
    "                    </button>\n" +
    "                    <ul class=\"dropdown-menu\" role=\"menu\" ng-init=\"auction_alert = 'Receive' \">\n" +
    "                        <li><a href=\"\" ng-click=\"auction_alert = 'Receive' \">Receive</a></li>\n" +
    "                        <li><a href=\"\" ng-click=\"auction_alert = 'Don\\'t Receive' \">Don't Receive</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p>Get notified about new auctions on {{ app_name }}</p>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "\n" +
    "    <hr class=\"hr5\"/>\n" +
    "\n" +
    "    <li class=\"media\" style=\"overflow: visible\">\n" +
    "        <div class=\"media-body\" style=\"overflow: visible\">\n" +
    "            <div class=\"media-heading\">\n" +
    "                <a href=\"\" class=\"h5\">Toast Notifications</a> <small class=\"hidden\">notifications</small>\n" +
    "                <div class=\"btn-group pull-right\">\n" +
    "                    <button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                       {{ toast_notifications }}  <span class=\"caret\"></span>\n" +
    "                    </button>\n" +
    "                    <ul class=\"dropdown-menu\" role=\"menu\" ng-init=\"toast_notifications = 'Show' \">\n" +
    "                        <li><a href=\"\" ng-click=\"toast_notifications = 'Show' \">Show</a></li>\n" +
    "                        <li><a href=\"\" ng-click=\"toast_notifications = 'Hide' \">Hide</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p>Display notifications when events occurs such as leaderboard changes</p>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "\n" +
    "\n" +
    "</ul>");
}]);

angular.module("public/profile/punter_wallet.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/profile/punter_wallet.tpl.html",
    "<div class=\"user-profile-content\" >\n" +
    "    <h5 ><strong>Wallet Details</strong></h5>\n" +
    "    <table class=\"table table-bordered table-hover\">\n" +
    "        <tr>\n" +
    "            <td width=\"55%\">Available {{ app_name }} Credits </td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"punter.user_wallet.amount_available_in_wallet\">\n" +
    "                {{ punter.user_wallet.amount_available_in_wallet | number  }}\n" +
    "                <span ng-if=\"punter.user_wallet.amount_available_in_wallet\"> bcs</span></td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"!(punter.user_wallet.amount_available_in_wallet)\"> --- </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "            <td width=\"55%\">Total {{ app_name }} Credits Spent</td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"punter.user_wallet.amount_spent_from_wallet\">\n" +
    "                {{ punter.user_wallet.amount_spent_from_wallet | number  }}\n" +
    "                <span ng-if=\"punter.user_wallet.amount_spent_from_wallet\"> bcs</span></td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"!(punter.user_wallet.amount_spent_from_wallet)\"> --- </td>\n" +
    "\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "            <td width=\"55%\">Last Amount Paid </td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"punter.user_wallet.latest_amount_loaded_on_wallet\">\n" +
    "                {{ punter.user_wallet.latest_amount_loaded_on_wallet | currency : 'GHc ' : 2 }}</td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"!(punter.user_wallet.latest_amount_loaded_on_wallet)\"> --- </td>\n" +
    "\n" +
    "        </tr>\n" +
    "\n" +
    "        <tr>\n" +
    "            <td width=\"55%\">Last {{ app_name }} Credits Bought</td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"punter.user_wallet.latest_bid2win_credit_loaded\">\n" +
    "                {{ punter.user_wallet.latest_bid2win_credit_loaded | number }}\n" +
    "                <span ng-if=\"punter.user_wallet.latest_bid2win_credit_loaded\"> bcs</span></td>\n" +
    "            <td class=\"center text-center\" width=\"40%\" ng-if=\"!(punter.user_wallet.latest_bid2win_credit_loaded)\"> --- </td>\n" +
    "\n" +
    "        </tr>\n" +
    "\n" +
    "    </table>\n" +
    "\n" +
    "    <hr >\n" +
    "\n" +
    "    <h5><strong>Topup Statistics</strong></h5>\n" +
    "    <div ng-if=\"topupHistory.length\" class=\"table-responsive\">\n" +
    "        <table class=\"table table-bordered table-hover\">\n" +
    "            <tr>\n" +
    "                <td width=\"60%\">Total Topup Amount </td>\n" +
    "                <td class=\"center text-center\" width=\"40%\">{{ punterTopupObject.money_in_total | currency : 'GHc ' : 2 }}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Total BCS Bought </td>\n" +
    "                <td class=\"center text-center\" >{{ punterTopupObject.bcs_in_total | number  }} bcs</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Number of Times Topped Up </td>\n" +
    "                <td class=\"center text-center\" >{{ topupHistory.length + ' time' }}<span ng-if=\"topupHistory.length != 1\">s</span></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td>Last Topup Date </td>\n" +
    "                <td class=\"center text-center\" >{{ topupHistory[0].topped_up_date | amDateFormat:' Do MMM, YYYY  | HH:mm'}}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <hr ng-if=\"topupHistory.length\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <h5 ng-if=\"topupHistory.length\"><strong>Topup Breakdown</strong></h5>\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-bordered table-hover\" ng-if=\"topupHistory.length\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <td class=\"center text-center\">Topup Date</td>\n" +
    "                        <td class=\"center text-center\">Amount</td>\n" +
    "                        <td class=\"center text-center\">Credits Equivalent</td>\n" +
    "                        <td class=\"hidden center text-center\">Mpower Name</td>\n" +
    "                        <td class=\"hidden center text-center\">Mpower Email</td>\n" +
    "                        <td class=\"hidden center text-center\">Mpower Phone Number</td>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"item in topupHistory\">\n" +
    "                        <td class=\"center text-center\">{{ item.topped_up_date | amDateFormat:' Do MMM, YYYY  |  HH:mm'}}</td>\n" +
    "                        <td class=\"center text-center\">{{ item.money_topped_up | currency : 'GHc ' : 2 }}</td>\n" +
    "                        <td class=\"center text-center\">{{ item.amount_in_bid2win_credit | number  }} bcs</td>\n" +
    "                        <td class=\"hidden center text-center\">{{ item.mpower_name }}</td>\n" +
    "                        <td class=\"hidden center text-center\">{{ item.mpower_email }}</td>\n" +
    "                        <td class=\"hidden center text-center\">{{ item.mpower_phone_number }}</td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "\n" +
    "                </table>\n" +
    "\n" +
    "                <p ng-if=\"!(topupHistory.length)\" style=\"margin: 60px 0\" class=\"h4 text-center\">No top up record under this account</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
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

angular.module("public/register/public_register_step_1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/register/public_register_step_1.tpl.html",
    "<div class=\"col-sm-3 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <fieldset>\n" +
    "        <h2 class=\"classic-title\">Personal Details</h2>\n" +
    "\n" +
    "        <div class=\"row \" ng-class=\"{'has-error  mag-bottom-5' : login_validation.first_name || submittingRegistrationForm && punterRegistrationForm.first_name.$error.required }\">\n" +
    "            <label for=\"first_name\">First Name<span class=\"required\">*</span></label>\n" +
    "            <input type=\"text\" id=\"first_name\" placeholder=\"Your First Name\" name=\"first_name\" ng-model=\"punter_register_form.first_name\" class=\"form-control\" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.first_name\">{{login_validation.first_name}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.other_names || submittingRegistrationForm && punterRegistrationForm.other_names.$error.required }\">\n" +
    "            <label for=\"other_names\">Other Names<span class=\"required\">*</span></label>\n" +
    "            <input type=\"text\" id=\"other_names\" placeholder=\"Other Names\" name=\"other_names\" ng-model=\"punter_register_form.other_names\" class=\"form-control\" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.other_names\">{{login_validation.other_names}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : submittingRegistrationForm && punterRegistrationForm.email.$error.email || login_validation.email || submittingRegistrationForm && punterRegistrationForm.email.$error.required }\">\n" +
    "            <label for=\"email\">Email<span class=\"required\">*</span></label>\n" +
    "            <input  type=\"email\" id=\"email\" placeholder=\"Your Email\" ng-model=\"punter_register_form.email\" name=\"email\"\n" +
    "                    ng-pattern=\"/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4}/\" class=\"form-control\" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"submittingRegistrationForm && punterRegistrationForm.email.$error.email\">Email address is not valid</span>\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.email\">{{ login_validation.email }}</span>\n" +
    "\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.gender || submittingRegistrationForm && punterRegistrationForm.gender.$error.required }\">\n" +
    "            <label for=\"gender\">Gender<span class=\"required\">*</span></label>\n" +
    "            <select   name=\"gender\" id=\"gender\" ng-model=\"punter_register_form.gender\" class=\"form-control \" required=\"\">\n" +
    "                <option value=\"\">Select your gender</option>\n" +
    "                <option value=\"male\">Male</option>\n" +
    "                <option value=\"female\">Female</option>\n" +
    "            </select>\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.gender\">{{login_validation.gender}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "</div><!-- End .col-md-6 -->\n" +
    "\n" +
    "<div class=\"col-md-3 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <fieldset>\n" +
    "        <h2 class=\"classic-title\">Account Details</h2>\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.username || submittingRegistrationForm && punterRegistrationForm.username.$error.required }\">\n" +
    "            <label for=\"username\">Username<span class=\"required\">*</span></label>\n" +
    "            <input type=\"text\" id=\"username\" placeholder=\"Your Username\" name=\"username\" ng-model=\"punter_register_form.username\" class=\"form-control \" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.username\">{{login_validation.username}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.password || submittingRegistrationForm && punterRegistrationForm.password.$error.required }\">\n" +
    "            <label for=\"password\">Password<span class=\"required\">*</span></label>\n" +
    "            <input type=\"password\" id=\"password\" placeholder=\"Your Password \" name=\"password\" ng-model=\"punter_register_form.password\" class=\"form-control \" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.password\">{{login_validation.password}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.confirm_password || submittingRegistrationForm && punterRegistrationForm.confirm_password.$error.required }\">\n" +
    "            <label for=\"confirm_password\">Confirm Password<span class=\"required\">*</span></label>\n" +
    "            <input type=\"password\" id=\"confirm_password\" placeholder=\"Confirm Password\" name=\"confirm_password\" ng-model=\"punter_register_form.confirm_password\" class=\"form-control \" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.confirm_password\">{{login_validation.confirm_password}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.phone_number || submittingRegistrationForm && punterRegistrationForm.phone_number.$error.required }\">\n" +
    "            <label for=\"phone_number\">Mobile Number<span class=\"required\">*</span></label>\n" +
    "            <input type=\"text\" name=\"phone_number\" id=\"phone_number\" ng-maxlength=\"13\" maxlength=\"13\" placeholder=\"Your Phone Number in the format +233#########\" ng-model=\"punter_register_form.phone_number\"  class=\"form-control\" required=\"\">\n" +
    "\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"submittingRegistrationForm &&  punterRegistrationForm.phone_number.$error.required\">Please enter a valid phone number starting with +233, without the '0'.</span>\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.phone_number\">{{login_validation.phone_number}}</span>\n" +
    "\n" +
    "\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"col-md-6 col-sm-6 col-xs-12 margin-top-15 pull-right\">\n" +
    "\n" +
    "                <!--<input type=\"submit\" class=\"btn btn-custom-2 col-sm-12 btn-lg md-margin pull-right \" value=\"SIGN ME UP\">-->\n" +
    "                <button wz-next class=\"btn btn-primary col-sm-12 btn-sm md-margin pull-right \">Next &nbsp; <i class=\"btn-icon fa fa-arrow-circle-o-right\"></i></button>\n" +
    "            </div><!-- End .col-md-6 -->\n" +
    "        </div><!-- End .row -->\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "\n" +
    "</div><!-- End .col-md-6 -->");
}]);

angular.module("public/register/public_register_step_2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/register/public_register_step_2.tpl.html",
    "<h2 class=\"classic-title\">Personal Details</h2>\n" +
    "\n" +
    "<div class=\"col-sm-3 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <fieldset>\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.region || submittingRegistrationForm && punterRegistrationForm.region.$error.required }\">\n" +
    "            <label for=\"region\">Region<span class=\"required\">*</span></label>\n" +
    "            <select id=\"region\" name=\"region\" ng-model=\"punter_register_form.region\" class=\"form-control\" required=\"\">\n" +
    "                <option value=\"\">Select a region</option>\n" +
    "                <option value=\"Greater Accra\">Greater Accra</option>\n" +
    "                <option value=\"Ashanti\">Ashanti</option>\n" +
    "                <option value=\"Brong Ahafo\">Brong Ahafo</option>\n" +
    "                <option value=\"Central\">Central</option>\n" +
    "                <option value=\"Eastern\">Eastern</option>\n" +
    "                <option value=\"Western\">Western</option>\n" +
    "                <option value=\"Volta\">Volta</option>\n" +
    "                <option value=\"Northern\">Northern</option>\n" +
    "                <option value=\"Upper East\">Upper East</option>\n" +
    "                <option value=\"Upper West\">Upper East</option>\n" +
    "\n" +
    "            </select>\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.region\">{{login_validation.region}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.city || submittingRegistrationForm && punterRegistrationForm.city.$error.required }\">\n" +
    "            <label for=\"city\">City<span class=\"required\">*</span></label>\n" +
    "            <input id=\"city\" type=\"text\" placeholder=\"City where you live\" name=\"city\" ng-model=\"punter_register_form.city\" class=\"form-control\" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.city\">{{login_validation.city}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.suburb || submittingRegistrationForm && punterRegistrationForm.suburb.$error.required }\">\n" +
    "            <label for=\"suburb\">Suburb<span class=\"required\">*</span></label>\n" +
    "            <input id=\"suburb\" type=\"suburb\" placeholder=\"Suburb or area where you stay\" ng-model=\"punter_register_form.suburb\" name=\"suburb\" class=\"form-control has-error\" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.suburb\">{{login_validation.suburb}}</span>\n" +
    "\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-md-6 col-sm-6 col-xs-12 margin-top-15\">\n" +
    "                <!--<input type=\"submit\" class=\"btn btn-custom-2 col-sm-12 btn-lg md-margin pull-right \" value=\"SIGN ME UP\">-->\n" +
    "                <button wz-previous class=\"btn btn-primary pull-left col-sm-12  md-margin\" style=\"padding: 6px !important;\"><i class=\"btn-icon fa fa-arrow-circle-o-left\"></i> &nbsp; Previous</button>\n" +
    "            </div><!-- End .col-md-6 -->\n" +
    "        </div><!-- End .row -->\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-3 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <fieldset>\n" +
    "        <!--<h2 class=\"classic-title\">Personal Details</h2>-->\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.occupation || submittingRegistrationForm && punterRegistrationForm.occupation.$error.required }\">\n" +
    "            <label for=\"occupation\">Occupation<span class=\"required\">*</span></label>\n" +
    "            <input type=\"text\" placeholder=\"Your current occupation\" id=\"occupation\" name=\"occupation\" ng-model=\"punter_register_form.occupation\" class=\"form-control \" required=\"\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.occupation\">{{login_validation.occupation}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.marital_status || submittingRegistrationForm && punterRegistrationForm.marital_status.$error.required }\">\n" +
    "            <label for=\"marital_status\">Marital Status<span class=\"required\">*</span></label>\n" +
    "            <select id=\"marital_status\" name=\"marital_status\" ng-model=\"punter_register_form.marital_status\" class=\"form-control \" required=\"\">\n" +
    "                <option value=\"\">Choose your marital status</option>\n" +
    "                <option value=\"single\">Single</option>\n" +
    "                <option value=\"married\">Married</option>\n" +
    "                <option value=\"divorced\">Divorced</option>\n" +
    "            </select>\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.marital_status\">{{login_validation.marital_status}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"row margin-top-15\" ng-class=\"{'has-error  mag-bottom-5' : login_validation.date_of_birth || submittingRegistrationForm && punterRegistrationForm.date_of_birth.$error.required }\">\n" +
    "            <label for=\"date_of_birth\">Date of Birth<span class=\"required\">*</span></label>\n" +
    "            <input id=\"date_of_birth\" type=\"text\"\n" +
    "                   placeholder=\"Your date of birth\"\n" +
    "                   name=\"date_of_birth\" ng-model=\"punter_register_form.date_of_birth\" class=\"form-control datepicker\"\n" +
    "                   ng-init=\"statePickADate()\" required=\"\" data-value=\"{{punter_register_form.date_of_birth}}\">\n" +
    "            <span class=\"help-block text-left mag-bottom-25\" ng-show=\"login_validation.date_of_birth\">{{login_validation.date_of_birth}}</span>\n" +
    "        </div><!-- End .input-group -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-md-6 col-sm-6 col-xs-12 margin-top-15 pull-right\">\n" +
    "                <!--<input type=\"submit\" class=\"btn btn-custom-2 col-sm-12 btn-lg md-margin pull-right \" value=\"SIGN ME UP\">-->\n" +
    "                <button wz-next class=\"btn btn-primary col-sm-12  md-margin  \">Next &nbsp; <i class=\"btn-icon fa fa-arrow-circle-o-right\"></i></button>\n" +
    "            </div><!-- End .col-md-6 -->\n" +
    "        </div><!-- End .row -->\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("public/register/public_register_step_3.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/register/public_register_step_3.tpl.html",
    "<div class=\"row margin-top-15\">\n" +
    "\n" +
    "    <div class=\"col-md-6 col-md-offset-3\" ng-class=\"{'has-error' : submittingRegistrationForm && !punter_register_form.agree_to_terms}\">\n" +
    "\n" +
    "        <label for=\"agree_to_terms\">Privacy Policy<span class=\"required\">*</span></label>\n" +
    "\n" +
    "        <div class=\"form-control text-center\"  >\n" +
    "            <div class=\"custom-checkbox\">\n" +
    "                <input id=\"agree_to_terms\" type=\"checkbox\" name=\"terms_and_conditions\" required=\"\"  ng-model=\"punter_register_form.agree_to_terms\"> <span class=\"checbox-container\">\n" +
    "									 </span>\n" +
    "                <!--I wish to subscribe to the Bid2Win newsletter.-->\n" +
    "                <span style=\"margin-left: 25px \">I have read and agree to the <a ui-sref=\"public_home.privacy_policy\">Privacy Policy</a>.</span>\n" +
    "            </div><!-- End .input-group -->\n" +
    "        </div><!-- End .input-desc -->\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"row margin-top-30\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3 margin-60 margin-top-15\" style=\"margin-top: 20px !important;\">\n" +
    "\n" +
    "            <a  wz-next class=\"btn main-button col-sm-4 col-sm-offset-4 btn-lg\" >SIGN ME UP</a>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row margin-top-30\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3 margin-60 margin-top-15\">\n" +
    "\n" +
    "            <p  class=\"text-center btn-lg\"><a href=\"\" wz-cancel> Go to previous step</a></p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("public/topup/public_topup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("public/topup/public_topup.tpl.html",
    "<!--<div class=\"page-banner\">-->\n" +
    "<!--<div class=\"\">-->\n" +
    "<!--<div class=\"row\" style=\"margin: 10px !important;\">-->\n" +
    "<!--<div class=\"col-md-6\">-->\n" +
    "<!--<h2>Wallet Topup</h2>-->\n" +
    "<!--</div>-->\n" +
    "<!--<div class=\"col-md-6\">-->\n" +
    "<!--<ul class=\"breadcrumbs\">-->\n" +
    "<!--<li><a href=\"#/\">Home</a></li>-->\n" +
    "<!--<li>Wallet Topup</li>-->\n" +
    "<!--</ul>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "<!--</div>-->\n" +
    "\n" +
    "<div id=\"content\" class=\"add-shadow\" style=\"margin-bottom: 20px\">\n" +
    "    <div class=\"\">\n" +
    "        <div class=\"row\" style=\"margin: 10px !important;\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div class=\"row classic-title\">\n" +
    "                    <div class=\"col-xs-12 col-sm-8\" style=\"margin-left: -15px;\">\n" +
    "                        <span class=\"h3\">Bidding Wallet TopUp</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <div class=\"col-xs-12 col-sm-2 pull-right\" title=\"Back to Auction \">\n" +
    "                        <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" ng-click=\"goBackInHistory()\">\n" +
    "                            <i class=\"fa fa-arrow-circle-left\"></i>&nbsp;&nbsp;&nbsp;  Back\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"panel panel-success\">\n" +
    "                    <div class=\"panel-heading hidden\">\n" +
    "                        <div class=\"panel-title\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-6\" style=\"margin-top: 5px \">\n" +
    "                                    <h3><span class=\"fa fa-money\"></span> Bidding Wallet TopUp</h3>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-2 pull-right\" style=\"margin: 9px \">\n" +
    "                                    <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" ng-click=\"$state.go('public_home')\">\n" +
    "                                        <span class=\"fa fa-arrow-circle-left\"></span>&nbsp;&nbsp;&nbsp;  Back to Auctions\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-2 hidden-xs hidden-xs\" style=\"margin-top: 10px\">\n" +
    "                                <img class=\"img-responsive\" src=\"/punters/assets/images/logo.png\">\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-md-4\">\n" +
    "                                <h4 class=\"product-name\"><strong>Bidding Credits (bcs)</strong></h4>\n" +
    "                                <h4>\n" +
    "                                    <small class=\"text-muted\">This is the allowed currency on the {{ app_name }} platform</small>\n" +
    "                                    <br>\n" +
    "                                    <small class=\"text-left\" >Ratio  =  <code>GHc 1 : 100 bcs</code></small>\n" +
    "                                </h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-md-6\">\n" +
    "                                <div class=\"col-md-3 hidden-sm hidden-xs text-right\">\n" +
    "                                    <h4 class=\"text-muted\">Amount</h4>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-7\" >\n" +
    "                                    <div class=\"input-group\">\n" +
    "                                        <span class=\"input-group-addon hidden-xs\" id=\"creditMultiplierValue\">GHc</span>\n" +
    "                                        <input type=\"number\" class=\"form-control input\" ng-model=\"creditMultiplierValue\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-2 hidden-sm hidden-xs\">\n" +
    "                                    <button type=\"button\" class=\"btn btn-link btn-xs\" style=\"padding: 5px 14px !important;\" ng-click=\"creditMultiplierValue = 1\">\n" +
    "                                        <span class=\"fa fa-refresh\"> </span>\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-11 pull-right col-xs-12 text-center\">\n" +
    "                                    <small style=\"font-size: 100%\" class=\"help-block text-muted\"><i class=\"fa fa-info-circle\"></i> Enter the amount you wish to pay</small>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <hr>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\" col-md-4 hidden-xs hidden-sm\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-left text-muted\" > </h4><!--Credit Conversion Ratio   :-->\n" +
    "                            </div>\n" +
    "                            <div class=\"visible-sm col-sm-3\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-left text-muted\" >Ratio</h4><!--Ratio-->\n" +
    "                            </div>\n" +
    "                            <div class=\" col-xs-6 col-md-3 col-sm-4 hidden-sm hidden-xs\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-left\" ><code class=\"hidden\">GHc 1 : 100 bcs</code></h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 hidden-xs hidden-sm\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-right ng-cloak text-muted\">Total {{ app_name }} Credits :</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"visible-sm visible-xs col-xs-6\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-left ng-cloak text-muted\">Credits</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-md-2 col-sm-3\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-center text-muted\"><strong>{{ creditMultiplierValue * 100 }} bcs</strong></h4>\n" +
    "                                <!--<button type=\"button\" class=\"btn btn-success btn-block\">-->\n" +
    "                                <!--TopUp with MPower-->\n" +
    "                                <!--</button>-->\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <hr>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-xs-6 hidden\" style=\"margin-top: 12px\">\n" +
    "                                <h5 class=\"text-center text-muted\" ng-show=\"punter.punter_current_status == 'confirmed'\">This is your first topup attempt. The registration fee of <strong>GHc 1</strong>\n" +
    "                                    will be deducted from the final topup amount</h5>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-6 hidden-xs hidden-sm\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-right text-muted\"><strong></strong></h4>\n" +
    "                            </div>\n" +
    "                            <div class=\" col-md-4 col-xs-6\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-center text-muted hidden-sm hidden-xs\"><strong>Total Charge :</strong></h4>\n" +
    "                                <h4 class=\"text-left text-muted visible-sm visible-xs\"><strong>Total Charge :</strong></h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-md-2 col-sm-3\" style=\"margin-top: 12px\">\n" +
    "                                <h4 class=\"text-center text-muted\"><strong>GHc {{ creditMultiplierValue * 1 }}</strong></h4>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <hr>\n" +
    "                        <!--<div class=\"row hidden\">-->\n" +
    "                        <!--<div class=\"text-center\">-->\n" +
    "                        <!--<div class=\"col-xs-9\">-->\n" +
    "                        <!--<h6 class=\"text-right \">Added items?</h6>-->\n" +
    "                        <!--</div>-->\n" +
    "                        <!--<div class=\"col-xs-3\">-->\n" +
    "                        <!--<button type=\"button\" class=\"btn btn-default btn-sm btn-block\">-->\n" +
    "                        <!--Update Wallet (former vesion)-->\n" +
    "                        <!--</button>-->\n" +
    "                        <!--</div>-->\n" +
    "                        <!--</div>-->\n" +
    "                        <!--</div>-->\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-footer\" style=\"background-color : white\">\n" +
    "                        <div class=\"row text-center\">\n" +
    "                            <div class=\"col-md-9 col-xs-12\" style=\"margin: 8px auto\">\n" +
    "                                <img src=\"punters/assets/images/mpower_options.jpg\" height=\"32px\" class=\"img-responsive text-right pull-right\">\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-3 col-xs-12\" style=\"margin: 8px auto\">\n" +
    "                                <button ng-disabled=\"!creditMultiplierValue\" type=\"button\" class=\"btn btn-success center-block\" ng-click=\"initiateTopup(creditMultiplierValue * 1)\">\n" +
    "                                    <!--ng-click=\"initiateTopup(creditMultiplierValue * 1)-->\n" +
    "                                    Click to Top Up\n" +
    "                                    <!--<a style=\"color: #FFFFFF !important;\" data-ng-href=\"{{ topUpUrl }}\" ng-show=\"creditMultiplierValue\">Click to Top Up</a>-->\n" +
    "                                    <!--<a style=\"color: #FFFFFF !important;\" ng-hide=\"creditMultiplierValue\">Specify Topup Amount</a>-->\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div><!-- End .row -->\n" +
    "    </div><!-- End .container -->\n" +
    "</div><!-- End .content -->");
}]);
