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