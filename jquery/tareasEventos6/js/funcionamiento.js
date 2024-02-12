$(document).ready(function () {
	$(window).scroll(function() {
        if ($(this).scrollTop() > 0) {//si la posición es mayor a 0 se ha desplazado hacia abajo
            $("header").addClass("fijar-cabecera");//se añade la clase para fijar la cabecera y ponerla un poco transparente
        } else {
            $("header").removeClass("fijar-cabecera");//sino se quita
        }
	});

	$(window).resize(function() {
		if($(window).width()>1200){//tamaño puesto para la versión de escritorio
				$("#menu-hamburger").prop("checked", true);//se marca el checkbox del menú de hamburguesa
		}else{
			$("#menu-hamburger").prop("checked", false);//se desmarca el checkbox del menú de hamburguesa
		}
                 
    });
	
})