"use strict"
export {generarStringChar, stringChar, ptsCar};
var stringChar;
var ptsCar;

//Checks de parametros;
const chMinusculas = document.querySelector("#lowercase-sl");
const chMayusculas = document.querySelector("#uppercase-sl");
const chNumber = document.querySelector("#number-sl");
const chSymbol = document.querySelector("#symbols-sl");

//Strings de todos los caracteres que puede tener la contraseña
const charLowerCase = "abcdefghijklmnñopqrstuvwxyz";
const charUppercase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const charNumber = "0123456789";
const charSymbol = "\\ºª!|\"@·#$~%€¬/&()?'¡`^[]+*}{¨´.:-_,;<>"


/**
 * 
 * @returns devuelve un STRING con todos los caracteres que puede contener la contraseña NUMERO nivel de seguridad Caracteres
 * 
 */
const generarStringChar = () => {
    ptsCar = 0;
    stringChar = "";
    if(chMinusculas.checked || chMayusculas.checked) ptsCar++;
    if (chMinusculas.checked) {
        stringChar += charLowerCase;
    }
    if (chMayusculas.checked) {
        stringChar += charUppercase;
    } if (chNumber.checked) {
        stringChar += charNumber;
        ptsCar++;
    }
    if (chSymbol.checked) {
        stringChar += charSymbol;
        ptsCar++;
    }
}