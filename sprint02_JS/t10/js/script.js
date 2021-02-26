var name = prompt("To enter an animal name:"),
  a = new RegExp("^[A-Za-z]*$", ""),
  b = new RegExp("[1-9_]", "");
regular_gender = new RegExp("male", "i" || "female", "i" || "", "s");
if (name.length <= 20 && a.exec(name)) {
  var gender = prompt("To enter gender(male or female):");
  if (gender === "" || regular_gender.test(gender)) {
    var age = prompt("To enter age:");
    if (age.length <= 5 && age > 0 && !b.exec(age) != null) {
      function one(name, gender, age) {
        if (gender == "male" && age < 18) {
          return "The superhero name is: " + name + "-" + "boy" + "!";
        } else if (gender == "" && age < 18) {
          return "The superhero name is: " + name + "-" + "kid" + "!";
        } else if (gender == "" && age > 18) {
          return "The superhero name is: " + name + "-" + "hero" + "!";
        } else if (gender == "male" && age > 18) {
          return "The superhero name is: " + name + "-" + "man" + "!";
        } else if (gender == "female" && age < 18) {
          return "The superhero name is: " + name + "-" + "girl" + "!";
        } else if (gender == "female" && age > 18) {
          return "The superhero name is: " + name + "-" + "woman" + "!";
        } else return "error message";
      }
    } else {
      alert("error message");
    }
  } else {
    alert("error message");
  }
} else {
  alert("error message");
}
alert(one(name, gender, age));
