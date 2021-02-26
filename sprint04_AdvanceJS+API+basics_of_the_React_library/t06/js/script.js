let enter = document.querySelector(".enter");
let btn = document.querySelector(".btn");
let chatBox = document.querySelector(".chatBox");
let hi = new RegExp("hi", "i"),
   hello = new RegExp("hello", "i"),
   privet = new RegExp("привет", "i"),
   pruvit = new RegExp("привіт", "i"),
   hey = new RegExp("hey", "i");
let count = 0;

//клік на відправку
btn.addEventListener("click", () => {
   chatBox.innerHTML += `<p class="textIn">${enter.value}</p>`;
   if (count >= 5 && (hi.test(enter.value) || hello.test(enter.value) || privet.test(enter.value) || pruvit.test(enter.value) || hey.test(enter.value))) {
      chatBox.innerHTML += `<p class="textOut">I will not respond to that</p>`;
   } else if (count < 5 && (hi.test(enter.value) || hello.test(enter.value) || privet.test(enter.value) || pruvit.test(enter.value) || hey.test(enter.value))) {
      count++
      chatBox.innerHTML += `<p class="textOut">${gen.next().value}</p>`;
   } else {
      chatBox.innerHTML += `<p class="textOut">I don't understand
</p>`;
   }
   enter.value = ""
})

//генератор відповіді
function* generator() {
   yield "Hello, I am J.A.R.V.I.S.";
   yield "I believe I've already said it, but, sure, hello again!";
   yield "You are malfunctioning";
   yield "I believe your intentions to be hostile.";
   yield "I will not respond to that";
}
const gen = generator();
