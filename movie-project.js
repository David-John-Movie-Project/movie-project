//  We are creating a var for the api key
const movieAPI = "MOVIE_PROJECT_KEY"


                    // This gets the movies from our glitch
const moviesURL = "https://tender-brick-bowler.glitch.me/movies"




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





                                // this edits the cards

async function editCard(id) {
    let editMovie = {
        title: $("#title-edit-" + id).val(),
        genre: $("#genre-edit-" + id).val(),
        rating: $("#rating-edit-" + id).val(),
        plot: $("#plot-edit-" +id).val(),
    }
    const patchOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editMovie)
    }

    fetch(moviesURL + "/"+ id, patchOptions).then(movieGlitch);

}




                // This adds the movie into the array with the form
$('#form1').submit((e) => {
    e.preventDefault();

    let addMovie = {
        title: $("#title").val(),
        genre: $("#genre").val(),
        rating: $("#rating").val(),
        plot: $("#plot").val(),
        poster: `img/Project-M-logos_white.png`
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
        let moviesHTML = '';
        events.forEach((movie, index) => {
            moviesHTML += `
            <div class="card ml-4" style="border-radius:  0; width: 100%; background-color: #5d5d5d; color: white">
            
                <div class="card-img-top"> ${movie.poster ? `<img class="poster" src="${movie.poster}" />` : ''}</div> 
                <div class="banner-content">
                <h3>${movie.title ?? ''}</h3>
                <p>${movie.genre ?? ''}</p>
                <p>${movie.plot ?? ''}</p>
                <p> ${movie.rating ?? ''}</p>

                <br>
                <button class="deleteMovieCard" data-delete-card="${movie.id}">Delete</button>
                <button class="editMovieCard" data-edit-card="${movie.id}">Edit<button>
       </div>
<!--                    form for edit-->
                <!--     Forms2 is inside our for each -->
    <form data-form="true" class="hidden-form" id="form2-${movie.id}">
        <div class="form-group">
            <label for="title-edit-${movie.id}">Title</label>
            <input type="text" class="form-control" id="title-edit-${movie.id}" placeholder="Enter Movie Title">
        </div>
        <div class="form-group">
            <label for="rating-edit-${movie.id}">Rating</label>
            <select class="form-control" id="rating-edit-${movie.id}">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label for="genre-edit-${movie.id}">Genre</label><br>
            <select id="genre-edit-${movie.id}">
                <option>Comedy</option>
                <option>Action</option>
                <option>Sci-fi</option>
                <option>Horror</option>
            </select>

        </div>
        <div class="form-group">
            <label for="plot-edit-${movie.id}">Plot</label>
            <textarea class="form-control" id="plot-edit-${movie.id}" rows="3"></textarea>
        </div>
        <input class="submit3" data-edit-card="${movie.id}" type="submit">
    </form>
<!--    end of form-->
                            </div> `;
        }) // end forEach

                            // Event listener for Edit Button
        $(document.body).on('click', '.submit3', function (e) {
            e.preventDefault()
            console.log("hey");
            editCard($(this).attr("data-edit-card"))
        })


        $('#outputForMovies').html(moviesHTML);
    }
    catch(err) {
        console.log(err);
    }
}   // end of MovieGlitch function

    movieGlitch(); // This renders everything in the movie loop



    function getMovies() {
        fetch(moviesURL).then(resp => resp.json()).then(data=>console.log(data));
    }
    getMovies()



                        // Add event listener to delete the card
    $(document.body).on("click", ".deleteMovieCard", function(){
        // console.log($(this).attr("data-delete-card"))
        deleteCard($(this).attr("data-delete-card"))
    });

                    // edit button event listener to make the form show
    $(document.body).on("click", ".editMovieCard", function(){
        $(this).parents('.card').find('[data-form="true"]').toggleClass('hidden-form')
    });




                        //      adjusts playback speed of video
    document.querySelector('video').playbackRate = .6;



                        //    side bar
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }