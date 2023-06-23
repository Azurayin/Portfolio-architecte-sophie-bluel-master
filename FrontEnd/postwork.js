// Permet de recuperer les valeurs inséré de la modale 2 dans un FormData (requis pour l'API)

const modale2Validation = document.querySelector(".modale2-valider");
const postWorkError = document.querySelector('.postwork-error')

modale2Validation.addEventListener("click", postData);

var apiEndpointWorks = 'http://localhost:5678/api/works';

function postData() {
  // Get the input values from the user
  // files[0] as the data is checked in the HTML code
  let imageInput = document.getElementById('inputFile').files[0];
  let titleInput = document.getElementById('title').value;
  let categoryInput = document.getElementById('categorySelect').value;
  // Get the token from sessionStorage
  let token = sessionStorage.getItem('token');

  // Make sure the token is defined
  if (!token) {
    console.error('Token is not defined');
    return;
  }

  // The API is requesting a multipart/form-data
  let requestBodyForm = new FormData();
  requestBodyForm.append('title', titleInput);
  requestBodyForm.append('image', imageInput);
  requestBodyForm.append('category', categoryInput);

  
  fetch(apiEndpointWorks, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'accept': 'application/json'
    },
    body: requestBodyForm
  })
    .then(response => {
      if (response.ok) {
        // Si la requete à marché
        console.log('Data posted successfully!');
        // reset les valeurs afin de pouvoir poster a nouveau
        document.getElementById('inputFile').value = ''; 
        document.getElementById('title').value = ''; 
        document.getElementById('categorySelect').value = '';
        // rafraichie la conteneur
        reloadWorksEditionContainer();
        // permet de revenir a la premiere modale rafraichie 
        var precedent = document.querySelector('.precedent');
        precedent.click();

        document.getElementById('modale2-work-icon').style.display = 'block';
        document.getElementById('uploadButton').style.display = 'block';
        document.getElementById('fileInfo').style.display = 'block';
        var imagePreview = document.getElementById('previewWork');
        imagePreview.style.display = 'none';

        function reloadWorksEditionContainer() {
          gallery.innerHTML='';
          workEditionContainer.innerHTML= '';
        
          //reload la modale et la galerie
          fetchWorksModale();
          fetchWorksGalery();
        }
      } else {
        // Request failed
        console.error('Failed to post data:', response.status);
        // affiche le message d'erreur
        postWorkError.style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error as needed
    });
}
