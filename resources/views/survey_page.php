<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<title>Pegasusrises | The Cloud Survey Builder</title>
<!--[if IE]> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta content="BBG Innovation Lab " name="description" />
<meta content="BBG Innovation Lab" name="author" />

<meta property="og:title"
      content="BBG Innovation Lab" />

<meta property="og:site_name"
      content="Pegasusrises" />

<meta property="og:url"
      content="http://www.pegasusrises.com" />

<meta property="og:description" content="BBG Innovation Lab"/>

<meta property="fb:app_id" content="###########" />

<meta property="og:locale" content="en_US" />

<meta property="og:type" content="product" />

<base href="/">

<link rel="stylesheet" href="/front_app/pegasusrises.css">
<!-- Favicon-->
<link href="favicon.ico" rel="icon" type="image/ico" />
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
                            <li><a href="#"><i class="fa fa-map-marker"></i>&nbsp; BBG Innovation Lab | Hub Accra</a></li>

                            <li><a href="#"><i class="fa fa-envelope-o"></i>&nbsp; labteam@pegasusrises.com</a>
                            </li>
                            <li><a href="#"><i class="fa fa-phone"></i>&nbsp; +12 345 678 000</a>
                            </li>
                        </ul>
                        <!-- End Contact Info -->
                    </div><!-- .col-md-6 -->
                    <div class="col-md-5">
                        <!-- Start Social Links -->
                        <ul class="social-list">
                            <li>
                                <a class="facebook itl-tooltip" tooltip-placement="bottom" tooltip="Facebook" title="Facebook" href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a class="twitter itl-tooltip" tooltip-placement="bottom" tooltip="Twitter" title="Twitter" href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="google itl-tooltip" tooltip-placement="bottom" tooltip="Google Plus" title="Google Plus" href="#"><i class="fa fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a class="linkdin itl-tooltip" tooltip-placement="bottom" tooltip="Linkedin" title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
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
                    <a class="navbar-brand" href="/">
                        Pegasusrises
                        <!--<img alt="" src="front_app/assets/images/margo.png">-->
                    </a>
                </div>
                <div class="navbar-collapse collapse">
                    <!-- Start Navigation List -->
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="active" href="/">Home</a>
                        </li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
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
                    <legend ng-bind="survey_name"></legend>
                    <div class="col-md-8 col-sm-10 col-xs-12 center-block">
                        <div class="alert alert-info text-center h4" ng-bind="survey_description || 'Please fill the survey as accurately as possible'"></div>
                    </div>

                </fieldset>
                <form class="form-horizontal">

                </form>


            </div><!-- .row -->
        </div><!-- .container -->
    </div>
    <!-- End Services Section -->






    <!-- Start Footer Section -->
    <footer >
        <div class="container">
            <div class="row footer-widgets">


                <!-- Start Subscribe & Social Links Widget -->
                <div class="col-md-3 col-xs-12">
                    <div class="footer-widget mail-subscribe-widget">
                        <h4>Get in touch<span class="head-line"></span></h4>
                        <p>Join our mailing list to stay up to date and get notices about our new releases!</p>
                        <form class="subscribe">
                            <input type="text" placeholder="mail@pegasusrises.com">
                            <input type="submit" class="main-button" value="Send">
                        </form>
                    </div>
                    <div class="footer-widget social-widget">
                        <h4>Follow Us<span class="head-line"></span></h4>
                        <ul class="social-icons">
                            <li>
                                <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="google" href="#"><i class="fa fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                            </li>
                            <li>
                                <a class="linkdin" href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a class="flickr" href="#"><i class="fa fa-flickr"></i></a>
                            </li>
                            <li>
                                <a class="tumblr" href="#"><i class="fa fa-tumblr"></i></a>
                            </li>
                            <li>
                                <a class="instgram" href="#"><i class="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a class="vimeo" href="#"><i class="fa fa-vimeo-square"></i></a>
                            </li>
                            <li>
                                <a class="skype" href="#"><i class="fa fa-skype"></i></a>
                            </li>
                        </ul>
                    </div>
                </div><!-- .col-md-3 -->
                <!-- End Subscribe & Social Links Widget -->


                <!-- Start Twitter Widget -->
                <div class="col-md-3 col-xs-12">
                    <div class="footer-widget twitter-widget">
                        <h4>Twitter Feed<span class="head-line"></span></h4>
                        <ul>
                            <li>
                                <p><a href="#">@innovationslab </a> Lorem ipsum dolor et, consectetur adipiscing eli.</p>
                                <span>28 February 2014</span>
                            </li>
                            <li>
                                <p><a href="#">@innovationslab </a> Lorem ipsum dolor et, consectetur adipiscing eli.An Fusce eleifend aliquet nis application.</p>
                                <span>26 February 2014</span>
                            </li>
                            <li>
                                <p><a href="#">@innovationslab </a> Lorem ipsum dolor et, consectetur adipiscing eli.</p>
                                <span>28 February 2014</span>
                            </li>
                        </ul>
                    </div>
                </div><!-- .col-md-3 -->
                <!-- End Twitter Widget -->


                <!-- Start Flickr Widget -->
                <div class="col-md-3 col-xs-12">
                    <div class="footer-widget flickr-widget">
                        <h4>Flicker Feed<span class="head-line"></span></h4>
                        <ul class="flickr-list">
                            <li>
                                <a href="front_app/assets/images/flickr-01.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-01.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-02.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-02.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-03.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-03.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-04.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-04.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-05.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-05.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-06.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-06.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-07.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-07.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-08.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-08.jpg">
                                </a>
                            </li>
                            <li>
                                <a href="front_app/assets/images/flickr-09.jpg" class="lightbox">
                                    <img alt="" src="front_app/assets/images/flickr-09.jpg">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div><!-- .col-md-3 -->
                <!-- End Flickr Widget -->


                <!-- Start Contact Widget -->
                <div class="col-md-3 col-xs-12">
                    <div class="footer-widget contact-widget">
                        <h4><img src="front_app/assets/images/footer-margo.pngw22" class="img-responsive" alt="BBG Logo" /></h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        <ul>
                            <li><span>Phone Number:</span> +01 234 567 890</li>
                            <li><span>Email:</span> info@pegasusrises.com</li>
                            <li><span>Website:</span> www.pegasusrises.com</li>
                        </ul>
                    </div>
                </div><!-- .col-md-3 -->
                <!-- End Contact Widget -->


            </div><!-- .row -->

            <!-- Start Copyright -->
            <div class="copyright-section">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; 2015 Pegasus -  All Rights Reserved <a href="http://pegasusrises.com">Pegasusrises</a> </p>
                    </div><!-- .col-md-6 -->
                    <div class="col-md-6">
                        <ul class="footer-nav">
                            <li><a href="#">Sitemap</a>
                            </li>
                            <li><a href="#">Privacy Policy</a>
                            </li>
                            <li><a href="#">Contact</a>
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




<!--This directive is for angular-growl-2-->
<div growl></div>
<!--End of  angular-growl-2-->


<script  src="/front_app/scripts.js"></script>
<script  src="/front_app/pegasusrises-survey.js"></script>






</body>
</html>