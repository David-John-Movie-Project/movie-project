const movieAPI = "MOVIE_PROJECT_KEY"


// This gets the movies from our glitch
const moviesURL = "https://tender-brick-bowler.glitch.me/movies"

// function getMovies() {
//     fetch(moviesURL)
//         .then(resp => resp.json()).then(data=>console.log(data));
// }
//
// getMovies();



                            // this lets you add a movie

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


const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    }
}
// fetch(moviesURL + '/1', deleteOptions).then(getMovies);



                    // This adds the movie into the array with the form
$('#form1').submit((e) => {
    e.preventDefault();

    let addMovie = {
        title: $("#title").val(),
        genre: $("#genre").val(),
        rating: $("#rating").val(),
        description: $("#description").val(),
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
            console.log(moviePosters)
        }).catch(error => console.log(error))

});

                // This will add a card everytime the movie is created

 //    data.list.forEach((movie, i) => {
 //        if(i % 8 == 0) {
 //            $(`#outputForMovies`).append(`<div class="card-header col-2 mx-2 border"> <p class="date">${movie.result[i].dt_txt.split(" ")[0]}</p>
 //             <p class="title"><${movie.result[i].weather[0].icon}.png"><br> ${data.list[i].main.temp}&#8457 / ${data.movie[i].main.temp}&#8457;</p><hr>
 //             <p class="rating">Description: ${movie.result[i].weather[0].description}</p><hr>
 //             <p class="genre">Humidity: ${movie.result[i]}</p><hr>
 //             <p class="description">Wind: ${movie.result[i]}</p><hr>
 //        }
 //
 //    })
 // });


                   // This get the api from TMDB

async function movieGlitch() {
    try {
        let response = await fetch(moviesURL);
        let events = await response.json();
        console.log("inside movieAPIaSYNC function. events returned: ");
        console.log(events);
        events.forEach((movie, index) => {
            $("#outputForMovies").append(`
            <div class="card" style="width: 15rem; background-color: #5d5d5d; color: white">
                <img src="${movie.poster}">
                <h3>${movie.title}</h3>
                <h3>${movie.genre}</h3>
                <p> ${movie.rating}</p> 
                <p>${movie.description}</p>           
            </div>
            `)
        })
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

