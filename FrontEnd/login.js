function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var apiEndpoint = 'http://localhost:5678/api/users/login';
    var user = { email: email, password: password };
  
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response); // Log the response object
  
      // Handle the API response accordingly
      if (response.token) {
        // Successful login, store the token in session storage
        sessionStorage.setItem('token', response.token);
  
        console.log('Login successful');
        window.location.href = 'http://127.0.0.1:5500/FrontEnd/index.html';
      } else {
        // Failed login, display an error message
        alert('Email or password is incorrect');
      }
    })
    .catch(error => {
      console.error(error);
      // Handle any errors that occur during the API request
    });
  }
  