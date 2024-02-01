document.addEventListener("DOMContentLoaded", function () {
    // Escucha el evento cuando el DOM (estructura HTML) está completamente cargado.

    const video = document.getElementById("video");
    // Obtiene el elemento de video por su ID.

    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const retrocederButton = document.getElementById("retroceder");
    const avanzarButton = document.getElementById("avanzar");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");
    const volumenButton = document.getElementById("volumen");
    const barraVolumen = document.getElementById("barra-volumen");
    const fullscreenButton = document.getElementById("fullscreen");
    const exitFullscreenButton = document.getElementById("exit-fullscreen");
    const tiempoActual = document.getElementById("tiempo-actual");
    const tiempoRestante = document.getElementById("tiempo-restante");
    // Obtiene otros elementos HTML necesarios por sus IDs.



    playButton.addEventListener("click", function () {
        // Agrega un evento click al botón de reproducción.
        video.play(); // Reproduce el video.
        playButton.style.display = "none"; // Oculta el botón de reproducción.
        pauseButton.style.display = "block"; // Muestra el botón de pausa.
    });

    pauseButton.addEventListener("click", function () {
        // Agrega un evento click al botón de pausa.
        video.pause(); // Pausa el video.
        playButton.style.display = "block"; // Muestra el botón de reproducción.
        pauseButton.style.display = "none"; // Oculta el botón de pausa.
    });

    retrocederButton.addEventListener("click", function () {
        // Agrega un evento click al botón de retroceso.
        video.currentTime -= 10; // Retrocede 10 segundos en el video.
    });

    avanzarButton.addEventListener("click", function () {
        // Agrega un evento click al botón de avance.
        video.currentTime += 10; // Avanza 10 segundos en el video.
    });

    stopButton.addEventListener("click", function () {
        // Agrega un evento click al botón de parar.
        video.pause(); // Pausa el video.
        video.currentTime = 0; // Reinicia el tiempo del video al principio.
        playButton.style.display = "block"; // Muestra el botón de reproducción.
        pauseButton.style.display = "none"; // Oculta el botón de pausa.
    });

    resetButton.addEventListener("click", function () {
        // Agrega un evento click al botón de reset.
        video.currentTime = 0; // Reinicia el tiempo del video al principio.
    });

    let isMuted = true;
    volumenButton.addEventListener("click", function () {
        // Agrega un evento click al botón de volumen.
        if (isMuted) {
            video.muted = false; // Desactiva el modo silencio.
            isMuted = false;
            volumenButton.innerHTML = '<img src="img/bxs-volume-full.svg" alt="volumen">';
            barraVolumen.value = video.volume * 50;
        } else {
            video.muted = true; // Activa el modo silencio.
            isMuted = true;
            volumenButton.innerHTML = '<img src="img/bxs-volume-mute.svg" alt="silenciar">';
            barraVolumen.value = 0;
        }
    });

    barraVolumen.addEventListener("input", function () {
        // Agrega un evento input a la barra de volumen.
        video.volume = barraVolumen.value / 100; // Ajusta el volumen del video.
        if (barraVolumen.value == 0) {
            volumenButton.innerHTML = '<img src="img/bxs-volume-mute.svg" alt="silenciar">';
        } else {
            volumenButton.innerHTML = '<img src="img/bxs-volume-full.svg" alt="volumen">';
        }
    });

    fullscreenButton.addEventListener("click", function () {
        // Agrega un evento click al botón de pantalla completa.
        if (video.requestFullscreen) {
            video.requestFullscreen(); // Entra en modo pantalla completa.
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
        fullscreenButton.style.display = "none"; // Oculta el botón de pantalla completa.
        exitFullscreenButton.style.display = "block"; // Muestra el botón de salir de pantalla completa.
    });

    exitFullscreenButton.addEventListener("click", function () {
        // Agrega un evento click al botón de salir de pantalla completa.
        if (document.exitFullscreen) {
            document.exitFullscreen(); // Sale del modo pantalla completa.
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        fullscreenButton.style.display = "block"; // Muestra el botón de pantalla completa.
        exitFullscreenButton.style.display = "none"; // Oculta el botón de salir de pantalla completa.
    });

    video.addEventListener("timeupdate", function () {
        // Agrega un evento timeupdate al video para actualizar el tiempo actual y restante.
        const tiempoActualMinutos = Math.floor(video.currentTime / 60);
        const tiempoActualSegundos = Math.floor(video.currentTime % 60);
        const tiempoRestanteMinutos = Math.floor((video.duration - video.currentTime) / 60);
        const tiempoRestanteSegundos = Math.floor((video.duration - video.currentTime) % 60);

        tiempoActual.textContent = `${tiempoActualMinutos}:${tiempoActualSegundos < 10 ? '0' : ''}${tiempoActualSegundos}`;
        tiempoRestante.textContent = `${tiempoRestanteMinutos}:${tiempoRestanteSegundos < 10 ? '0' : ''}${tiempoRestanteSegundos}`;
        // Actualiza los elementos HTML que muestran el tiempo actual y restante.
    });
});