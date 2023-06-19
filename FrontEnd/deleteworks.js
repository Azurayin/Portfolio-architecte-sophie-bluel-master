// Attach event listener to the parent container

workEditionContainer.addEventListener('click', function(event) {
    // Check if the clicked target is a div with the class 'fa-trash-can'
    if (event.target.classList.contains('fa-trash-can')) {
      // Traverse up the DOM tree to find the corresponding figure element
      var figure = event.target.closest('figure');
      if (figure) {
        // Extract the ID from the figure's dataset
        var workId = figure.dataset.id;
        let token = sessionStorage.getItem('token');
        
        // Make an API call to delete the item based on the ID
        fetch(apiUrl + 'works/' + workId, {
            method: 'DELETE',
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${token}`
            },
          })
            .then(function(response) {
              if (response.ok) {
                // Successfully deleted, remove the figure element from the DOM
                figure.remove();
              } else {
                throw new Error('Failed to delete the item');
              }
            })
            .catch(function(error) {
              console.log(error);
            });
          
      }
    }
  });
  