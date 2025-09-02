let respuesta = 0;
const nombreInput = document.querySelector("#nombreUsuario");
const edadInput = document.querySelector("#edadUsuario");
const lenguajeInput = document.querySelector("#lenguajeUsuario");
const mensajeText = document.querySelector("#mensajeResultado");

function procesarFormulario () {
    alert(`Hola ${nombreInput.value}, tienes ${edadInput.value} años y ya estás aprendiendo ${lenguajeInput.value}!`);
    respuesta = prompt(`¿Te gusta estudiar ${lenguajeInput.value}? Responde con el número 1 para SÍ o 2 para NO.`);
    responderPregunta();
}

function responderPregunta () {
    if (respuesta == 1) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (respuesta == 2) {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
        alert("Ups, parece que ingresaste un valor diferente. Asegúrate de ingresar 1 o 2");
        procesarFormulario();
    }
}


function reiniciar (){
    nombreInput.value = "";
    edadInput.value = "";
    lenguajeInput.value = "";
    mensajeText.innerHTML = "";

}