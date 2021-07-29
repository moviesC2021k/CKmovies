'use strict';

$(document).ready(function () {

    const serverURL = `https://alluring-nutritious-calendula.glitch.me/movies`

    function AJAXRequest(URL, method = `GET`, data) {// sim to ajax request
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        return fetch(URL, options)
            .then(res => res.json())
            .then(responseData => responseData)
            .catch(err => err)
    }

    //    AJAXRequest(serverURL).then()// returns promise, need .then to get to data

    // ----------- Get ALL MOVIE INFORMATION ------------
    function getAllMovies() {
        AJAXRequest(serverURL).then(function (data) {
            console.log(data)
            $('#allMovies').empty() //clears out the div gets rid of old and allows for appending of new
            let html = '';

            data.forEach(function (movie) {

                html = `
                     <div className="card" class="col my-col"><!-- trying to dynamically add in columns to place each card next to each other-->
                           <img src=${movie.poster} className="card-img-top" alt="movie poster">
                            <div className="card-body">
                                <h5 className="card-title">${movie.title}</h5>
                                <p className="card-text">Rating: ${movie.rating}</p><!-- template string explicit {}-->
                                <p className="card-text">Plot: ${movie.plot}</p>
                                <a href="#" data-id="${movie.id}" class="btn btn-primary editButton">Edit Movie</a>
                                <a href="#" data-id="${movie.id}" class="btn btn-primary deleteButton">Delete Movie</a>
                            </div>
                    </div>`

                $('#allMovies').append(html);
            })
            addEventListeners()
        })
        $('#loading').hide();
    }

    setTimeout(getAllMovies, 2000);

    // --------- EventListener functionality buttons here --------
    function addEventListeners() {
        $(`.deleteButton`).click(function (e) {// delete funciton
            e.preventDefault();
            const movieIdToDelete = $(this).attr(`data-id`);
            console.log(movieIdToDelete);
            deleteMovie(movieIdToDelete);
        })

        $('#submit-movie').click(function (e) {// add movie function
            e.preventDefault();
            let movieTitle = $('#title-input').val();
            let moviePlot = $("#plot-input").val();
            let movieRating = $("#rating-select").val();
            let addedMovie = {title: movieTitle, plot: moviePlot, rating: movieRating};
            addMovie(addedMovie);
            console.log(addMovie);
        })

        $('.editButton').click(function (e) {// edit movie info/ rating function
            e.preventDefault();
            const movieId = $(this).attr(`data-id`);
            console.log(movieId)

            $('#editMovieModal').modal('show');
            $('#submit-edit-changes').click(function () {
                let updatedMovieTitle = $('#updated-movie-title').val();
                console.log(updatedMovieTitle)
                let updatedMoviePlot = $('#updated-movie-plot').val();
                let updatedMovieRating = $('#updated-movie-rating').val();
                let updatedMovie = {title: updatedMovieTitle, plot: updatedMoviePlot, rating: updatedMovieRating}
                editMovie(updatedMovie);
                $('#editMovieModal').modal('hide');
            });

            })

    }



// ----------- Get SINGLE MOVIE INFORMATION ------------
    function getOneMovie(id) {
        AJAXRequest(`${serverURL}/${id}`).then(responseData => console.log(responseData))
    }

    console.log(`Single movie REQUEST`);
    getOneMovie(3);

// ----------- DELETE SINGLE MOVIE INFORMATION ------------
    function deleteMovie(id) {
        AJAXRequest(`${serverURL}/${id}`, 'DELETE').then(getAllMovies)
    }


// ----------- ADDS SINGLE MOVIE INFORMATION ------------


    function addMovie(addedMovie) {
        AJAXRequest(serverURL, 'POST', addedMovie).then(getAllMovies)
    }

// addMovie();


// ----------- UPDATE MOVIE INFORMATION ------------

    function editMovie(updatedMovie) {
        AJAXRequest(serverURL+ `/id`,`PUT`, updatedMovie).then(getAllMovies)// old: responseData => console.log(responseData)
    }

// updateMovie(10);


//
//
// pulling info from glitch
// fetch(serverURL).then( response => {
//     response.json().then( movies => {
//         console.log(movies);
//     })
// })

// ------ GET REQUEST -----
// simple get request (shows all movies in data base)
//     fetch(serverURL)
//         .then(res => res.json())
//         .then(data => console.log(data))
//


// ------ ADD REQUEST -----

// //post request(add/ send to database)
//     const objToSend = {//object sending to server
//         user: `Samuel`,
//         message: `Really enjoyed the movies application!`
//     };
//     // const url = 'https://codeup-restful-example.glitch.me/reviews';
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(objToSend),//converts obj into pure json object
//     };
//     fetch(serverURL, options)
//         .then( response => console.log(response) ) /* review was created successfully */
//         .catch( error => console.error(error) ); /* handle errors */

//
//
//     function AJAXRequest(URL, method = `GET`, data){// sim to ajax request
//         const options = {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         };
//        return fetch(URL, options)
//             .then(res => res.json())
//             .then(responseData => responseData)
//            .catch( err => err)
//     }
//
//
//     AJAXRequest(serverURL,`POST`,{title: `Jquery ain't got nothing on me`})
//         .then(function (data){
//             console.log(data);
//         }) // NOT SURE WHAT THIS IS FOR HAVE TO CHECK AGAIN
//
//
//     // THIS is to fetch a single movie
//     AJAXRequest(serverURL + `/3`)
//         .then(data => console.log(data))
//
//
// //THIS IS to update an individual record using PUT method (update/ change entire obj)

// AJAXRequest(serverURL + `/9`,`PUT`,{// overriding data in pos 9 here
//     name: "Polaris",
//     message: "We are ready for the weekend!!"
// }).then(data => console.log(data))
//
//
// PATCH METHOD, good to make change in specific area but with out replacing whole obj

// AJAXRequest(serverURL + `/9`,`PATCH`,{// overriding data in pos 9 here
//     message: "We are really ready for the weekend!!"
// }).then(data => console.log(data))
//
//
// REMOVING/ DELETE METHOD
// AJAXRequest(serverURL + `/6`,`DELETE`,{// overriding data in pos 9 here
// }).then(data => console.log(data))
//
// AJAXRequest(serverURL)
//     .then(data => console.log(data))
//

});

