$(function() {
    $(window).on('resize', function () {
        if ($(window).width() >= 1440) {
            //si la ventana es de 1440 o más se muestra el menú
            $('#opciones-menu-principal').css('display', 'flex');
            $('#img-menu-principal').css('display', 'none');
        } else {
            //si la ventana es menor a 1440, oculta el menú y muestra el botón del menú
            $('#opciones-menu-principal').css('display', 'none');
            $('#img-menu-principal').css('display', 'block');
            $('#img-menu-principal').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-menu.svg');
        }
    });

    //menú principal
    $('#img-menu-principal').click(function () {
        var isMenuOpen = $('#opciones-menu-principal').is(':visible');
        //se cierra el menú principal y restablece su icono
        $('#img-menu-principal').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-menu.svg');
        $('#opciones-menu-principal').hide();

        //si no está abierto se abre y viceversa
        if (!isMenuOpen) {
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-x.svg');
            $('#opciones-menu-principal').css('display', 'flex');
        } else {
            //si el menú está abierto se cierra
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-menu.svg');
            $('#opciones-menu-principal').css('display', 'none');
        }
    });

    //menú usuario
    $('#img-menu-usuario').click(function () {
        var isMenuOpen = $('#opciones-menu-usuario').is(':visible');

        //si no está abierto se abre y viceversa
        if (!isMenuOpen) {
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-x.svg');
            $('#opciones-menu-usuario').show();
        } else {
            $(this).attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-user.svg');
            $('#opciones-menu-usuario').hide();
        }
    });

    //si se clickea fuera se cierra
    $(document).click(function (event) {
        if (!$(event.target).closest('#menu-usuario, #opciones-menu-usuario').length) {
            $('#opciones-menu-usuario').hide();
            $('#img-menu-usuario').attr('src', 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-user.svg');
        }
    });




    //animación del subrayado
    $('a').has('.underline').on('mouseenter', function () {
        $(this).find('.underline').stop().animate({ width: '100%' }, 500).css('display', 'block');
    }).on('mouseleave', function () {
        $(this).find('.underline').stop().animate({ width: '0%' }, 500);
    });

    //cambio de color en los menús
    $(function() {
        $('#menu-usuario li, #menuPrincipal li').on('mouseenter', function () {
            // Acción al pasar el ratón: cambiar el fondo
            $(this).css('background-color', '#171616');
        }).on('mouseleave', function () {
            // Acción al quitar el ratón: revertir el fondo
            $(this).css('background-color', ''); // Volver al color de fondo original o especificar un color
        });
    });





    /*volver arriba*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 15) {//si la posición es mayor a 0 se ha desplazado hacia abajo
            $("div#volverarriba").fadeIn();//muestra el botón de volver arriba
        } else {
            $("div#volverarriba").fadeOut();//oculta el botón de volver arriba
        }
    });
    //animación para volver arriba
    $("div#volverarriba").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    /*puntuar una obra*/
    document.querySelectorAll('.star').forEach(star => {
        star.onclick = () => {
            let value = star.getAttribute('data-value');
            document.querySelectorAll('.star').forEach(innerStar => {
                let innerValue = innerStar.getAttribute('data-value');
                if (innerValue <= value) {
                    innerStar.src = 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bxs-star.svg';
                } else {
                    innerStar.src = 'https://cmr-ciaa.s3.amazonaws.com/cmr/imagen/icons/bx-star.svg';
                }
            });
        };
    });


    /*eventos para que la ventana emergente de las listas*/
    $(function() {
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
    $(function() {

        $('.boton-crear-lista').on('click', function () {
            $('#ventana-emergente-crear-lista').fadeIn();
        });

        $('.x-cerrar-crear-lista').on('click', function () {
            $('#ventana-emergente-crear-lista').fadeOut();
        });
    });

    //formularios
    $(function() {
        //primero validamos cada campo de forma individual
        $('input[required], select[required], textarea[required]').focusout(function () {
            if (!$(this).val()) {
                //al estar vacío saldrá el mensaje de error
                $(this).css('border', '2px solid #ffa97f');
                $(this).next('.mensaje-error').css('visibility', 'visible');
            } else {
                //si se rellena el campo se quita
                $(this).css('border', '');
                $(this).next('.mensaje-error').css('visibility', 'hidden');
            }
        });
        //al hacer click en el botón de enviar el formulario se comprueba si los campos están vacíos o no
        $('.boton-enviar').click(function () {
            var formulario = $(this).closest('form');
            var todosLosCamposLlenos = true;
    
            formulario.find('input[required], select[required], textarea[required]').each(function () {
                if (!$(this).val()) {
                    $(this).css('border', '2px solid #ffa97f');
                    $(this).next('.mensaje-error').css('visibility', 'visible');
                    todosLosCamposLlenos = false;
                } else {
                    $(this).css('border', '');
                    $(this).next('.mensaje-error').css('visibility', 'hidden');
                }
            });
    
            if (todosLosCamposLlenos) {
                console.log('formulario listo para ser enviado');
                }
        });
    });

    /*desplegar los filtros*/
    $(function() {
        $(".filtro").click(function () {
            $("#mostrar-filtros").slideToggle();
        });
    });


    /*cookies*/
    $(function() {
        $('#aceptar-cookies').click(function () {
            //ocultamos la ventana si se pulsa aceptar
            $('#cookies').fadeOut();
        });
    });

    $(function() {
        $('#saber-mas-cookies').on('click', function () {
            //redirigimos a la página de los términos
            window.location.href = 'pag/terminos-uso.html';
        });
    });


    /*ocultar el menú principal si está abierto al redimensionar la ventana*/
    $(window).resize(function () {
        if ($(window).width() >= 1440) {
            // Si la ventana es de 1440px o más, muestra el menú
            $('#opciones-menu-principal').show();
            $('#img-menu-principal').hide();
        } else {
            // Si la ventana es menor a 1440px, oculta el menú y muestra el botón del menú
            $('#opciones-menu-principal').hide();
            $('#img-menu-principal').show();
        }
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