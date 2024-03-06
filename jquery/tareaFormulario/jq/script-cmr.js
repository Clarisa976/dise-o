

/*volver arriba*/
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 15) {//si la posición es mayor a 0 se ha desplazado hacia abajo
        $("div#volverarriba").fadeIn();//muestra el botón de volver arriba
    } else {
        $("div#volverarriba").fadeOut();//oculta el botón de volver arriba
    }
});
//calendario
$( function() {
    $( "#datepicker" ).datepicker();
  } );

document.addEventListener('DOMContentLoaded', function() {
    //validación de campos
    const camposRequeridos = document.querySelectorAll('.errores');
    camposRequeridos.forEach(function(campo) {
        campo.addEventListener('blur', function() {
            verificarCampo(campo);
        });
    });

    //contador del textarea
    const descripcion = document.getElementById('descripcion');
    const contadorCaracteres = document.getElementById('contador-caracteres');

    actualizarContador(); //actualiza el contador

    descripcion.addEventListener('input', function() {
        actualizarContador();
    });

    function actualizarContador() {
        const caracteresRestantes = 100 - descripcion.value.length;
        contadorCaracteres.textContent = `Dispone de ${caracteresRestantes} caracteres.`; 
    }

    //funciones de validación
    function verificarCampo(campo) {
        const mensajeError = campo.nextElementSibling;
        if (campo.tagName === 'SELECT' && campo.value === '') {
            mostrarError(mensajeError);
        } else if (campo.tagName !== 'SELECT' && campo.value.trim() === '') {
            mostrarError(mensajeError);
        } else {
            ocultarError(mensajeError);
        }
    }

    function mostrarError(mensajeError) {
        mensajeError.style.visibility = 'visible'; 
    }

    function ocultarError(mensajeError) {
        mensajeError.style.visibility = 'hidden';
    }
});

