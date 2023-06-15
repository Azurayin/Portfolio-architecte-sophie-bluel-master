fetch(categoriesApiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data.forEach(function(category) {
      const option = document.createElement('option');
      option.value = category.id;
      option.text = category.name;
      categorySelect.appendChild(option);
    });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });