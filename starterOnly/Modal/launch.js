import { modalbg, modalBtn, closeBtn } from './constante.js';

// Fonction pour ouvrir la modale
export function launch() {
    // Affiche un message dans la console pour indiquer que la fonction est appelée
    console.log("Fonction de lancement appelée");

    // Ajoute un écouteur d'événement à chaque bouton qui doit ouvrir la modale
    modalBtn.forEach((btn) => btn.addEventListener("click", () => {
        // Lorsqu'un bouton est cliqué, affiche la modale en changeant son style d'affichage
        modalbg.style.display = "block";
    }));

    // Ajoute un écouteur d'événement au bouton de fermeture de la modale
    closeBtn.addEventListener("click", () => {
        // Lorsque le bouton de fermeture est cliqué, masque la modale en changeant son style d'affichage
        modalbg.style.display = "none";
    });
}

