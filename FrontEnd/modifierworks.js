if (sessionStorage.getItem('token')){
var iconChangeWorks = document.createElement("i");
iconChangeWorks.className = "fa-regular fa-pen-to-square";

// Create paragraphe element
var paragraphChangework = document.createElement("p");
paragraphChangework.className = "modifier-button";
paragraphChangework.innerText = "Modifier";


const portfolio = document.getElementById("portfolio")
var projetmodify = portfolio.querySelector(".projet-modify");

projetmodify.appendChild(iconChangeWorks);
projetmodify.appendChild(paragraphChangework);

function openModale() {
    //creer dynamiquement la modale quand on va clicker sur l'icon ou le bouton modifier des projets

    //rajouter les icons de chaque image

    //faire en sorte qu'on affiche tout les elements de worksAPI


}    
}