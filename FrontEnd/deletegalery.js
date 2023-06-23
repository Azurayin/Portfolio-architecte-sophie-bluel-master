//Delete toute la galerie de la modale par le dataset.id de chaque figure
var deleteGaleryBtn = document.querySelector('.delete-galery');

deleteGaleryBtn.addEventListener('click', deleteGalery); // Removed parentheses after deleteGalery

function deleteGalery() {
  let allWorks = workEditionContainer.querySelectorAll('figure');
  let token = sessionStorage.getItem('token');

  const deleteRequests = Array.from(allWorks).map(figure => {
    const workId = figure.dataset.id;
  
    return fetch(apiEndpointWorks + '/' + workId, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  });

  Promise.all(deleteRequests)
    .then(function(responses) {
      const allResponsesSuccessful = responses.every(response => response.ok);

      if (allResponsesSuccessful) {
        console.log('All works deleted successfully');
        allWorks.forEach(figure => figure.remove());
        gallery.innerHTML='';
        fetchWorksGalery();
        
      } else {
        throw new Error('Failed to delete one or more works');
      }
    })
    .catch(function(error) {
      console.log(error);
    });
    
}