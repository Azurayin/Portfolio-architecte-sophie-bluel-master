
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
if (sessionStorage.getItem('token')){
// Create container div
var containerDiv = document.createElement("div");
containerDiv.className = "modifier-button-container";

// Create icon element
var iconElement = document.createElement("i");
iconElement.className = "fa-regular fa-pen-to-square";
iconElement.addEventListener("click", triggerFileInput);

// Create button element
var paragraphElement = document.createElement("p");
paragraphElement.className = "modifier-button"
paragraphElement.innerText = "Modifier";
paragraphElement.addEventListener("click", triggerFileInput);

// Create file input element
var fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.id = "imageInput";
fileInput.accept = "image/*";

// Append elements to the container div
containerDiv.appendChild(iconElement);
containerDiv.appendChild(paragraphElement);
containerDiv.appendChild(fileInput);


const introduction = document.getElementById("introduction");
// Append the container div to the introduction
introduction.appendChild(containerDiv);

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
}}