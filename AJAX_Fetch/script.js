// AJAX Fetch()
// Promises Javascript

// Js provides you with special methods of function with three steps
    // pending
    // resolve
    // rejected

// promises were introduced in ES6
// promises are necessary to deal with API call
// API:- ('https://dummyjson.com/products')

// the selector should be global
let mainBody = document.querySelector(".main")
let inputBox = document.querySelector("input")
inputBox.addEventListener("change", (event)=>{
    console.log(event);
})
// handling the promise of fetch using async-await keyword
async function fetchData() {
    // async- await are used to handle promise
    // why we are writing await in front of fetch? because fetch returns a promise

    let response = await fetch('https://dummyjson.com/products')
    // in Fetch if we do not write about the request that what to do, by default fetch does a get request
    
    // we are parsing the of fetch in a json format
    // since it a promise type function thats why we are using await here
    let data = await response.json()
    console.log(data.products);

    // we want the array of product to be mapped inside the main bodynin card structure
    
    console.log(mainBody, "Main Body");
    
    // innerHTML: it gives us any HTML content inside a parent element.
    console.log(mainBody.innerHTML, "Main Body inner content");

    let mainBodyInnerHtml = mainBody.innerHTML;
    
    // we are going to map here and push the product info into card strucrue inside the main body
    data.products.map((ele) =>{
        mainBody.innerHTML = mainBody.innerHTML+`<div class="card">
        <div class="header" style="height: 30%;">Product Name : ${ele.title}</div> 
        <div class="image" style="height: 70%;">Image here ${ele.thumbnail}</div>
     </div>`
    })
    // console.log(mainBodyInnerHtml, "main body inner html");
}


// we want to click on button and fetch the data
// on which html element you want trigger event
// what should be type pf event
// what will happen if you do that event
// style all the components and make it look user friendly and it should have a look a bit similar to ecommerce

let btn = document.querySelector(".button")
console.log(btn);

// addeventlistener(event, function on that event)
btn.addEventListener("click", fetchData)


// FORMAT OF CARD
    // title, brand, images, button(Add to Cart)
    // on the header : you have search box, on this search box searching based on titlename