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




    data.list.forEach((forecast, i) => {
        if(i % 8 == 0) {
            $(`#cards`).append(`<div class="card-header col-2 mx-2 border"> <p class="date">${data.list[i].dt_txt.split(" ")[0]}</p>
             <p class="temp"><img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"><br> ${data.list[i].main.temp}&#8457 / ${data.list[i].main.temp}&#8457;</p><hr>
             <p class="description">Description: ${data.list[i].weather[0].description}</p><hr>
             <p class="humidity">Humidity: ${data.list[i].main.humidity}</p><hr>
             <p class="wind">Wind: ${data.list[i].wind.speed}</p><hr>
             <p class="preassure">Preassure: ${data.list[i].main.pressure}</p></div>  `);
        }

    })
});


/// This get the api from abd

async function movieAPIASYNC(title) {
    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${MOVIE_PROJECT_KEY}`);
        let events = await response.json();
        console.log(events);
    }
    catch(err) {
        console.log(err);
    }
}

movieAPIASYNC();


function getMovies() {
    fetch(moviesURL).then(resp => resp.json()).then(data=>console.log(data));
}
getMovies()

//