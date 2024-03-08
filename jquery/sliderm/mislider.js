$(document).ready(function () {


    
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

   /* var SliderModule = (function () {
        var pb = {};//creamos un objeto
        //almacenamos nuestro #slider en el atributo elslider
        pb.elslider = $('#slider');
        //el atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find(".slider-wrapper > li"),
        }
        //intervalo del Slider
        var SliderInterval,
            currentSlider = 0,//actual por defecto en 0
            nextSlider = 1,//el siguiente por defecto es 1
            lengthSlider = pb.items.panels.length;//la longitud

        //constructor del Slider
        pb.init = function (settings) {
            this.settings = settings || {duration:3000}
            //LAS IMÁGENES DE LAS BOLITAS
            var imagenes = ['<img src="https://c2.staticflickr.com/6/5094/5531620171_82185d6285_z.jpg">',
                '<img src="https://c2.staticflickr.com/2/1142/5112412572_6b07684fd6_z.jpg">',
                '<img src="https://c1.staticflickr.com/9/8360/8276578922_f65a266891_z.jpg">',
                '<img src="https://c2.staticflickr.com/4/3534/4569643612_929f475102_z.jpg">'];
            var loscontroles = '';
            //console.log("Inicializado");
            SliderInit();//para inicializar el slider
            
            //creamos los controles del Slider en tiempo de ejecución
            for(var i=0;i<lengthSlider;i++){
                if(i==0){
                   // loscontroles += '<li class="active"></li>';
                   loscontroles += "<li class='active'>" + imagenes[i] + "</li>";
                }else{
                    //loscontroles += '<li></li>';
                    loscontroles += "<li>" + imagenes[i] + "</li>";
                }
            }
            //insertamos los controles creados en el  html
            $('#control-buttons').html(loscontroles);
            

            $('#control-buttons li').click(function () {

                //al hacer clic vemos en la consola el índice                
                //console.log($(this).index());
                console.log(currentSlider);
                console.log($(this).index());

                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
                //cambiarPanel($(this).index());
            });
            //BOTONES
            //funcionalidad del botón izquierda
            $('.izquierda').click(function (e) {
                e.preventDefault(); // Previene el comportamiento por defecto del enlace
                var targetSlider = currentSlider - 1 < 0 ? lengthSlider - 1 : currentSlider - 1;
                cambiarPanel(targetSlider);
            });
            //funcionalidad del botón derecha
            $('.derecha').click(function (e) {
                e.preventDefault(); // Previene el comportamiento por defecto del enlace
                var targetSlider = currentSlider + 1 >= lengthSlider ? 0 : currentSlider + 1;
                cambiarPanel(targetSlider);
            });
        
            //PARAR EL SLIDER
        //función para pausar y reanudar el slider
        pb.items.panels.mouseenter(function () {
            clearInterval(SliderInterval);
        }).mouseleave(function () {
            SliderInit();
        });
  
    //FUNCIONAMIENTO DE LAS IMÁGENES EN MINIATURA
    $(".control-buttons li").on("mouseenter", function (event) {
        $("#preview-image").attr("src", $(this).children().attr("src"));
        $("#preview-container").css({
            "bottom": $(window).height() - event.pageY + 35 + "px",
            "left": event.pageX - 100 + "px",
        })
        console.log($(window).height() - event.pageY + 20 + "px")
        $("#preview-container").fadeIn("fast");
    })

    $(".control-buttons li").on("mouseleave", function () {
        $("#preview-container").fadeOut("fast");
    })
  }

        //función que inicializa el Slider
        var SliderInit = function () {
            //SliderInterval = setInterval(pb.startSlider, 3000);//intervalo de ejecución
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function () {
            var paneles = pb.items.panels;//cogemos los paneles del slider
            var controles = $('#control-buttons li');//creamos variable
            //console.log('Mensaje');

            //controlamos si nos encontramos en el último panel 
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }
            //efectos
            //eliminamos la clase en todos los controles
            controles.removeClass('active');
            //añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active');

            //paneles.eq(currentSlider).fadeOut('slow');//aplicamos efectos de transición
            //paneles.eq(nextSlider).fadeIn('slow');

//CAMBIAMOS EL SENTIDO DE COMO SE PASAN LAS IMÁGENES

paneles.css("position", "relative")
paneles.eq(nextSlider).css({ "left": "100%", "display": "block" });
paneles.eq(nextSlider).animate({ left: "0%" }, "slow");
paneles.eq(currentSlider).animate({ left: "-100%" }, "slow");

            //console.log(nextSlider);
            //actualizamos las variables
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        //función para los controles del Slider
        //recibe el índice del panel a mostrar
        var cambiarPanel = function (indice) {
            //limpiar el intervalo previamente.
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            //comprobamos que el índice esté disponible
            //dentro de los paneles del slider.
            if (indice >= lengthSlider) {
                indice = 0; //para que no se pase de la cantidad de imágenes
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            //EFECTOS
            //eliminamos la clase en todos los controles
            controles.removeClass('active');
            //añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');
            //efectos de transición
            //paneles.eq(currentSlider).fadeOut('slow');
            //el siguiente panel del slider es el que indique
            //el parámetro "indice"
            //paneles.eq(indice).fadeIn('slow');

//CAMBIAMOS EL SENTIDO DE COMO SE PASAN LAS IMÁGENES
   paneles.css("position", "relative");

            // Configuramos el siguiente panel para que aparezca desde la derecha
            paneles.eq(indice).css({ "left": "100%", "display": "block" });

            // Animamos los paneles actual y siguiente
            paneles.eq(currentSlider).animate({ left: "-100%" }, "slow", function () {
                // Esta función se ejecuta cuando la animación del panel actual se completa
                paneles.eq(currentSlider).css({ "display": "block", "left": "0%" });
            });
            paneles.eq(indice).animate({ left: "0%" }, "slow");         

            //actualizamos los datos 
            currentSlider = indice;
            nextSlider = indice + 1;

            //reactivar el Slider
            SliderInit();
        }

        return pb;//devolvemos el objeto pb
    }());//()) es para que se ejecute automáticamente
    //llamada al constructor
    SliderModule.init();*/
})