$(document).ready(function () {
    //efecto de animación para volver al top
    $('a#go-up').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });



    //efectos hamburguesa
    $('div#hamburger').click(function (e) {
        e.preventDefault();
        if ($(this).siblings().css('display') === 'none') {
            //muestra el menú y cambia el tamaño del span de la hamburguesa
            $('div#hamburger span').stop(false, true).animate({
                backgroundColor: "#00aced"
            });
            $(this).siblings().stop().slideDown(300);
            $("div#hamburger > span:nth-child(2)").stop(false, true).animate({//aumentamnos el tamaño de la segunda línea del menú
                width: "1.87rem",
                backgroundColor: "#00aced"//le damos color
            })
        } else {
            $("div#hamburger span").stop(false, true).animate({ //guarda el menu cambia la hamburguesa color y hace corta la linea del centro 
                backgroundColor: "black"
            })
            $("div#hamburger > span:nth-child(2)").stop(false, true).animate({
                width: "1.37rem",
                backgroundColor: "black"

            })
            $(this).siblings().stop(false, true).slideUp(300);//contrae el menú
        }
    })
    //menú dentro del menú principal
    $('ul#menu-toggle li:nth-child(3) > a, ul#menu-toggle li:nth-child(3) > span').on('click', function () {
        if ($(this).siblings('ul').css('display') === 'none') {//si no se ve
            $(this).siblings('ul').fadeIn();//aparece
            $(this).siblings('ul').animate({ left: 0 });//aparece desde la izquierda haciendose hueco
            $('ul#menu-toggle li:nth-child(3) > span').text('-');//cambiamos el span
        } else {
            $(this).siblings('ul').animate({ left: '-50vw' });//lo ocultamos
            $(this).siblings('ul').fadeOut();
            $('ul#menu-toggle li:nth-child(3) > span').text('+');//cambiamos el span
        }
    });
    //al redimensionar se borra todo el código insertado del menú
    $(window).on('resize', function () {
        $('#menu-toggle').removeAttr('style');
        $('#hamburger').removeAttr('style');
        $('.line-ham').removeAttr('style');//para la línea

    });
    //para que aparezca la barra social y el chat
    $('nav#barra-social').fadeIn();
    $('nav#barra-social').css('position', 'absolute');
    $('div#chat').fadeIn();

    $('#header-chat1').on('click',function () {//cuando pulsamos la cabecera del chat
        $(this).siblings('div').slideToggle();//se muestra hacia arriba
        $(this).css('display','none');
        $('#chat').children().eq(1).css('display','flex');//mostramos el segundo hijo
    });
    $('#header-chat2').on('click',function () {//cuando pulsamos la cabecera del chat se oculta
        $('#header-chat2').siblings('div').slideToggle();//se oculta
        $('#header-chat2').css('display','none');
        $('#chat').children().eq(0).css('display','flex');//mostramos al primer hijo
    });

    //formulario
    $('#window-chat textarea').keyup(function() { //Cuando pulsas teclas se actualiza el numero de textarea
        var longitud = $(this).val().length;
        var restantes = 100 - longitud;
        $('#info-caracteres').html(" Dispone de " + restantes + " caracteres")
    })

    $('#window-chat input').focusout(function() { //Cuando se quita el focus si la longitud es 0 te salta un error
        if ($(this).val().length == 0) {
            $(this).next().css({ visibility: "visible" });
        }
        if ($(this).val().length > 0) {
            $(this).next().css({ visibility: "hidden" });
        }
    })


    //botón compra
    $('section article.producto').on('mouseenter',function () {
        $(this).children('a').stop(true,true).slideDown();//aparece el botón comprar
    });
    $('section article.producto').on('mouseleave',function () {
        $(this).children('a').stop().slideUp();//desaparece el botón comprar
    });
    //eventos de scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('a#go-up').css("display", "inline");//si bajamos aparece el botón de subir
            $('header#home-header').css({
                "position": "fixed",//cambiamos la posición para que se mueva
                "width": "100%",//que ocupe todo el tamaño
                "z-index": "5555",//lo traemos arriba del todo
                "opacity": "0.7"//le añadimos algo de opacidad
            });
        } else {
            $('header#home-header').css("position", "");//vuelve a su valor original
            $('a#go-up').css("display", "none");//sino desaparece
        }
    });


     //---------------------------------Slider-----------------------------//

     var SliderModule = (function() {
        var pb = {}; //<-- esto crea un objeto¿?
        pb.elslider = $("#slider"); //<-- esto almacena el id slider en el objeto
        pb.items = {
            panels: pb.elslider.find(".slider-wrapper > li") //<-- ¿?¿?¿?¿?¿?¿?¿?
        }
        var SliderInterval, //<-- intervalo de cambio
            currentSlider = 0, //<-- foto actual
            nextSlider = 1; //<-- foto siguiente
        lengthSlider = pb.items.panels.length; //<--longitud total 

        pb.init = function(settings) {
            this.settings = settings || { duration: 1500 };
            var loscontroles = '';
            SliderInit(); //<-- crea el constructor¿?¿?¿?¿?¿?

            for (var i = 0; i < lengthSlider; i++) { //Inicio
                if (i == 0) {
                    // var imgsource = $(pb.items.panels[i]).children("img").attr("src");
                    //console.log(imgsource);
                    loscontroles += '<img src="" class="active">';
                } else {
                    // var imgsource = $(pb.items.panels[i]).children("img").attr("src");
                    // console.log(imgsource);
                    loscontroles += '<img src="">'
                }
            }
            $("#control-buttons").html(loscontroles); //FIN Esto es lo que crea lo botones en tiempo de ejecucion (kinda?)

            $("#control-buttons img").click(function() { //Esto es lo que hace que cuando pulses cambie el boton
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            });

            cambiarPanelBtnIz();
            cambiarPanelBtnDer();
            pararSlider();
            imagenesAbajo();


            $("#control-buttons img").mouseenter(function() { //preview de imagen

                var imgsource = $(pb.items.panels[$(this).index()]).children("img").attr("src");
                if ($(this).parent().parent().children("picture").children("img").attr("src", "")) {
                    $(this).parent().parent().children("picture").children("img").attr("src", imgsource);
                    $(this).parent().parent().children("picture").children("img").css("width", "120px");
                    $(this).parent().parent().children("picture").children("img").css("height", "120px");
                }
            });

            $("#control-buttons img").mouseleave(function() {
                $(this).parent().parent().children("picture").children("img").attr("src", "");
                $(this).parent().parent().children("picture").children("img").css("width", "0");
                $(this).parent().parent().children("picture").children("img").css("height", "0");
            })



        } /*Esto es el main (Supongo)*/

        var SliderInit = function() { //<-- define el constructor¿?¿?¿?¿?¿?
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        /*Esto es el ejercicio 1*/
        var pararSlider = function() {
                $(".slider-wrapper > li").mouseenter(function() {
                    clearInterval(SliderInterval);
                    console.log("Sesupone que esto para");
                })

                $(".slider-wrapper > li").mouseleave(function() {
                    SliderInit(); //NO ENTIENDO PORQUE NO FUNCIONA "setInterval(pb.startSlider, pb.settings.duration);" SI ES LA MISMA LINEA
                    console.log("Se supone que estas fuera y deberia continuar");
                })
            }
            /*Esto es el ejercicio 1*/

        var imagenesAbajo = function() { //para los circulos imagenes
            var i = 0;
            $("#control-buttons img").each(function() {
                var imgsource = $(pb.items.panels[i]).children("img").attr("src");
                $(this).attr("src", imgsource)
                i++;
            })
        }

        pb.startSlider = function() { //<-- ¿?¿?¿?¿?¿?
            var paneles = pb.items.panels; //paneles del slider
            var controles = $("#control-buttons img");

            if (nextSlider >= lengthSlider) { //if para no hacer un outOfBounds y que pase al primero
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass("active");
            controles.eq(nextSlider).addClass("active");


            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(nextSlider).fadeIn("slow");

            currentSlider = nextSlider;
            nextSlider++;
        }

        /*Esto es el ejercicio 2*/
        var cambiarPanelBtnIz = function() {
            $("input#botoniz").click(function() {
                var controles = $("#control-buttons img");
                clearInterval(SliderInterval);
                var paneles = pb.items.panels;
                var sliderAnterior = currentSlider - 1;
                if (sliderAnterior < 0) {
                    sliderAnterior = lengthSlider - 1;
                }
                controles.removeClass("active");
                controles.eq(sliderAnterior).addClass("active");


                paneles.eq(currentSlider).fadeOut("fast");
                paneles.eq(sliderAnterior).fadeIn("fast");

                currentSlider = sliderAnterior;
                nextSlider = sliderAnterior + 1;

                SliderInit();
            })
        }

        var cambiarPanelBtnDer = function() {
            $("input#botonder").click(function() {

                var controles = $("div>#control-buttons img");
                clearInterval(SliderInterval);
                var paneles = pb.items.panels;
                var sliderSiguiente = currentSlider + 1;
                if (sliderSiguiente >= lengthSlider) {
                    sliderSiguiente = 0;
                }
                controles.removeClass("active");
                controles.eq(sliderSiguiente).addClass("active");


                paneles.eq(currentSlider).fadeOut("slow");
                paneles.eq(sliderSiguiente).fadeIn("slow");

                currentSlider = sliderSiguiente;
                nextSlider = sliderSiguiente + 1;

                SliderInit();
            })
        }


        /*Esto es el ejercicio 2*/


        var cambiarPanel = function(indice) {
            var controles = $("#control-buttons img");
            clearInterval(SliderInterval);
            var paneles = pb.items.panels;
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            //Continuar a partir de aqui console.log(pb.items.panels); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            controles.removeClass("active");
            controles.eq(indice).addClass("active");

            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(indice).fadeIn("slow");

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit();
        }

        return pb;

    }());

    SliderModule.init({ duration: 2000 });
    //---------------------------------Slider-----------------------------//

});