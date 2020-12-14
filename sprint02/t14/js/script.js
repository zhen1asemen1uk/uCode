function total(addCount, addPrice, currentTotal) {
  if (currentTotal == undefined) {
    currentTotal = addCount * addPrice;
  } else {
    currentTotal += addCount * addPrice;
  }
  return currentTotal;
}

// let sum = total(1, 0.1);
// sum = total(1, 0.2, sum);
// sum = total(1, 0.78, sum);
// console.log(sum); // will return 1.08
