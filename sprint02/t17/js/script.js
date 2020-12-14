var namen = prompt("Enter the name:"),
  names = prompt("Enter last name:"),
  a = new RegExp("^[a-zA-Z]*$" || "^[а-яА-Я]*$");
if (
  a.test(names) &&
  a.test(namen) &&
  namen != null &&
  namen != false &&
  names != null &&
  names != false
) {
  var newnamen = namen.toLowerCase(),
    newnames = names.toLowerCase();

  var fln = namen.slice(0, 1),
    fls = names.slice(0, 1);
  var newnamen2 = newnamen.replace(fln, fln.toUpperCase()),
    newnames2 = newnames.replace(fls, fls.toUpperCase());

  console.log("Salute " + newnamen2 + " " + newnames2 + " !");
  alert("Salute " + newnamen2 + " " + newnames2 + " !");
} else {
  console.log("Wrong input!");
  alert("Wrong input!");
}
