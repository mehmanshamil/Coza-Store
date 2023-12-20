let products = document.getElementById('products');

function getData() {
    products.innerHTML = ""
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    data.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = "box";
        div.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="removeCart(${index})">Remove to Cart</button>
        `
        products.appendChild(div)
    })
}
getData()
function removeCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart));
    getData()
}
function display(data) {
    products.innerHTML = ""
    data.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = "box";
        div.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="removeCart(${index})">Remove to Cart</button>
        `
        products.appendChild(div)
    })
}
document.getElementById("max").addEventListener("click", sortMax)
function sortMax() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let data = cart.sort((a,b) => (a.price-b.price));
    display(data)
}
document.getElementById("min").addEventListener("click", sortMin)

function sortMin() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let data = cart.sort((a,b) => (b.price-a.price));
    display(data)

}
document.getElementById("btn").addEventListener("click", search)

function search(e) {
    e.preventDefault()
    let inp = document.getElementById("inp");
    let val = inp.value
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let data = cart.filter((item) => (item.title.toLowerCase().includes(val.toLowerCase())))
    display(data)
}
function displayLength(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let display =  document.getElementById("dispLength")
    display.innerHTML= cart.length
}
displayLength()