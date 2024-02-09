
/*Al hacer clic sobre una imagen muestra su titular y para ocultarlo usamos doble clic*/
$(document).ready(function(){
	$('.noticia img').click(function(){
		$(this).next('h3').css("display","flex");
	})
	$('.noticia img').dblclick(function(){
		$(this).next('h3').css("display","none");
	})
})
