
// This gets the movies from our glitch
const moviesURL = "https://tender-brick-bowler.glitch.me/movies"

function getMovies() {
    fetch(moviesURL)
        .then(resp => resp.json()).then(data=>console.log(data));
}

getMovies();



// this lets you add a movie

const bookToPost = {
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
    body: JSON.stringify(bookToPost)
}

function getMovies() {
    fetch(moviesURL).then(resp => resp.json()).then(data=>console.log(data));
}

getMovies();

// fetch(moviesURL, postOptions).then(getMovies);


// This deletes the movies


const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    }
}
fetch(moviesURL + '/1', deleteOptions).then(getMovies);




// use themoviedb.org/documentation/api   to get the movies


// comment