angular.module('templates.app', ['app/admin/profile.tpl.html', 'app/admin/settings.tpl.html', 'app/home/home.tpl.html', 'app/survey/analytics/detailed_analytics.tpl.html', 'app/survey/create/create_server_wizard.tpl.html', 'app/survey/forms/design_formbuilder/design_form.tpl.html', 'app/survey/list_all/survey_list.tpl.html', 'app/survey/respondents/respondents.tpl.html', 'app/survey/selected/selected_survey.tpl.html', 'common/modals/deleteSurveyModal.tpl.html', 'common/modals/editSurveyModal.tpl.html', 'common/modals/previewSurveyFormModal.tpl.html', 'common/partials/header.tpl.html']);

angular.module("app/admin/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/admin/profile.tpl.html",
    "<div class=\"container clear_both padding_fix\">\n" +
    "        <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "        <div class=\"page-content\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "              <div class=\"profile_bg\">\n" +
    "                <div class=\"user-profile-sidebar\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-md-4\"><img src=\"images/pro.png\"></div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                      <div class=\"user-identity\">\n" +
    "                        <h4><strong>John Doe</strong></h4>\n" +
    "                        <p><i class=\"fa fa-map-marker\"></i> Riaxe Systems Pvt</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"account-status-data\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                      <h5><strong>2,173</strong><br>\n" +
    "                        Posts</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                      <h5><strong>14</strong><br>\n" +
    "                        Following</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                      <h5><strong>100</strong><br>\n" +
    "                        Followers</h5>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"user-button\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                      <button class=\" btn btn-primary btn-rounded\" type=\"button\"><i class=\"fa fa-envelope\"></i> Send Message</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                      <button class=\"btn btn-default btn-rounded\" type=\"button\"><i class=\"fa fa-user\"></i> Add as friend</button>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div> <small class=\"\">about me</small>\n" +
    "                  <p>Artist</p>\n" +
    "                  <small class=\"\">info</small>\n" +
    "                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.</p>\n" +
    "                  <div class=\"line\"></div>\n" +
    "                  <p class=\"m-t-sm\"> </p>\n" +
    "                </div>\n" +
    "                <h6><strong>CONNECTION</strong></h6>\n" +
    "                <div class=\"\">\n" +
    "                  <ul class=\"social_icons \">\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <!--/block-web-->\n" +
    "              <section class=\"panel panel-default \">\n" +
    "                <form>\n" +
    "                  <textarea style=\"width:414px;\" class=\"form-control no-border profile_form\" rows=\"3\" placeholder=\"What are you doing...\"></textarea>\n" +
    "                </form>\n" +
    "                <footer class=\"profile_form\">\n" +
    "                  <button class=\"btn btn-info pull-right btn-sm\">POST</button>\n" +
    "                  <ul class=\"nav nav-pills nav-sm\">\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-camera text-muted\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-video-camera text-muted\"></i></a></li>\n" +
    "                  </ul>\n" +
    "                </footer>\n" +
    "              </section>\n" +
    "              <section class=\"panel panel-default profile_bg\">\n" +
    "                <h4 class=\"font-thin padder\">Latest Tweets</h4>\n" +
    "                <ul class=\"profile_list\">\n" +
    "                  <li class=\"profile_list-item\">\n" +
    "                    <p>Wellcome <a href=\"#\" class=\"text-info\">@Drew Wllon</a> and play this web application template, have fun1 </p>\n" +
    "                    <small class=\"tweets\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small> </li>\n" +
    "                  <li class=\"profile_list-item\">\n" +
    "                    <p>Morbi nec <a href=\"#\" class=\"text-info\">@Jonathan George</a> nunc condimentum ipsum dolor sit amet, consectetur</p>\n" +
    "                    <small class=\"tweets\"><i class=\"fa fa-clock-o\"></i> 1 hour ago</small> </li>\n" +
    "                  <li class=\"profile_list-item\">\n" +
    "                    <p><a href=\"#\" class=\"text-info\">@Josh Long</a> Vestibulum ullamcorper sodales nisi nec adipiscing elit. </p>\n" +
    "                    <small class=\"tweets\"><i class=\"fa fa-clock-o\"></i> 2 hours ago</small> </li>\n" +
    "                </ul>\n" +
    "              </section>\n" +
    "              <section class=\"panel \">\n" +
    "                <div class=\"panel-body\"> <a href=\"#\" class=\" pull-left m-r\"><img src=\"images/pro.png\"></a> <a href=\"#\" class=\"text-info\">@Mike Mcalidek <i class=\"fa fa-twitter\"></i></a> <br>\n" +
    "                  <small class=\"\">2,415 followers / 225 tweets</small> <br>\n" +
    "                  <a href=\"#\" class=\"btn btn-xs btn-success m-t-xs pull-right\">Follow</a> </div>\n" +
    "              </section>\n" +
    "            </div>\n" +
    "            <!--/col-md-4-->\n" +
    "            <div class=\"col-md-8\">\n" +
    "              <div class=\"block-web full\">\n" +
    "                <ul class=\"nav nav-tabs nav-justified nav_bg\">\n" +
    "                  <li class=\"\"><a data-toggle=\"tab\" href=\"#about\"><i class=\"fa fa-user\"></i> About</a></li>\n" +
    "                  <li class=\"\"><a data-toggle=\"tab\" href=\"#edit-profile\"><i class=\"fa fa-pencil\"></i> Edit</a></li>\n" +
    "                  <li class=\"\"><a data-toggle=\"tab\" href=\"#user-activities\"><i class=\"fa fa-laptop\"></i> Activities</a></li>\n" +
    "                  <li class=\"active\"><a data-toggle=\"tab\" href=\"#mymessage\"><i class=\"fa fa-envelope\"></i> Message</a></li>\n" +
    "                </ul>\n" +
    "                <div class=\"tab-content\">\n" +
    "                  <div id=\"about\" class=\"tab-pane animated fadeInRight\">\n" +
    "                    <div class=\"user-profile-content\">\n" +
    "                      <h5><strong>ABOUT</strong> ME</h5>\n" +
    "                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>\n" +
    "                      <hr>\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                          <h5><strong>CONTACT</strong> ME</h5>\n" +
    "                          <address>\n" +
    "                          <strong>Phone</strong><br>\n" +
    "                          <abbr title=\"Phone\">+91 354 123 4567</abbr>\n" +
    "                          </address>\n" +
    "                          <address>\n" +
    "                          <strong>Email</strong><br>\n" +
    "                          <a href=\"mailto:#\">first.last@example.com</a>\n" +
    "                          </address>\n" +
    "                          <address>\n" +
    "                          <strong>Website</strong><br>\n" +
    "                          <a href=\"http://riaxe.com\">http://riaxe.com</a>\n" +
    "                          </address>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                          <h5><strong>MY</strong> SKILLS</h5>\n" +
    "                          <p>UI Design</p>\n" +
    "                          <p>Clean and Modern Web Design</p>\n" +
    "                          <p>PHP and MySQL Programming</p>\n" +
    "                          <p>Vector Design</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div id=\"edit-profile\" class=\"tab-pane animated fadeInRight\">\n" +
    "                    <div class=\"user-profile-content\">\n" +
    "                      <form role=\"form\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"FullName\">Full Name</label>\n" +
    "                          <input type=\"text\" value=\"John Doe\" id=\"FullName\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"Email\">Email</label>\n" +
    "                          <input type=\"email\" value=\"first.last@example.com\" id=\"Email\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"Username\">Username</label>\n" +
    "                          <input type=\"text\" value=\"john\" id=\"Username\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"Password\">Password</label>\n" +
    "                          <input type=\"password\" placeholder=\"6 - 15 Characters\" id=\"Password\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"RePassword\">Re-Password</label>\n" +
    "                          <input type=\"password\" placeholder=\"6 - 15 Characters\" id=\"RePassword\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"AboutMe\">About Me</label>\n" +
    "                          <textarea style=\"height: 125px;\" id=\"AboutMe\" class=\"form-control\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</textarea>\n" +
    "                        </div>\n" +
    "                        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n" +
    "                      </form>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div id=\"user-activities\" class=\"tab-pane\">\n" +
    "                    <ul class=\"media-list\">\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>John Doe</strong> Uploaded a photo <strong>\"DSC000254.jpg\"</strong> <br>\n" +
    "                          <i>2 minutes ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Imran Tahir</strong> Created an photo album <strong>\"Indonesia Tourism\"</strong> <br>\n" +
    "                          <i>8 minutes ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Colin Munro</strong> Posted an article <strong>\"London never ending Asia\"</strong> <br>\n" +
    "                          <i>an hour ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Corey Anderson</strong> Added 3 products <br>\n" +
    "                          <i>3 hours ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Morne Morkel</strong> Send you a message <strong>\"Lorem ipsum dolor...\"</strong> <br>\n" +
    "                          <i>12 hours ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Imran Tahir</strong> Updated his avatar <br>\n" +
    "                          <i>Yesterday</i></p>\n" +
    "                        </a> </li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                  <div id=\"mymessage\" class=\"tab-pane active\">\n" +
    "                    <ul class=\"media-list\">\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">John Doe</a> <small>Just now</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Tim Southee</a> <small>Yesterday at 04:00 AM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Kane Williamson</a> <small>January 17, 2014 05:35 PM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Lonwabo Tsotsobe</a> <small>January 17, 2014 05:35 PM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Dale Steyn</a> <small>January 17, 2014 05:35 PM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">John Doe</a> <small>Just now</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <!--/tab-content-->\n" +
    "              </div>\n" +
    "              <!--/block-web-->\n" +
    "            </div>\n" +
    "            <!--/col-md-8-->\n" +
    "          </div>\n" +
    "          <!--/row-->\n" +
    "        </div>\n" +
    "      </div>");
}]);

