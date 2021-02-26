let add = document.querySelector(".add"),
  clear = document.querySelector(".clear"),
  text1 = document.querySelector("#text1"),
  text2 = document.querySelector(".text2"),
  l = '';


add.addEventListener("click", setLocalStorge);

function setLocalStorge(event) {
  event.preventDefault();
  l = text1.value;
  if (l == null || l == '') {
    alert("It's empty.Try to input something in \"Text input\".")
  } else {
    localStorage.setItem(l, l);
    return timeLocalStorage();
  }
}
//   function show(){
//     let ls = localStorage.length;
//     if( ls>0){
//       for(i=0;i< ls;i++){
//         let key = localStorage.key(i);
//       }
//     }
//   }

function timeLocalStorage() {
  let d = new Date(),
    date = {
      data: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds()
    };

  if (date.hours >= 0 && date.hours <= 9) {
    date.hours = "0" + date.hours;
  }
  if (date.month >= 0 && date.month <= 9) {
    date.month = "0" + date.month;
  }
  if (date.minutes >= 0 && date.minutes <= 9) {
    date.minutes = "0" + date.minutes;
  }
  if (date.data >= 0 && date.data <= 9) {
    date.data = "0" + date.data;
  }
  if (date.seconds >= 0 && date.seconds <= 9) {
    date.seconds = "0" + date.seconds;
  }
  text2.innerHTML += '--> ' + localStorage.getItem(l) + ' [' + date.data + '.' + date.month + '.' + date.year + ',' + date.hours + ':' + date.minutes + ':' + date.seconds + ']' + '\n';
}

clear.addEventListener("click", deleteLocalStorge);

function deleteLocalStorge() {
  let ays = confirm(' Are you sure? ');
  if (ays) {
    localStorage.clear();
  } else {
    event.preventDefault();
  }
}