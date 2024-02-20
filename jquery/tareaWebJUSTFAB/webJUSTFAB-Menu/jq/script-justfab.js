$(document).ready(function () {
    //mostrar el botón VOLVER ARRIBA al hacer scroll y que vuelva arriba
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 15) {//si la posición es mayor a 0 se ha desplazado hacia abajo
            $("div#volverarriba").fadeIn();//muestra el botón de volver arriba
        } else {
            $("div#volverarriba").fadeOut();//oculta el botón de volver arriba
        }
    });
    //ocultamos el menú principal
    $("ul#menu").css("display", "none");
    //mostrar y ocultar el menú controlando la acumulación de efectos en la cola
    $("nav#menu-principal span").on('click', function () {
        $("ul#menu").slideToggle();
    });
    //cada opción del submenú se muestra con efecto y al mostra una se oculta el resto
    /* $("ul#menu>li").click(function () {       
         $("ul#menu>li").not(this).children("ul").slideUp();
         $(this).children("ul").slideToggle();       
     });*/
    //cambiar el icono de la flecha hacia arriba si está desplegada 
    /* $("ul#menu>li a").click(function() {
 
         if ($(this).find("i.fa-angle-down").css("transform") == "none") {
             $(this).find("i.fa-angle-down").css("transform", "rotate(180deg)");
         } else {
             $(this).find("i.fa-angle-down").css("transform", "rotate(-180deg)");
         }
     });*/
     //cada opción de submenú se muestra con efecto, se rota la flecha y se oculta el resto
    $("ul#menu>li").click(function () {
        $("ul#menu>li a").find("i.fa-angle-down").css({//buscamos los iconos con la flecha abajo
            transform: "rotate(0deg)"//nos aseguramos que esté en la posición inical
        });
        $("ul#menu>li").not(this).children("ul").slideUp();//ocultamos los otros submenú
        if ($(this).children("ul").is(":hidden")) {//si está oculto
            $(this).children("ul").slideDown();//se deplega
            $(this).find("i.fa-angle-down").css({//rota 180grados
                transform: "rotate(180deg)"
            });
        } else {
            $(this).children("ul").slideUp();//sino se contrae
            $(this).find("i.fa-angle-down").css({//vuelve a su posición inicial
                transform: "rotate(0deg)"
            });
        }
    });
    /*Cuando haces un poco de scroll sobre la página debe aparecer con el 
    efecto que consideres más apropiado, la cabecera de la página fijada en 
    la parte superior.*/
    $(window).scroll(function () {
        //creamos una variable para el div
        var divLogoMenu = $("header#top div");
        if ($(this).scrollTop() > 0) {//si la posición es mayor a 0 se ha desplazado hacia abajo
            $("header#top div").addClass("fijar-cabecera");//se añade la clase para fijar la cabecera y ponerla un poco transparente
            $("header#top nav#menu-secundario").addClass("fijar-cabecera").css("top", divLogoMenu.outerHeight() + "px");//ajustamos el top con la altura del div para que no se amontonen
        } else {
            $("header#top div").removeClass("fijar-cabecera");//sino se quita
            $("header#top nav#menu-secundario").removeClass("fijar-cabecera").css("top", "0px");
        }
    });


    /*Al posicionar el ratón sobre la imagen de un producto debe aparecer 
    otra imagen del mismo producto. Cuando el ratón deja de estar sobe la 
    imagen aparece la imagen inicial.*/
    
    $("article.item img").on("mouseenter", function(){
        var src = $(this).attr("src");//obtenemos el scr actual
        $(this).attr("src", src.replace(".jpg", "-1.jpg"));//lo remplazamos
    });
    $("article.item img").on("mouseleave", function(){
        var src = $(this).attr("src");
        $(this).attr("src", src.replace("-1.jpg", ".jpg"));
    });


})