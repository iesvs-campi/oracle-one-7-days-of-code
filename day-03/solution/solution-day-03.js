const label = document.querySelector("#label1");
const select = document.querySelector("#select1"); 
const input = document.querySelector("#input1");
const button = document.querySelector("#button1"); 
const p = document.querySelector("#p1");
const ul = document.querySelector("#ul1"); 

const lenguajes = ["React", "Vue", "C#", "Java"];
let area = "";
let leng = "";
let futuro = "";
let aprendizaje = "";
let listaAprendizajes = [];

button.onclick = elegirArea;

function actualizarElementos(pregunta, opciones, funcion) {
    label.innerHTML = pregunta;
    select.innerHTML = opciones;
    button.onclick = funcion;
    p.hidden = false;
}

function elegirArea() {
    area = select.value;

    if (area === "front"){
        actualizarElementos("¿Qué Framework quieres aprender, React o Vue?", '<option value="React">React</option> <option value="Vue">Vue</options>', elegirLeng);
        p.innerHTML = "¡Bienvenido al mundo del Frontend! Aquí es donde darás vida a las interfaces.";
    } else if (area === "back") {
        actualizarElementos("¿Qué Lenguaje quieres aprender, C# o Java?", '<option value="C#">C#</option> <option value="Java">Java</options>', elegirLeng);
        p.innerHTML = "¡Al cuarto de máquinas! En el Backend se construye la magia invisible que hace que todo funcione. ";
    }
}

function elegirLeng() {
    leng = select.value; 
    
    for (let i = 0; i < lenguajes.length; i ++) {
        if (lenguajes[i] === leng){
            p.innerHTML = `Excelente elección, ${leng} es extensamente usado en el ámbito profesional.`
        }
    }

    actualizarElementos(`¿En un futuro, te gustaría especializarte en ${leng} o convertirte en Full-Stack?`, '<option value="especiali">Especializarme</option> <option value="fullStack">Full-Stack</options>', elegirFuturo);
}

function elegirFuturo() {
    futuro = select.value;

    if (futuro === "especiali") {
        p.innerHTML = "Así que te quieres espacializar ¡Serás indispenzable en cualquier compañia de desarrollo!"
    } else if (futuro === "fullStack") {
        p.innerHTML = "¡Increíble! Siendo Full-Stack, puedes trabajar de forma independiente creando sitios web."    
    }

    actualizarElementos("¿En qué otra tecnología tecnología te gustaría especializarte o conocer? Ingresa la que gustes", "", nuevoAprendizaje);
    select.hidden = true;
    input.hidden = false;
    }

function nuevoAprendizaje() {
    let reconstruirLista = "";
    aprendizaje = input.value.trim(); 

    if (aprendizaje === "" ) {
        p.innerHTML = "No ingresaste nada, inténtalo nuevamente."
    } else { 
        listaAprendizajes.push(aprendizaje);
        ul.hidden = false;
    
        for (let i = 0; i < listaAprendizajes.length; i++) {
            reconstruirLista += `<li> ${listaAprendizajes[i]} </li>`; 
        }
        
        ul.innerHTML = "Lista de Aprendizaje:" + reconstruirLista;
        label.innerHTML = "¿Hay alguna otra tecnología que te gustaría aprender? Ingresa la que gustes";
        input.value = "";
        p.innerHTML = "Veo que te apasionan las tecnologías ¡Sigue así!"

    }    
}