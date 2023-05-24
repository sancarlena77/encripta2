//Declaración de variables//
 
//Variables de interacción con el index//

const textoIngresado = document.getElementById("textoIngresado"); 
    textoIngresado.addEventListener("focus", (event) => limpiarArea(event));
    textoIngresado.addEventListener("keypress", (event) => validarFrontEnd(event));

var textoProcesado; 


const encriptar = document.getElementById("encriptar");
    encriptar.addEventListener("click", (event) => encriptarTexto(event)); 

const desencriptar = document.getElementById("desencriptar");
    desencriptar.addEventListener("click", (event) => desencriptarTexto(event)); 

const copiar = document.getElementById("copiar");
    copiar.addEventListener("click", (event) => copiarTexto()); 

let mensajeVacio = document.getElementById("mensaje-vacio"); //Div que muestra personajes y mensaje de espera//
let mensajeProcesado = document.getElementById("mensaje-procesado"); //Div que muestra elementos del resultado//

var impresionParametros = document.getElementById("impresionParametros"); //Div donde se mostrará el resultado//
var htmlParametros = ""; //Construcción de cadena para mostrar resultado//

//Variables de validación//

const caracteresPermitidos = /^[a-zñ\s]+$/; 
const caracteresMinimos = /[a-zñ]/; 
var continuaProceso = true; 

//Variables operativas//

const llavesDeEncriptado = [ 
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function limpiarArea(){
    if (textoIngresado.value != "") {
            textoIngresado.value = "";
    };
}


