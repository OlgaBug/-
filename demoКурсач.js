let shop = [
  {'name': 'КофтаГрафа', 'img': "КофтаГраф.png", 'css': "КофтаГрафа", 'por': 1},
  {'name': 'Штаны Графа', 'img': "ШтаныГраф.png", 'css': "ШтаныГрафа", 'por': 2},
  {'name': 'Сапоги Графа', 'img': "СапогиГраф.png", 'css': "СапогиГрафа", 'por': 3},
  {'name': 'Кофта ГГ', 'img': "КофтаГГ.png", 'css': "КофтаГГ", 'por': 1},
  {'name': 'Штаны ГГ', 'img': "ШтаныГГ.png", 'css': "ШтаныГГ", 'por': 2},
  {'name': 'Сапоги ГГ', 'img': "СапогиГГ.png", 'css': "СапогиГГ", 'por': 3}
];
let cart = [
  {'name': 'КофтаГрафа', 'img': "КофтаГраф.png", 'css': "КофтаГрафа", 'por': 1},
  {'name': 'Штаны Графа', 'img': "ШтаныГраф.png", 'css': "ШтаныГрафа", 'por': 2},
  {'name': 'Сапоги Графа', 'img': "СапогиГраф.png", 'css': "СапогиГрафа", 'por': 3},
];
window.addEventListener('load', () => {
  displayCart(cart);
});
function displayCart(cart = cart) {
  const cartItemsD = document.getElementById('doll')
  cartItemsD.innerHTML = '';
  cart.forEach((item, index) => {
      cartItemsD.innerHTML += `
      <img id="${item.css}" src="${item.img}">
`;
  });
}
function addcart(inte) {
  removeItem(shop[inte]['por'])
  cart.push([])
  cart[cart.length - 1]['name'] = shop[inte]['name'];
  cart[cart.length - 1]['css'] = shop[inte]['css'];
  cart[cart.length - 1]['img'] = shop[inte]['img'];
  cart[cart.length - 1]['por'] = shop[inte]['por'];
  cart[cart.length - 1]['inshop'] = inte;
  displayCart(cart);
}


function removeItem(item) {
  var p = 0;
  cart.forEach((item2, index) => {
    if (item2.por == item){
      p = index;
    }
  });
  cart.splice(p, 1);
}