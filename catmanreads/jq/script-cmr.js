$(document).ready(function () {
    //funcionamiento para el menú
    $('#img-menu-principal').click(function () {
        // if ($(window).width() < 1440) {
        var isMenuOpen = $('#opciones-menu-principal').is(':visible');
        //se cierra todos los menús abiertos y restablece sus iconos
        $('.menu-icon').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-menu.svg');
        $('.menu-content').hide(); // Asumiendo que todos los menús tienen una clase común para ocultarlos.

        //se abre este menú si no estaba abierto, o lo cierra si estaba abierto
        if (!isMenuOpen) {
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-x.svg');
            $('#opciones-menu-principal').show();
        } else {
            //si el menú estaba abierto, ciérralo y cambia el icono a 'menú'
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-menu.svg');
            $('#opciones-menu-principal').hide();
        }
        // }
    });

    //cierra el menú si se hace clic fuera de él
    //quitado esto para la versión escritorio
    /*$(document).click(function (event) {
        //  if ($(window).width() < 1440) {
        if (!$(event.target).closest('#menuPrincipal, #opciones-menu-principal').length) {
            $('#opciones-menu-principal').hide();
            $('#img-menu-principal').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-menu.svg');
        }
        // }
    });*/


    //funcionamiento para el menú usuario
    $('#img-menu-usuario').click(function () {
        var isMenuOpen = $('#opciones-menu-usuario').is(':visible');

        //se cierra todos los menús abiertos y restablece sus iconos
        $('.menu-icon').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-user.svg');
        $('.menu-content').hide(); // Asumiendo que todos los menús tienen una clase común para ocultarlos.

        //se abre este menú si no estaba abierto, o lo cierra si estaba abierto
        if (!isMenuOpen) {
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-x.svg');
            $('#opciones-menu-usuario').show();
        } else {
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-user.svg');
            $('#opciones-menu-usuario').hide();
        }
    });

    // cierra el menú si se hace clic fuera de él.
    $(document).click(function (event) {
        if (!$(event.target).closest('#menu-usuario, #opciones-menu-usuario').length) {
            $('#opciones-menu-usuario').hide();
            $('#img-menu-usuario').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-user.svg');
        }
    });






    /*volver arriba*/ 
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 15) {//si la posición es mayor a 0 se ha desplazado hacia abajo
            $("div#volverarriba").fadeIn();//muestra el botón de volver arriba
        } else {
            $("div#volverarriba").fadeOut();//oculta el botón de volver arriba
        }
    });


    /*puntuar una obra*/
    document.querySelectorAll('.star').forEach(star => {
        star.onclick = () => {
            let value = star.getAttribute('data-value');
            document.querySelectorAll('.star').forEach(innerStar => {
                let innerValue = innerStar.getAttribute('data-value');
                if (innerValue <= value) {
                    innerStar.src = 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-star.svg'; // Estrella completa
                } else {
                    innerStar.src = 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-star.svg'; // Estrella vacía
                }
            });
        };
    });


    /*eventos para que la ventana emergente de las listas*/
    $(document).ready(function () {
        //mostramos la ventana emergente si se cambia el select
        $('#estadoLectura').change(function () {
            if ($(this).val() !== 'desmarcado') {
                $('#ventana-emergente-listas').fadeIn();
            }
        });

        //se cierra si le damos a la imagen de cerrar
        $('.x-cerrar').click(function () {
            $('#ventana-emergente-listas').fadeOut();
        });

        //controlamos que se cierre si se cliquea fuera
        $(document).click(function (event) {
            var $target = $(event.target);
            if (!$target.closest('#ventana-emergente-listas').length &&
                $('#ventana-emergente-listas').is(":visible") &&
                !$target.closest('#estadoLectura').length) {
                $('#ventana-emergente-listas').fadeOut();
            }
        });
    });


    /*ventana emergente para crear listas*/
    $(document).ready(function () {
        // Al hacer clic en el botón para abrir la ventana emergente
        $('.boton-crear-lista').on('click', function () {
            $('#ventana-emergente-crear-lista').show();
        });

        // Al hacer clic en el botón de cerrar dentro de la ventana emergente
        $('.x-cerrar-crear-lista').on('click', function () {
            $('#ventana-emergente-crear-lista').hide();
        });
    });
    /*formulario contacto*/
    $(document).ready(function () {
        $('input, select, textarea').on('mouseenter', function () {

            $(this).next('.mensaje-error').css('visibility', 'visible');
        }).on('mouseleave', function () {

            $(this).next('.mensaje-error').css('visibility', 'hidden');
        });
    });
    /*formulario ajustes del perfil*/
    $(document).ready(function () {
        $('#formulario-cambiar-datos input').on('mouseenter', function () {

            $(this).next('.mensaje-error').css('visibility', 'visible');
        }).on('mouseleave', function () {

            $(this).next('.mensaje-error').css('visibility', 'hidden');
        });
    });

    /*desplegar los filtros*/
    $(document).ready(function () {
        $("#filtro-buscador").click(function () {
            $("#mostrar-filtros").toggle(); // Alternar la visibilidad
        });
    });


    /*cookies*/
    $(document).ready(function () {
        // Evento de clic para el botón 'ACEPTO'
        $('#aceptar-cookies').click(function () {
            // Oculta el contenedor de la ventana emergente
            $('#cookies').hide();
        });
    });

    $(document).ready(function() {
        $('#saber-mas-cookies').on('click', function() {
            window.location.href = 'pag/terminos-uso.html';
        });
    });
    
    













        //carrusel
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            //impide que sigas pasando si no hay más artículos
            on: {
                init: function () {
                    checkSwiperEdge(this);
                },
                slideChange: function () {
                    checkSwiperEdge(this);
                }
            },
    
    
    
    
    
        });
    
        /*funcionamiento para desplazar el carrusel
        se calcula el total de articulos que hay para mostrar restringiendo
        el desplazamiento
        */
        function checkSwiperEdge(swiper) {
            const swiperWrapper = swiper.wrapperEl;
            const slides = swiper.slides;
            let maxTranslate = 0;
            let swiperContainerWidth = swiper.width;
            let totalWidthOfSlides = 0;
    
            slides.forEach(slide => {
                totalWidthOfSlides += slide.offsetWidth;
            });
    
            maxTranslate = swiperContainerWidth - totalWidthOfSlides;
    
            if (swiper.translate < maxTranslate) {
                swiper.setTranslate(maxTranslate);
                swiper.navigation.nextEl.classList.add('disabled');
            } else {
                swiper.navigation.nextEl.classList.remove('disabled');
            }
    
            if (swiper.isBeginning) {
                swiper.navigation.prevEl.classList.add('disabled');
            } else {
                swiper.navigation.prevEl.classList.remove('disabled');
            }
        }
})