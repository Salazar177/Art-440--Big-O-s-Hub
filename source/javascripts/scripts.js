$(window).load(function(){

	// NAV BUTTON
	if ($(window).width() <= 767){
		// do something here
		$('.navUIButtonContainer').removeClass('hidden');
		$('.navLinks').addClass('hidden');
	}
	
	$('.navUIButton').click(function(){
		$('.navLinks').removeClass('hidden');
	});
	
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
	$('.navLink').each(function() {
		console.log(window.location.pathname);
	    if ($('.menuLink').attr('href')  ===  "/" + window.location.pathname) {
	      $(this).addClass('current');
	      console.log("Fuck");
		}
	});
	
});