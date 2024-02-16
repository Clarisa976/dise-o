$(document).ready(function () {
    $(".texto").css("display", "none")
    $("main > article > div > section > div").click(function () {
        $("main > article > div > section > .texto").fadeOut()
        $("main > article > div >section > div > div >svg:last-child").fadeIn()
        if ($(this).siblings(".texto").css("display") == "none") {
            $(this).siblings(".texto").fadeIn()
            $(this).children("div").children("svg:last-child").fadeOut()
        } else {            
            $(this).siblings(".texto").fadeOut()
            $(this).children("div").children("svg:last-child").fadeIn()
        }
    })
});