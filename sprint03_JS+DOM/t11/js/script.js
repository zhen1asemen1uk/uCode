let add = document.querySelector(".add"),
  clear = document.querySelector(".clear"),
  text1 = document.querySelector("#text1"),
  text2 = document.querySelector(".text2"),
  c = '';


add.addEventListener("click", setCookie);

function setCookie(event) {
  event.preventDefault();
  c = text1.value;
  if (c == null || c == '') {
    alert("It's empty.Try to input something in \"Text input\".")
  } else {
    return getCookie();
  }
}

function getCookie() {
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = d.toUTCString();
  c = text1.value;

  document.cookie = "name = " + c + "; expires=" + expires + "; path=/";
  text2.innerHTML += "--> " + c + '\n';
}

clear.addEventListener("click", deleteCookie);

function deleteCookie() {
  let ays = confirm(' Are you sure? ');
  if (ays) {
    document.cookie = "name = " + c + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }else{
    event.preventDefault();

  }
}
