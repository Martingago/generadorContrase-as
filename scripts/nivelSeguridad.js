"use strict";
export {generarNivelSeguridad};

const lvlSeguridad = document.querySelectorAll(".strength-lvl");
const strengthTxt = document.querySelector(".strength-txt");


//función que mide la seguridad de la contraseña.
const generarNivelSeguridad = (a,b) => {
    let puntosSeguridad = 0;
    var element = 0;
    var color;
    puntosSeguridad = a + b;
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