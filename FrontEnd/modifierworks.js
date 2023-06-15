// bouton modifier des projets ainsi que la modale qui va avec

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

const modale = document.querySelector('.modale');

var btnAddWork = document.querySelector('.button-add-work')
btnAddWork.addEventListener("click",triggermodaleContent2Flex)

var btnPrecedent = document.querySelector('.precedent')
btnPrecedent.addEventListener("click",triggermodaleContent1Flex)

var closeModale = document.querySelectorAll('.close');
closeModale.forEach(function(close) {
  close.addEventListener("click", triggermodaleDisplayNone);
});

iconChangeWorks.addEventListener("click", triggermodaleDisplayFlex);
paragraphChangework.addEventListener("click", triggermodaleDisplayFlex);

function triggermodaleContent2Flex() {
  var modaleContent1 = document.querySelector('.modale-content1');
  modaleContent1.style.display = 'none';
  var modaleContent2 = document.querySelector('.modale-content2');
  modaleContent2.style.display = 'flex';
}

function triggermodaleContent1Flex() {
  var modaleContent1 = document.querySelector('.modale-content1');
  modaleContent1.style.display = 'flex';
  var modaleContent2 = document.querySelector('.modale-content2');
  modaleContent2.style.display = 'none';
}

function triggermodaleDisplayNone() {
 modale.style.display = 'none';
}

function triggermodaleDisplayFlex() {
  modale.style.display = 'flex';
}

modale.addEventListener('click', function(event) {
    // Check if the clicked target is the modal background itself
    if (event.target === modale) {
      // Close the modal by hiding it
      modale.style.display = 'none';
    }
  });

}


