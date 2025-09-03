const label = document.querySelector("#label1");
const input = document.querySelector("#input1");
const select = document.querySelector("#select1");
const button1 = document.querySelector("#button1"); 
const button2 = document.querySelector("#button2"); 
const p = document.querySelector("#p1");
const ul = document.querySelector("#ul1"); 

let alimentoActual = "";
let categoriaActual = "";

const categorias = ["Frutas", "Lácteos", "Congelados", "Dulces"];
const alimentos = [];
const categoriaIndex = [];

button1.onclick = agregarAlimento;
button2.onclick = listarAlimentos;

function agregarAlimento() {
    categoriaActual = select.value;
    alimentoActual = input.value;
    input.value = "";
    select.value = "";
    p.innerHTML = "Alimento agregado";
    alimentos.push(alimentoActual);

    for(let i = 0; i < categorias.length; i++){
        if(categoriaActual === categorias[i]) {
            categoriaIndex.push(i);
        }
    }

}

function listarAlimentos() {
    label.innerHTML = "Lista de Compras";
    select.hidden = true;
    input.hidden = true;
    button1.hidden = true;
    button2.hidden = true;

    let lista = "";
    for(let c = 0; c < categorias.length; c++){
        lista += "\n <li>" + categorias[c] + ":"; 
        for(let i = 0; i < categoriaIndex.length; i++) {
            if(c == categoriaIndex[i]){
                lista +=` ${alimentos[i]}`;
            }
        }
        lista += "</li>"
    }

    ul.innerHTML = lista;
        
}

