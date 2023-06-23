// Fonction qui Fetch les works dans l'API et les affiches dans la modale 1
// Peut être utiliser pour RELOAD les works sans avoir à rafraichir la page

const workEditionContainer = document.querySelector('.works-edition-container');
workEditionContainer.id = 'workContainer';

function fetchWorksModale() {
  fetch(worksApiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(function(item) {
        let figure = document.createElement('figure');
        figure.dataset.id = item.id;

        let img = document.createElement('img');
        img.src = item.imageUrl;

        let paragrapheEditer = document.createElement('p');
        paragrapheEditer.textContent = "éditer";

        let div = document.createElement('div');
        let iconDiv = document.createElement('i');
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
}

fetchWorksModale();
