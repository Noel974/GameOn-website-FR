import { btnSubmit, modalConfirmation, btnCloseConfirm, form } from './constante.js';
import { firstNameControle, lastNameControle, emailControle, birthdateControle, quantityControle, checkboxLocationControl, conditionCheckboxControle } from './modalForm.js';
export function modalConf() {
    // Fonction pour ouvrir la modale de confirmation d'inscription :

    btnSubmit.addEventListener('click', e => {
        // Emp�che l'envoi du formulaire
        e.preventDefault();

        //D�claration de mes variables first et firstNameError :
        let firstName = document.querySelector("#first");
        let firstNameError = document.querySelector("#firstNameError");
        //AddEventListener pour le controle de l'input firstName :
        firstName.addEventListener('blur', () => {
            firstNameControle(firstName, firstNameError);
        });

        //D�claration de mes variable lastName et lastNameError :
        let lastName = document.querySelector("#last");
        let lastNameError = document.querySelector("#lastNameError");

        //AddEventListener pour le controle de l'input lastName :
        lastName.addEventListener('blur', () => {
            lastNameControle(lastName, lastNameError);
        });

        //D�claration de mes variables email et emailError :
        let email = document.querySelector("#email");
        let emailError = document.querySelector("#emailError");
        //AddEventListener pour le controle de l'input email :
        email.addEventListener('blur', () => {
            emailControle(email, emailError);
        });


        //D�claration de mes variables birthdate et birthdateError :
        let birthdate = document.querySelector("#birthdate");
        let birthdateError = document.querySelector("#birthdateError");
        //AddEventListener pour le controle de l'input birthdate :
        birthdate.addEventListener('blur', () => {
            birthdateControle(birthdate, birthdateError);
        });
        //D�claration de mes constantes quantity et quantityError :
        let quantity = document.querySelector("#quantity");
        let quantityError = document.querySelector("#quantityError");
        //AddEventListener pour le controle de l'input quantity :
        quantity.addEventListener('blur', () => {
            quantityControle(quantity, quantityError);
        });

        //D�claration de mes variables location et locationError :
        let checkLocation = document.getElementsByName("location");
        let locationError = document.querySelector("#locationError");

        //AddEventListener pour le controle de l'input checkLocation :
        checkLocation.forEach((chekLocationInput) => chekLocationInput.addEventListener('change', function () {
            checkboxLocationControl(checkLocation, locationError);
        }));


        //D�claration de mes variables checkbox1 et generalCheckboxError :
        let checkbox1 = document.querySelector("#checkbox1");
        let conditionCheckboxError = document.querySelector("#generalCheckboxError");

        //AddEventListener pour le controle de l'input checkbox1 :
        checkbox1.addEventListener('blur', () => {
            conditionCheckboxControle(checkbox1, conditionCheckboxError);
        });


        // V�rifie si tous les contr�les de validation renvoient true
        if (firstNameControle(firstName, firstNameError) && lastNameControle(lastName, lastNameError) && emailControle(email, emailError) && birthdateControle(birthdate, birthdateError) && quantityControle(quantity, quantityError) && checkboxLocationControl(checkLocation, locationError) && conditionCheckboxControle(checkbox1, conditionCheckboxError)) {
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