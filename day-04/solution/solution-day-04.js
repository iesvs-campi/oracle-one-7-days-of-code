const select = document.querySelector("#select1"); 
const button = document.querySelector("#button1"); 
const p = document.querySelector("#p1");

let numRandom = numeroRandom();
let contadorIntentos = 1;
let intentosMaximos = 3;

button.onclick = compararNumeros;

    

function numeroRandom() {
    return Math.floor(Math.random() * 10) + 1 ;
}

function compararNumeros() {
    p.hidden = false;
    let intentosRestantes = intentosMaximos - contadorIntentos;
    
    if (select.value === ""){ 
        p.innerHTML = "Asegurate de elegir un número";
        return;
    } 
    //Seguro que se puede anidar menos, no lo pensé mucho.
    if (contadorIntentos < intentosMaximos){    
        if (select.value == numRandom) {
            p.innerHTML = '¡Acertaste! <a href= "https://www.youtube.com/watch?v=xvFZjo5PgG0">Pincha aquí para reclamar tu Premio</a>';
            select.disabled = true;
        } else {
            p.innerHTML = `Número equivocado. Tienes ${intentosRestantes} ${intentosRestantes > 1 ? "intentos restantes" : "intento restante"}, vuelve a intentarlo.`;
            contadorIntentos++;

        }
    } else {
        p.innerHTML = `Perdiste, el número ganador era ${numRandom}. <br> <strong>Se ha generado un nuevo número para que lo vuelvas a intentar</strong>.`;
        numRandom = numeroRandom();
        contadorIntentos = 1;
    }
}
