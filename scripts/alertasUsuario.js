"use strict";
import { btnGenerar } from "./app.js";
export { crearAlerta, comprobarChecked, existeCheck };

//comprobar que exista algún check

const chBox = document.querySelectorAll(".character-pw-option >  span > input");
let existeCheck = false;


/**
 * @param {*} existeCheck devuelve un boolean.
 * TRUE: el usuario ha marcado alguna de las casillas de selección => botón generar contraseña habilitado
 * FALSE: el usuario no ha marcado casillas de seleccion => Se bloquea botón de generar contraseña 
 */
const comprobarChecked = () => {
    btnGenerar.classList.add("desactivado");

    chBox.forEach(element => {
        element.addEventListener("click",
            () => {
                for (let i = 0; i < chBox.length; i++) {
                    if (chBox[i].checked === true) {
                        existeCheck = true;
                        btnGenerar.classList.remove("desactivado")
                        break;
                    } else {
                        btnGenerar.classList.add("desactivado");
                        existeCheck = false;
                    };
                }
                return existeCheck;
            }
        )
    });

}

// función que crea la alerta en pantalla pidienado al usuario que seleccione
// parametros para generar su contraseña

const containerEl = document.querySelector(".notification-crl");
const crearAlerta = () => {

    if (containerEl.childElementCount <= 2) {
        const parentEl = document.createElement('div');

        parentEl.classList.add("notificacion");
        parentEl.textContent = "Selecciona almenos un parámetro";
        containerEl.appendChild(parentEl)
        setTimeout(() => {
            //timeut para darle formato a la animacion
            setTimeout(() => {
                //timeout para eliminar el elemento
                containerEl.removeChild(parentEl)
            }, 300);
            parentEl.style.transform = "translateX(30px)"
            parentEl.style.height = "0px";
            parentEl.style.opacity = 0;
        }, 2000);
    }
}