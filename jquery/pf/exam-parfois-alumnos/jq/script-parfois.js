$(document).ready(function () {
    //cookies
    $('#cookies').css('display', 'flex');//se muestran flex
    $('#cookies span').on('click', function () {
        $('#cookies').slideUp('slow');//se oculta
    });
    //menú principal
    $('#hamburger').click(function () {

        if ($('#main-menu > ul#menu-toggle').css('left') == '0px') {
            // Menú visible, deslizar hacia fuera
            $('#main-menu > ul#menu-toggle').animate({ left: '-20rem' }, 500);
            $('#iconos #bag').animate({ opacity: 1 }, 300);
        } else {
            // Menú oculto, deslizar hacia dentro
            $('#main-menu > ul#menu-toggle').animate({ left: '0px' }, 500);
            $('#iconos #bag').animate({ opacity: 0 }, 300);
        }
    });

    //mostrar y ocultar submenus
    // Seleccionamos todos los elementos de menú que contienen submenús
    $('#main-menu > ul#menu-toggle > li').has('ul').click(function (e) {
        e.preventDefault(); // Previene la acción predeterminada
        var submenu = $(this).find('ul:first'); // Encuentra el primer submenú dentro del elemento de menú clickeado

        // Oculta otros submenús abiertos primero con un efecto tipo persiana
        $('#main-menu > ul#menu-toggle > li > ul').not($(this).find('ul:first')).slideUp('fast');

        // Toggle del submenú clickeado con un efecto tipo persiana
        $(this).find('ul:first').stop(true, true).slideToggle('fast');
    });



    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 25) {
            $('#home-header').css({
                'position': 'fixed',
                'z-index': '55555',
                'width': '100%'
            });
            $('#home-header div#promo').fadeOut();//desaparece el envio gratuito
        } else {
            $('#home-header').css('position', '');
            $('#home-header div#promo').fadeIn();//vuelve a aparecer

        }
    });

    //icono de me gusta
    $("#wishlist img").on('click',function(){
        var src = $(this).attr("src");
        if(src == "img/heart.png"){
          $(this).attr("src", "img/heart-full.png");
        } else {
          $(this).attr("src", "img/heart.png");
        }
      });



    //formulario
    $('#mail').focusout(function () {
        var longitud = $(this).val().length;
        if (longitud === 0) {
            $(this).next().css({ visibility: 'visible' });
        } else {
            $(this).next().css({ visibility: 'hidden' });
        }

    });

    //cambiarle el color al botón suscribirse
    $('input[type=submit]').on('mouseenter', function () {
        $(this).stop(false, true).animate({
            backgroundColor: 'black',
            color: 'white'
        });
    });
    $('input[type=submit]').on('mouseleave', function () {
        $(this).stop(false, true).animate({
            backgroundColor: 'white',
            color: 'black'
        });
    });
});
