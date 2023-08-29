import { editNav } from './Modal/editnav.js';
editNav();

import { modalForm } from './Modal/modalForm.js';
modalForm();


import { launch } from './Modal/launch.js';
launch();

import { modalConf } from './Modal/modalConf.js';
modalConf();

// Récupération de l'eventlistener pour éditer le hamburger responsive
const iconLink = document.querySelector("a.icon");
iconLink.addEventListener("click", editNav);

// Récupération des éléments du DOM pour le menu responsive
const NavBar = document.getElementById("myTopnav");

// Récupération de l'événement pour fermer le menu responsive en dehors de la zone du menu
document.addEventListener('click', (event) => {
    if (NavBar.classList.contains('responsive') && 
        !NavBar.contains(event.target) && 
        !iconLink.contains(event.target)) {
        NavBar.classList.remove('responsive');
    }
});