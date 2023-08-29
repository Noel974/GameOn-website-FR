export function modalForm() {

};
    //Condition regex pour le contrôle du champs firstName :
    export function firstNameControle(pfirstName, pfirstNameError) {

        if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(pfirstName.value)) {
            pfirstName.style.border = "solid 2px green";
            pfirstNameError.textContent = "Champ Valide";
            pfirstNameError.style.color = 'green';
            pfirstNameError.style.fontSize = '15px';
            pfirstNameError.style.marginBottom = '5px';
            return true;
        }

        else {
            pfirstName.style.border = "solid 2px red";
            pfirstNameError.textContent = "Veuillez rentrer deux caract�res minimum";
            pfirstNameError.style.color = 'red';
           pfirstNameError.style.fontSize = '15px';
            pfirstNameError.style.marginBottom = '5px';
            return false;
        }

    };

    //Condition regex pour le contrôle du champs lastName :
    export function lastNameControle(plastName,plastNameError) {

        if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(plastName.value)) {
            plastName.style.border = "solid 2px green";
            plastNameError.textContent = "Champ Valide";
            plastNameError.style.color = 'green';
            plastNameError.style.fontSize = '15px';
            plastNameError.style.marginBottom = '5px';
            return true;
        }

        else {
            plastName.style.border = "solid 2px red";
            plastNameError.textContent = "Veuillez rentrer deux caract�res minimum";
            plastNameError.style.color = 'red';
            plastNameError.style.fontSize = '15px';
            plastNameError.style.marginBottom = '5px';
            return false;
        }

    };

    //Condition regex pour le contr�le du champs email :
    export function emailControle( pemail, pemailError) {

        if (/^(([^<>()\[\]\\.,;:\s,@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
            pemail.style.border = "solid 2px green";
            pemailError.textContent = "Champ Valide";
            pemailError.style.fontSize = '15px';
            pemailError.style.color = 'green';
            pemailError.style.marginBottom = '5px';
            return true;
        }

        else {
            pemail.style.border = "solid 2px red";
            pemailError.textContent = "Veuillez rentrer une adresse email valide";
            pemailError.style.fontSize = '15px';
            pemailError.style.color = 'red';
            pemailError.style.marginBottom = '5px';
            return false;
        }
    };


    //Condition regex pour le contr�le du champs date :
    export function birthdateControle(pbirthdate,pbirthdateError) {

        if (/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(pbirthdate.value)) {
            pbirthdate.style.border = "solid 2px green";
            pbirthdateError.textContent = "Champ Valide";
            pbirthdateError.style.fontSize = '15px';
            pbirthdateError.style.marginBottom = '10px';
            pbirthdateError.style.color = 'green';
            return true;
        }

        else {
            pbirthdate.style.border = "solid 2px red";
            pbirthdateError.textContent = "Vous devez entrer votre date de naissance.";
            pbirthdateError.style.fontSize = '15px';
            pbirthdateError.style.marginBottom = '10px';
            pbirthdateError.style.color = 'red';
            return false;
        }

    };
    
    //Condition regex pour le contr�le du champs quantity :
    export function quantityControle(pquantity,pquantityError) {

        if (pquantity.value > 0) {
            pquantity.style.border = "solid 2px green";
            pquantityError.textContent = "Champ Valide";
            pquantityError.style.color = "green";
            pquantityError.style.fontSize = "15px";
            pquantityError.style.marginBottom = '10px';
            return true;
        }


        else {
            pquantity.style.border = "solid 2px red";
            pquantityError.textContent = "Merci d'indiquer le nombre de tournois";
            pquantityError.style.fontSize = '15px';
            pquantityError.style.marginBottom = '10px';
            pquantityError.style.color = 'red';
            return false;
        }
    };

    //Condition pour le contr�le du champs check-box location :
     export function checkboxLocationControl(pcheckLocation,plocationError) {

        for (let i = 0; i < pcheckLocation.length; i++) {

            if (pcheckLocation[i].checked) {
                plocationError.textContent = 'Champ Valide';
                plocationError.style.color = 'green';
                plocationError.style.fontSize = '15px';
                plocationError.style.marginBottom = '10px';
                return true;
            }

        }

        plocationError.textContent = 'Champ Invalide';
        plocationError.style.color = 'red';
        plocationError.style.fontSize = '15px';
        plocationError.style.marginBottom = '10px';
        return false;

    };

    //Condition pour le contr�le du champs checkbox :
    export function conditionCheckboxControle( pcheckbox1,pconditionCheckboxError) {
        if (pcheckbox1.checked) {
            pcheckbox1.style.border = "solid 2px green";
            pconditionCheckboxError.textContent = "Champs Valide";
            pconditionCheckboxError.style.color = "green";
            pconditionCheckboxError.style.fontSize = "15px";
            pconditionCheckboxError.style.marginBottom = '10px';
            return true;

        } else {
            pcheckbox1.style.border = "solid 2px red";
            pconditionCheckboxError.textContent = "Merci d'accepter les conditions d'utilisations";
            pconditionCheckboxError.style.fontSize = '15px';
            pconditionCheckboxError.style.marginBottom = '10px';
            pconditionCheckboxError.style.color = 'red';
            return false;
        }
    };


