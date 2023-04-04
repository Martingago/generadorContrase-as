import { contraseñaGenerada } from "./app.js";
const btnCopy = document.querySelector("#ctc-btn");

btnCopy.addEventListener("click",
    () => {

        if (contraseñaGenerada) {
            if (window.isSecureContext && navigator.clipboard) {
                navigator.clipboard.writeText(contraseñaGenerada);
            } else {
                unsecuredCopyToClipboard(contraseñaGenerada);
            }
            notificacionCopiar();
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

const notificacionCopiar = () => {
    const  cont = document.querySelector(".btn-container");

    //Crea un div con un mensaje de notificacion
    var notifyCopy = document.createElement("div");
    notifyCopy.className ="not-clipboard";
    var textNot = document.createTextNode("Copiado!")
    notifyCopy.appendChild(textNot);
    //añade el div al boton (En caso de existir 1 no lo genera)
    if(!cont.querySelector(".not-clipboard")){
        cont.appendChild(notifyCopy);
        setTimeout(() => {
            setTimeout(() => {
                cont.removeChild(notifyCopy);       
            }, 300);
            notifyCopy.style.opacity = 0;
        }, 1100);
    }
}