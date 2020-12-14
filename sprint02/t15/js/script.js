let beginRange = prompt("Перше число:"),
  endRange = prompt("Останнє число:");
function checkDivision(beginRange, endRange) {
  let b = "";
  for (a = beginRange; a < endRange; a++) {
    if (a % 10 == 0 && a % 3 == 0 && a % 2 == 0 && a >= 1 && a <= 100) {
      b += a + " is even, a multiple of 3, a multiple of 10";
    } else if (a % 3 == 0 && a >= 1 && a <= 100) {
      b += a + " is a miltiple of 3";
    } else if (a % 2 == 0 && a >= 1 && a <= 100) {
      b += a + " is even";
    } else {
      b += a + " - ";
    }
    b += "\n";
  }
  console.log(b);
}
checkDivision(beginRange, endRange);
