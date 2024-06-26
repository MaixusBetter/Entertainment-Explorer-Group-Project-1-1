const btnadd = document.querySelector('#add');

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal1');
  const modalContent = document.getElementById('modalContent');

  function fetchMovieDetails(movieTitle) {
    fetch(`http://www.omdbapi.com/?apikey=ea080042&t=${movieTitle}`)
      .then(response => response.json())
      .then(data => {
        modalContent.innerHTML = `
          <h4>${data.Title}</h4>
          <p>${data.Plot}</p>
          <p>IMDB Rating: ${data.imdbRating}</p>
          <img src="${data.Poster}" alt="${data.Title} Poster">
        `;

        btnadd.addEventListener('click', () => {
          const existingTitles = JSON.parse(localStorage.getItem('Titles')) || [];
          existingTitles.push(data.Title);
          localStorage.setItem('Titles', JSON.stringify(existingTitles));
      });
        
        

        const instance = M.Modal.getInstance(modal);
        instance.open();
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }

 document.getElementById('submit').addEventListener('click', function() {
    const movieTitle = document.getElementById('user-input').value;
    fetchMovieDetails(movieTitle);
  });

  const modalInstance = M.Modal.init(modal, {
    dismissible: true
  }); 
});



//------ADD to media Board



function getstorage(){
  
  const gettitle = JSON.parse(localStorage.getItem('Titles'));

  if (gettitle !== null){
    Titles = gettitle;
 };
console.log(gettitle);

for (let title of gettitle){
 createCollectionMovie(title);

};
};


function createCollectionMovie(movieInfo) {

console.log()
   const cardMovie = $('<li>')
      .addClass('collection-item black')
      .text(movieInfo);
  
    const likethumb = $('<i>')
      .addClass('fa fa-thumbs-up')
      .on("click", function() { myFunction(this); });
  
    likethumb.appendTo(cardMovie);
    $('#listMovie').append(cardMovie);

  }


  window.addEventListener('load',getstorage);