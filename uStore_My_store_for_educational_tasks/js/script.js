let cart = {};
let count_cart = 0;

// Товари
let goods = {
   "28285": {
      "name": "М'яч баскетбольний Nike Dominate Amber",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 584 г <br> Матеріал - Гума <br> Країна виробник товару - Таїланд",
      "cost": 649,
      "img": "https://i1.rozetka.ua/goods/11510881/copy_nike_n_ki_00_847_06_5c9dc2604ded9_images_11510881856.jpg",
      "sklad": 15
   },
   "28286": {
      "name": "М'яч баскетбольний Wilson MVP Elite",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - Вєтнам",
      "cost": 475,
      "img": "https://i2.rozetka.ua/goods/17894972/wilson_wtb1461xb07_images_17894972215.jpg",
      "sklad": 11
   },
   "28287": {
      "name": "М'яч футбольний RE:FLEX Street Ball",
      "detals": "Вид - Футбольний <br> Тип - М'яч <br> Вага - 425 г <br> Матеріал - Гума <br> Країна виробник товару - Пакистан",
      "cost": 759,
      "img": "https://i8.rozetka.ua/goods/20006783/re_flex_re_flex_street_ball_4390_images_20006783926.jpg",
      "sklad": 5
   },
   "28288": {
      "name": "М'яч баскетбольний Wilson MVP",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 583 г <br> Матеріал - Гума <br> Країна виробник товару - Китай",
      "cost": 380,
      "img": "https://i2.rozetka.ua/goods/12010472/wilson_wtb1419xb07_images_12010472976.jpg",
      "sklad": 13
   },
   "28289": {
      "name": "М'яч баскетбольний Wilson MVP Elite",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - Китай",
      "cost": 413,
      "img": "https://i1.rozetka.ua/goods/11510881/copy_nike_n_ki_00_847_06_5c9dc2604ded9_images_11510881856.jpg",
      "sklad": 12
   },
   "28290": {
      "name": "М'яч баскетбольний Wilson MVP Elite",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - В'єтнам",
      "cost": 390,
      "img": "https://i2.rozetka.ua/goods/17894972/wilson_wtb1461xb07_images_17894972215.jpg",
      "sklad": 22
   },
   "28291": {
      "name": "Баскетбольний М'яч TARMAK R100",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 470 г <br> Матеріал - Каучук <br> Країна виробник товару - Україна",
      "cost": 399,
      "img": "https://i2.rozetka.ua/goods/15543305/155930559_images_15543305037.jpg",
      "sklad": 7
   },
   "28292": {
      "name": "М'яч баскетбольний SportVida",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 584г <br> Матеріал - Гума <br> Країна виробник товару - Польща",
      "cost": 219,
      "img": "https://i2.rozetka.ua/goods/20566941/82112499_images_20566941486.jpg",
      "sklad": 13
   },
   "28293": {
      "name": "М'яч баскетбольний Wilson 21 series",
      "detals": "Вид - Баскетбольні <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - В'єтнам",
      "cost": 757,
      "img": "https://i2.rozetka.ua/goods/19552042/wilson_WTB2103XB07_images_19552042231.jpg",
      "sklad": 3
   },
   "28294": {
      "name": "М'яч баскетбольний Wilson Sensation SR 295",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - Китай",
      "cost": 559,
      "img": "https://i1.rozetka.ua/goods/12010254/wilson_wtb9118xb0702_images_12010254432.jpg",
      "sklad": 10
   },
   "28295": {
      "name": "М'яч баскетбольний Wilson MVP Retro",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - Китай",
      "cost": 460,
      "img": "https://i2.rozetka.ua/goods/19552094/copy_wilson_WTB2103XB07_5f3aa73d25777_images_19552094491.jpg",
      "sklad": 15
   },
   "28296": {
      "name": "М'яч баскетбольний Wilson Avenger 295 BSKT",
      "detals": "Вид - Баскетбольний <br> Тип - М'яч <br> Вага - 600 г <br> Матеріал - Гума <br> Країна виробник товару - Китай",
      "cost": 530,
      "img": "https://i1.rozetka.ua/goods/11511071/wilson_wtb5550xb07_images_11511071378.jpg",
      "sklad": 9
   },
   "28297": {
      "name": "М'яч волейбольний Mikasa",
      "detals": "Вид - Волейбольний <br> Тип - М'яч <br> Вага - 270 г <br> Матеріал - Синтетична шкіра<br> Країна виробник товару - Таїланд",
      "cost": 2412,
      "img": "https://i1.rozetka.ua/goods/13228998/mikasa_v300w_images_13228998402.jpg",
      "sklad": 25
   },
   "28298": {
      "name": "М'яч футбольний RE:FLEX Classic",
      "detals": "Вид - Футбольний <br> Тип - М'яч <br> Вага - 420 г <br> Матеріал - Поліуретан <br> Країна виробник товару - Пакистан",
      "cost": 659,
      "img": "https://i2.rozetka.ua/goods/15892499/reflex_re_flex_classic_4241_images_15892499309.jpg",
      "sklad": 16
   },
   "28299": {
      "name": "М'яч волейбольний Extreme Motion",
      "detals": "Вид - Волейбольний <br> Тип - М'яч <br> Вага - 340 г <br> Матеріал - ПВХ (полівінілхлорид) <br> Країна виробник товару - Китай",
      "cost": 340,
      "img": "https://i2.rozetka.ua/goods/11957358/shantou_vb0108_red_images_11957358648.jpg",
      "sklad": 4
   },
   "28300": {
      "name": "Мяч футбольный Ferrari №2",
      "detals": "Вид - Футбольний <br> Тип - М'яч <br> Вага - 180 г <br> Матеріал - Гума <br> Країна виробник товару - Італія",
      "cost": 500,
      "img": "https://i2.rozetka.ua/goods/20615446/ferrari_f661_2y_images_20615446611.jpg",
      "sklad": 10
   }
};

