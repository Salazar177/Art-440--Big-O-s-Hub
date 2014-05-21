/*
$(window).load(function(){
	if(window.location.pathname == '../menu.html'){
		// do something here
		$('.menuLinks').addClass('red');
		console.log("Make link active.");
	};
});
*/

/*
$('.navLinks ul li a').each(function(){

var path = window.location.href;
var loc = path.substring(path.lastIndexOf('/')+1);
var url = $(this).attr('href');

if(url == loc){
$(this).parent().addClass('red');
};
});
*/

/* var pathname = window.location.pathname; */

/*
$(window).load(function(){
	var pathname = window.location.pathname;
	if (window.location.pathname == '../index.html'){
		console.log("Whatever");
	}
});
*/

$('.navLink').each(function() {
	console.log("Test");
	if ($(this).attr('href')  ==  window.location.pathname) {
/* 	  $(this).addClass('red'); */
	  console.log("Whatever");
	}
});