console.log("test");



function getWorks() {
    return fetch('http://localhost:5678/api/works')
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let work = data;
    console.log(work)
    return work;
})
.catch(function(erreur){
    console.log(erreur)
})
}

getWorks()
.then(function(works){
    console.log(works)
})