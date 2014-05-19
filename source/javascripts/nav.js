$(window).resize(function(){
	if ($(window).width() <= 767){	
		// do something here
		$(function () {
			$('.navUIButton').removeClass('hidden');
		});
	}	
});