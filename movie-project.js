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

// this edits the cards

let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}
async function editCard(id) {
    const patchOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modification)
    }
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
            <div class="card ml-4" style="border-radius:  0; width: 100%; background-color: #5d5d5d; color: white">
            
                <div class="card-img-top"> ${movie.poster ? `<img style="width:216px; height:500px" class="poster" src="${movie.poster}" />` : ''}</div> 
                <div class="banner-content">
                <h3>${movie.title ?? ''}</h3>
                <p>${movie.genre ?? ''}</p>
                <p>${movie.plot ?? ''}</p>
                <p> ${movie.rating ?? ''}</p>

                <br>
                <button class="deleteMovieCard" data-delete-card="${movie.id}">Delete</button>
                <button class="editMovieCard" data-edit-card=${movie.id}">Edit<button>
       </div>
<!--                    form for edit-->
   <!--     Forms2 -->
    <form data-form="true" class="hidden-form" id="form2"${movie.id}>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter Movie Title">
        </div>
        <div class="form-group">
            <label for="rating">Rating</label>
            <select class="form-control" id="rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label for="genre">Genre</label><br>
            <select id="genre">
                <option>Comedy</option>
                <option>Action</option>
                <option>Sci-fi</option>
                <option>Horror</option>
            </select>

        </div>
        <div class="form-group">
            <label for="plot">Plot</label>
            <textarea class="form-control" id="plot" rows="3"></textarea>
        </div>
        <input id="submit2" type="submit">

    </form>
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
                // edit button event listener
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