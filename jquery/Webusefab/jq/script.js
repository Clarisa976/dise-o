$(document).ready(function () {
    $("div#desplazable > header#top > div > nav#menu-principal").on({
        click: function(){
            $("ul#menu").animate({left: "0"}, 500);
            $("div#desplazable").animate({left: "18rem"}, 500);
            $("div#oscuro").css("display", "block");
        }
    });
    $("div#oscuro").on({
        click: function(){
            $("ul#menu").animate({left: "-20rem"}, 500);
            $("div#desplazable").animate({left: "0"}, 500);
            $("div#oscuro").css("display", "none");
        }
    });
    $("article.item").on({
        mouseenter: function(){
            $(this).children("a").children("span.comprar").css("display", "block");
        },
        mouseleave: function () {
            $(this).children("a").children("span.comprar").css("display", "none");
        }
    });
})
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );