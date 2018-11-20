/*
Math.ceil()
Math.floor()
Math.max()
Math.min()
Math.PI
Math.pow()
Math.round()
Math.sqrt()
*/

var sayi=32.568678;

console.log(Math.round(sayi));

console.log(Math.round(sayi*100)/100);

console.log(Math.random());

//////////////////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(5,6));
console.log(getRandomInt(5,12));
//////////////////////////////////////////////////////////////////////////////////////

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

console.log(getRandomIntInclusive(5,6));
