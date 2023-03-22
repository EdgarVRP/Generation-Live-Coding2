// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/*
 *## Yes No API - Descripción

En este reto reforzaras tus conocimientos en JavaScript, realizando una llamadas a un API básico, disparando eventos y mostrando los resultados al usuario.

1.- Construye una función fetchAnswer que realice una petición al API https://yesno.wtf/api.

2.- Muestra la respuesta del API en el HTML, en el div con id answer.

3.- Agrega la función fetchAnswer a un eventListener, para que sea disparado cuando se de click al botón.

4.- Limpia la pregunta y la respuesta despues de 5 segundos.

### Reglas

- Debes compartir tu pantalla y mantener encendida tu cámara web
- Debes escribir el código JS en el archivo script.js que esta dentro de la carpeta starter-files.
- Durante el desafío debes explicar todos los pasos que realices.
- Debes responder a las preguntas que haga el entrevistador.

### Bonus

1.- Valida que no se pueda dar click al botón si el input esta vacio.
 */
//DOM
const btnRespuesta = document.getElementById('button');
const answer = document.getElementById('answer');
const input = document.getElementById('input');
//Funcion Fetch
const llamada = () => {
    if (input.value == '') {
        alert('No puedes dejar el campo vacio');
    } else {
        fetch(API_ENDPOINT)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                answer.innerHTML = data.answer;
                //limpiar()
            })
            .catch(error => console.log(error));
    }
};
//Timer 5 seg
function limpiar() {
    setTimeout((answer.innerHTML = ''), 5000);
}
//Eventos
btnRespuesta.addEventListener('click', llamada);