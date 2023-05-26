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

var impresionResultado = document.getElementById("impresionResultado"); //Div donde se mostrará el resultado//
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
    if (textoIngresado.value == "Ingrese el texto aquí") {
        if (textoIngresado.value != "") {
            textoIngresado.value = "";
        }
    }
}

function validarFrontEnd(e) {
    if (e.key.match(caracteresPermitidos) === null) {
        e.preventDefault();
    } 
}

function validarBackEnd(texto){
    continuaProceso = true;

    if (textoProcesado == "Ingrese el texto aquí" || textoProcesado == "" ){
        alert("No ha ingresado su texto, por favor inténtelo de nuevo");
        continuaProceso = false;
    }  
    if(!caracteresMinimos.test(texto) && continuaProceso) {
        alert ("Aquí no hay letras para encriptar");
        continuaProceso = false;
    }
    if(!caracteresPermitidos.test(texto)&& continuaProceso) {
        alert ("Solamente se permiten letras minúsculas y espacios");
        continuaProceso = false;
    }
}

function encriptarTexto (){
    textoProcesado = textoIngresado.value; 
    validarBackEnd(textoProcesado);
    if(continuaProceso){     
        for(let i = 0; i < llavesDeEncriptado.length; i++){
            if(textoProcesado.includes(llavesDeEncriptado[i][0])){
                textoProcesado = textoProcesado.replaceAll(llavesDeEncriptado[i][0], llavesDeEncriptado[i][1])
            }
        }
        alert (textoProcesado);
    }else{
        textoIngresado.focus();
    }
}

function desencriptarTexto (){
    textoProcesado = textoIngresado.value; 
    validarBackEnd(textoProcesado);
    if(continuaProceso){     
        for(let i = 0; i < llavesDeEncriptado.length; i++){
            if(textoProcesado.includes(llavesDeEncriptado[i][1])){
                textoProcesado = textoProcesado.replaceAll(llavesDeEncriptado[i][1], llavesDeEncriptado[i][0])
            }
        }
        alert (textoProcesado);
    }else{
        textoIngresado.focus();
    }
}

function imprimirResultado(texto){}


