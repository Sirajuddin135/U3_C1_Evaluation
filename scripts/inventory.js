//Fetching details of products from local storage
let data = JSON.parse(localStorage.getItem("products")) || [];

data.forEach((element, index) => {
    //card to append all details of product
    let card = document.createElement("div");

    //product image url
    let image = document.createElement("img");
    image.src = element.image;
    image.style.width = "297px";
    image.style.height = "300px";

    // product description
    let desc = document.createElement("h2");
    desc.textContent = element.desc;

    //product type
    let type = document.createElement("h3");
    type.textContent = element.type;

    //product price
    let price = document.createElement("p");
    price.textContent = "Rs. " + element.price;

    //remove product button to remove product local storage
    let btn = document.createElement("button");
    btn.id = "remove_product";
    btn.textContent = "Remove Product";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", function () {
        removeProduct(index);
    });

    //appending all product data to card
    card.append(image, desc, type, price, btn);

    //appending card to display product in inventory page
    document.getElementById("all_products").append(card);
});

//function to remove product details from inventory page and local storage 
function removeProduct(index) {
    data.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(data));
    window.location.reload();
}