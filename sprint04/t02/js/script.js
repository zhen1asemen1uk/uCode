class Human {
   constructor(options) {
      this.firstName = options.firstName;
      this.lastName = options.lastName;
      this.gender = options.gender;
      this.age = options.age;
      this.calories = options.calories;
   }
   sleepFor() {
      imageFace.src = "./assets/images/sleep.jpg";
      dialog.textContent = "I'm sleeping (5 sec.)";
      dialog.showModal();
      setTimeout(() => {
         dialog.close();
         dialog.textContent = "I'm awake now";
         dialog.showModal();
         dialog.close()
      }, 5000);
   }
   feed() {
      imageFace.src = "./assets/images/eat.jpg";
      if (Clark_Kent.calories > 500) {
         dialog.textContent = "I'm not hungry";
      }
      if (Clark_Kent.calories < 500) {
         dialog.textContent = "Nom nom nom!!!  I'm still hungry";
      }
      dialog.showModal();
      dialog.close();
      Clark_Kent.calories += 200;
   }
}

let Clark_Kent = new Human({
   firstName: "Clark",
   lastName: "Kent",
   gender: "Man",
   age: 83,
   calories: 0,
});

class Superhero extends Human {
   constructor(options) {
      super(options);
   }
   fly() {
      imageFace.src = "./assets/images/fly.png";
      dialog.textContent = "I'm flying!";
      dialog.showModal();
      setTimeout(() => {
         dialog.close();
      }, 10000);
   }
   fightWithEvil() {
      imageFace.src = "./assets/images/fight.jpeg";
      dialog.textContent = "Khhhh-chh... Bang-g-g-g... Evil is defeated!";
      dialog.showModal();
      setTimeout(() => {
         dialog.close();
      }, 5000);
   }
}

let Superman = new Superhero({
   firstName: "Super",
   lastName: "man",
   gender: "Man",
   age: 83,
   calories: 3000,
});

let properties = document.querySelector("#properties");
let imageFace = document.querySelector("#head");
let dialog = document.querySelector("#dialog");

function humanProperties() {
   dialog.textContent ="I'm Hungry!";
   imageFace.src = "./assets/images/Clarck_Kent.jpg";
   properties.innerHTML = `
        <div class="btn_3"><button id="turning">Turn into superhero</button>
        <button id="sleep">Sleep</button>
        <button id="eat">Eat</button></div>
        <div class="text_3"><p>First name: ${Clark_Kent.firstName}</p>
        <p>Last name: ${Clark_Kent.lastName}</p>
        <p>Gender: ${Clark_Kent.gender}</p>
        <p>Age: ${Clark_Kent.age}</p>
        <p>Calories: <span class="calories">${Clark_Kent.calories}</span></p></div>
        `;
   let turning = document.querySelector("#turning");
   let eating = document.querySelector("#eat");
   let sleep = document.querySelector("#sleep");

   sleep.addEventListener("click", Clark_Kent.sleepFor);
   eating.addEventListener("click", Clark_Kent.feed);
   turning.addEventListener("click", () =>{
     if(Clark_Kent.calories > 500){
         heroProperties() 
   } else {
        dialog.textContent = "Not enough calories to switch";
        dialog.showModal();
        setTimeout(() => {
           dialog.close();
          
           dialog.textContent ="I'm Hungry!";
        }, 1000);
   }
}
   );
}
humanProperties();

function heroProperties() {
   dialog.textContent ="I'm Superman!"
   imageFace.src = "./assets/images/Superman.jpg";
   properties.innerHTML = `
    <div class="btn_3"><button id="turn">Turn into human</button>
    <button id="fly">Fly</button>
    <button id="fightWithEvil">Fight with evil</button></div>
    <div class="text_3"><p>First name: ${Superman.firstName}</p>
    <p>Last name: ${Superman.lastName}</p>
    <p>Gender: ${Superman.gender}</p>
    <p>Age: ${Superman.age}</p>
    <p>Calories: <span class="calories">${Superman.calories}</span></p></div>
    `;

   const turn = document.querySelector("#turn");
   const fly = document.querySelector("#fly");
   const fightWithEvil = document.querySelector("#fightWithEvil");

   fly.addEventListener("click", Superman.fly);
   fightWithEvil.addEventListener("click", Superman.fightWithEvil);
   turn.addEventListener("click", humanProperties);
}

setInterval(() => {
   if (Clark_Kent.calories >= 100) {
      Clark_Kent.calories -= 200;

      document.querySelector(".calories").innerHTML = Clark_Kent.calories;
   }
   if (Clark_Kent.calories <= 50) {
      document.querySelector(".calories").innerHTML = Clark_Kent.calories;
      Clark_Kent.calories = 0;
      Superman.calories = 0;
   }
}, 1000);
