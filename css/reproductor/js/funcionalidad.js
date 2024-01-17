/*lo primero que hay que poner para llamar a los eventos que queremos que sucedan*/
document.addEventListener("DOMContentLoaded", function (event) {
    //creación de variables
    var cancion = document.getElementById('cancion');
    var playBtn = document.getElementById('play');
    var pauseBtn = document.getElementById('pause');
    var stopBtn = document.getElementById('stop');
    var resetBtn = document.getElementById('reset');
    var volumenBtn = document.getElementById('volumen');
    var barraVolumen = document.getElementById('barra-volumen');

    //eventos para las variables
    // Event listener para el botón de reproducción (play)
    playBtn.addEventListener('click', function (event) {
        cancion.play();  // Inicia la reproducción
        playBtn.style.display = 'none';  // Oculta el botón de reproducción
        pauseBtn.style.display = 'inline-block';  // Muestra el botón de pausa
    }, false);

    // Event listener para el botón de pausa
    pauseBtn.addEventListener('click', function (event) {
        cancion.pause();  // Pausa la reproducción
        playBtn.style.display = 'inline-block';  // Muestra el botón de reproducción
        pauseBtn.style.display = 'none';  // Oculta el botón de pausa
    }, false);

    // Event listener para el botón de parada (stop)
    stopBtn.addEventListener('click', function (event) {
        cancion.pause();  // Pausa la reproducción
        cancion.currentTime = 0;  // Reinicia la posición de reproducción al inicio
        playBtn.style.display = 'inline-block';  // Muestra el botón de reproducción
        pauseBtn.style.display = 'none';  // Oculta el botón de pausa
    }, false);

    // Event listener para el botón de reinicio (reset)
    resetBtn.addEventListener('click', function (event) {
        cancion.currentTime = 0;  // Reinicia la posición de reproducción al inicio
        cancion.play();  // Inicia la reproducción
        playBtn.style.display = 'none';  // Oculta el botón de reproducción
        pauseBtn.style.display = 'inline-block';  // Muestra el botón de pausa
    }, false);
    
    // Event listener para la barra de volumen
    barraVolumen.addEventListener('input', function (event) {
        var volumen = this.value / 100;  // Calcula el volumen en base al valor de la barra
        cancion.volume = volumen;  // Aplica el volumen a la canción
    }, false);

    // Event listener para el botón de volumen
    volumenBtn.addEventListener('click', function (event) {
        toggleMute();  // Alternar entre silencio y sonido
    }, false);
    
    // Función para alternar entre los botones de mute y de sonido
    function toggleMute() {
        if (cancion.volume > 0) {
            cancion.volume = 0;  // Establece el volumen en 0 (silencio)
            volumenBtn.innerHTML = '<img src="img/bxs-volume-mute.svg" alt="volumen">';
        } else {
            cancion.volume = 1;  // Establece el volumen al máximo
            volumenBtn.innerHTML = '<img src="img/bxs-volume-full.svg" alt="volumen">';
        }
    }


});

