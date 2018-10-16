//= ../bower_components/jquery/dist/jquery.js

document.addEventListener('DOMContentLoaded', function(){
	var header = document.querySelector('.header'),
			toggleLink = document.querySelector('.header-toggle');
	toggleLink.addEventListener('click', function(){
		header.classList.toggle('active');
	});

	window.onscroll = function() {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
				innerHeight = document.documentElement.clientHeight,
				headerTop = document.querySelector('.header-top');

		if (scrollTop >= 100) {
			headerTop.classList.add('fixed');
		} else {
			headerTop.classList.remove('fixed');
		}
	}
});

$(function(){
	$('.nav-page').click( function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top -100}, 1000);
		$('.header').removeClass('active');
  });
});
$(window).on('load', function(){
	$('.preloader').fadeOut();
});
