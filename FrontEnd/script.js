const apiUrl = 'http://localhost:5678/api/';
const worksApiUrl = apiUrl + 'works';

// selectionne la class gallery
const gallery = document.querySelector('.gallery');

// Faire une requete GET a l'API en utilisant fetch qui va nous retourner les données en .json
fetch(worksApiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Fait une boucle qui va creer l'element 'figure' pour chaque (forEach) objet de l'array et lui attribuer sa categoryId via un dataset
    data.forEach(function(item) {
      var figure = document.createElement('figure');
      figure.dataset.category = item.categoryId;

      // Creer l'element img et lui attribut en source l'imageUrl de l'objet 
      var img = document.createElement('img');
      img.src = item.imageUrl;

      // Creer le figcaption element et met en texte le title de l'objet 
      var figcaption = document.createElement('figcaption');
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


  const workEditionContainer = document.querySelector('.works-edition-container')

  fetch(worksApiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Fait une boucle qui va creer l'element 'figure' pour chaque (forEach) objet de l'array
      data.forEach(function(item) {
        var figure = document.createElement('figure');
        
        var img = document.createElement('img');
        img.src = item.imageUrl;

        var paragrapheEditer = document.createElement('p');
        paragrapheEditer.textContent = "éditer";

        var div = document.createElement('div');
        var iconDiv = document.createElement('i');
        iconDiv.classList.add('fa-regular', 'fa-trash-can');
        div.appendChild(iconDiv);
        
        figure.appendChild(img);
        figure.appendChild(paragrapheEditer);
        figure.appendChild(div);
  
        workEditionContainer.appendChild(figure);
        
      });
    })
    .catch(function(error) {
      console.log(error);
    });



    
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
        var btn = document.createElement('button');
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
    var items = document.querySelectorAll('.gallery figure');
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
  

  //---------------affiche les boutons modifiers ----------------

//  // Check si il y a un toek dans le storage de la session
// if (sessionStorage.getItem('token')) {
//   // Si le token existe , creer le bouton modifier
//   const modifierButton = document.createElement('button');
//   modifierButton.textContent = 'Modifier';
//   modifierButton.id = 'modifier-button';

//   // Event listener au bouton
//   modifierButton.addEventListener('click', function() {
//     // Create an input element for file upload
//     const input = document.createElement('input');
//     input.type = 'file';

//     // Add event listener to the input element to handle file selection
//     input.addEventListener('change', function(event) {
//       const file = event.target.files[0];

//       // Create a FileReader object to read the uploaded file
//       const reader = new FileReader();

//       // Set up the onload event handler to update the image source
//       reader.onload = function(e) {
//         introImage.src = e.target.result;
//       };

//       // Read the uploaded file as a data URL
//       reader.readAsDataURL(file);
//     });

//     // Trigger the file selection dialog
//     input.click();
//   });

//   // Get the #introduction section element
//   const introductionSection = document.querySelector('#introduction');

//   // Append the modifier button as the last child of the introductionSection
//   introductionSection.appendChild(modifierButton);
// }

//---------une fois login------

if (sessionStorage.getItem('token')) {
  let loginLogout = document.getElementById('login-logout')
  loginLogout.innerHTML = 'logout';
  loginLogout.href = 'index.html';

loginLogout.addEventListener('click', function(){
  sessionStorage.removeItem('token');

})}

