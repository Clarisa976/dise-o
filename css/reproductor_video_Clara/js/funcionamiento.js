/*lo primero que hay que poner para llamar a los eventos que queremos que sucedan*/
document.addEventListener("DOMContentLoaded", function (event) {
    //creación de variables
    var video = document.getElementById('video');
    var playBtn = document.getElementById('play');
    var pauseBtn = document.getElementById('pause');
    var stopBtn = document.getElementById('stop');
    var resetBtn = document.getElementById('reset');
    var volumenBtn = document.getElementById('volumen');
    var barraVolumen = document.getElementById('barra-volumen');
    var barraProgreso = document.getElementById('barra-progreso');
    var fullscreenBtn = document.getElementById('fullscreen');

    //eventos para las variables
    // Event listener para el botón de reproducción (play)
    playBtn.addEventListener('click', function (event) {
        video.play();  // Inicia la reproducción
        playBtn.style.display = 'none';  // Oculta el botón de reproducción
        pauseBtn.style.display = 'inline-block';  // Muestra el botón de pausa
    });

    // Event listener para el botón de pausa
    pauseBtn.addEventListener('click', function (event) {
        video.pause();  // Pausa la reproducción
        playBtn.style.display = 'inline-block';  // Muestra el botón de reproducción
        pauseBtn.style.display = 'none';  // Oculta el botón de pausa
    });

    // Event listener para el botón de parada (stop)
    stopBtn.addEventListener('click', function (event) {
        video.pause();  // Pausa la reproducción
        video.currentTime = 0;  // Reinicia la posición de reproducción al inicio
        playBtn.style.display = 'inline-block';  // Muestra el botón de reproducción
        pauseBtn.style.display = 'none';  // Oculta el botón de pausa
    });

    // Event listener para el botón de reinicio (reset)
    resetBtn.addEventListener('click', function (event) {
        video.currentTime = 0;  // Reinicia la posición de reproducción al inicio
        video.play();  // Inicia la reproducción
        playBtn.style.display = 'none';  // Oculta el botón de reproducción
        pauseBtn.style.display = 'inline-block';  // Muestra el botón de pausa
    });

    // Event listener para la barra de volumen
    barraVolumen.addEventListener('input', function (event) {
        var volumen = this.value / 100;  // Calcula el volumen en base al valor de la barra
        video.volume = volumen;  // Aplica el volumen a la canción
    });

    // Event listener para el botón de volumen
    volumenBtn.addEventListener('click', function (event) {
        toggleMute();  // Alternar entre silencio y sonido
    });

    // Función para alternar entre los botones de mute y de sonido
    function toggleMute() {
        if (video.volume > 0) {
            video.volume = 0;  // Establece el volumen en 0 (silencio)
            volumenBtn.innerHTML = '<img src="img/bxs-volume-mute.svg" alt="volumen">';
        } else {
            video.volume = 1;  // Establece el volumen al máximo
            volumenBtn.innerHTML = '<img src="img/bxs-volume-full.svg" alt="volumen">';
        }
    }
    // Escucha el evento timeupdate para actualizar la barra de progreso
    cancion.addEventListener('timeupdate', function () {
        // Calcula el progreso en porcentaje
        var progreso = (video.currentTime / video.duration) * 100;

        // Actualiza el valor de la barra de progreso
        barraProgreso.value = progreso;

        // Puedes mostrar el tiempo actual y el tiempo restante en minutos
        var tiempoActual = formatTime(video.currentTime);
        var tiempoRestante = formatTime(video.duration - video.currentTime);

        // Puedes mostrar estos valores en elementos HTML
        document.getElementById('tiempo-actual').textContent = tiempoActual;
        document.getElementById('tiempo-restante').textContent = tiempoRestante;
    });

    // Función para formatear el tiempo en minutos y segundos
    function formatTime(seconds) {
        var minutos = Math.floor(seconds / 60);
        var segundos = Math.floor(seconds % 60);
        return minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
    }
    //Escucha el evento fullscreen para la pantalla completa
    fullscreenBtn.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    });

});

