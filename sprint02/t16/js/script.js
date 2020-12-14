var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

function firstElements(arr, n) {
    var  x = [];
for(i = 0; i < n; i++){
x.push(arr[i]);
}
return x
}

console.log(firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, 1));
// ["Captain America"]
console.log(firstElements(heroes, 3));
// ["Captain America", "Hulk", "Thor"]
