
// function triggerFileInput() {
//   var input = document.getElementById("imageInput");
//   input.click();
// }

// document.getElementById("imageInput").addEventListener("change", uploadImage);

// function uploadImage(event) {
//   var input = event.target;
//   var imageElement = document.getElementById("image-profile");

//   // Check if a file was selected
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     // Read the uploaded file as a data URL
//     reader.readAsDataURL(input.files[0]);

//     // Set the image source when the file is loaded
//     reader.onload = function(e) {
//       imageElement.src = e.target.result;
//     };
//   }
// }




// Creation des elements de modification pour le PROFILE
if (sessionStorage.getItem('token')){
// Create container div
var containerDivProfile = document.createElement("div");
containerDivProfile.className = "modifier-button-container";

// Create icon element
var iconChangeProfile = document.createElement("i");
iconChangeProfile.className = "fa-regular fa-pen-to-square";
iconChangeProfile.addEventListener("click", triggerFileInput);

// Create paragraphe element
var paragraphChangeProfile = document.createElement("p");
paragraphChangeProfile.className = "modifier-button"
paragraphChangeProfile.innerText = "Modifier";
paragraphChangeProfile.addEventListener("click", triggerFileInput);

// Create file input element
var fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.id = "imageInput";
fileInput.accept = "image/*";

// Append elements to the container div
containerDivProfile.appendChild(iconChangeProfile);
containerDivProfile.appendChild(paragraphChangeProfile);
containerDivProfile.appendChild(fileInput);


const introduction = document.getElementById("introduction");
// Append the container div to the introduction
introduction.appendChild(containerDivProfile);




function triggerFileInput() {
  var input = document.getElementById("imageInput");
  input.click();
}

document.getElementById("imageInput").addEventListener("change", uploadImage);

function uploadImage(event) {
  var input = event.target;
  var imageElement = document.getElementById("image-profile");

  // Check if a file was selected
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    // Read the uploaded file as a data URL
    reader.readAsDataURL(input.files[0]);

    // Set the image source when the file is loaded
    reader.onload = function(e) {
      imageElement.src = e.target.result;
    };
  }
}


const header = document.querySelector('header');
header.classList.add("modified-header");
const modeEdition = document.querySelector('.mode-edition');
modeEdition.style.display = 'flex';
}