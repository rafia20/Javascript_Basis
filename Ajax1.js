/* 

The code var httpReq = new XMLHttpRequest();
 creates a new XMLHttpRequest object, 
 which is a built-in JavaScript object that allows you to make HTTP requests 
 to a server without reloading the page.


open() method to specify the type
of request you want to make (e.g., GET,
POST), the URL you want
to send the request to, and whether the request 
 should be asynchronous or synchronous.

 send() method to send the request to the server. Once the server responds, you can access the response using the responseText property of the XMLHttpRequest object.

//  

By making the request asynchronous, you can continue to run other code while the request is being processed in the background.

Synchronous means that the request is made and the code waits for a response before continuing to run. This is useful when you need to make sure that the response is received before you can continue running your code.
*/

//built in oject to allow use http methods



var animalContainer = document.getElementById("Animal-info");
var btn = document.getElementById("btn");
function Info() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('Get', "https://learnwebcode.github.io/json-example/animals-1.json")
    ourRequest.onload = function () {

        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[1]);
        console.log(ourData[3]);


        // renderHTML(ourData);
    };

    ourRequest.send();
};



// // to add 
// function renderHTML(data) {
//     animalContainer.insertAdjacentHTML('beforeend', "testing 123");

//     // var htmlString = "";
//     // for (i = 0; i < data.length; i++) {

//     //     htmlString += "<p>" + data[i].name + "is a " + data[i].species + ".</p>" ;
//     // }

// }

// // Adding HtML New 