//Запуск функцій
checkCart();
showMiniCart();

//Пагінація
let arrGoods = Object.entries(goods);
let pagination = document.querySelector('#pagination');
let notesOnPage = 6;
let countOfItems = Math.ceil(arrGoods.length / notesOnPage);
let showPage = (function () {
   let active;

   return function (item) {
      if (active) {
         active.classList.remove('active');
      }
      active = item;
      item.classList.add('active');
      let pageNum = +item.innerHTML;
      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let notes = arrGoods.slice(start, end);
      let arrGoodsToObj = Object.fromEntries(notes);

      //Сортування товарів
      // document.querySelector('.btnSortCostUp').addEventListener('click', function () {
      //       console.log(notes.sort(function (a, b) { b.cost - a.cost }));
      //    // notes[0].sort(function (a, b) { b.cost - a.cost})
      // });
      // document.querySelector('.btnSortCostDown').addEventListener('click', function () {
      //    let arrGoods = Object.entries(goods);
      //    goods = arrGoods.sort((a, b) => (b.cost - a.cost));
      // });

      // Цикл для карток товару
      let card = '';
      for (var key in arrGoodsToObj) {
         card += '<div class="card">'
         card += '<span class="detalsName">' + arrGoodsToObj[key].name + '</span >';
         card += '<img src="' + arrGoodsToObj[key].img + '">';
         card += '<span class="detalsDetal">Опис:<br> ' + arrGoodsToObj[key].detals + '</span > ';
         card += '<span class="detals">Ціна: ' + arrGoodsToObj[key].cost + '₴</span > ';
         card += '<span class="detals">Наявність: ' + arrGoodsToObj[key].sklad + 'шт.</span > ';
         card += '<button class="addToCard" data-art="' + key + '"><span>В корзину</span> <img class="cor" src="./assets/add-to-cart.png" alt="Корзинка"></button>';
         card += '</div>';
      }
      document.getElementById('cardJS').innerHTML = card;

      //Корзина
      let all = document.querySelectorAll('.addToCard');

      //Цикл перебору кнопок для кліку по 'додати в корзину'
      for (var i = 0; i < all.length; i++) {
         all[i].addEventListener('click', addCard);
      }
   };
}());

let items = [];
let liPrev = document.createElement('li');
let liNext = document.createElement('li');

liPrev.addEventListener('click', function () { showPage(items[1]); });
liNext.addEventListener('click', function () { showPage(items[2]); });

liPrev.innerHTML = '< Попередня';
pagination.appendChild(liPrev);
//вирахуання сторінок
for (let i = 1; i <= countOfItems; i++) {
   let li = document.createElement('li');
   li.innerHTML = i;
   pagination.appendChild(li);
   items.push(li);
}

liNext.innerHTML = 'Наступна >';
pagination.appendChild(liNext);
showPage(items[0]);
for (let item of items) {
   item.addEventListener('click', function () {
      showPage(this);
   });
}


//додавання в корзину
function addCard() {
   let articul = this.getAttribute('data-art');
   if (cart[articul] != undefined) {
      cart[articul]++;
      count_cart++;
   }
   else {
      cart[articul] = 1;
      count_cart += 1;

   }
   localStorage.setItem('cart', JSON.stringify(cart));
   localStorage.setItem('count_cart', JSON.stringify(count_cart));

   showMiniCart();
   cartCount();
}

//лічильник kількість в корзині
function cartCount() {
   document.querySelector('#easynetshop-cart-count').innerHTML = count_cart;
}

//перевірка що в localStorage;
function checkCart() {
   if (localStorage.getItem('cart') != null) {
      cart = JSON.parse(localStorage.getItem('cart'));
      count_cart = JSON.parse(localStorage.getItem('count_cart'));
   }
}

//показ того що в корзині
function showMiniCart() {
   if (Object.keys(cart).length == 0) {
      var out = 'Корзина пуста';
      document.getElementById('miniCard').innerHTML = out;
      count_cart = 0;
   }
   else {
      var out = '';
      for (var key in cart) {
         out += goods[key].name;
         out += '<img src="' + goods[key].img + '" >';
         out += '<p class="BTNs" ><button class="minus" data-art="' + key + '">-</button>';
         out += cart[key] + 'шт';
         out += '<button class="plus" data-art="' + key + '">+</button>';
         out += cart[key] * goods[key].cost + '₴</p>';
         out += '<hr>';
         count_cart;
      }
      document.querySelector('#easynetshop-cart-count').innerHTML = count_cart;
      document.getElementById('miniCard').innerHTML = out;

      let plus = document.querySelectorAll('.plus');
      for (var i = 0; i < plus.length; i++) {
         plus[i].addEventListener('click', plusGoods);
      }
      let minus = document.querySelectorAll('.minus');
      for (var i = 0; i < minus.length; i++) {
         minus[i].addEventListener('click', minusGoods);
      }
      function plusGoods() {
         let articul = this.getAttribute('data-art');
         cart[articul]++;
         count_cart++;
         saveCartToLS();
         showMiniCart();
         cartCount();
      }
      function minusGoods() {
         let articul = this.getAttribute('data-art');
         if (cart[articul] > 1) {
            cart[articul]--;
            count_cart--;
         }
         else {
            count_cart--;
            delete cart[articul];
         }
         saveCartToLS();
         showMiniCart();
         cartCount();
      }
      function saveCartToLS() {
         localStorage.setItem('cart', JSON.stringify(cart));
         localStorage.setItem('count_cart', JSON.stringify(count_cart));
      }
   }
}