angular.module("app/admin/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/admin/settings.tpl.html",
    "<div class=\"ticket_open\">\n" +
    "    <div class=\"ticket_open_heading\">\n" +
    "        <h3 class=\"pull-left\"><span class=\"semi-bold\"><label for=\"settings\">Settings</label> </span></h3>\n" +
    "        <div class=\"ticket_open_search hidden\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input id=\"settings\" type=\"text\" class=\"form-control\" placeholder=\"Search settings\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Theme</span>\n" +
    "\n" +
    "                <p>Change the theme of the dashboard. <b>This will be saved to this browser ONLY</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                 <span class=\"dropdown\" dropdown on-toggle=\"toggled(open)\">\n" +
    "      <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          {{ themeChoice.name }}\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"choice in themes\">\n" +
    "              <a class=\"pointer\" ng-click=\"changeTheme(choice)\">{{ choice.name }}</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Header</span>\n" +
    "\n" +
    "                <p>{{ headerChoice.description }} <b>  This will be saved to this browser ONLY</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                 <span class=\"dropdown\" dropdown on-toggle=\"toggled(open)\">\n" +
    "      <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          {{ headerChoice.name }}\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"choice in headerOptions\">\n" +
    "              <a class=\"pointer\" ng-click=\"changeHeaderType(choice)\">{{ choice.name }}</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Navigation</span>\n" +
    "\n" +
    "                <p>{{ navChoice.description }}<b>  This will be saved to this browser ONLY</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                 <span class=\"dropdown\" dropdown on-toggle=\"toggled(open)\">\n" +
    "      <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          {{ navChoice.name }}\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"choice in navOptions\">\n" +
    "              <a class=\"pointer\" ng-click=\"changeNavType(choice)\">{{ choice.name }}</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Local Storage</span>\n" +
    "\n" +
    "                <p>Reset and clear local storage to default.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"clearStorage()\">Reset</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("app/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/home/home.tpl.html",
    "<div class=\"white_bg\" ng-hide=\"loadingSurveys\" ng-if=\"true\"><!--surveys.length < 1-->\n" +
    "    <h2 class=\"page-header text-center\">Welcome to Pegasusrises</h2>\n" +
    "    <div class=\"row\" style=\"padding-bottom: 50px\">\n" +
    "        <p class=\"h5 text-center\">Click the button below to create a survey on Pegasusrises</p>\n" +
    "        <div class=\"text-center\" style=\"margin: 50px 0\" id=\"ngJoyRide_1_gdrive\">\n" +
    "\n" +
    "            <!--This button appears if you've not selected a file-->\n" +
    "            <button ng-hide=\"files.length\" ui-sref=\"surveys.create_new\" data-effect=\"flipInX\" class=\"effect-button col-lg-offset-4 col-lg-4 btn-lg btn btn-primary\">\n" +
    "               <i class=\"fa fa-dashboard\"></i>&nbsp;&nbsp;&nbsp;Get Started\n" +
    "            </button>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container clear_both padding_fix\" ng-hide=\"loadingSurveys\" ng-if=\"false\">\n" +
    "    <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information green_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info green_symbols\"><i class=\"fa fa-users icon\"></i></div>\n" +
    "                    <span>TODAY SALES </span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_green\">\n" +
    "                        <div class=\"greenprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress1\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 20px;\" width=\"47\" height=\"20\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information blue_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info blue_symbols\"><i class=\"fa fa-shopping-cart icon\"></i></div>\n" +
    "                    <span>TODAY FEEDBACK</span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_blue\">\n" +
    "                        <div class=\"blueprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress2\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 22px;\" width=\"47\" height=\"22\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information red_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info red_symbols\"><i class=\"fa fa-comments icon\"></i></div>\n" +
    "                    <span>TODAY EARNINGS</span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_red\">\n" +
    "                        <div class=\"redprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress3\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 22px;\" width=\"47\" height=\"22\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information gray_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info gray_symbols\"><i class=\"fa fa-money icon\"></i></div>\n" +
    "                    <span>TODAY VISITS </span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_gray\">\n" +
    "                        <div class=\"grayprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress4\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 22px;\" width=\"47\" height=\"22\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--/row-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"block-web\">\n" +
    "                <h3 class=\"content-header\"> Quick Stats\n" +
    "                    <div data-toggle=\"buttons\" class=\"button-group pull-right\"> <a class=\"btn active border-gray right-margin\" href=\"javascript:;\"> <span class=\"button-content\">\n" +
    "\n" +
    "              Top this week </span> </a> <a class=\"btn border-gray right-margin\" href=\"javascript:;\"> <span class=\"button-content\">\n" +
    "\n" +
    "              Refering </span> </a> <a class=\"btn border-gray\" href=\"javascript:;\"> <span class=\"button-content\">\n" +
    "\n" +
    "              Others </span> </a>\n" +
    "                    </div><!--/button-group-->\n" +
    "                </h3>\n" +
    "                <div class=\"custom-bar-chart\">\n" +
    "                    <ul class=\"y-axis\">\n" +
    "                        <li><span>100</span></li>\n" +
    "                        <li><span>80</span></li>\n" +
    "                        <li><span>60</span></li>\n" +
    "                        <li><span>40</span></li>\n" +
    "                        <li><span>20</span></li>\n" +
    "                        <li><span>0</span></li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"30%\" class=\"value tooltips\" style=\"height: 30%;\"></div>\n" +
    "                        <div class=\"title\">Jan</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"50%\" class=\"value tooltips bar-bg-color\" style=\"height: 50%;\"></div>\n" +
    "                        <div class=\"title\">Fab</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"40%\" class=\"value tooltips\" style=\"height: 40%;\"></div>\n" +
    "                        <div class=\"title\">Mar</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"80%\" class=\"value tooltips\" style=\"height: 80%;\"></div>\n" +
    "                        <div class=\"title\">Apr</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"70%\" class=\"value tooltips bar-bg-color\" style=\"height: 70%;\"></div>\n" +
    "                        <div class=\"title\">May</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"50%\" class=\"value tooltips\" style=\"height: 50%;\"></div>\n" +
    "                        <div class=\"title\">Jun</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"40%\" class=\"value tooltips\" style=\"height: 40%;\"></div>\n" +
    "                        <div class=\"title\">Jul</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"35%\" class=\"value tooltips\" style=\"height: 35%;\"></div>\n" +
    "                        <div class=\"title\">Aug</div>\n" +
    "                    </div><!--/bar-->\n" +
    "\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"80%\" class=\"value tooltips\" style=\"height: 80%;\"></div>\n" +
    "                        <div class=\"title\">Sep</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"70%\" class=\"value tooltips bar-bg-color\" style=\"height: 70%;\"></div>\n" +
    "                        <div class=\"title\">Oct</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"50%\" class=\"value tooltips\" style=\"height: 50%;\"></div>\n" +
    "                        <div class=\"title\">Nov</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"40%\" class=\"value tooltips\" style=\"height: 40%;\"></div>\n" +
    "                        <div class=\"title\">Dec</div>\n" +
    "                    </div><!--/bar-->\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "                <!--/custom-bar-chart-->\n" +
    "            </div><!--/block-web-->\n" +
    "        </div><!--/col-md-6-->\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"panel panel-primary\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h4>Jaguar 'E' Type vehicles in the UK</h4>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"graph\" id=\"hero-graph\" style=\"position: relative;\"><svg height=\"340\" version=\"1.1\" width=\"510\" xmlns=\"http://www.w3.org/2000/svg\" style=\"overflow: hidden; position: relative; left: -0.5px; top: -0.56665px;\"><desc>Created with Raphaël 2.0.1</desc><defs/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"301\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">0</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,301H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"232\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">1,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,232H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"163\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">2,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,163H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"93.99999999999997\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"3.9999999999999716\">3,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,93.99999999999997H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"25\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">4,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,25H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"435.7131887537451\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2011</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"361.6688624774301\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2010</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"287.6245362011151\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2009</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"213.37734875691976\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2008</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"139.33302248060477\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2007</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"65.28869620428976\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2006</tspan></text><path style=\"\" fill=\"none\" stroke=\"#f06060\" d=\"M207.08865255263,258.22C225.65044941367884,257.16775,262.7740431357765,254.4946607387141,281.3358399968253,254.011C299.84692156590404,253.52866073871408,336.8690847040616,254.18349999999998,355.38016627314033,254.356C373.89124784221906,254.5285,410.9134109803766,254.5884010989011,429.42449254945535,255.391C433.9888688267624,255.5889010989011,443.1176213813766,258.0849704602702,447.68199765868366,258.358C452.3456913827655,258.6369704602702,461.67307883092917,257.96116795016985,466.336772555011,257.599C471.00257941625824,257.2366679501699,480.33419313875277,255.99474999999998,485,255.45999999999998\" stroke-width=\"3\"/><path style=\"\" fill=\"none\" stroke=\"#8d5cbe\" d=\"M59,74.05899999999997C77.51108156907875,74.81799999999997,114.53324470723626,76.55162499999997,133.04432627631502,77.09499999999997C151.55540784539377,77.63837499999997,188.57757098355125,77.63081190150477,207.08865255263,78.40599999999998C225.65044941367884,79.18331190150477,262.7740431357765,82.8299760601915,281.3358399968253,83.30499999999998C299.84692156590404,83.7787260601915,336.8690847040616,82.985875,355.38016627314033,82.201C373.89124784221906,81.416125,410.9134109803766,78.38211538461536,429.42449254945535,77.02599999999998C433.9888688267624,76.69161538461536,443.1176213813766,76.33487817723837,447.68199765868366,75.439C452.3456913827655,74.52362817723836,461.67307883092917,70.970980407701,466.336772555011,69.78099999999998C471.00257941625824,68.590480407701,480.33419313875277,66.88299999999997,485,65.91699999999997\" stroke-width=\"3\"/><circle cx=\"207.08865255263\" cy=\"258.22\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"281.3358399968253\" cy=\"254.011\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"355.38016627314033\" cy=\"254.356\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"429.42449254945535\" cy=\"255.391\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"447.68199765868366\" cy=\"258.358\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"466.336772555011\" cy=\"257.599\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"485\" cy=\"255.45999999999998\" r=\"7\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"59\" cy=\"74.05899999999997\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"133.04432627631502\" cy=\"77.09499999999997\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"207.08865255263\" cy=\"78.40599999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"281.3358399968253\" cy=\"83.30499999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"355.38016627314033\" cy=\"82.201\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"429.42449254945535\" cy=\"77.02599999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"447.68199765868366\" cy=\"75.439\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"466.336772555011\" cy=\"69.78099999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"485\" cy=\"65.91699999999997\" r=\"7\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/></svg><div class=\"morris-hover morris-default-style\" style=\"left: 404px; top: 75px;\"><div class=\"morris-hover-row-label\">2011 Q3</div><div style=\"color: #8d5cbe\" class=\"morris-hover-point\">\n" +
    "                        Licensed:\n" +
    "                        3,407\n" +
    "                    </div><div style=\"color: #f06060\" class=\"morris-hover-point\">\n" +
    "                        Off the road:\n" +
    "                        660\n" +
    "                    </div></div></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("app/survey/analytics/detailed_analytics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/survey/analytics/detailed_analytics.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-lg-12 center\">\n" +
    "        <section class=\"panel default blue_title h2\">\n" +
    "            <div class=\"panel-heading border\">\n" +
    "                <span ng-click=\"$state.go('surveys.selected_survey',{form_id : $stateParams.form_id, survey : $stateParams.survey })\"  tooltip-placement=\"right\" tooltip=\"Back to survey question view\" class=\"pointer pull-left label label-info\"><i class=\"fa fa-arrow-left\"></i></span>\n" +
    "\n" +
    "                {{ selected_question.survey_name || 'Demo Survey '}}\n" +
    "\n" +
    "                <span ng-click=\"reloadSubmissions()\"  tooltip-placement=\"left\" tooltip=\"Refresh\" class=\"pointer pull-right label label-success\"><i class=\"fa fa-refresh\"></i></span>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <section class=\"panel default blue_title h2\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <span class=\"semi-bold\"> Questions <span title=\"Number of questions under this survey\" style=\"background-color : grey !important;\" class=\"badge pull-right\">{{ ( surveyData.questions_details | filter : { survey_name : $stateParams['survey'] }).length }}</span> </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul class=\"list-group\">\n" +
    "                    <perfect-scrollbar class=\"mini-scroller\" wheel-propagation=\"true\" wheel-speed=\"2\" min-scrollbar-length=\"3\">\n" +
    "                        <li class=\"list-group-item pointer\"\n" +
    "                            ng-click=\"selectQuestion(question, $index)\"\n" +
    "                            ng-class=\"colourTypeSelectionClass(question, $index)\"\n" +
    "                            ng-repeat=\"question in surveyData.questions_details  | filter : { survey_name : $stateParams.survey}\">\n" +
    "                            <!--<span class=\"badge\">14</span>-->\n" +
    "                            {{ question.question }}\n" +
    "                        </li>\n" +
    "                    </perfect-scrollbar>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"block-web full\">\n" +
    "            <ul class=\"nav nav-tabs nav-justified nav_bg\">\n" +
    "                <li class=\"active\"><a href=\"\" data-toggle=\"tab\" data-target=\"#map\"><i class=\"fa fa-map-marker\"></i>   Map</a></li>\n" +
    "                <li class=\"\" ng-click=\"resizeChart()\" ng-if=\"selected_question.question_type == 'close_ended'\"><a href=\"\" data-toggle=\"tab\" data-target=\"#charts\"><i class=\"fa fa-bar-chart\"></i>   Charts</a></li>\n" +
    "                <li class=\"\" ng-hide=\"selected_question.answer_format_type == 'image'\" ng-if=\"selected_question.question_type == 'open_ended'\"><a href=\"\" data-toggle=\"tab\" data-target=\"#responses\"><i class=\"fa fa-comments\"></i>   Responses</a></li>\n" +
    "                <li class=\"\" ng-if=\"selected_question.answer_format_type == 'image'\" ng-click=\"callSuperBoxGallery()\"><a href=\"\" data-toggle=\"tab\" data-target=\"#gallery\"><i class=\"fa fa-image\"></i>   Gallery</a></li>\n" +
    "                <li class=\"\"><a href=\"\" data-toggle=\"tab\" data-target=\"#report_summary\"><i class=\"fa fa-file\"></i>   Summary</a></li>\n" +
    "            </ul>\n" +
    "            <div class=\"tab-content\">\n" +
    "                <div id=\"charts\" class=\"tab-pane animated fadeInRight\" ng-if=\"selected_question.question_type == 'close_ended'\">\n" +
    "                    <div class=\"user-profile-content\">\n" +
    "                        <tabset justified=\"true\" type=\"pills\">\n" +
    "                            <tab select=\"changeChartType('BarChart')\">\n" +
    "                                <tab-heading>\n" +
    "                                    <i class=\"fa fa-list-ul\"></i> Bar Chart\n" +
    "                                </tab-heading>\n" +
    "                                <div google-chart chart=\"chartObject\" style=\"height:500px; width:100%;\"></div>\n" +
    "                            </tab>\n" +
    "\n" +
    "                            <tab select=\"changeChartType('PieChart')\">\n" +
    "                                <tab-heading>\n" +
    "                                    <i class=\"fa fa-pie-chart\"></i> Pie Chart\n" +
    "                                </tab-heading>\n" +
    "                                <div google-chart chart=\"chartObject\" style=\"height:500px; width:100%;\"></div>\n" +
    "                            </tab>\n" +
    "\n" +
    "                            <tab select=\"changeChartType('ColumnChart')\">\n" +
    "                                <tab-heading>\n" +
    "                                    <i class=\"fa fa-bar-chart\"></i> Column Chart\n" +
    "                                </tab-heading>\n" +
    "                                <div google-chart chart=\"chartObject\" style=\"height:500px; width:100%;\"></div>\n" +
    "                            </tab>\n" +
    "                        </tabset>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div id=\"map\" class=\"tab-pane animated fadeInRight active\">\n" +
    "                    <div class=\"user-profile-content\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <ui-gmap-google-map center='map.center' zoom='map.zoom'>\n" +
    "                                    <ui-gmap-markers\n" +
    "                                            models=\"markers\"\n" +
    "                                            idkey=\"'id'\"\n" +
    "                                            refresh=\"mapAccordionIsOpen\"\n" +
    "                                            coords=\"'points'\">\n" +
    "                                    </ui-gmap-markers>\n" +
    "                                </ui-gmap-google-map>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-hide=\"selected_question.answer_format_type == 'image'\" id=\"responses\" class=\"tab-pane\" ng-if=\"selected_question.question_type == 'open_ended'\">\n" +
    "                    <div class=\"ticket_open\">\n" +
    "                        <div class=\"ticket_open_heading\">\n" +
    "                            <div class=\"ticket_open_search hidden\">\n" +
    "                                <div class=\"btn-group\"><i class=\"fa fa-search\"></i></div>\n" +
    "                                <div class=\"input-group pull-left\">\n" +
    "                                    <input type=\"text\" placeholder=\"Search Response...\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "                        <a ng-show=\"selected_question.answers.length\" class=\"ticket_open_comment\" href=\"\" ng-repeat=\"response in selected_question.answers | limitTo : maxSize\">\n" +
    "                            <div class=\"btn-group\"><i class=\"fa fa-comment\"></i></div>\n" +
    "                            <span>{{ response.value}}</span>\n" +
    "                            <p>&nbsp;</p>\n" +
    "                            <div class=\"ticket_action\">\n" +
    "                                <div class=\"ticket_action_view\">i</div>\n" +
    "                            </div>\n" +
    "                        </a>\n" +
    "\n" +
    "                        <h4 ng-hide=\"selected_question.answers.length\" class=\"text-center\" style=\"margin: 5% 0\">No responses submitted!</h4>\n" +
    "\n" +
    "\n" +
    "                        <div style=\"margin: 0;\" role=\"toolbar\" class=\"btn-toolbar\" ng-show=\"selected_question.answers.length\">\n" +
    "                            <!--ng-show=\"totalItems > maxSize\"-->\n" +
    "                            <pagination\n" +
    "                                    total-items=\"totalItems\"\n" +
    "                                    items-per-page=\"maxSize\"\n" +
    "                                    ng-model=\"currentPage\"\n" +
    "                                    ng-change=\"pageChanged(currentPage)\">\n" +
    "                            </pagination>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div id=\"gallery\" class=\"tab-pane\" ng-if=\"selected_question.answer_format_type == 'image'\">\n" +
    "                    <div class=\"superbox\">\n" +
    "\n" +
    "                        <div class=\"superbox-list\" ng-repeat=\"picture in selected_question.answers\">\n" +
    "                            <img class=\"superbox-img\" alt=\"\" data-img=\"{{ picture.url }}\" ng-src=\"{{ picture.url }}\">\n" +
    "                        </div>\n" +
    "                        <!--<div class=\"superbox-list\" >-->\n" +
    "                            <!--<img class=\"superbox-img\" alt=\"\" data-img=\"images/superbox/superbox-full-24.jpg\" src=\"images/superbox/superbox-thumb-24.jpg\">-->\n" +
    "                        <!--</div>-->\n" +
    "                        <div class=\"superbox-float\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div id=\"report_summary\" class=\"tab-pane\">\n" +
    "                    <p>Reports and summary of the survey</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!--/tab-content-->\n" +
    "        </div>\n" +
    "        <!--/block-web-->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("app/survey/create/create_server_wizard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/survey/create/create_server_wizard.tpl.html",
    "<div class=\"row fill_white\">\n" +
    "    <div class=\"block-web\">\n" +
    "        <div class=\"header\">\n" +
    "            <div class=\"actions\">\n" +
    "                <a class=\"minimize\" href=\"#\"><i class=\"fa fa-chevron-down\"></i></a>\n" +
    "                <a class=\"refresh\" href=\"#\"><i class=\"fa fa-repeat\"></i></a>\n" +
    "                <a class=\"close-down\" href=\"#\"><i class=\"fa fa-times\"></i></a>\n" +
    "            </div>\n" +
    "            <h3 class=\"content-header\">Create Survey Below</h3>\n" +
    "        </div>\n" +
    "        <div class=\"porlets-content\">\n" +
    "            <wizard on-finish=\"submitForm()\">\n" +
    "                <wz-step title=\"Survey Identity\" canexit=\"surveyNameEntered\">\n" +
    "                    <h1>Name <small>A short keyword to identify the survey</small></h1>\n" +
    "                    <div class=\"row\" style=\"margin-top: 50px\">\n" +
    "                        <div class=\"col-md-7 col-xs-12 center-block\">\n" +
    "                            <form class=\"form \">\n" +
    "                                <div class=\"form-group\">\n" +
    "                                    <h3> <label for=\"survey_name\" class=\" col-sm-4 col-xs-6\">Survey Name</label></h3>\n" +
    "                                    <div class=\"col-sm-8 col-xs-6\">\n" +
    "                                        <input id=\"survey_name\" ng-model=\"createSurveyForm.survey_name\" type=\"text\" class=\"form-control input-lg col-xs-12\" name=\"survey_name\" title=\"survey_name\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                            <br>\n" +
    "                            <button  wz-next=\"\" style=\"margin-right: 15px;\" class=\"btn btn-primary pull-right \">Continue &nbsp;&nbsp;&nbsp; <i class=\"fa fa-arrow-circle-o-right\"></i></button>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </wz-step>\n" +
    "\n" +
    "\n" +
    "                <wz-step title=\"Survey Duration\" canexit=\"surveyDurationEntered\">\n" +
    "                    <h1>Duration <small>Start and End date of the survey</small></h1>\n" +
    "                    <div class=\"row\" style=\"margin-top: 50px\">\n" +
    "                        <div class=\"col-md-8 col-xs-12 center-block\">\n" +
    "                            <div class=\"row\">\n" +
    "\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <h5 class=\"col-xs-12\"> <label for=\"startDate\">Start Date</label></h5>\n" +
    "                                    <p class=\"input-group col-xs-12\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" id=\"startDate\"\n" +
    "                                           ng-model=\"createSurveyForm.start_date\" is-open=\"status.opened\" min-date=\"minDate\" max-date=\"createSurveyForm.end_date\"\n" +
    "                                           datepicker-options=\"dateOptions\" close-on-date-selection=\"false\"\n" +
    "                                           ng-required=\"true\" close-text=\"Close\" />\n" +
    "                                          <span class=\"input-group-btn\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "                                          </span>\n" +
    "                                </p>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <h5 class=\"col-xs-12\"> <label for=\"endDate\">End Date</label></h5>\n" +
    "                                    <p class=\"input-group col-xs-12\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"createSurveyForm.end_date\"\n" +
    "                                               is-open=\"status.opened\" min-date=\"createSurveyForm.start_date\" max-date=\"maxDate\" id=\"endDate\"\n" +
    "                                               datepicker-options=\"dateOptions\" close-on-date-selection=\"true\"\n" +
    "                                               ng-required=\"true\" close-text=\"Close\" />\n" +
    "                                          <span class=\"input-group-btn\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "                                          </span>\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "\n" +
    "                            <button  wz-next=\"\"  class=\"btn btn-primary pull-right \">Continue &nbsp;&nbsp;&nbsp; <i class=\"fa fa-arrow-circle-o-right\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </wz-step>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <wz-step title=\"Final Step\">\n" +
    "                    <h1>Congrats!!! <small>Click on the button to create the survey</small></h1>\n" +
    "                    <div class=\"row\" style=\"margin-top: 50px\">\n" +
    "                        <div class=\"col-md-8 col-xs-12 center-block\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <h5 class=\"text-center\">You are about to create a survey named\n" +
    "                                    <code style=\"color: cornflowerblue !important;\">{{ createSurveyForm.survey_name}}</code></h5>\n" +
    "                                <br>\n" +
    "                                <br>\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <button style=\"display: block\"  wz-next=\"\"  class=\"btn btn-primary center-block text-center \">Create Survey &nbsp;&nbsp;&nbsp; <i class=\"fa fa-send-o\"></i></button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </wz-step>\n" +
    "            </wizard>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("app/survey/forms/design_formbuilder/design_form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/survey/forms/design_formbuilder/design_form.tpl.html",
    "<div class=\"row fill_white\">\n" +
    "    <div class=\"block-web\">\n" +
    "        <div class=\"header\">\n" +
    "            <div class=\"actions hidden\">\n" +
    "                <a class=\"minimize\" href=\"#\"><i class=\"fa fa-chevron-down\"></i></a>\n" +
    "                <a class=\"refresh\" href=\"#\"><i class=\"fa fa-repeat\"></i></a>\n" +
    "                <a class=\"close-down\" href=\"#\"><i class=\"fa fa-times\"></i></a>\n" +
    "            </div>\n" +
    "            <h3 class=\"content-header\">Design Questionnaire</h3>\n" +
    "        </div>\n" +
    "        <div class=\"porlets-content\">\n" +
    "            <div><button class=\"btn btn-primary pull-right\" preview-survey=\"{{ selected_survey.id }}\">Preview Survey</button></div>\n" +
    "            <div id='formbuilder'></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("app/survey/list_all/survey_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/survey/list_all/survey_list.tpl.html",
    "<div class=\"container clear_both padding_fix\" ui-view=\"\">\n" +
    "    <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "    <div class=\"task_bar clearfix\" ng-show=\"surveys.length\">\n" +
    "        <div class=\"task_bar_left\">\n" +
    "            <label>Search survey:</label>\n" +
    "            <input type=\"text\" class=\"task_form\" placeholder=\" Survey title...\" name=\"\" ng-model=\"searchSurvey\" ng-init=\"searchSurvey = ''\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"fa fa-search\"></i> </button>\n" +
    "            <button type=\"button\" class=\"btn btn-success btn-icon\" ng-click=\"$state.go('surveys.create_new')\"><i class=\"fa fa-plus\" ></i> New Survey</button>\n" +
    "        </div>\n" +
    "        <div class=\"task_bar_right\">\n" +
    "            <label>Sorting:</label>\n" +
    "            <input type=\"text\" disabled class=\"task_form\" placeholder=\"SORT BY DATE\" name=\"\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-icon\" ng-init=\"sortOrder = 'created_at'; reverse = false\" data-ng-click=\"reverse=!reverse\">\n" +
    "                <i class=\"fa fa-arrows-v\"></i></button>\n" +
    "            <button type=\"button\" class=\"btn btn-success btn-icon\" tooltip=\"Reload Surveys\" data-ng-click=\"reloadSurveyData()\"><i class=\"fa fa-refresh\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <!--\\\\\\\\\\\\\\ row  start \\\\\\\\\\\\-->\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <!--red_border-->\n" +
    "            <!--green_border-->\n" +
    "            <!--orange_border-->\n" +
    "            <!--blue_border-->\n" +
    "            <section class=\"panel default blue_border vertical_border h1\" ng-show=\"surveys.length\" ng-repeat=\"survey in surveys | filter : { survey_name: searchSurvey } | orderBy : sortOrder : reverse\">\n" +
    "                <div class=\"task-header blue_task\">\n" +
    "                    <a href=\"\" ui-sref=\"surveys.selected_survey({survey_id : survey.id})\">{{ survey.survey_name }}</a>\n" +
    "                    <span title=\"{{ survey.created_at }}\" tooltip-placement=\"top\" tooltip=\"{{ formatDate(survey.created_at) }}\"><i class=\"fa fa-clock-o\"></i>{{ fromNow(survey.created_at) }}</span> </div>\n" +
    "                <div class=\"row task_inner inner_padding\">\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p><em>Start Date : &nbsp;</em><span ng-bind=\"formatDate(survey.start_date)\"></span></p>\n" +
    "                        <p><em>End Date : &nbsp;</em><span ng-bind=\"formatDate(survey.end_date)\"></span></p>\n" +
    "                        <p><em>Questions : &nbsp;</em>\n" +
    "                            <span ng-hide=\"survey.question_tree\" ui-sref=\"surveys.form_builder({survey_id : survey.id})\" class=\"pointer btn btn-link\">Click to add questions</span>\n" +
    "                            <span ng-show=\"survey.question_tree\" ui-sref=\"surveys.form_builder({survey_id : survey.id})\" tooltip=\"Click to add/edit question\" class=\"pointer\" ng-bind=\"survey.question_tree.length\"></span>\n" +
    "                        </p>\n" +
    "                        <!--<p><em>Total Responses : &nbsp;</em><span ui-sref=\"surveys.demo_form\">Click to send survey</span></p>-->\n" +
    "                        <p><em>Total Responses : &nbsp;</em><span>No responses recorded</span></p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <!--<div class=\"pull-right\"><span>August  15, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  17, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  19, 2014</span></div>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"task-footer \">\n" +
    "                    <label class=\"pull-left hidden\">\n" +
    "                        <div class=\"progress\">\n" +
    "                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n" +
    "                                <span class=\"sr-only\">40% Complete</span> </div>\n" +
    "                        </div>\n" +
    "                    </label>\n" +
    "                    <span class=\"label btn-primary hidden\">40%</span>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <ul class=\"footer-icons-group\">\n" +
    "                            <li tooltip-placement=\"top\" tooltip=\"Preview Survey\"><a preview-survey=\"{{ survey.id }}\" class=\"pointer\"><i class=\"fa fa-eye\"></i></a></li>\n" +
    "                            <li tooltip-placement=\"top\" tooltip=\"Send respondents\"><a ui-sref=\"surveys.respondents({survey_id : survey.id })\" class=\"pointer\"><i class=\"fa fa-send-o\"></i></a></li>\n" +
    "                            <li tooltip-placement=\"top\" tooltip=\"Edit Survey\"><a href=\"\" edit-survey=\"{{survey.id}}\"><i class=\"fa fa-pencil\"></i></a></li>\n" +
    "                            <li tooltip-placement=\"top\" tooltip=\"Delete Survey\"><a href=\"\" delete-survey=\"{{survey.id}}\"><i class=\"fa fa-trash-o\"></i></a></li>\n" +
    "                            <!--<li class=\"dropup\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-wrench\"></i></a></li>-->\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "            <div class=\"bs-callout bs-callout-warning\" ng-hide=\"surveys.length\">\n" +
    "                <h4><i class=\"fa fa-warning\"></i> No Survey! </h4>\n" +
    "                <p>You currently do not have a survey on the system. <button class=\"btn btn-success\" ng-click=\"$state.go('surveys.create_new')\">Click to create a survey</button></p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"surveys.length\">\n" +
    "                <div class=\"bs-callout bs-callout-primary\" ng-hide=\"( surveys | filter : { survey_name: searchSurvey }).length\">\n" +
    "                    <h4><i class=\"fa fa-warning\"></i> Search Survey </h4>\n" +
    "                    <p>No survey name found matching <b>\"{{searchSurvey }}\"</b>.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--<div>{{surveys | json }}</div>-->\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <!--\\\\\\\\\\\\\\ row  end \\\\\\\\\\\\-->\n" +
    "</div>");
}]);

