"use strict";
import { generarNivelSeguridad } from "./nivelSeguridad.js";
import { crearAlerta, comprobarChecked, existeCheck } from "./alertasUsuario.js";
import { generarStringChar, stringChar,ptsCar} from "./generateStringChar.js";
import {generarTamañoContraseña, tamPassword, ptsTam} from "./tamContraseña.js";

export {contraseñaGenerada ,btnGenerar};

const btnGenerar = document.querySelector(".btn-generate-password");

comprobarChecked();
btnGenerar.addEventListener("click",
    () => {
        if (existeCheck === true) {

            generarStringChar();
            generarTamañoContraseña();
            generarContraseña();
            generarNivelSeguridad(ptsCar,ptsTam);
            
        } else {      
            crearAlerta();
        }
    })

const outputPassword = document.querySelector(".pw-output");
var contraseñaGenerada;
const generarContraseña = () => {
    if (stringChar != 0) {
        contraseñaGenerada = "";
        for (var i = 0; i < tamPassword; i++) {
            const r = (Math.random() * stringChar.length).toFixed();
            contraseñaGenerada += stringChar.charAt(r);
        }
        outputPassword.textContent = contraseñaGenerada;
        return contraseñaGenerada;
    }
}