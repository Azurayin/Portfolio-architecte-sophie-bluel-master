//Code pour la page d'accueil (photo de profile,gallerie,filtres)

const apiUrl = 'http://localhost:5678/api/';
const worksApiUrl = apiUrl + 'works';

const gallery = document.querySelector('.gallery');

// Faire une requete GET a l'API en utilisant fetch qui va nous retourner les données en .json
// Peut être utiliser pour RELOAD la gallerie
function fetchWorksGalery(){
fetch(worksApiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Fait une boucle qui va creer l'element 'figure' pour chaque (forEach) objet de l'array et lui attribuer sa categoryId via un dataset
    data.forEach(function(item) {
      let figure = document.createElement('figure');
      figure.dataset.category = item.categoryId;

      // Creer l'element img et lui attribut en source l'imageUrl de l'objet 
      let img = document.createElement('img');
      img.src = item.imageUrl;

      // Creer le figcaption element et met en texte le title de l'objet 
      let figcaption = document.createElement('figcaption');
      figcaption.textContent = item.title;

      // Append l'img et le figcaption a l'element figure
      figure.appendChild(img);
      figure.appendChild(figcaption);

      // Append l'element figure a son conteneur (.gallery)
      gallery.appendChild(figure);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
  }
  fetchWorksGalery();




    
  //---------------partie filtre----------------------

  const categoriesApiUrl = apiUrl + 'categories';

  // Creer le conteneur (une div) des filtres en lui donnant pour ID 'filters'
  var filtersContainer = document.createElement('div');
  filtersContainer.id = 'filters';
  
  // Insert le conteneur avant l'element quii a pour class '.gallery' (beforebegin = avant le commencement)
  gallery.insertAdjacentElement('beforebegin', filtersContainer);
  
  // Creer l'option 'tout' du filtre en créant un bouton avec pour text 'Tout' et lui attribut la class 'active' par default et l'append au conteneur
  // Le categorie 'tout' n'est pas dans l'API donc elle est creer ici
  var btnAll = document.createElement('button');
  btnAll.textContent = 'Tout';
  btnAll.classList.add('active'); 
  
  // Met un EventListener en click qui fera appel a deux fonctions (montrer tout les objets et faire que le button selectionner soit 'active')
  btnAll.addEventListener('click', function() {
    showAllItems();
    activateButton(btnAll);
  });
  filtersContainer.appendChild(btnAll);

  // Check if a token exists in the session storage
if (sessionStorage.getItem('token')) {
  // Token exists, hide the filters container
  filtersContainer.style.display = 'none';
}
  
  // Fetch les données des categories de l'API et retourne les données en .json
  fetch(categoriesApiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Creer un bouton filtre selon les données recuperer 
      // Let un EventListener 'click' qui fait appel a deux fonctions 
      // Une pour display les objets qui correspond au filtre selectionner)
      // L'autre pour faire en sorte que le filtre selectionner soit actif
      data.forEach(function(filter) {
        let btn = document.createElement('button');
        btn.textContent = filter.name;
        btn.addEventListener('click', function() {
          filterItems(filter.id);
          activateButton(btn);
        });
        filtersContainer.appendChild(btn);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  
  // Fonction pour montrer tout les objets
  function showAllItems() {
    let items = document.querySelectorAll('.gallery figure');
    items.forEach(function(item) {
      item.style.display = 'block';
    });
  }
  
  // Fonction pour filtrer les objets selon leur categoryId
  function filterItems(categoryId) {
    var items = document.querySelectorAll('.gallery figure');
    items.forEach(function(item) {
      var category = item.dataset.category;
      if (category == categoryId) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Fonction qui attribut la class active au bouton selectionner
  function activateButton(button) {
    var buttons = document.querySelectorAll('#filters button');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }
  


//---------Bouton de logout------

if (sessionStorage.getItem('token')) {
  let loginLogout = document.getElementById('login-logout')
  loginLogout.innerHTML = 'logout';
  loginLogout.href = 'index.html';

loginLogout.addEventListener('click', function(){
  sessionStorage.removeItem('token');

})}

