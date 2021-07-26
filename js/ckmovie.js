'use strict';

$(document).ready(function () {

const serverURL = `https://alluring-nutritious-calendula.glitch.me/movies`

    fetch(serverURL)
        .then(res => res.json())
        .then(data => console.log(data))


    function loading(num) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Success");
            } ,num);
        })
    }

    loading(3000).then((message) => console.log(`Loading... ${message}`));

// pulling info from glitch
// fetch(serverURL).then( response => {
//     response.json().then( movies => {
//         console.log(movies);
//     })
// })

//simple get request (shows all movies in data base)
//     fetch(serverURL)
//         .then(res => res.json())
//         .then(data => console.log(data))


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



    // function AJAXRequest(URL, method = `GET`, data){// sim to ajax request
    //     const options = {
    //         method: method,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     };
    //    return fetch(URL, options)
    //         .then(res => res.json())
    //         .then(responseData => responseData)
    //        .catch( err => err)
    // }


    // AJAXRequest(serverURL,`POST`,{title: `Jquery ain't got nothing on me`})
    //     .then(function (data){
    //         console.log(data);
    //     }) // NOT SURE WHAT THIS IS FOR HAVE TO CHECK AGAIN


    // // THIS is to fetch a single movie
    // AJAXRequest(serverURL + `/3`)
    //     .then(data => console.log(data))


// //THIS IS to update an individual record using PUT method (update/ change entire obj)
// AJAXRequest(serverURL + `/9`,`PUT`,{// overriding data in pos 9 here
//     name: "Polaris",
//     message: "We are ready for the weekend!!"
// }).then(data => console.log(data))


// PATCH METHOD, good to make change in specific area but with out replacing whole obj
// AJAXRequest(serverURL + `/9`,`PATCH`,{// overriding data in pos 9 here
//     message: "We are really ready for the weekend!!"
// }).then(data => console.log(data))


//REMOVING/ DELETE METHOD
// AJAXRequest(serverURL + `/6`,`DELETE`,{// overriding data in pos 9 here
// }).then(data => console.log(data))
//
// AJAXRequest(serverURL)
//     .then(data => console.log(data))


});


