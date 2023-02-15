/*global $*/
$(document).ready(function () {
	'use strict';



	// Testimonials
	$('.testimonials .slides').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1,
		swipeToSlide: true,
		// arrows: false,
		slidesToScroll: 1
	});

	// Partners
	$('.partners-slider').slick({
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 5,
		swipeToSlide: true,
		arrows: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});

	// Projects
	$('.works').mixItUp();


	// works
	$('.works .btns button').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Navbar
	$('.nbar .menu-bars').click(function () {
		$(this).toggleClass('opened');
	});


	// Contact us
	$('.contact .contact-form .form-group .custom').focus(function () {
		$(this).siblings('label').css({
			bottom: '0',
			left: '0',
			color: '#404344'
		})
	});





});
