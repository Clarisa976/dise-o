$(document).ready(function() {
    //efecto de animación para volver al top
$('a#go-up').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 'slow');
});

//para que aparezca la barra social y el chat
$('nav#barra-social').fadeIn();
$('nav#barra-social').css('position','absolute');
$('div#chat').fadeIn();

//efectos hamburguesa
$('div#hamburger').click(function(e) {
    e.preventDefault();
    if ($(this).siblings().css('display')==='none') {
        //muestra el menú y cambia el tamaño del span de la hamburguesa
        $('div#hamburger span').stop().animate({
            backgroundColor:"#00aced"
        });
        $(this).siblings().stop().slideDown(300);
        $("div#hamburger > span:nth-child(2)").stop().animate({
            width: "1.90rem",
            backgroundColor: "#00aced"
        })
    } else {
        $("div#hamburger span").stop().animate({ //Guarda el menu cambia la hamburguesa color y hace corta la linea del centro 
            backgroundColor: "black"
        })
        $("div#hamburger > span:nth-child(2)").stop().animate({
            width: "1.40rem",
            backgroundColor: "black"

        })
        $(this).siblings().stop().slideUp(400);
    }
})


});

//eventos de scroll
$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 50) {
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

