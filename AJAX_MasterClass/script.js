// mapping of products
// API : fetch request to call the api
// products data, map and dom
// using search and filter
// API : ('https://dummyjson.com/products')



// dom selection
const searchInput = document.querySelector("#search")
const mainBody = document.querySelector('.main')
console.log(mainBody, "Main Body");

// fetching data function
async function fetchingData() {

    // console.log(searchInput);

    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    console.log(data);


    // creating a function to render/mapping the card
    function renderCard(filteredData) {


        // removing anything previously in the mainbody innerHTML
        mainBody.innerHTML = ' ';

        filteredData.forEach((ele) => {
            mainBody.innerHTML += `<div class="card">
            <div class="image">
                <img src="${ele.thumbnail}" alt="${ele.brand}">
            </div>
            <div class="card-body custom-body">
                <h5 class="card-title">${ele.title}</h5>
                <p class="card-text">${ele.price}</p>
                <a href="#" class="btn btn-primary">View Product</a>
            </div>
        </div>`
        });
    }


    // function to handle search and then filter
    function searchBasedOnInput() {
        const searchData = searchInput.value.toLowerCase()
        let filteredData = data.products;

        if (searchData.trim !== " ") {
            filteredData = data.products.filter((ele) => {
                if (ele.title.toLowerCase().includes(searchData)) {
                    return ele;
                }
                if (ele.brand.toLowerCase().includes(searchData)) {
                    return ele;
                }
            })
        }
        renderCard(filteredData)
    }
    searchInput.addEventListener('input', searchBasedOnInput)

    // initially all the products should display
    renderCard(data.products)




}

fetchingData();

