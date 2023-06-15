document.getElementById('uploadButton').addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
  
    input.addEventListener('change', function() {
      var file = input.files[0];
      var reader = new FileReader();
  
      reader.addEventListener('load', function() {
        var imagePreview = document.createElement('img');
        imagePreview.src = reader.result;
        imagePreview.style.maxWidth = '100%';
        imagePreview.style.maxHeight = '100%';
  
        document.getElementById('modale2-work-icon').style.display = 'none';
        document.getElementById('uploadButton').style.display = 'none';
        document.getElementById('fileInfo').style.display = 'none';
  
        var container = document.querySelector('.work-add-container-elements');
        container.appendChild(imagePreview);
      });
  
      if (!file || !['image/jpeg', 'image/png'].includes(file.type) || file.size > 4 * 1024 * 1024) {
        alert('Veuillez sélectionner un fichier JPG ou PNG d\'une taille maximale de 4 Mo.');
        return;
      }
      else {
    var modale2Valider = document.querySelector('.modale2-valider')
    modale2Valider.style.backgroundColor = "#1D6154";
      }
      reader.readAsDataURL(file);
    });
  
    input.click();
  });
  