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


