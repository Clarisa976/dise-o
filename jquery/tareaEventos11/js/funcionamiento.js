$(document).ready(function () {
	$('#menu-hamburger').on('mouseenter',function(){
		$(this).animate({
			//'background-color': "#FFA559"
			'color': "#FFA559"},100); //ms para la animación
			
	
	});
	$('#menu-hamburger').on('mouseleave',function(){
		$(this).animate({
			//'background-color': "#fff"
			'color': "#808080"
			},100); //ms para la animación
	});

	$('#menu-hamburger').on('click',function() {
       $("ul#menu").toggle(); 
	});

})