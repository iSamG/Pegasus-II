<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Bissame | The Cloud Survey Builder</title>
    <!--[if IE]> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="BBG Innovation Lab " name="description" />
    <meta content="BBG Innovation Lab" name="author" />

    <meta property="og:title"
          content="BBG Innovation Lab" />

    <meta property="og:site_name"
          content="Bissame" />

    <meta property="og:url"
          content="http://www.bissame.com" />

    <meta property="og:description" content="BBG Innovation Lab"/>

    <meta property="fb:app_id" content="###########" />

    <meta property="og:locale" content="en_US" />

    <meta property="og:type" content="product" />

    <base href="/">

    <link rel="stylesheet" href="/front_app/pegasusrises.css">
    <!-- Favicon-->
    <link href="front_app/assets/images/favicon.png" rel="icon" type="image/png" />
    <!--- jQuery -->
    <!--[if IE 8]>
    <script type="javascript" src="/front_app/assets/legacy.js"></script>
    <![endif]-->
    <!--[if lt IE 10]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>


<body ng-app="pegasusrisesSurvey">

<!-- Full Body Container -->
<div id="container">


    <!-- Start Header Section -->
    <div class="hidden-header"></div>
    <header class="clearfix">

        <!-- Start Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <!-- Start Contact Info -->
                        <ul class="contact-details">
                            <li><a href=""><i class="fa fa-map-marker"></i>&nbsp; BBG Innovation Lab | Impact Hub Accra</a></li>

                            <li><a href=""><i class="fa fa-envelope-o"></i>&nbsp; lab@pegasusrises.com</a>
                            </li>
                            <li><a href=""><i class="fa fa-phone"></i>&nbsp; +233 540 832 867</a>
                            </li>
                        </ul>
                        <!-- End Contact Info -->
                    </div><!-- .col-md-6 -->
                    <div class="col-md-5">
                        <!-- Start Social Links -->
                        <ul class="social-list">
                            <li>
                                <a class="facebook " target="_blank" tooltip-placement="bottom" tooltip="Facebook" title="Facebook" href="https://www.facebook.com/BBGgov/"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a class="twitter " target="_blank" tooltip-placement="bottom" tooltip="Twitter" title="Twitter" href="https://twitter.com/hubaccra/"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="youtube" target="_blank" tooltip-placement="bottom" tooltip="YouTube" title="YouTube" href="https://www.youtube.com/user/bbgtunein/featured"><i class="fa fa-youtube"></i></a>
                            </li>
                            <!--<li>-->
                            <!--<a class="google " tooltip-placement="bottom" tooltip="Google Plus" title="Google Plus" href=""><i class="fa fa-google-plus"></i></a>-->
                            <!--</li>-->
                            <!--<li>-->
                            <!--<a class="linkdin " tooltip-placement="bottom" tooltip="Linkedin" title="Linkedin" href=""><i class="fa fa-linkedin"></i></a>-->
                            <!--</li>-->
                        </ul>
                        <!-- End Social Links -->
                    </div><!-- .col-md-6 -->
                </div><!-- .row -->
            </div><!-- .container -->
        </div><!-- .top-bar -->
        <!-- End Top Bar -->


        <!-- Start  Logo & Naviagtion  -->
        <div class="navbar navbar-default navbar-top">
            <div class="container">
                <div class="navbar-header">
                    <!-- Stat Toggle Nav Link For Mobiles -->
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
                    <!-- End Toggle Nav Link For Mobiles -->
                    <a class="navbar-brand" href="#container">
                        <!--Bissame-->
                        <img alt="Bissame" style="width: 90%" src="front_app/assets/images/bissame.png">
                    </a>
                </div>
                <div class="navbar-collapse collapse">
                    <!-- Start Navigation List -->
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li><a href="/#contact">Contact</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                    <!-- End Navigation List -->
                </div>
            </div>
        </div>
        <!-- End Header Logo & Naviagtion -->

    </header>
    <!-- End Header Section -->



    <!-- Start Services Section -->
    <div class=" section service" id="surveySection" ng-controller="PGTakeSurveyController">
        <div class="container">
            <div class="row">
                <fieldset>

                    <!-- Form Name -->
                    <legend ng-bind="survey_name" ng-show="survey_name.length"></legend>
                    <div ng-show="survey_name.length" class="col-md-8 col-sm-10 col-xs-12 center-block">
                        <div class="alert alert-info text-center h4" ng-bind="survey_description || 'Please fill the survey as accurately as possible'"></div>
                    </div>

                </fieldset>
                <form class="form-horizontal" ng-show="survey_name.length">

                </form>

                <p ng-if="!(survey_name.length)" class="h3 text-center" style="margin: 30px 0 150px">
                    <i class="fa fa-search h2"></i><br><br><br>
                    Oops! We couldn't find the survey you requested.<br> Please contact the sender of the link for more information.
                </p>


            </div><!-- .row -->
        </div><!-- .container -->
    </div>
    <!-- End Services Section -->






    <!-- Start Footer Section -->
    <footer id="contactus">
        <div class="container">
            <div class="row footer-widgets">


                <!-- Start Subscribe & Social Links Widget -->
                <div class="col-md-6 col-xs-12">
                    <!--<div class="footer-widget mail-subscribe-widget">-->
                    <!--<h4>Get in touch<span class="head-line"></span></h4>-->
                    <!--<p>Join our mailing list to stay up to date and get notices about our new releases!</p>-->
                    <!--<form class="subscribe">-->
                    <!--<input type="text" placeholder="mail@bissame.com">-->
                    <!--<input type="submit" class="main-button" value="Send">-->
                    <!--</form>-->
                    <!--</div>-->
                    <div class="footer-widget social-widget">
                        <h4>Follow Us<span class="head-line"></span></h4>
                        <ul class="social-icons">
                            <li>
                                <a  target="_blank" class="facebook" href="https://www.facebook.com/BBGgov/"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a target="_blank"  class="twitter" href="https://twitter.com/hubaccra/"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a target="_blank"  class="youtube" href="https://www.youtube.com/user/bbgtunein/featured"><i class="fa fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                </div><!-- .col-md-3 -->
                <!-- End Subscribe & Social Links Widget -->


                <!-- Start Contact Widget -->
                <div class="col-md-6 col-xs-12">
                    <div class="footer-widget contact-widget">
                        <h4><img src="front_app/assets/images/bissame-white.png" class="img-responsive" alt="Bissame Logo" /></h4>
                        <p>We’d love to hear from you! Please stay in touch using the information provided below:</p>
                        <ul>
                            <li><span>Phone Number:</span> +233 540 832 867</li>
                            <li><span>Email:</span> lab@pegasusrises.com</li>
                            <li><span>Website:</span> www.bissame.com</li>
                        </ul>
                    </div>
                </div><!-- .col-md-3 -->
                <!-- End Contact Widget -->


            </div><!-- .row -->

            <!-- Start Copyright -->
            <div class="copyright-section">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; 2016 -  All Rights Reserved <a href="http://bissame.com">Bissame</a> </p>
                    </div><!-- .col-md-6 -->
                    <div class="col-md-6">
                        <ul class="footer-nav">
                            <!--<li><a href="">Sitemap</a></li>-->
                            <!--<li><a href="">Privacy Policy</a></li>-->
                            <li><a href="http://www.bissame.com#contact">Contact</a>
                            </li>
                        </ul>
                    </div><!-- .col-md-6 -->
                </div><!-- .row -->
            </div>
            <!-- End Copyright -->

        </div>
    </footer>
    <!-- End Footer Section -->


