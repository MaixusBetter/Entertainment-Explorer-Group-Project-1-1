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
        `;

        const instance = M.Modal.getInstance(modal);
        instance.open();
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }

  document.getElementById('searchButton').addEventListener('click', function() {
    const movieTitle = document.getElementById('searchInput').value;
    fetchMovieDetails(movieTitle);
  });

  const modalInstance = M.Modal.init(modal, {
    dismissible: true
  });
});