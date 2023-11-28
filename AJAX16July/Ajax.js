// function buttonSubmit() {

//     var xhr =new XMLHttpRequest()
//     // this creates an AJAX object

//     xhr.send()
//     // sends the request

//     xhr.setrequestheader
//     // gives header info

//     // to get a request
//     // step-1
//         // open the url
//         xhr.open("get", "reqres.in/api/users?page=2")
//         xhr.send()
//         // if its a post request then i need to put body

//         // now waiting for response after sending the data
//         xhr.onload = function(){
//             result = xhr.response
//             result = JSON.parse(result)
//             // it will convert json to object
//             console.log(result);
//         }

//     // calling backend
//         // result=AJAX(url, "get")
//     // Get json response
//         // AJAX.onload(){
//             // result = json.parse(result)
//         // Get element by id code
//             // then dom manipulation of those html elements
    
//         // }

// }
// buttonSubmit();

// synchronous execution
// asynchronous execution
// event handling

// if we can trigger an event when the data is loaded in the variable, then it works for us
// AJAX.....onLoad event, it will only trigeer when the data is loaded/ when gets the response from url


// first step to create the HTML http request
var xhr = new XMLHttpRequest
// open the request
xhr.open("GET", "https://reqres.in/api/users?page=2")
// to send the rquest
xhr.send()
xhr.onload = function () {
    result = xhr.responseText
    //console.log(result);
    result = JSON.parse(result);
    console.log(result.data);
    for(let index = 0 ; index < result.data.length; index ++){
        console.log(result.data[index].first_name);
    }
    //console.log(result.data);
}


// button called get data
// once you click thaat button
// the same page user information would be populated in a table