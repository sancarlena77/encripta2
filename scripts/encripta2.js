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

var tipoDeResultado = document.getElementById("tipoDeResultado"); //Div donde se mostrará el tipo//
var impresionResultado = document.getElementById("impresionResultado"); //Div donde se mostrará el resultado//


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
        swal({
            text : "No ha ingresado su texto, por favor inténtelo de nuevo",
            icon : "error",
            button : false
        });
    
        continuaProceso = false;
    }  
    if(!caracteresMinimos.test(texto) && continuaProceso) {
        swal({
            text : "Aquí no hay letras para encriptar",
            icon : "error",
            button : false
        });
        continuaProceso = false;
    }
    if(!caracteresPermitidos.test(texto)&& continuaProceso) {
        swal({
            text : "Solamente se permiten letras minúsculas y espacios",
            icon : "error",
            button : false
        });
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
        tipoDeResultado.innerHTML = "<h2>Su texto encriptado es:</h2>";
        imprimirResultado()
    }else{
        textoIngresado.focus();
    }
}

function desencriptarTexto () {
    textoProcesado = textoIngresado.value; 
    validarBackEnd(textoProcesado);
    if(continuaProceso) {     
        for(let i = 0; i < llavesDeEncriptado.length; i++) {
            if(textoProcesado.includes(llavesDeEncriptado[i][1])) {
                textoProcesado = textoProcesado.replaceAll(llavesDeEncriptado[i][1], llavesDeEncriptado[i][0])
            }
        }
        tipoDeResultado.innerHTML = "<h2>Su texto desencriptado es:</h2>";
        imprimirResultado();
        }else{
        textoIngresado.focus();
    }
}

function imprimirResultado() {
    impresionResultado.innerHTML = textoProcesado;
    mensajeVacio.style.display = "none";
    mensajeProcesado.style.display = "block";
}


function copiarTexto() {
    navigator.clipboard.writeText(textoProcesado);
    swal({
        text : "Copiado con éxito",
        icon : "success",
        button : false,
    });
}