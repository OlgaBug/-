let shop = [
    {'name': 'Млад', 'price': 25000, 'quantity': 1, 'img': "ГГ.png"},
    {'name': 'Рейган', 'price': 27000, 'quantity': 1, 'img': "Граф.png"},
    {'name': 'Серпента', 'price': 30000, 'quantity': 1, 'img': "Змея.png"}
];
let cart = [
];
const men = document.getElementById("menu2");
var p = 0;
function menubutt() {
    if (p == 0) {
        men.style.display = 'none';
        p = 1;
    }
    else{
        men.style.display = 'block';
        p = 0;
    }
}
function displayCart(cart = cart) {
    const cartItemsD = document.getElementById('cartItems')
    cartItemsD.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItemsD.innerHTML += `
    <div class="cartItem">
        <h3>${item.name}</h3>
        <img class="imgbag" src="${item.img}">
        <span>${item.price} руб.</span>
        <button onclick="addit(${index})">Добавить 1</button>
        <button onclick="removeItem(${index})">Удалить</button>
    </div>
`;
    });
    document.getElementById('total-price').textContent = totalPrice;
}
function addcart(inte) {
    console.log(shop);
    console.log(shop[inte]);
    console.log(shop[inte]['name']);
    console.log(cart[cart.length]);
    cart.push([])
    cart[cart.length - 1]['name'] = shop[inte]['name'];
    cart[cart.length - 1]['price'] = shop[inte]['price'];
    cart[cart.length - 1]['img'] = shop[inte]['img'];
    cart[cart.length - 1]['inshop'] = inte;
    displayCart(cart);
}

function addit(it) {
    console.log(cart[it]);
    cart[it]['price'] *= 2;
    displayCart(cart);
}

function removeItem(item) {
    cart.splice(item, 1);
    displayCart(cart);
}
function filterItems() {
    displayFilteredItems(cart.filter(item => item.price >= parseInt(document.getElementById('min').value) && item.price <= parseInt(document.getElementById('max').value)));
}

function displayFilteredItems(items) {
    displayCart(items);
}

function sortItems(order) {
    displaySortedItems([...cart].sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
    }));
}

function displaySortedItems(items) {
    displayCart(items);
}

displayCart();