let products = document.getElementById('products');
let btn = document.getElementById('btn')
btn.addEventListener('click', getData)
let db
let page = 1;
let limit = 4;
async function getData() {
    let skip = (page - 1) * limit
    let res = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products?page=${page}&skip=${skip}&limit=${limit}`);
    db = res.data
    db.forEach((item) => {
        let div = document.createElement('div');
        div.className= "box";
        div.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="addTocart(${item.id})">Add to Cart</button>
        `
        products.appendChild(div)
    })
}
getData()
function addTocart(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find((item) => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    display()
}
// display
function display(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let display =  document.getElementById("dispLength")
    display.innerHTML= cart.length
}
display()