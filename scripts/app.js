"use strict";

const rangePassword = document.querySelector(".pw-length");
const btnGenerar = document.querySelector(".btn-generate-password");


var puntosSeguridad = 0;


const reseteo = () => {
    puntosSeguridad = 0;
    stringChar = "";

}

//tamaño de la contraseña y output
const outputTamPassword = document.querySelector(".output-range");
const outputPassword = document.querySelector(".pw-output");
var tamPAssword = rangePassword.value;
outputTamPassword.textContent = tamPAssword;

rangePassword.addEventListener("mousemove",
    () => {
        tamPAssword = rangePassword.value;
        outputTamPassword.textContent = tamPAssword;
    })

const generarTamañoContraseña = () => {
    tamPAssword = rangePassword.value;
    if (tamPAssword > 5) puntosSeguridad++;
    if (tamPAssword >= 10) puntosSeguridad++;
    if (tamPAssword >= 15) puntosSeguridad++;
    if (tamPAssword >= 20) puntosSeguridad++;
}

//Checks de parametros;
const chMinusculas = document.querySelector("#lowercase-sl");
const chMayusculas = document.querySelector("#uppercase-sl");
const chNumber = document.querySelector("#number-sl");
const chSymbol = document.querySelector("#symbols-sl");


btnGenerar.addEventListener("click",
    () => {
        if(existeCheck === true){
           
            reseteo();
            generarStringChar();
            generarTamañoContraseña();
            generarContraseña();
            generarNivelSeguridad();
        }else{
            console.log("introduce parametro valido")
            crearAlerta();
        }
        
    })

const charLowerCase = "abcdefghijklmnñopqrstuvwxyz";
const charUppercase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const charNumber = "0123456789";
const charSymbol = "\\ºª!|\"@·#$~%€¬/&()?'¡`^[]+*}{¨´.:-_,;<>"
var stringChar;



//funcion que permite generar un string con todos los valores que puede tener la contraseña
const generarStringChar = () => {
    if (chMinusculas.checked) {
        stringChar += charLowerCase;
        puntosSeguridad++;
    }
    if (chMayusculas.checked) {
        stringChar += charUppercase;
        puntosSeguridad++;
    } if (chNumber.checked) {
        stringChar += charNumber;
        puntosSeguridad++;
    }
    if (chSymbol.checked) {
        stringChar += charSymbol;
        puntosSeguridad++;
    }
}

var contraseñaGenerada;

const generarContraseña = () => {
    if (stringChar != 0) {
        contraseñaGenerada = "";
        for (var i = 0; i < tamPAssword; i++) {
            const r = (Math.random() * stringChar.length).toFixed();
            contraseñaGenerada += stringChar.charAt(r);
        }
        outputPassword.textContent = contraseñaGenerada;
    }
}

//función que mide la seguridad de la contraseña.

const lvlSeguridad = document.querySelectorAll(".strength-lvl");
const strengthTxt = document.querySelector(".strength-txt");
const generarNivelSeguridad = () => {
    var element = 0;
    var color;
    switch (true) {
        case (puntosSeguridad <= 2):
            strengthTxt.textContent = "BAJO";
            element = 1;
            color = "rgb(240, 59, 59)";
            break;
        case (puntosSeguridad >= 3 && puntosSeguridad <= 4):
            strengthTxt.textContent = "MEDIO";
            element = 2;
            color = "rgb(241, 241, 74)"
            break;
        case (puntosSeguridad >= 5 && puntosSeguridad <= 6):
            strengthTxt.textContent = "ALTO";
            element = 3;
            color = "rgb(139, 223, 71)";
            break;
        case (puntosSeguridad >= 7 && puntosSeguridad <= 8):
            strengthTxt.textContent = "MUY ALTO";
            element = 4;
            color = "rgb(22, 241, 37)";
            break;

    }
    lvlSeguridad.forEach(element => {
        element.style.backgroundColor = `transparent`;
        element.style.borderColor = `white`;
    });

    for (let i = 0; i < element; i++) {
        lvlSeguridad[i].style.backgroundColor = color;
        lvlSeguridad[i].style.borderColor = color;
    }
}

const btnCopy = document.querySelector("#ctc-btn");

btnCopy.addEventListener("click",
    () => {

        if(contraseñaGenerada){
            if (window.isSecureContext && navigator.clipboard) {
                navigator.clipboard.writeText(contraseñaGenerada);
            } else {
                unsecuredCopyToClipboard(contraseñaGenerada);
            }
            
        }
        
    });
//en caso de no ser una página segura HTTP se procede a copiar el ccódigo de otra forma 
    const unsecuredCopyToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text; 
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try { document.execCommand('copy') }
        catch (err) {
            console.error('Unable to copy to clipboard', err)
        }
        document.body.removeChild(textArea)
    };


    //comprobar que exista algún check

    const chBox = document.querySelectorAll(".character-pw-option >  span > input");
    
    let existeCheck = false;
    const comprobarChecked = () => {
        //btnGenerar.disabled = true;
        btnGenerar.classList.add("desactivado");
        
        chBox.forEach(element => {
            element.addEventListener("click",
            ()=> {
                for(let i = 0; i<chBox.length; i++){
                    if(chBox[i].checked === true) {
                        existeCheck = true;
                        btnGenerar.classList.remove("desactivado")
                        break;
                    }else{
                        btnGenerar.classList.add("desactivado");
                        existeCheck = false;
                    };     
                } 
                if(existeCheck){
                    btnGenerar.disabled = false;
                }else{
                    //btnGenerar.disabled = true;
                }
            })
        });
        
    }
comprobarChecked();

const crearAlerta = () => {
    const parentEl = document.createElement("div");
    parentEl.className = "notificacion";
}