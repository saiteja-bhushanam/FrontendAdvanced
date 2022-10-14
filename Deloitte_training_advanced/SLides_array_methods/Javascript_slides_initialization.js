

// 'fruits' array created using array literal notation.
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2
//----------------------------------------------------
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2.length);
// 2
//----------------------------------------------------

// 'fruits3' array created using String.prototype.split().
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3.length);
// 2
//----------------------------------------------------

const fruits4 = new Array(10);
console.log(fruits4.length);

//--------------------------------------------------------


const listC = new Array(-100);