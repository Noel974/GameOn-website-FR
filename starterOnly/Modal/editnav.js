 export function editNav() {
    // Sélectionne l'élément avec l'ID "myTopnav"
    var x = document.getElementById("myTopnav");

    // Vérifie si la classe de l'élément est "topnav"
    if (x.className === "topnav") {
        // Si c'est le cas, ajoute la classe "responsive" à l'élément
        x.className += " responsive";
    } else {
        // Sinon, réinitialise la classe de l'élément à "topnav"
        x.className = "topnav";
    }
}
