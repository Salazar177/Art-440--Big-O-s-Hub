$(document).ready(function(){

	$('.navicon-button').click(function(){
		$('.mobileNav').toggleClass('hidden');
		$('.navUIButton').toggleClass('close');
		$(this).toggleClass("open");
/* 		$(window).scrollTo(0, 0); */

	});

	// NAV BUTTON
	if ($(window).width() <= 767){
		// do something here
		$('.navUIButtonContainer').removeClass('hidden');
		$('.navLinks').addClass('hidden');
/* 		$('.navLinks').removeClass('col-xs-offset-2 col-xs-8'); */
	}
	
	
	
	$(window).resize(function(){
		if ($(window).width() <= 767){	
			// do something here
			$('.navUIButtonContainer').removeClass('hidden');
			$('.navLinks').addClass('hidden');
/* 			$('.container').removeClass('navContainer') */

		}
		if ($(window).width() >= 767){	
			// do something here
			$('.navUIButtonContainer').addClass('hidden');
			$('.navLinks').removeClass('hidden');
			$('.mobileNav').addClass('hidden');

		}
	});
	
	// NAV ACTIVE LINKS
	$('.navLink').each(function() {
	    if ( "/" + $(this).attr('href')  ===   window.location.pathname) {
	      $(this).addClass('current');
		}
	});
	
});