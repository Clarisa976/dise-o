$(document).ready(function () {
	$('#menu-hamburger').on('mouseenter',function(){
		$(this).animate({
			color: "#FFA559"},100); //ms para la animación
			
	
	});
	$('#menu-hamburger').on('mouseleave',function(){
		$(this).animate({
			color: "#808080"},100); //ms para la animación
	});

	$('#menu-hamburger').on('click',function() {
       $("ul#menu").toggle(); 
	});

})