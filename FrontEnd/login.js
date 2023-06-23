

var loginError = document.querySelector('.login-error');
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    let apiEndpoint = 'http://localhost:5678/api/users/login';
    let user = { email: email, password: password };
  
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok)
        return response.json();

      else {
        loginError.style.display = 'block';
        throw new Error('Email ou mot de passe invalide');
      }
  })

    .then(response => {
    
      // Si on option un token en reponse alors il le gardera dans la memoire pour cette session
      if (response.token) {
        sessionStorage.setItem('token', response.token);
  
        console.log('Login successful');
        window.location.href = 'http://127.0.0.1:5500/FrontEnd/index.html';
      } else {
        // Sinon une alerte
        alert('Email ou mot de passe invalide');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
  