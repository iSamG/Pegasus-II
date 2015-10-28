<!DOCTYPE html>
<!--[if IE 8]> <html class="ie8" lang="en"> <![endif]-->
<!--[if IE 9]> <html class="ie9" lang="en"> <![endif]-->
<!--[if !IE]><!--> <html lang="en" ><!--<![endif]--><!--manifest="/front_app/b2w_public.appcache"-->
<head>
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


<body ng-app="pegasusApp">

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
                                <a class="facebook " tooltip-placement="bottom" tooltip="Facebook" title="Facebook" href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a class="twitter " tooltip-placement="bottom" tooltip="Twitter" title="Twitter" href=""><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="google " tooltip-placement="bottom" tooltip="Google Plus" title="Google Plus" href=""><i class="fa fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a class="linkdin " tooltip-placement="bottom" tooltip="Linkedin" title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a>
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
                    <!-- Stat Search -->
                    <div class="search-side">
                        <a href="" class="show-search hidden"><i class="fa fa-search"></i></a>
                        <div class="search-form">
                            <form autocomplete="off" role="search" method="get" class="searchform" action="#">
                                <input type="text" value="" name="s" id="s" placeholder="Search the site...">
                            </form>
                        </div>
                    </div>
                    <!-- End Search -->
                    <!-- Start Navigation List -->
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="active" href="/">Home</a>
                            <!--<ul class="dropdown">-->
                                <!--<li><a class="active" href="index.html">Home Main Version</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-01.html">Home Version 1</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-02.html">Home Version 2</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-03.html">Home Version 3</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-04.html">Home Version 4</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-05.html">Home Version 5</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-06.html">Home Version 6</a>-->
                                <!--</li>-->
                                <!--<li><a href="index-07.html">Home Version 7</a>-->
                                <!--</li>-->
                            <!--</ul>-->
                        </li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="" login-modal="">Login</a></li>
                        <li><a href="" signup-modal="">Signup</a></li>
                        <!--<li><a href="/survey?sid=10">Test Survey</a></li>-->
                    </ul>
                    <!-- End Navigation List -->
                </div>
            </div>
        </div>
        <!-- End Header Logo & Naviagtion -->

    </header>
    <!-- End Header Section -->



    <!-- Start Home Page Slider -->
    <section  id="home" style="overflow: hidden">
        <!-- Carousel -->
        <div id="main-slide" class="carousel slide" data-ride="carousel" >

            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#main-slide" data-slide-to="0" class="active"></li>
                <li data-target="#main-slide" data-slide-to="1"></li>
                <li data-target="#main-slide" data-slide-to="2"></li>
            </ol>
            <!--/ Indicators end-->

            <!-- Carousel inner -->
            <div class="carousel-inner">
                <div class="item active">
                    <img class="" height="400px" style="height: 400px;" src="front_app/assets/images/img/rays.jpg" alt="slider">
                    <div class="slider-content">
                        <div class="col-md-12 text-center">
                            <h2 class="animated2">
                                <span>Welcome to <strong>Pegasus</strong></span>
                            </h2>
                            <h3 class="animated3">
                                <span>Data collection could be much easier</span>
                            </h3>
                            <p class="animated4"><a href="" class="slider btn btn-primary" signup-modal="">Sign up now</a>
                            </p>
                        </div>
                    </div>
                </div>
                <!--/ Carousel item end -->
                <div class="item">
                    <img class="" height="400px" style="height: 400px;" src="front_app/assets/images/img/rays-of-light.jpg" alt="slider">
                    <div class="slider-content">
                        <div class="col-md-12 text-center">
                            <h2 class="animated4">
                                <span><strong>Pegasus</strong> Cloud Surveys</span>
                            </h2>
                            <h3 class="animated5">
                                <span>Gather and analyse data in realtime</span>
                            </h3>
                            <p class="animated6"><a href="" class="slider btn btn-primary" signup-modal="">Get Started</a>
                            </p>
                        </div>
                    </div>
                </div>
                <!--/ Carousel item end -->
                <div class="item">
                    <img class="" style="height: 400px;" height="400px" src="front_app/assets/images/img/pegasus.jpg" alt="slider">
                    <div class="slider-content">
                        <div class="col-md-12 text-center">
                            <h2 class="animated7 white">
                                <span>Free Cloud <strong>Questionnaires</strong></span>
                            </h2>
                            <h3 class="animated8 white">
                                <span>Why you are waiting</span>
                            </h3>
                            <div class="">
                                <a class="animated4 slider btn btn-primary btn-min-block" href="" signup-modal="">Sign up</a>
                                <a class="animated4 slider btn btn-default btn-min-block" href="" login-modal="">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ Carousel item end -->
            </div>
            <!-- Carousel inner end-->

            <!-- Controls -->
            <a class="left carousel-control" data-target="#main-slide" data-slide="prev">
                <span><i class="fa fa-angle-left"></i></span>
            </a>
            <a class="right carousel-control" data-target="#main-slide" data-slide="next">
                <span><i class="fa fa-angle-right"></i></span>
            </a>
        </div>
        <!-- /carousel -->
    </section>
    <!-- End Home Page Slider -->


    <!-- Start Services Section -->
    <div class="section service">
        <div class="container">
            <div class="row">

                <!-- Start Service Icon 1 -->
                <div class="col-md-3 col-sm-6 service-box service-center" data-animation="fadeIn" data-animation-delay="01">
                    <div class="service-icon">
                        <i class="fa fa-leaf icon-large"></i>
                    </div>
                    <div class="service-content">
                        <h4>SURVEY BUILDING</h4>
                        <p class="text-justify">Create easy-to-deploy survey forms for mobile data collection. The forms support a variety of files such as photos, videos, location and other types. These help to make surveys comprehensive and don't require any coding.</p>

                    </div>
                </div>
                <!-- End Service Icon 1 -->

                <!-- Start Service Icon 2 -->
                <div class="col-md-3 col-sm-6 service-box service-center" data-animation="fadeIn" data-animation-delay="02">
                    <div class="service-icon">
                        <i class="fa fa-desktop icon-large"></i>
                    </div>
                    <div class="service-content">
                        <h4>CUSTOMIZABLE FORMS</h4>
                        <p class="text-justify">Process data through a rich open platform that supports a wide range of use cases. Pegasus can be customized for several data aggregation purposes. Among others, these include communications, healthcare, education, economic empowerment, emergency services, and market analytics.</p>
                    </div>
                </div>
                <!-- End Service Icon 2 -->

                <!-- Start Service Icon 3 -->
                <div class="col-md-3 col-sm-6 service-box service-center" data-animation="fadeIn" data-animation-delay="03">
                    <div class="service-icon">
                        <i class="fa fa-eye icon-large"></i>
                    </div>
                    <div class="service-content">
                        <h4>MOBILE DEPLOYMENT</h4>
                        <p class="text-justify">Deliver contextually relevant data that integrates with a wide range of existing mobile app services. Data collectors can access forms created on the Pegasus web portal via their mobile devices. Through this medium, data can be collected and submitted for administrative viewing.</p>
                    </div>
                </div>
                <!-- End Service Icon 3 -->

                <!-- Start Service Icon 4 -->
                <div class="col-md-3 col-sm-6 service-box service-center" data-animation="fadeIn" data-animation-delay="04">
                    <div class="service-icon">
                        <i class="fa fa-code icon-large"></i>
                    </div>
                    <div class="service-content">
                        <h4>REAL-TIME ANALYTICS</h4>
                        <p class="text-justify">Data submitted are collated and presented in graphical formats on a custom dashboard. This enables organizations to gain real-time insights from surveys deployed.</p>
                    </div>
                </div>
                <!-- End Service Icon 4 -->

            </div><!-- .row -->
        </div><!-- .container -->
    </div>
    <!-- End Services Section -->


    <!-- Start Purchase Section -->
    <div class="section purchase">
        <div class="container">

            <!-- Start Video Section Content -->
            <div class="section-video-content text-center">

                <!-- Start Animations Text -->
                <h1 class="fittext wite-text uppercase tlt">
                    Pegasus is free to use and is supported by <br/><strong>the BBG</strong> at the <strong>Impact Hub Accra's Digital Innovation Lab</strong>
                </h1>
                <!-- End Animations Text -->


                <!-- Start Buttons -->
                <a href="#" class="btn-system btn-large border-btn btn-wite"><i class="fa fa fa-sign-in"></i> Login</a>
                <a href="#" class="btn-system btn-large btn-wite"><i class="fa fa-sign-out"></i> Signup Now</a>

            </div>
            <!-- End Section Content -->

        </div><!-- .container -->
    </div>
    <!-- End Purchase Section -->


    <!-- Start Team Member Section -->
    <div class="section " style="background:#fff;">
        <div class="container">

            <!-- Start Big Heading -->
            <div class="big-title text-center" data-animation="fadeInDown" data-animation-delay="01">
                <h1>Our Great <strong>Partners</strong></h1>
            </div>
            <!-- End Big Heading -->

            <!-- Some Text -->
            <p class="text-center"><span class="accent-color">Pegasus</span> is powered by our kind sponsors as well as the host of the Digital Innovations Lab
                <br/>located at <span class="accent-color">Impact Hub Accra</span> facility at Labone, in Accra Ghana.</p>




            <!-- Start Team Members -->
            <div class="row">

                <!-- Start Member 1 -->
                <div class="col-md-6 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="03">
                    <div class="team-member modern">
                        <!-- Member Photo, Name & Position -->
                        <div class="member-photo">
                            <img class="img-responsive img-thumbnail center-block" style="width: 100%; height: 300px" alt="BBG" src="front_app/assets/images/team/face_1.png" />
                            <div class="member-name">Broadcasting Board of Governors <span>(BBG)</span>
                            </div>
                        </div>
                        <!-- Member Words -->
                        <div class="member-info">
                            <p class="text-center">BBG is US based partner in radio and television accross several continents</p>
                        </div>

                        <!-- Member Social Links -->
                        <div class="member-socail text-center center-block">
                            <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                            <a class="gplus" href="#"><i class="fa fa-google-plus"></i></a>
                            <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            <a class="flickr" href="#"><i class="fa fa-flickr"></i></a>
                            <a class="mail" href="#"><i class="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <!-- End Member 1 -->

                <!-- Start Member 2 -->
                <div class="col-md-6 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="04">
                    <div class="team-member modern">
                        <!-- Member Photo, Name & Position -->
                        <div class="member-photo">
                            <img alt="IHA" class="img-responsive img-thumbnail center-block" style="width: 100%; height: 300px" src="front_app/assets/images/team/face_2.png" />
                            <div class="member-name">Impact Hub Accra<span>(IHA)</span>
                            </div>
                        </div>
                        <!-- Member Words -->
                        <div class="member-info">
                            <p class="text-center">A co-working and incubator for companies and startups to facilitate high energy innovative ideas</p>
                        </div>

                        <!-- Member Social Links -->
                        <div class="member-socail center-block text-center">
                            <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                            <a class="gplus" href="#"><i class="fa fa-google-plus"></i></a>
                            <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            <a class="flickr" href="#"><i class="fa fa-flickr"></i></a>
                            <a class="mail" href="#"><i class="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <!-- End Member 2 -->

                <!-- Start Member 3 -->
                <div class="hidden col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="05">
                    <div class="team-member modern">
                        <!-- Member Photo, Name & Position -->
                        <div class="member-photo">
                            <img alt="" src="front_app/assets/images/team/face_3.png" />
                            <div class="member-name">Chris John <span>Developer</span>
                            </div>
                        </div>
                        <!-- Member Words -->
                        <div class="member-info">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                        </div>
                        <!-- Start Progress Bar 1 -->
                        <div class="progress-label">Photoshop</div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" data-progress-animation="96%" data-appear-animation-delay="400">
                                <span class="percentage">96%</span>
                            </div>
                        </div>
                        <!-- Start Progress Bar 2 -->
                        <div class="progress-label">Logo Design</div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" data-progress-animation="94%" data-appear-animation-delay="800">
                                <span class="percentage">94%</span>
                            </div>
                        </div>
                        <!-- Start Progress Bar 3 -->
                        <div class="progress-label">Vectors Design</div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" data-progress-animation="90%" data-appear-animation-delay="1200">
                                <span class="percentage">90%</span>
                            </div>
                        </div>
                        <!-- Member Social Links -->
                        <div class="member-socail">
                            <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                            <a class="gplus" href="#"><i class="fa fa-google-plus"></i></a>
                            <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            <a class="flickr" href="#"><i class="fa fa-flickr"></i></a>
                            <a class="mail" href="#"><i class="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <!-- End Member 3 -->

                <!-- Start Member 4 -->
                <div class="hidden col-md-3 col-sm-6 col-xs-12" data-animation="fadeIn" data-animation-delay="06">
                    <div class="team-member modern">
                        <!-- Member Photo, Name & Position -->
                        <div class="member-photo">
                            <img alt="" src="front_app/assets/images/team/face_4.png" />
                            <div class="member-name">Sara John <span>Developer</span>
                            </div>
                        </div>
                        <!-- Member Words -->
                        <div class="member-info">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p>
                        </div>
                        <!-- Start Progress Bar 1 -->
                        <div class="progress-label">Photoshop</div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" data-progress-animation="96%" data-appear-animation-delay="400">
                                <span class="percentage">96%</span>
                            </div>
                        </div>
                        <!-- Start Progress Bar 2 -->
                        <div class="progress-label">Logo Design</div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" data-progress-animation="85%" data-appear-animation-delay="800">
                                <span class="percentage">85%</span>
                            </div>
                        </div>
                        <!-- Start Progress Bar 3 -->
                        <div class="progress-label">Vectors Design</div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-primary" data-progress-animation="100%" data-appear-animation-delay="1200">
                                <span class="percentage">100%</span>
                            </div>
                        </div>
                        <!-- Member Social Links -->
                        <div class="member-socail">
                            <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                            <a class="gplus" href="#"><i class="fa fa-google-plus"></i></a>
                            <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            <a class="flickr" href="#"><i class="fa fa-flickr"></i></a>
                            <a class="mail" href="#"><i class="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <!-- End Member 4 -->

            </div>
            <!-- End Team Members -->

        </div><!-- .container -->
    </div>
    <!-- End Team Member Section -->


    <div id="parallax-one" class="parallax" style="background-image:url(front_app/assets/images/img/african-sunrise.jpg); margin: 15px">
        <div class="parallax-text-container-1">
            <div class="parallax-text-item">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <div class="counter-item">
                                <i class="fa fa-cloud-upload"></i>
                                <div class="timer" id="item1" data-to="991" data-speed="5000"></div>
                                <h5>Files uploaded</h5>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <div class="counter-item">
                                <i class="fa fa-check"></i>
                                <div class="timer" id="item2" data-to="7394" data-speed="5000"></div>
                                <h5>Projects completed</h5>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <div class="counter-item">
                                <i class="fa fa-code"></i>
                                <div class="timer" id="item3" data-to="18745" data-speed="5000"></div>
                                <h5>Lines of code written</h5>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 col-md-3">
                            <div class="counter-item">
                                <i class="fa fa-male"></i>
                                <div class="timer" id="item4" data-to="8423" data-speed="5000"></div>
                                <h5>Happy clients</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


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
                            <input type="text" placeholder="mail@example.com">
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
                                <p><a href="#">@ithemeslab </a> Lorem ipsum dolor et, consectetur adipiscing eli.</p>
                                <span>28 February 2014</span>
                            </li>
                            <li>
                                <p><a href="#">@ithemeslab </a> Lorem ipsum dolor et, consectetur adipiscing eli.An Fusce eleifend aliquet nis application.</p>
                                <span>26 February 2014</span>
                            </li>
                            <li>
                                <p><a href="#">@ithemeslab </a> Lorem ipsum dolor et, consectetur adipiscing eli.</p>
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
                        <h4><img src="front_app/assets/images/footer-margo.png" class="img-responsive" alt="Footer Logo" /></h4>
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
<div growl=""></div>
<!--End of  angular-growl-2-->


<script  src="/front_app/scripts.js"></script>
<script  src="/front_app/pegasusrises.js"></script>
<script src="/front_app/templates/app.js"></script>
<script src="/front_app/templates/common.js"></script>






</body>
</html>