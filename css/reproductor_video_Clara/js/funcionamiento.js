document.addEventListener("DOMContentLoaded", function () {
    // Escucha el evento cuando el DOM (estructura HTML) está completamente cargado.
    //obtenemos los distintos elementos a cambiar del HTML llamándolos por su ID
    var video = document.getElementById("video");    
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var retrocederButton = document.getElementById("retroceder");
    var avanzarButton = document.getElementById("avanzar");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset");
    var volumenButton = document.getElementById("volumen");
    var barraVolumen = document.getElementById("barra-volumen");
    var fullscreenButton = document.getElementById("fullscreen");
    var exitFullscreenButton = document.getElementById("exit-fullscreen");
    var tiempoActual = document.getElementById("tiempo-actual");
    var tiempoRestante = document.getElementById("tiempo-restante");



    playButton.addEventListener("click", function () {
        //agrega un evento click al botón de reproducción
        video.play(); //reproduce el video
        playButton.style.display = "none"; //oculta el botón de reproducción
        pauseButton.style.display = "block"; //muestra el botón de pausa
    });

    pauseButton.addEventListener("click", function () {
        //agrega un evento click al botón de pausa
        video.pause(); //pausa el video
        playButton.style.display = "block"; //muestra el botón de reproducción
        pauseButton.style.display = "none"; //oculta el botón de pausa
    });

    retrocederButton.addEventListener("click", function () {
        //agrega un evento click al botón de retroceso
        video.currentTime -= 10; //retrocede 10 segundos en el video
    });

    avanzarButton.addEventListener("click", function () {
        //agrega un evento click al botón de avance
        video.currentTime += 10; //avanza 10 segundos en el video
    });

    stopButton.addEventListener("click", function () {
        //evento click al botón de parar
        video.pause(); //pausa el video
        video.currentTime = 0; //se reinicia el tiempo del video al principio
        playButton.style.display = "block"; //muestra el botón de reproducción
        pauseButton.style.display = "none"; //oculta el botón de pausa
    });

    resetButton.addEventListener("click", function () {
        //evento click para el botón de reset
        video.currentTime = 0; //reinicia el tiempo del video al principio
    });

    let isMuted = true;
    volumenButton.addEventListener("click", function () {
        //agrega un evento click al botón de volumen
        if (isMuted) {
            video.muted = false; //desactiva el modo silencio
            isMuted = false;
            volumenButton.innerHTML = '<img src="img/bxs-volume-full.svg" alt="volumen">';
            barraVolumen.value = video.volume * 50;
        } else {
            video.muted = true; //activa el modo silencio
            isMuted = true;
            volumenButton.innerHTML = '<img src="img/bxs-volume-mute.svg" alt="silenciar">';
            barraVolumen.value = 0;
        }
    });

    barraVolumen.addEventListener("input", function () {
        //agregamos un evento input a la barra de volumen
        video.volume = barraVolumen.value / 100; //ajusta el volumen del video
        if (barraVolumen.value == 0) {
            volumenButton.innerHTML = '<img src="img/bxs-volume-mute.svg" alt="silenciar">';
        } else {
            volumenButton.innerHTML = '<img src="img/bxs-volume-full.svg" alt="volumen">';
        }
    });
    //entrar en pantalla complete
    fullscreenButton.addEventListener("click", function () {
        //agregamos un evento click al botón de pantalla completa
        if (video.requestFullscreen) {
            video.requestFullscreen(); //entra en modo pantalla completa
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
        fullscreenButton.style.display = "none"; //oculta el botón de pantalla completa
        exitFullscreenButton.style.display = "block"; //muestra el botón de salir de pantalla completa
    });
    //salir de pantalla completa
    exitFullscreenButton.addEventListener("click", function () {
        //agregamos un evento click al botón de salir de pantalla completa
        if (document.exitFullscreen) {
            document.exitFullscreen(); //sale del modo pantalla completa
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        fullscreenButton.style.display = "block"; //muestra el botón de pantalla completa
        exitFullscreenButton.style.display = "none"; //oculta el botón de salir de pantalla completa
    });

    video.addEventListener("timeupdate", function () {
        //agregamos un evento al video para acutalizar el tiempo actual y el restante
        const tiempoActualMinutos = Math.floor(video.currentTime / 60);
        const tiempoActualSegundos = Math.floor(video.currentTime % 60);
        const tiempoRestanteMinutos = Math.floor((video.duration - video.currentTime) / 60);
        const tiempoRestanteSegundos = Math.floor((video.duration - video.currentTime) % 60);

        tiempoActual.textContent = `${tiempoActualMinutos}:${tiempoActualSegundos < 10 ? '0' : ''}${tiempoActualSegundos}`;
        tiempoRestante.textContent = `${tiempoRestanteMinutos}:${tiempoRestanteSegundos < 10 ? '0' : ''}${tiempoRestanteSegundos}`;
    });
});