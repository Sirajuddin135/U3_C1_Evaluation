//store the products array in localstorage as "products"

//Fetching details of products from local storage
let data = JSON.parse(localStorage.getItem("products")) || [];

//constructor to store data in form of object
function Product(t, d, p, i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

//function to store data in local storage
function addProducts() {
    event.preventDefault();

    //fetching input fields data of form
    let form = document.getElementById("products");

    //accessing form data
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    //converting data in form of object using constructor function and assigning it
    let p = new Product(type, desc, price, image);

    data.push(p);

    //storing data in local storage
    localStorage.setItem("products", JSON.stringify(data));

    form.reset();  // clearing input fields after submitting form
}