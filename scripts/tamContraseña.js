"use strict";
export {generarTamañoContraseña, ptsTam, tamPassword}

//tamaño de la contraseña y output
const rangePassword = document.querySelector(".pw-length");
const outputTamPassword = document.querySelector(".output-range");

let ptsTam;

var tamPassword = rangePassword.value;
outputTamPassword.textContent = tamPassword;


rangePassword.addEventListener("mousemove",
    () => {
        tamPassword = rangePassword.value;
        outputTamPassword.textContent = tamPassword;
    })

const generarTamañoContraseña = () => {
    tamPassword = rangePassword.value;
    ptsTam = 0;
    if (tamPassword > 7) ptsTam++;
    if (tamPassword >= 12) ptsTam++;
    if (tamPassword >= 17) ptsTam++;
    if (tamPassword >= 22) ptsTam++;
}