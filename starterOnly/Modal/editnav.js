 export function editNav() {
    // S�lectionne l'�l�ment avec l'ID "myTopnav"
    var x = document.getElementById("myTopnav");

    // V�rifie si la classe de l'�l�ment est "topnav"
    if (x.className === "topnav") {
        // Si c'est le cas, ajoute la classe "responsive" � l'�l�ment
        x.className += " responsive";
    } else {
        // Sinon, r�initialise la classe de l'�l�ment � "topnav"
        x.className = "topnav";
    }
}
