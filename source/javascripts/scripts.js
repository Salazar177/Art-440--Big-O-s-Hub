$(window).load(function(){

	// NAV BUTTON
	if ($(window).width() <= 767){
		// do something here
		$('.navUIButtonContainer').removeClass('hidden');
		$('.navLinks').addClass('hidden');
	}
	$(window).resize(function(){
		if ($(window).width() <= 767){	
			// do something here
			$('.navUIButtonContainer').removeClass('hidden');
			$('.navLinks').addClass('hidden');
		}
		if ($(window).width() >= 767){	
			// do something here
			$('.navUIButtonContainer').addClass('hidden');
			$('.navLinks').removeClass('hidden');
		}
	});
	
	// NAV ACTIVE LINKS
	$('.navLinks a').each(function() {
	    if ($(this).attr('href')  === '..'+  window.location.pathname) {
	      $(this).addClass('current');
		}
	});
});