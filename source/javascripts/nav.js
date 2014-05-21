$(window).load(function(){
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
});