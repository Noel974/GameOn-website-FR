import { btnSubmit, modalConfirmation, btnCloseConfirm, form } from './constante';
import { firstNameControle, lastNameControle, emailControle, birthdateControle, quantityControle, checkboxLocationControl, conditionCheckboxControle } from './modalForm';
export function modelConf() {
    // Fonction pour ouvrir la modale de confirmation d'inscription :

    btnSubmit.addEventListener('click', e => {
        // Empêche l'envoi du formulaire
        e.preventDefault();

        // Vérifie si tous les contrôles de validation renvoient true
        if (firstNameControle() && lastNameControle() && emailControle() && birthdateControle() && quantityControle() && checkboxLocationControl() && conditionCheckboxControle()) {
            // Si c'est le cas, affiche la confirmation et masque le formulaire
            modalConfirmation.style.display = "block";
            form.style.display = 'none';
        } else {
            // Sinon, affiche un message d'alerte
            alert('Merci de remplir correctement votre inscription.');
        }
    });


    // Fonction pour fermer la modale de confirmation d'inscription

    btnCloseConfirm.addEventListener("click", () => {
        window.location.reload();
    });
}