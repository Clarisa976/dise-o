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
    $("ul#menu>li").click(function () {       
        $("ul#menu>li").not(this).children("ul").slideUp();
        $(this).children("ul").slideToggle();       
    });
    //cambiar el icono en el menu
})