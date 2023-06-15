var modale2Validation = document.querySelector(".modale2-valider");
modale2Validation.addEventListener("click", postData);


var apiEndpointWorks = 'http://localhost:5678/api/works';

function postData() {
    // Get the input values from the user
    var imageInput = document.getElementById('previewWork').getAttribute('src');
    var titleInput = document.getElementById('title').value;
    var categoryInput = document.getElementById('categorySelect').value;
    
    // Get the token from sessionStorage
    var token = sessionStorage.getItem('token');
  
    // Make sure the token is defined
    if (!token) {
      console.error('Token is not defined');
      return;
    }
  
  // Construct the request body
  var requestBody = {
    title: titleInput,
    imageUrl: imageInput,
    categoryId: categoryInput,
    userId: 1 
  };
  
  // Make the POST request
  fetch(apiEndpointWorks, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Include the token in the Authorization header
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (response.ok) {
        // Request was successful
        console.log('Data posted successfully!');
        // Perform any additional actions after successful data submission
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