</div>
<!-- End Full Body Container -->

<!-- Go To Top Link -->
<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

<div id="loader">
    <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
    </div>
</div>


<!-- Modal -->
<div id="successModal" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width: 500px;">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Thank you for participating!</h4>
            </div>
            <div class="modal-body">
                <p class="h5 text-center">Survey response has been submitted successfully.</p>
                <p class="text-center">This survey has been marked public and can be shared on social media for more responses. Kindly help spread the word.</p>
                <br>
                <h3 class="text-center">Share via : </h3>
                <br>
                <div class="row">
                    <div class="col-sm-4"><button class="btn btn-primary btn-sm text-center center-block"><i class="fa fa-facebook"></i>  Facebook</button></div>
                    <div class="col-sm-4"><button class="btn btn-info btn-sm text-center center-block"><i class="fa fa-twitter"></i> Twitter&nbsp;</button></div>
                    <div class="col-sm-4"><button class="btn btn-danger btn-sm text-center center-block"><i class="fa fa-google-plus"></i> Google +</button></div>
                </div>
            </div>
            <div class="modal-footer">
                <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
            </div>
        </div>

    </div>
</div>




<!--This directive is for angular-growl-2-->
<div growl="" limit-messages="1"></div>
<!--End of  angular-growl-2-->


<script  src="/front_app/scripts.js"></script>
<script  src="/front_app/pegasusrises-survey.js"></script>






</body>
</html>