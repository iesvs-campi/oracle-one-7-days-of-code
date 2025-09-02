let numeroUn = 1;
let stringUn = "1";
let numeroTreinta = 30;
let stringTreinta = "30";
let numeroDiez = 10;
let stringDiez = "10";

function comparar(valor1, valor2){
    if(valor1 === valor2){
        return `Las variables tienen el mismo valor y tipo (${valor1}: ${typeof valor1} y ${valor2}: ${typeof valor2 }).`;
    } else if(valor1 == valor2){
        return `Las variables tienen el mismo valor, pero tipos diferentes (${valor1}: ${typeof valor1} y ${valor2}: ${typeof valor2 }).`;
    } else if(typeof valor1 === typeof valor2){
        return `Las variables tienen el mismo tipo, pero valores diferentes (${valor1}: ${typeof valor1} y ${valor2}: ${typeof valor2 }).`;
    } else {
        return `Las variables tienen diferente tipo y valor (${valor1}: ${typeof valor1} y ${valor2}: ${typeof valor2 }).`;
    }
}

console.log(comparar(numeroUn, stringUn));
console.log(comparar(numeroTreinta, stringTreinta));
console.log(comparar(numeroDiez, stringDiez));