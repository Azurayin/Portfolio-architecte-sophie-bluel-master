//Permet d'afficher un preview de l'image qui sera POSTER dans l'API
//Le code permet qu'en cliquant sur l'icone de Fontawesome, un click sur l'input invisible sera envoyé
//Tout les elements sauf le preview seront caché par display none
//une alerte s'affichera si le fichier n'est pas un jpeg/png ou si il fait plus de 4mo


const imagePreview = document.getElementById('previewWork');
document.getElementById('uploadButton').addEventListener('click', uploadPreview)

function uploadPreview() {
  let input = document.getElementById('inputFile');
  
  input.addEventListener('change', function() {
    let file = input.files[0];

    
    document.getElementById('modale2-work-icon').style.display = 'none';
    document.getElementById('uploadButton').style.display = 'none';
    document.getElementById('fileInfo').style.display = 'none';
    

    let imageUrl = URL.createObjectURL(file);
    imagePreview.src = imageUrl;
    imagePreview.style.maxWidth = '100%';
    imagePreview.style.maxHeight = '100%';
    console.log(imageUrl);

    
    imagePreview.style.display = 'block';
    
    let accceptedType = ['image/jpeg', 'image/png', 'image/jpg'];
    let acceptedSize = 4 * 1024 * 1024; //4Mo

    if (!file || !accceptedType.includes(file.type) || file.size > acceptedSize) {
      alert('Veuillez sélectionner un fichier JPG ou PNG d\'une taille maximale de 4 Mo.');
      imagePreview.style.display = 'none';
      imagePreview.src = '';
      document.getElementById('modale2-work-icon').style.display = 'block';
      document.getElementById('uploadButton').style.display = 'block';
      document.getElementById('fileInfo').style.display = 'block';
    } else {
      var modale2Valider = document.querySelector('.modale2-valider');
      modale2Valider.style.backgroundColor = "#1D6154";
    }
  });
let container = document.querySelector('.work-add-container-elements');
container.appendChild(input);
  input.click();
;
}

imagePreview.addEventListener('click', uploadPreview);
