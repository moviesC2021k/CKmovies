'use strict';

$(document).ready(function () {

    const serverURL = `https://alluring-nutritious-calendula.glitch.me/movies`

    function AJAXRequest(URL, method = `GET`, data){// sim to ajax request
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
            .catch( err => err)
    }

    //    AJAXRequest(serverURL).then()// returns promise, need .then to get to data

    // ----------- Get ALL MOVIE INFORMATION ------------
    function getAllMovies() {
        AJAXRequest(serverURL).then(responseData => console.log(responseData));
        $('#loading').hide();
    }
    setTimeout(getAllMovies, 3000);


    // ----------- Get SINGLE MOVIE INFORMATION ------------
    function getOneMovie(id) {
        AJAXRequest(`${serverURL}/${id}`).then(responseData => console.log(responseData))
    }
    console.log(`Single movie REQUEST`);
    getOneMovie(3);

    // ----------- DELETE SINGLE MOVIE INFORMATION ------------
    function deleteMovie(id) {
        AJAXRequest(`${serverURL}/${id}`, 'DELETE').then(responseData => console.log(responseData))
    }
    // console.log(`Single movie REMOVAL`);
    deleteMovie(7);// deletes 21st but there isn't currently a spot

    // ----------- ADDS SINGLE MOVIE INFORMATION ------------

    function addMovie(id) {
        AJAXRequest(`${serverURL}`, 'POST',{id: id,title:"We built this city function ADDED part 2"}).then(responseData => console.log(responseData))
    }
    // console.log(`Single movie ADDITION`)
    addMovie(7);

    // ----------- UPDATE MOVIE INFORMATION ------------

    function updateMovie(id) {
        AJAXRequest(`${serverURL}`, 'PUT',{id: id, title:'updated movies',year: 2021}).then(responseData => console.log(responseData))
    }
    updateMovie(23);



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

