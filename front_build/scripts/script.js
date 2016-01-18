/* ----------------- Start JS Document ----------------- */

var $ = jQuery.noConflict();

// Page Loader
$(window).load(function () {
	"use strict";
	$('#loader').fadeOut();
});

$(document).ready(function ($) {
	"use strict";



	/*----------------------------------------------------*/
	/*	Hidder Header
	 /*----------------------------------------------------*/

	var headerEle = function(){
		var $headerHeight = $('header').height();
		$('.hidden-header').css({ 'height' : $headerHeight  + "px" });
	};

	$(window).load(function () {
		headerEle();
	});

	$(window).resize(function () {
		headerEle();
	});


	/*----------------------------------------------------*/
	/*	Nice-Scroll
	 /*----------------------------------------------------*/

	$("html").niceScroll({
		scrollspeed: 100,
		mousescrollstep: 38,
		cursorwidth: 5,
		cursorborder: 0,
		cursorcolor: '#333',
		autohidemode: false,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0
	});





	/*----------------------------------------------------*/
	/*	Nav Menu & Search
	 /*----------------------------------------------------*/

	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

	$('.show-search').click(function() {
		$('.search-form').fadeIn(300);
		$('.search-form input').focus();
	});
	$('.search-form input').blur(function() {
		$('.search-form').fadeOut(300);
	});





	/*----------------------------------------------------*/
	/*	Back Top Link
	 /*----------------------------------------------------*/

	var offset = 200;
	var duration = 900;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(400);
		} else {
			$('.back-to-top').fadeOut(400);
		}
	});
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});

	$('a[href="#contact"]').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: $(document).height() }, duration);
		return false;
	});

	$('a[href="#about"]').click(function (event) {
		var about = $('#about');
		$('html, body').animate({
				scrollTop: about.offset().top } , duration
		);
	});

	$('a[href="#home"]').click(function (event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});



	/*----------------------------------------------------*/
	/*	Sliders & Carousel
	 /*----------------------------------------------------*/

	////------- Touch Slider
	var time = 4.4,
		$progressBar,
		$bar,
		$elem,
		isPause,
		tick,
		percentTime;
	$('.touch-slider').each(function(){
		var owl = jQuery(this),
			sliderNav = $(this).attr('data-slider-navigation'),
			sliderPag = $(this).attr('data-slider-pagination'),
			sliderProgressBar = $(this).attr('data-slider-progress-bar');

		var returnSliderNav;
		if ( sliderNav == 'false' || sliderNav == '0' ) {
			returnSliderNav = false;
		}else {
			returnSliderNav = true
		}
		var returnSliderPag;
		if ( sliderPag == 'true' || sliderPag == '1' ) {
			var returnSliderPag = true
		}else {
			returnSliderPag = false
		}

		if ( sliderProgressBar == 'true' || sliderProgressBar == '1' ) {
			var returnSliderProgressBar = progressBar,  returnAutoPlay = false
		}else {
			var returnSliderProgressBar = false;
			var returnAutoPlay = true
		}

		owl.owlCarousel({
			navigation : returnSliderNav,
			pagination: returnSliderPag,
			slideSpeed : 400,
			paginationSpeed : 400,
			lazyLoad : true,
			singleItem: true,
			autoHeight : true,
			autoPlay: returnAutoPlay,
			stopOnHover: returnAutoPlay,
			transitionStyle : "fade",
			afterInit : returnSliderProgressBar,
			afterMove : moved,
			startDragging : pauseOnDragging
		});

	});

	function progressBar(elem){
		$elem = elem;
		buildProgressBar();
		start();
	}

	function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar).prependTo($elem);
	}

	function start() {
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}

	function interval() {
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
				width: percentTime+"%"
			});
			if(percentTime >= 100){
				$elem.trigger('owl.next')
			}
		}
	}

	function pauseOnDragging(){
		isPause = true;
	}

	function moved(){
		clearTimeout(tick);
		start();
	}



	////------- Projects Carousel
	$(".projects-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
		autoPlay: 3000,
		items : 4,
		itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});



	////------- Testimonials Carousel
	$(".testimonials-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 2500,
		stopOnHover: true,
		autoPlay: 3000,
		singleItem:true,
		autoHeight : true,
		transitionStyle : "fade"
	});






	////------- Custom Carousel
	$('.custom-carousel').each(function(){
		var owl = jQuery(this),
			itemsNum = $(this).attr('data-appeared-items'),
			sliderNavigation = $(this).attr('data-navigation');

		if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
			var returnSliderNavigation = false
		}else {
			var returnSliderNavigation = true
		}
		if( itemsNum == 1) {
			var deskitemsNum = 1;
			var desksmallitemsNum = 1;
			var tabletitemsNum = 1;
		}
		else if (itemsNum >= 2 && itemsNum < 4) {
			var deskitemsNum = itemsNum;
			var desksmallitemsNum = itemsNum - 1;
			var tabletitemsNum = itemsNum - 1;
		}
		else if (itemsNum >= 4 && itemsNum < 8) {
			var deskitemsNum = itemsNum -1;
			var desksmallitemsNum = itemsNum - 2;
			var tabletitemsNum = itemsNum - 3;
		}
		else {
			var deskitemsNum = itemsNum -3;
			var desksmallitemsNum = itemsNum - 6;
			var tabletitemsNum = itemsNum - 8;
		}
		owl.owlCarousel({
			slideSpeed : 300,
			stopOnHover: true,
			autoPlay: false,
			navigation : returnSliderNavigation,
			pagination: false,
			lazyLoad : true,
			items : itemsNum,
			itemsDesktop : [1000,deskitemsNum],
			itemsDesktopSmall : [900,desksmallitemsNum],
			itemsTablet: [600,tabletitemsNum],
			itemsMobile : false,
			transitionStyle : "goDown",
		});
	});



	////------- Testimonials Carousel
	$(".fullwidth-projects-carousel").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
		autoPlay: 3000,
		items : 5,
		itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});




	/*----------------------------------------------------*/
	/*	Tabs
	 /*----------------------------------------------------*/

	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})




	/*----------------------------------------------------*/
	/*	Css3 Transition
	 /*----------------------------------------------------*/

	$('*').each(function(){
		if($(this).attr('data-animation')) {
			var $animationName = $(this).attr('data-animation'),
				$animationDelay = "delay-"+$(this).attr('data-animation-delay');
			$(this).appear(function() {
				$(this).addClass('animated').addClass($animationName);
				$(this).addClass('animated').addClass($animationDelay);
			});
		}
	});



	/*----------------------------------------------------*/
	/*	Change Slider Nav Icons
	 /*----------------------------------------------------*/

	$('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.read-more').append('<i class="fa fa-angle-right"></i>');



	/*----------------------------------------------------*/
	/*	Sticky Header
	 /*----------------------------------------------------*/

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
		document.querySelector( 'header' );

		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$('.top-bar').slideUp(300);
				$("header").addClass("fixed-header");
				$('.navbar-brand').css({ 'padding-top' : 1 + "px", 'padding-bottom' : 1+ "px" });

				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 20 + "px", 'padding-bottom' : 20 + "px" })
					$('.search-side').css({ 'margin-top' : -7 + "px" });
				};

			}
			else {
				$('.top-bar').slideDown(300);
				$("header").removeClass("fixed-header");
				$('.navbar-brand').css({ 'padding-top' : 9 + "px", 'padding-bottom' : 9 + "px" });

				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 28 + "px", 'padding-bottom' : 28 + "px" });
					$('.search-side').css({ 'margin-top' : 0  + "px" });
				}

			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();



	})();
});