angular.module("app/survey/respondents/respondents.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/survey/respondents/respondents.tpl.html",
    "<div class=\"col-sm-12\">\n" +
    "    <div class=\"block-web\">\n" +
    "        <div class=\"header\">\n" +
    "            <div class=\"actions hidden\">\n" +
    "                <a href=\"#\" class=\"minimize\"><i class=\"fa fa-chevron-down\"></i></a>\n" +
    "                <a href=\"#\" class=\"close-down\"><i class=\"fa fa-times\"></i></a> </div>\n" +
    "            <h3 class=\"content-header\">Survey Respondents\n" +
    "                <span ng-click=\"$state.go('surveys')\"  tooltip-placement=\"left\" tooltip=\"Back to survey list\" class=\"pointer pull-right label label-info\"><i class=\"fa fa-arrow-left\"></i></span>\n" +
    "            </h3>\n" +
    "        </div>\n" +
    "        <tabset justified=\"true\" type=\"pills\">\n" +
    "            <tab>\n" +
    "                <tab-heading>\n" +
    "                    <i class=\"fa fa-envelope\"></i>  Email\n" +
    "                </tab-heading>\n" +
    "                <div class=\"porlets-content\">\n" +
    "                    <h3 class=\"page-header\" style=\"margin-top: 3px !important;\">Email Respondents</h3>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <form  role=\"form\" class=\"col-md-8 col-sm-9 col-xs-12 center-block form-horizontal\" ng-submit=\"sendEmail()\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left \" for=\"from\">From</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <input type=\"text\" ng-disabled=\"true\" ng-model=\"respondent_form.from_email\" id=\"from\" class=\" form-control\" >\n" +
    "                                </div>\n" +
    "                            </div><!--/form-group-->\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left\">Survey</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <select title=\"selectSurvey\" name=\"selectSurvey\" data-ng-model=\"respondent_form.survey_id\" class=\" form-control\"\n" +
    "                                            ng-options=\"survey.id as survey.survey_name for survey in surveys\">\n" +
    "                                        <option value=\"\">Select a survey</option>\n" +
    "                                    </select>\n" +
    "                                </div><!--/col-sm-9-->\n" +
    "                            </div><!--/form-group-->\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left\">Survey Description</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <textarea data-ng-model=\"respondent_form.survey_description\" class=\" form-control\"\n" +
    "                                              placeholder=\"A brief description of the survey\" rows=\"5\">\n" +
    "                                    </textarea>\n" +
    "                                </div><!--/col-sm-9-->\n" +
    "                            </div><!--/form-group-->\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left\" for=\"emails\">Recipients</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <tags-input\n" +
    "                                            ng-model=\"respondent_form.emails\"\n" +
    "                                            displayProperty=\"email\"\n" +
    "                                            type=\"email\"\n" +
    "                                            placeholder=\"Add recipient email\"\n" +
    "                                            add-on-enter=\"true\"\n" +
    "                                            add-on-space=\"true\"\n" +
    "                                            add-on-comma=\"true\"\n" +
    "                                            add-on-blur=\"true\"\n" +
    "                                            add-on-paste=\"true\"\n" +
    "                                            allowed-tags-pattern=\"^([\\w\\-\\.]+)@((\\[([0-9]{1,3}\\.){3}[0-9]{1,3}\\])|(([\\w\\-]+\\.)+)([a-zA-Z]{2,4}))$\"\n" +
    "                                            id=\"emails\" class=\"\"></tags-input>\n" +
    "                                    <span class=\"help-block text-primary\" style=\"font-style: italic\">Separate multiple email addresses with [COMMA] or [SPACE] or [TAB]</span>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "                            </div><!--/form-group-->\n" +
    "\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"col-sm-4 col-xs-6 pull-right\">\n" +
    "                                    <button class=\"hidden btn btn-default\" type=\"reset\" ng-click=\"resetRespondentForm()\">Cancel</button>\n" +
    "                                    <button class=\"btn  pull-right\" ng-class=\"{true : 'btn-default', false : 'btn-primary'}[sendingEmails]\" type=\"submit\" data-ng-disabled=\"sendingEmails\">\n" +
    "                                        <span ng-if=\"!(sendingEmails)\">Send Mail</span>\n" +
    "                                        <span ng-if=\"sendingEmails\">Sending mails, hang on...</span>\n" +
    "                                    </button>\n" +
    "                                </div>\n" +
    "                            </div><!--/form-group-->\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div><!--/porlets-content-->\n" +
    "            </tab>\n" +
    "\n" +
    "            <tab>\n" +
    "                <tab-heading>\n" +
    "                    <i class=\"fa fa-comments\"></i> SMS\n" +
    "                </tab-heading>\n" +
    "                <div class=\"porlets-content\">\n" +
    "                    <h3 class=\"page-header\" style=\"margin-top: 3px !important;\">SMS Respondents</h3>\n" +
    "                    <div class=\"row\">\n" +
    "                        <form role=\"form\" class=\"col-md-8 col-sm-9 col-xs-12 center-block form-horizontal\" ng-submit=\"sendSMS()\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left \" for=\"sms_from\">From</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <input type=\"text\" ng-disabled=\"true\" ng-model=\"sms_respondent_form.from_phone_number\" id=\"sms_from\" class=\" form-control\" >\n" +
    "                                </div>\n" +
    "                            </div><!--/form-group-->\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left\">Survey</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <select data-ng-model=\"sms_respondent_form.survey_id\" class=\" form-control\"\n" +
    "                                            ng-options=\"survey.id as survey.survey_name for survey in surveys\">\n" +
    "                                        <option value=\"\">Select a survey</option>\n" +
    "                                    </select>\n" +
    "                                </div><!--/col-sm-9-->\n" +
    "                            </div><!--/form-group-->\n" +
    "\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left\">Survey Description</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <textarea data-ng-model=\"sms_respondent_form.survey_description\" class=\" form-control\"\n" +
    "                                              placeholder=\"A brief description of the survey\" rows=\"5\">\n" +
    "                                    </textarea>\n" +
    "                                </div><!--/col-sm-9-->\n" +
    "                            </div><!--/form-group-->\n" +
    "\n" +
    "\n" +
    "                            <br>\n" +
    "                            <br>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label class=\"col-sm-4 col-xs-12 control-label text-left\" for=\"phone_numbers\">Recipients</label>\n" +
    "                                <div class=\"col-sm-8 col-xs-12\">\n" +
    "                                    <tags-input\n" +
    "                                            ng-model=\"sms_respondent_form.phone_numbers\"\n" +
    "                                            displayProperty=\"number\"\n" +
    "                                            type=\"text\"\n" +
    "                                            placeholder=\"Add phone number\"\n" +
    "                                            add-on-enter=\"true\"\n" +
    "                                            add-on-space=\"true\"\n" +
    "                                            add-on-comma=\"true\"\n" +
    "                                            add-on-blur=\"true\"\n" +
    "                                            add-on-paste=\"true\"\n" +
    "                                            allowed-tags-pattern=\"^\\+(?:[0-9]●?){6,14}[0-9]$\"\n" +
    "                                            id=\"phone_numbers\" class=\"\">\n" +
    "                                    </tags-input>\n" +
    "                                    <span class=\"help-block text-primary\" style=\"font-style: italic\"><b>Numbers should start with a plus sign(+), followed by the country code and national number</b></span><br>\n" +
    "                                    <span class=\"help-block text-primary\" style=\"font-style: italic\">Separate multiple phone numbers with [COMMA] or [SPACE] or [TAB]</span>\n" +
    "                                </div>\n" +
    "\n" +
    "\n" +
    "                            </div><!--/form-group-->\n" +
    "\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"col-sm-4 col-xs-6 pull-right\">\n" +
    "                                    <button class=\"hidden btn btn-default\" type=\"reset\" ng-click=\"resetRespondentForm()\">Cancel</button>\n" +
    "                                    <button class=\"btn btn-primary pull-right\" type=\"submit\">Send</button>\n" +
    "                                </div>\n" +
    "                            </div><!--/form-group-->\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div><!--/porlets-content-->\n" +
    "            </tab>\n" +
    "        </tabset>\n" +
    "    </div><!--/block-web-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/survey/selected/selected_survey.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/survey/selected/selected_survey.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        <section class=\"panel default blue_title h2\">\n" +
    "\n" +
    "            <div class=\"panel-heading border center\">\n" +
    "                <span ng-click=\"$state.go('surveys')\"  tooltip-placement=\"right\" tooltip=\"Back to survey list\" class=\"pointer pull-left label label-info\">\n" +
    "                    <i class=\"fa fa-arrow-left\"></i>\n" +
    "                </span>\n" +
    "\n" +
    "                {{ selected_survey.survey_name || 'Survey'}}\n" +
    "\n" +
    "                <div class=\"dropdown pull-right\" >\n" +
    "                    <button class=\"btn btn-primary dropdown-toggle\" style=\"color: white !important;\" type=\"button\" data-toggle=\"dropdown\">  Options\n" +
    "                        <span class=\"caret\"></span></button>\n" +
    "                    <ul class=\"dropdown-menu\" style=\"text-transform : none !important; text-align: left !important;\">\n" +
    "\n" +
    "                        <li ng-show=\"selected_survey.question_tree\"><a ui-sref=\"surveys.respondents({survey_id : selected_survey.id })\"><i class=\"fa fa-send\"></i> Send Survey</a></li>\n" +
    "                        <li class=\"divider\" ng-show=\"selected_survey.question_tree\"></li>\n" +
    "                        <li ><a ui-sref=\"surveys.form_builder({survey_id : selected_survey.id })\"><i class=\"fa fa-pencil\"></i> Add/Edit Questionnaire</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li edit-survey=\"{{ selected_survey.id }}\"><a href=\"\"><i class=\"fa fa-edit\"></i> Edit Survey</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li delete-survey=\"{{ selected_survey.id }}\"><a href=\"\"><i class=\"fa fa-times\"></i> Delete Survey</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li ng-click=\"reloadSurveyData()\"><a href=\"\"><i class=\"fa fa-refresh\"></i> Refresh</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <!--<span   tooltip-placement=\"left\" tooltip=\"Refresh\" class=\"pointer pull-right label label-success\">-->\n" +
    "                <!--</span>-->\n" +
    "\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-12 fill_white\" ng-hide=\"selected_survey.question_tree\">\n" +
    "        <div class=\"block-web\">\n" +
    "            <h4 style=\"margin: 25px 0\" class=\"text-center\">No questions created for this survey.</h4>\n" +
    "            <br>            <br>            <br>\n" +
    "            <button class=\"btn btn-success center-block col-xs-2\" style=\"display: block\" ui-sref=\"surveys.form_builder({survey_id : selected_survey.id })\">\n" +
    "                Add Questions</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\" ng-show=\"selected_survey.question_tree\">\n" +
    "        <div class=\"widget_inbox\">\n" +
    "\n" +
    "            <perfect-scrollbar class=\"scroller\" wheel-propagation=\"true\" wheel-speed=\"2\" min-scrollbar-length=\"6\">\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"question_item in selected_survey.question_tree track by $index\">\n" +
    "                        <a ng-click=\"selectQuestion(question_item)\" href=\"\" ng-class=\"{'active' : question_item.cid == selected_question.cid }\">\n" +
    "                            <div class=\"widget_inbox_header\">\n" +
    "                                <span class=\"pull-left widget_inbox_time badge\"><b>{{ $index + 1 }}</b>.</span>\n" +
    "                            <span class=\"widget_inbox_time\">\n" +
    "                                &nbsp;&nbsp;\n" +
    "                            {{ formatFieldType[question_item.field_type] }}\n" +
    "                            </span>\n" +
    "                            </div>\n" +
    "                            <span style=\"font-size: large; margin-left: 25px\">{{ question_item.label }}</span></a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </perfect-scrollbar>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\" ng-show=\"selected_survey.question_tree\">\n" +
    "        <div class=\"widget_inbox\">\n" +
    "            <tabset justified=\"true\">\n" +
    "                <tab select=\"changeChartType('bar')\">\n" +
    "                    <tab-heading>\n" +
    "                        <i class=\"fa fa-list-ul\"></i> Bar Chart\n" +
    "                    </tab-heading>\n" +
    "\n" +
    "                    <span am-chart=\"\" chart-type=\"bar\"  chart-data=\"$parent.$parent.chartData\" title-field=\"country\" value-field=\"visits\"></span>\n" +
    "\n" +
    "\n" +
    "                </tab>\n" +
    "\n" +
    "                <tab select=\"changeChartType('pie')\">\n" +
    "                    <tab-heading>\n" +
    "                        <i class=\"fa fa-pie-chart\"></i> Pie Chart\n" +
    "                    </tab-heading>\n" +
    "                    <span am-chart=\"\" chart-type=\"pie\" chart-data=\"chartData\" title-field=\"country\" value-field=\"visits\"></span>\n" +
    "                </tab>\n" +
    "\n" +
    "\n" +
    "                <tab select=\"changeChartType('column')\">\n" +
    "                    <tab-heading>\n" +
    "                        <i class=\"fa fa-bar-chart\"></i> Column Chart\n" +
    "                    </tab-heading>\n" +
    "                    <span am-chart=\"\"  chart-type=\"column\" chart-data=\"chartData\" title-field=\"country\" value-field=\"visits\"></span>\n" +
    "                </tab>\n" +
    "            </tabset>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"row\" ng-show=\"selected_question\">\n" +
    "            <div ng-if=\"selected_question.question_type == 'close_ended'\">\n" +
    "                <button class=\"text-center col-sm-6 col-sm-offset-3 btn btn-primary btn-lg\" ng-click=\"$state.go('surveys.analytics', {survey : surveyName, form_id : surveyFormId, index : selected_question.index })\">\n" +
    "                    View More Details</button>\n" +
    "            </div>\n" +
    "            <!--style=\"margin-top: 30%\"-->\n" +
    "            <div ng-if=\"selected_question.question_type == 'open_ended'\" >\n" +
    "                <div class=\"panel panel-primary\">\n" +
    "                    <div class=\"panel-heading text-center\">\n" +
    "                        <h4 class=\"panel-title \">{{selected_question.question}}</h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-body\" style=\"padding-bottom: 0 !important;\">\n" +
    "                        <ul ng-show=\"selected_question.answers.length\" ng-if=\"selected_question.answer_format_type == 'regular'\" class=\"media-list\">\n" +
    "                            <li class=\"media answer-list\" style=\"\" ng-repeat=\"response in selected_question.answers | limitTo : 6\"> <a href=\"\">\n" +
    "                                <p><strong>{{ response.value | limitTo : 100 }}</strong> <br>\n" +
    "                                    <i class=\"text-muted\" title=\"Submission date\">{{ fromNow ( response.submitted_date) }}</i></p>\n" +
    "                            </a> </li>\n" +
    "                        </ul>\n" +
    "                        <ul ng-show=\"selected_question.answers.length\" ng-if=\"selected_question.answer_format_type == 'image'\" class=\"media-list\">\n" +
    "                            <li class=\"media answer-list\" style=\"\" ng-repeat=\"response in selected_question.answers | limitTo : 3\"> <a href=\"\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <div class=\"contact_people\">\n" +
    "                                        <a href=\"#\"><img ng-src=\"{{ response.url }}\" width=\"250px\"></a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </a> </li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <ul ng-show=\"selected_question.answers.length\" ng-if=\"selected_question.answer_format_type == 'location'\" class=\"media-list\">\n" +
    "                            <li class=\"media answer-list\" style=\"\" ng-repeat=\"response in selected_question.answers | limitTo : 6\"> <a href=\"\">\n" +
    "                                <p> Longitude : <strong>{{ response.longitude }}</strong>, Latitude : <strong>{{ response.latitude }}</strong><br>\n" +
    "                                    <i class=\"text-muted\" title=\"Business Name\">{{ response.business_name }}</i>\n" +
    "                                    <i class=\"text-muted pull-right\" title=\"Submission date\">({{ fromNow ( response.submitted_date) }})</i>\n" +
    "                                </p>\n" +
    "                            </a> </li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <h4 ng-hide=\"selected_question.answers.length\" class=\"text-center\" style=\"margin: 5% 0\">No responses submitted!</h4>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <button class=\"text-center col-sm-6 col-sm-offset-3 btn btn-primary btn-lg\" ng-click=\"$state.go('surveys.analytics', {survey : surveyName, form_id : surveyFormId, index : selected_question.index })\">\n" +
    "                    View More Details</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\" ng-show=\"selected_survey.question_tree\">\n" +
    "        <div class=\"widget_inbox\">\n" +
    "            <h3 style=\"margin-top: 30%\" class=\"text-center hidden\" ><i class=\"fa fa-arrow-left\"></i>  Select a question on the left to preview</h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<pre>{{selected_question.answers | json }}</pre>-->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("common/modals/deleteSurveyModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/deleteSurveyModal.tpl.html",
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"close()\" aria-hidden=\"true\">×</button>\n" +
    "        <h4 class=\"modal-title\"> Delete Survey</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <h6 class=\"center-block text-center\">Are you sure you want to delete the survey with name : </h6>\n" +
    "        <h5 class=\"text-center center-block\">{{ selected_survey.survey_name}}</h5>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteSurvey()\">Delete Survey</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/modals/editSurveyModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/editSurveyModal.tpl.html",
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"close()\" aria-hidden=\"true\">×</button>\n" +
    "        <h4 class=\"modal-title\"> Edit Survey</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"survey_name\">Survey Name</label>\n" +
    "                    <input id=\"survey_name\" ng-model=\"selected_survey.survey_name\" type=\"text\"\n" +
    "                           class=\"form-control input-lg\" name=\"survey_name\" title=\"survey_name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"margin-top: 20px\" class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"startDate\">Start Date</label>\n" +
    "                    <p class=\"input-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" id=\"startDate\"\n" +
    "                               ng-model=\"selected_survey.start_date\" is-open=\"status.opened\" min-date=\"minDate\" max-date=\"selected_survey.end_date\"\n" +
    "                               datepicker-options=\"dateOptions\" close-on-date-selection=\"false\"\n" +
    "                               ng-required=\"true\" close-text=\"Close\" />\n" +
    "                                          <span class=\"input-group-btn\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "                                          </span>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"endDate\">End Date</label>\n" +
    "                    <p class=\"input-group\">\n" +
    "                        <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"selected_survey.end_date\"\n" +
    "                               is-open=\"status.opened\" min-date=\"selected_survey.start_date\" max-date=\"maxDate\" id=\"endDate\"\n" +
    "                               datepicker-options=\"dateOptions\" close-on-date-selection=\"true\"\n" +
    "                               ng-required=\"true\" close-text=\"Close\" />\n" +
    "                                          <span class=\"input-group-btn\">\n" +
    "                                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"fa fa-calendar\"></i></button>\n" +
    "                                          </span>\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"editSurvey()\">Edit Survey</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/modals/previewSurveyFormModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/previewSurveyFormModal.tpl.html",
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"close()\" aria-hidden=\"true\">×</button>\n" +
    "        <h4 class=\"modal-title\"> <small>Preview of </small> <i>{{ selected_survey.survey_name || 'Survey'}}</i></h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\" id=\"previewSurvey\">\n" +
    "        <form ng-init=\"initJSForm()\"></form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"close()\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-success\" ng-click=\"sendSurvey()\">Send Survey</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/partials/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/partials/header.tpl.html",
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
