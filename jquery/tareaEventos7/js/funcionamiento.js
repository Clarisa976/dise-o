$(document).ready(function () {
	$('#menu-hamburger').on('mouseenter',function(){
		$(this).css({
			"color":"blue",
			"font-weight":"bolder"
		})
	});
	$('#menu-hamburger').on('mouseleave',function(){
		$(this).css({
			"color":"grey",
			"font-weight":"normal"
		})
	});

	$('#menu-hamburger').on('click',function() {
       $("ul#menu").toggle(); 
	});

})