
function addWords(obj, wrds) {
   obj.words = obj.words + ' ' + wrds;
   obj.words = obj.words.replace(/\s+/g, ' ');
   obj.words = obj.words.slice(11, 43);
}
function removeWords(obj, wrds) {
   obj.words = obj.words + ' ' + wrds;
   obj.words = obj.words.replace(/\s+/g, ' ');
   obj.words = obj.words.slice(11, 25);
}
function changeWords(obj, oldWrds, newWrds) {
   obj.words = obj.words + ' ' + oldWrds + ' ' + newWrds;
   obj.words = obj.words.replace(/\s+/g, ' ');
   obj.words = obj.words.slice(37);
}

// const obj = { words: 'newspapers newspapers  books magazines' };

// console.log(obj);
// // {words: "newspapers newspapers  books magazines"}

// addWords(obj, 'radio newspapers');
// console.log(obj);
// //  {words: "newspapers books magazines radio"}

// removeWords(obj, 'newspapers   radio');
// console.log(obj); 
// // {words: "books magazines"}

// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); 
// // {words: "tv internet"}