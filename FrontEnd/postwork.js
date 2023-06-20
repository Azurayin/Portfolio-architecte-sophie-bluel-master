var modale2Validation = document.querySelector(".modale2-valider");

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

  // Make the POST request
  fetch(apiEndpointWorks, {
    method: 'POST',
    headers: {
      // Copy pasted from the API curl
      'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
      'accept': 'application/json'
    },
    body: requestBodyForm
  })
    .then(response => {
      if (response.ok) {
        // Request was successful
        console.log('Data posted successfully!');
        // Perform any additional actions after successful data submission
        reloadWorksEditionContainer();
        var precedent = document.querySelector('.precedent');
        precedent.click();

        function reloadWorksEditionContainer() {
          // Remove existing elements from the container
          const workContainer = document.getElementById('workContainer');
          while (workContainer.firstChild) {
            workContainer.removeChild(workContainer.firstChild);
          }
        
          // Fetch and populate the container with updated data
          fetchWorks();
        }
      } else {
        // Request failed
        console.error('Failed to post data:', response.status);
        // Handle the error as needed
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error as needed
    });
}
