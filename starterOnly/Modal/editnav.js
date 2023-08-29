// Fonction pour ouvrir et fermer le menu responsive
export function editNav() {
    const iconLink = document.querySelector("a.icon");
    iconLink.addEventListener("click", editNav);
    const NavBar = document.getElementById("myTopnav");

    if (NavBar.className === "topnav") {
        NavBar.className += " responsive";
    } else {
        NavBar.className = "topnav";
        NavBar.classList.remove('responsive');
    }
}

// Fonction qui ferme le menu responsive au-delà de 800px 
window.addEventListener('resize', () => {
    const NavBar = document.getElementById("myTopnav");
    
    if (window.innerWidth > 800) {
        NavBar.classList.remove('responsive');
    }
});
