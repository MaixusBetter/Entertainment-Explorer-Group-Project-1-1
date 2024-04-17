(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


const clickBtn= function (event) {
  const testbtn = event.target.getAttribute('#test');

  if (testbtn) {
    reateCollectionMovie(`the mummy`);
  };
};


//---------------------

//localStorage.setItem('Movie:', JSON.stringify(movieName));

//const movietocollection = JSON.parse(localStorage.getItem('movieName')); 



const genreChosen = function(genrebtn){
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=acafcacf02fad8108e471605f4640233&with_genres=${genrebtn}&with_original_language=en`;
   
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        randomSugestion(data.results);
 
      });
 
    } else {
      alert(`Error:${response.statusText}`);
    }
  });
 };

const randomSugestion = function(data){
  var myArray = data;
  var randomItems = [];
  
  for (let i = 0; i < 5; i++) {
      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
      randomItems.push(randomItem.original_title);
  }

};


const createCollectionMovie = function(movieName){
   
  const cardMovie = $('<li>')
  .addClass('collection-item black')
  .text(movieName)
  .attr('collectionItem');
  

  const likethumb = $('<i>')
  .addClass('fa fa-thumbs-up')
  .setAttribute("onclick", "myFunction(this)");

  likethumb.appendTo(cardMovie);

  $('#listMovie').append(cardMovie);

};
btnEL.addEventListener('click', filterBtn);