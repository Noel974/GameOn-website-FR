import {modalbg, modalBtn, closeBtn } from './constante.js';
export function launch() { 
    // Fonction pour ouvrire la modale :

    modalBtn.forEach((btn) => btn.addEventListener("click", () => {
        modalbg.style.display = "block";
    }));

    // Fonction pour fermer la modale

    closeBtn.addEventListener("click", () => {
        modalbg.style.display = "none";
    });

}
