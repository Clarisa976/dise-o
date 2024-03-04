$(document).ready(function () {
    /*mostrar y ocultar el menú*/
    $("div#desplazable > header#top > div > nav#menu-principal").on({
        click: function () {
            $("ul#menu").animate({ left: "0" }, 300);
            $("div#desplazable").animate({ left: "15rem" }, 300);
            $("div#oscuro").css("display", "block");
        }
    });
    $("div#oscuro").on({
        click: function () {
            $("ul#menu").animate({ left: "-18rem" }, 300);
            $("div#desplazable").animate({ left: "0" }, 300);
            $("div#oscuro").css("display", "none");
        }
    });


    /*mostramos el botón de comprar*/
    $("article.item").on({
        mouseenter: function () {
            $(this).children("a").children("span.comprar").css("display", "block");
        },
        mouseleave: function () {
            $(this).children("a").children("span.comprar").css("display", "none");
        }
    });
})
    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.mySwiper');
        splide.mount();
      } );


