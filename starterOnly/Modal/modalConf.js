// Import des constantes et des fonctions de contrôle depuis d'autres modules
import { btnSubmit, modalConfirmation, btnCloseConfirm, form } from './constante.js';
import { firstNameControle, lastNameControle, emailControle, birthdateControle, quantityControle, checkboxLocationControl, conditionCheckboxControle } from './modalForm.js';

// Fonction pour gérer la modale de confirmation d'inscription
export function modalConf() {
    // Ajoute un événement lorsqu'on clique sur le bouton de soumission
    btnSubmit.addEventListener('click', e => {
        // Empêche l'envoi du formulaire par défaut
        e.preventDefault();

        // Récupération des éléments du formulaire et des messages d'erreur
        let firstName = document.querySelector("#first");
        let firstNameError = document.querySelector("#firstNameError");
        
        let lastName = document.querySelector("#last");
        let lastNameError = document.querySelector("#lastNameError");

        let email = document.querySelector("#email");
        let emailError = document.querySelector("#emailError");

        let birthdate = document.querySelector("#birthdate");
        let birthdateError = document.querySelector("#birthdateError");
        
        let quantity = document.querySelector("#quantity");
        let quantityError = document.querySelector("#quantityError");

        let checkLocation = document.getElementsByName("location");
        let locationError = document.querySelector("#locationError");

        let checkbox1 = document.querySelector("#checkbox1");
        let conditionCheckboxError = document.querySelector("#generalCheckboxError");

        // Ajout d'événements "blur" pour chaque champ pour effectuer la validation en temps réel
        firstName.addEventListener('blur', () => {
            firstNameControle(firstName, firstNameError);
        });

        lastName.addEventListener('blur', () => {
            lastNameControle(lastName, lastNameError);
        });

        email.addEventListener('blur', () => {
            emailControle(email, emailError);
        });

        birthdate.addEventListener('blur', () => {
            birthdateControle(birthdate, birthdateError);
        });

        quantity.addEventListener('blur', () => {
            quantityControle(quantity, quantityError);
        });

        checkLocation.forEach((chekLocationInput) => {
            chekLocationInput.addEventListener('change', function () {
                checkboxLocationControl(checkLocation, locationError);
            });
        });

        checkbox1.addEventListener('blur', () => {
            conditionCheckboxControle(checkbox1, conditionCheckboxError);
        });

        // Vérifie si toutes les validations renvoient true
        if (firstNameControle(firstName, firstNameError) && lastNameControle(lastName, lastNameError) && emailControle(email, emailError) && birthdateControle(birthdate, birthdateError) && quantityControle(quantity, quantityError) && checkboxLocationControl(checkLocation, locationError) && conditionCheckboxControle(checkbox1, conditionCheckboxError)) {
            // Si c'est le cas, affiche la confirmation et masque le formulaire
            modalConfirmation.style.display = "block";
            form.style.display = 'none';
        } else {
            // Sinon, affiche un message d'alerte
            alert('Merci de remplir correctement votre inscription.');
        }
    });

    // Ajout d'un événement pour fermer la modale de confirmation d'inscription
    btnCloseConfirm.addEventListener("click", () => {
        window.location.reload(); // Recharge la page
    });
}
