let user = {
  name: document.getElementById("name").value,
  age: document.getElementById("age").value,
  email: document.getElementById("email").value,
};

// Don't edit above this line
//regular expression
const regExpName = /\s[a-zA-Z]/;
const regExpName1 = /^[a-zA-Z]/;
const regExpAge = /^[1-9]/;
const regExpAge1 = /^[0-9]*$/;
const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const age = document.querySelector("#age").value;
const email = document.querySelector("#email").value;

//Proxy
user = new Proxy(user, {
  get(target, prop) {
    // valid new value
    // @target - Object user
    // @prop - key of object
    if (target[prop] !== "") {
      //removes extra whitespaces and formats thefirst letters of the first and last names to uppercase, others - to lowercase
      target.name = target.name.trim().toLowerCase().replace(regExpName, m => m.toUpperCase()).replace(regExpName1, m => m.toUpperCase());
      //number from 1 to 999, can't start with a zero
      if (target.age.search(regExpAge) === -1 || target.age.search(regExpAge1) === -1) {
        target.age = age;
      }
      //validate email
      if (target.email.search(regEmail) === -1)
        target.email = email;
    }
    return target[prop];
  }
})
// Don't edit below this line

function edit(btn) {
  btn.innerHTML = "save";
  btn.setAttribute("onclick", "save(this)");
  const input = document.getElementById(btn.previousElementSibling.id);
  input.removeAttribute("disabled");
}

function save(btn) {
  btn.innerHTML = "edit";
  btn.setAttribute("onclick", "edit(this)");
  const input = document.getElementById(btn.previousElementSibling.id);
  input.setAttribute("disabled", "true");
  user[input.id] = document.getElementById(input.id).value;
  document.getElementById(input.id).value = user[input.id];
}

// console.log(user.name);
let names = new Proxy(user, {
  get(target, phrase) { // перехватываем чтение свойства в dictionary
  // if(prop in target){
  //   return console.log(1);
  // }else{
  //   return console.log(0);

  // }

  
    if (phrase in target) { // если перевод для фразы есть в словаре
      return target[phrase]; // возвращаем его
    } else {
      // иначе возвращаем непереведённую фразу
      return phrase;
    }
  }
});

// let age = new Proxy(user, {
//   get(target, age) { // перехватываем чтение свойства в dictionary
//     if (phrase in target) { // если перевод для фразы есть в словаре
//       return target[phrase]; // возвращаем его
//     } else {
//       // иначе возвращаем непереведённую фразу
//       return phrase;
//     }
//   }
// });

// let email = new Proxy(user, {
//   get(target, email) { // перехватываем чтение свойства в dictionary
//     if (phrase in target) { // если перевод для фразы есть в словаре
//       return target[phrase]; // возвращаем его
//     } else {
//       // иначе возвращаем непереведённую фразу
//       return phrase;
//     }
//   }
// });