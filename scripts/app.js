"use strict";

const rangePassword = document.querySelector(".pw-length");
const btnGenerar = document.querySelector("#btn-generate-password");


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
        reseteo();
        generarStringChar();
        generarTamañoContraseña();
        generarContraseña();
        generarNivelSeguridad();

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
        console.log(contraseñaGenerada)
        navigator.clipboard.writeText("<empty clipboard>")
            .then(() => {
                alert('Text copied to clipboard');
            })
            .catch(err => {
                alert('Error in copying text: ', err);
            });

    })