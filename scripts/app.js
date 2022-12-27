"use strict";
import { generarNivelSeguridad } from "./nivelSeguridad.js";
import { crearAlerta, comprobarChecked, existeCheck } from "./alertasUsuario.js";
import { generarStringChar, stringChar} from "./generateStringChar.js";

export {contraseñaGenerada, puntosSeguridad ,btnGenerar};

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
    if (tamPAssword > 7) puntosSeguridad++;
    if (tamPAssword >= 12) puntosSeguridad++;
    if (tamPAssword >= 17) puntosSeguridad++;
    if (tamPAssword >= 22) puntosSeguridad++;
}

btnGenerar.addEventListener("click",
    () => {
        if (existeCheck === true) {

            reseteo();
            generarStringChar();
            generarTamañoContraseña();
            generarContraseña();
            generarNivelSeguridad();
            
        } else {
            
            crearAlerta();
        }

    })

var contraseñaGenerada;
const generarContraseña = () => {
    if (stringChar != 0) {
        contraseñaGenerada = "";
        for (var i = 0; i < tamPAssword; i++) {
            const r = (Math.random() * stringChar.length).toFixed();
            contraseñaGenerada += stringChar.charAt(r);
        }
        outputPassword.textContent = contraseñaGenerada;
        return contraseñaGenerada;
    }
}

comprobarChecked();