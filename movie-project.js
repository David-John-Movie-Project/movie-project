    const movieAPI = "MOVIE_PROJECT_KEY"


    // This gets the movies from our glitch
    const moviesURL = "https://tender-brick-bowler.glitch.me/movies"

    // function getMovies() {
    //     fetch(moviesURL)
    //         .then(resp => resp.json()).then(data=>console.log(data));
    // }
    //
    // getMovies();



                            // this lets you add a movie function

    const movieToPost = {
        title: "Eleanor of Aquitaine",
        author: {
            firstName: "Ralph",
            lastName: "Turner"
        }
    }

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(movieToPost)
    }

    // function getMovies() {
    //     fetch(moviesURL).then(resp => resp.json()).then(data=>console.log(data));
    // }

    // getMovies();

    // fetch(moviesURL, postOptions).then(getMovies);


                        // This deletes the movies

async function deleteCard(id) {
    const deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(`${moviesURL}/${id}`, deleteOptions)
        // .then(getMovies);
        .then(resp => resp.json())
        .then(moviePosters => {
            movieGlitch();
        }).catch(error => console.log(error))
}



                    // This adds the movie into the array with the form
$('#form1').submit((e) => {
    e.preventDefault();

    let addMovie = {
        title: $("#title").val(),
        genre: $("#genre").val(),
        rating: $("#rating").val(),
        plot: $("#plot").val(),
    }
    console.log("this is the add movie log")
    console.log(addMovie)

    let postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addMovie)
    }
    // POST movie

    fetch(moviesURL, postOptions)
        .then(resp => resp.json())
        .then(moviePosters => {
            console.log(moviePosters);
            movieGlitch();
        }).catch(error => console.log(error))

});





                   // This creates the cards when we add a movie

async function movieGlitch() {
    try {
        let response = await fetch(moviesURL);
        let events = await response.json();
        console.log("inside movieAPIaSYNC function. events returned: ");
        console.log(events);
        let moviesHTML = '';
        events.forEach((movie, index) => {
            moviesHTML += `
            <div class="card ml-4 " style="height: 500px; width: 100%; background-color: #5d5d5d; color: white">
            
                <div class="card-img-top"> ${movie.poster ? `<img class="poster mb-4" src="${movie.poster}" />` : ''}</div> 
                <div class="banner-content">
                <h3>${movie.title ?? ''}</h3>
                <p>${movie.genre ?? ''}</p>
                <p>${movie.plot ?? ''}</p>
                <p> ${movie.rating ?? ''}</p>

                <br>
                <button class="deleteMovieCard" data-delete-card="${movie.id}">Delete</button>
                <button class="editMovieCard"
                data-edit-card=${movie.id}">Edit<button>
       </div>
                            </div>

            `;
        }) // end forEach
        $('#outputForMovies').html(moviesHTML);
    }
    catch(err) {
        console.log(err);
    }
}

    movieGlitch();


    function getMovies() {
        fetch(moviesURL).then(resp => resp.json()).then(data=>console.log(data));
    }
    getMovies()



            // Add event listener to delete the card
    $(document.body).on("click", ".deleteMovieCard", function(){
        // console.log($(this).attr("data-delete-card"))
        deleteCard($(this).attr("data-delete-card"))
    });

    //      adjusts playback speed of video
    document.querySelector('video').playbackRate = .6;

