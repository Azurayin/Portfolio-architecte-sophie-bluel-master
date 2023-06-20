workEditionContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('fa-trash-can')) {
    event.preventDefault(); // Prevent page refresh

    var figure = event.target.closest('figure');
    if (figure) {
      var workId = figure.dataset.id;
      let token = sessionStorage.getItem('token');

      fetch(apiEndpointWorks + '/' + workId, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        if (response.ok) {
          figure.remove();
          console.log('Element removed successfully');
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
