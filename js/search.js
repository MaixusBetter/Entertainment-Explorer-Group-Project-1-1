const formEl = $('#inputCreation');
const userEl = $('input[name="user-input"]');


console.log('User Input:', userEl.val());

function handleFormSubmit(event) {
    event.preventDefault();

    console.log('User Input:', userEl.val());
        let inputs ={obj:[]};

        if(!userEl.val()){
                alert("Field Must Be Full!");
            }else{

                const mediacheckJSON = localStorage.getItem("media_data")
                if(mediacheckJSON){
                    //Converts post meta data string back into an object
                    const pageHistory = JSON.parse(mediacheckJSON);
              
                    //pushes post history back in, to prevent being over written
                    posts.obj.push(pageHistory.obj);
                  }

                //pushed the new post onto the post list
                inputs.obj.push($ (userEl).val());
                console.log(inputs.obj);

                //Assigns a unique Identifier and loads it into the local storage
                const timestamp =Date.now();
                const mediaJSON = JSON.stringify(inputs);
                localStorage.setItem(`media_data_${timestamp}`, mediaJSON);
            



  }
          // Clear input fields
         $('input[type="text"]').val('');
         $('input[type="checkbox"]').prop('checked', false);
}


//Registers the submit button from html
formEl.on('submit', handleFormSubmit);

const btnEL = document.querySelector('#genres');

btnEL.addEventListener('click', filterBtn);
//btnadd.addEventListener('click', addRandomSuggestion);


// function loadStoredMovies() {
//   const storedMovies = JSON.parse(localStorage.getItem("title"));
//   if (storedMovies) {
//     storedMovies.forEach(createCollectionMovie);
//   }
// }

// Filter button click handler
function filterBtn(event) {
  const genrebtn = event.target.getAttribute('genrebtn');
  if (genrebtn) {
    console.log(genrebtn);
    genreChosen(genrebtn);
    $('#modalContent').empty();
  }

}

// Fetch movies based on genre
function genreChosen(genrebtn) {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=acafcacf02fad8108e471605f4640233&with_genres=${genrebtn}&with_original_language=en`;

  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    })
    .then(data => {
      randomSuggestion(data.results);


      btnadd.addEventListener('click', () => {
        const existingTitles = JSON.parse(localStorage.getItem('Titles')) || [];
        existingTitles.push(data.results.original_title);
        localStorage.setItem('Titles', JSON.stringify(existingTitles));
    });
    })
    .catch(error => {
      alert(error.message);
    });
}


// Add a random movie suggestion
function randomSuggestion(data) {
  const randomItem = data[Math.floor(Math.random() * data.length)];
  const randomTitle = randomItem.original_title;
  const randomPic = randomItem.poster_path;
  suggestions(randomTitle, randomPic);
}


// Display suggestions
function suggestions(title, img) {
  const sugTitle = $('<li>')
    .text(title);

  const div = $('<div>');
  div.appendTo(sugTitle);

  const sugPicture = $('<img>').attr("src", `https://image.tmdb.org/t/p/w500/${img}`);
  sugPicture.appendTo(div);

  $('#modalContent').append(sugTitle);
}

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

console.log(movieInfo)
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

//Registers the submit button from html
formEl.on('submit', handleFormSubmit);