let map = new Map(),
  mainDishes = new Map(),
  salads = new Map(),
  desserts = new Map(),
  drinks = new Map();

let main = document.querySelector(".main");
let cardMenu = "<h1>Menu</h1>";

salads.set("Greek salad", "$ 5.99");
salads.set("Caesar salad", "$ 7.99");

mainDishes.set("Margherita Pizza", "$ 12.50");
mainDishes.set("Tomato Soup", "$ 6.99");
mainDishes.set("Burger", "$ 10.00");

desserts.set("Cheesecake", "$ 4.99");
desserts.set("Chocolate Ice-Cream", "$ 6.99");
desserts.set("Fruit-Salad", "$ 3.99");

drinks.set("Lemonade", "$ 3.20");
drinks.set("Green Tea", "$ 1.50");
drinks.set("Coffee", "$ 1.99");

map.set("Salads", salads);
map.set("Main Dishes", mainDishes);
map.set("Desserts", desserts);
map.set("Drinks", drinks);

console.log(map);

map.forEach(function (value, key) {
  cardMenu += "<div><h2>" + key + "</h2><hr>";

  value.forEach(function (Value, Key) {
    cardMenu +=
      '<span class="Key">' +
      Key +
      '</span><span class="Value">' +
      Value +
      "</span></div>";
  });
});
main.innerHTML = cardMenu;
