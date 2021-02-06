let head = document.querySelector("#head"),
  properties = document.querySelector("#properties"),
  controls = document.querySelector(".controls"),
  protoBtn = document.querySelectorAll(".protoBtn"),
  active = document.getElementsByClassName("active");
const magician = {
  _hat: "./assets/images/hat.png",
  _getPortrait() {
    if (this._portrait) return this._portrait;
    else return "./assets/images/magician.png";
  },
  "do magic"() {
    console.log(`ABRACADABRA
      The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  },
};
function changeStatus() {
  //ловлю клік
  protoBtn.forEach((el) => {
    el.onclick = function () {
      //видалив класс актив
      for (let i = 0; i < protoBtn.length; i++) {
        protoBtn[i].classList.remove("active");
      }
      //умови при кліку
      if (el.innerText.toLowerCase() == "no prototype") {
        let sayHello = document.querySelector(".sayHello");
        let rm = document.querySelector(".rm");
        sayHello.remove();
        rm.remove();
                
        head.setAttribute("src", "./assets/images/magician.png");
        protoBtn[0].classList.add("active");
        let doMagic = document.querySelector(".doMagic");
        doMagic.addEventListener("click", () => {
          console.log(`ABRACADABRA
          The prototype of ${magician.name} is `);
        });
      }
      if (el.innerText.toLowerCase() == "human prototype") {
        head.setAttribute("src", human._portrait);
        protoBtn[1].classList.add("active");
        createDetal(human);
        let sayHello = document.querySelector(".sayHello");
        sayHello.addEventListener("click", () => {
          console.log(`Hello, my name is ${human.name}!`);
        });
        let doMagic = document.querySelector(".doMagic");
        doMagic.addEventListener("click", () => {
          console.log(`ABRACADABRA The prototype of ${human.name} is `);
          console.log(Object.getPrototypeOf(human));
        });
      }
      if (el.innerText.toLowerCase() == "vampire prototype") {
        head.setAttribute("src", vampire._portrait);
        properties.innerHTML = vampire.name;
        protoBtn[2].classList.add("active");
        createDetal(vampire);
        let sayHello = document.querySelector(".sayHello");
        sayHello.addEventListener("click", () => {
          console.log(`Hello, my name is ${vampire.name}!`);
        });
        let doMagic = document.querySelector(".doMagic");
        doMagic.addEventListener("click", () => {
          console.log(`ABRACADABRA
            The prototype of ${vampire.name} is `);
          console.log(Object.getPrototypeOf(vampire));
        });
      }
      if (el.innerText.toLowerCase() == "dog prototype") {
        head.setAttribute("src", dog._portrait);
        properties.innerHTML = dog.name;
        protoBtn[3].classList.add("active");
        createDetal(dog);
        let sayHello = document.querySelector(".sayHello");
        sayHello.addEventListener("click", () => {
          console.log(`Hello, my name is ${dog.name}!`);
        });
        let doMagic = document.querySelector(".doMagic");
        doMagic.addEventListener("click", () => {
          console.log(`ABRACADABRA
            The prototype of ${dog.name} is `);
          console.log(Object.getPrototypeOf(dog));
        });
      }
    };
  });
}

document
  .querySelector(".doMagic")
  .addEventListener("click", magician["do magic"]);

function createDetal(elem) {
  let detal = "";
  properties.innerHTML = `<div class='btns'><button class="doMagic">DO MAGIC</button></div>
  <div class='btns'><button class="sayHello">SAY HELLO</button></div>`;

  if (elem.name)
    detal += `<div class='rm'><span>name: <span class="propValue"> ${elem.name}</span></span><br>`;
  if (elem.age)
    detal += `<span>age: <span class="propValue">${elem.age}</span></span><br>`;
  if (elem.species)
    detal += `<span>species: <span class="propValue">${elem.species}</span></span><br>`;
  if (elem.job)
    detal += `<span>job: <span class="propValue">${elem.job}</span></span><br>`;
  if (elem.color)
    detal += `<span>color: <span class="propValue">${elem.color}</span></span><br>`;
  if (elem.title)
    detal += `<span>title: <span class="propValue">${elem.title}</span></span><br></div>`;

  properties.innerHTML += detal;
}

class Creature {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.species = options.species;
  }
  sayhello() {
    console.log(`Привіт, мене звати ${this.name}!`);
  }
}

class Human extends Creature {
  constructor(options) {
    super(options);
    this._portrait = "./assets/images/human.png";
    this.job = options.job;
  }
  sayhello() {
    super.sayhello();
  }
}
const human = new Human({
  name: "Linda",
  age: 22,
  species: "human",
  job: "doctor",
});

class Dog extends Creature {
  constructor(options) {
    super(options);
    this._portrait = "./assets/images/dog.png";
    this.color = options.color;
  }
  sayhello() {
    super.sayhello();
  }
}
const dog = new Dog({ name: "Fluffy", age: 3, species: "dog", color: "brown" });

class Vampire extends Human {
  constructor(options) {
    super(options);
    this._portrait = "./assets/images/vampire.png";
    this.title = options.title;
  }
  sayhello() {
    super.sayhello();
  }
}
const vampire = new Vampire({
  name: "Vlad",
  age: 915,
  species: "vampire",
  job: "unemployed",
  title: "count",
});

// const Creature = function (options) {
//   this.name = options.name;
//   this.age = options.age;
//   this.species = options.species;
// }
// Creature.prototype.sayHello = function () {
//   console.log(`Привіт, мене звати ${this.name}!`)
// }

// const Human = function (options) {
//   Creature.apply(this, arguments);
//   this.job = options.job
// }
// Human.prototype = Object.create(Creature.prototype);
// Human.prototype.constructor = Human;
// const human = new Human({ name: "Linda", age: 22, species: "human", job: "doctor" });

// const Dog = function (options){
//   Creature.apply(this, arguments);
//   this.color= options.color
// }
// Dog.prototype = Object.create(Creature.prototype);
// Dog.prototype.constructor = Dog;
// const dog = new Dog({ name: "Fluffy",age: 3,species: "dog",color: "brown" });

// const Vampire = function (options) {
//   Human.apply(this, arguments);
//   this.title = options.title
// }
// Vampire.prototype = Object.create(Human.prototype);
// Vampire.prototype.constructor = Human;
// const vampire = new Vampire({ name: "Vlad", age: 915, species: "vampire", job: "unemployed", title: "count" });
