let a = prompt("Введи число: "),
  i = 0,
q = "";
while (i < 10) {
  i++;
  q += a + ' * ' + i + ' = ' + i * a + '\n';
}
alert(q);

// the first loop
// var i = 6;
// var res1 = " ";
// do {
//   res1 += i + " ";
//   i++;
// } while (i < 5);
// // the second loop
// i = 6;
// var res2 = " ";
// while (i < 7) {
//   res2 += i + " ";
//   i++;
// }

// alert("do while:" + res1 + "while:" + res2);
