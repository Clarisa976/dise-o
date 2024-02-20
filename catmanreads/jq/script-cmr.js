$(document).ready(function () {
    $('#img-menu-principal').click(function () {
        $('#opciones-menu-principal').toggle(); // Alternar la visibilidad del menú
    });
    $('.cerrarMenu').click(function () {
        $('#opciones-menu-principal').toggle(); // Ocultar el menú
    });
    $('#img-menu-usuario').click(function () {
        $('#opciones-menu-usuario').toggle(); // Alternar la visibilidad del menú
    });
    $('.cerrarMenu').click(function () {
        $('#opciones-menu-usuario').toggle(); // Ocultar el menú
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 15) {//si la posición es mayor a 0 se ha desplazado hacia abajo
            $("div#volverarriba").fadeIn();//muestra el botón de volver arriba
        } else {
            $("div#volverarriba").fadeOut();//oculta el botón de volver arriba
        }
    });
})