/*----------------------------------------------------*/
/*	Portfolio Isotope
 /*----------------------------------------------------*/

jQuery(window).load(function(){

	var $container = $('#portfolio');
	$container.isotope({
		layoutMode : 'masonry',
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('.portfolio-filter ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});

	var $optionSets = $('.portfolio-filter ul'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		if ( $this.hasClass('selected') ) { return false; }
		var $optionSet = $this.parents('.portfolio-filter ul');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	});

});

/*reset password Script*/
$(function () {
	var form = $("#resetPasswordForm");
	var password = $("#password");
	var confirm_pass = $("#password_confirm");
	var infoBox = $("div.alert");

	form.on("submit", function (evt) {
		evt.preventDefault();
		var newPass = password.val();
		var confPass = confirm_pass.val();

		if (newPass.length && confPass.length) {
			if (newPass != confPass) {
				infoBox.removeClass("alert-info").addClass("alert-danger").text("Both password fields should match. Please check and try again");
				return false;
			}else{
				$.ajax({
					url : '/email/authenticate/' + form.data("email"),
					method : "POST",
					data : {password : newPass, password_confirm : confPass},
					success : function (successData) {
						if (successData.code == 200) {
							infoBox.removeClass("alert-info, alert-danger").addClass("alert-success")
								.text("Password reset was successful. Redirecting you back to home page...");
							window.location.href = '/';
						}else{
							infoBox.removeClass("alert-info, alert-danger").addClass("alert-danger")
								.text("Password could not be reset. " + successData.message);
						}
					},
					error : function (errorData) {
						infoBox.removeClass("alert-info, alert-danger").addClass("alert-info")
							.text("Password could not be reset. Check email and try again");
						return false;

					}
				})
			}
		}else{
			infoBox.removeClass("alert-info, alert-danger").addClass("alert-danger").text("Please enter new password in both fields");
			return false;

		}
	})
});
/* ----------------- End JS Document ----------------- */
