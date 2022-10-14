const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
//array1.concat(array2, array3, ..., arrayX)
// -------------------------------------------------------------------------------



//-------------------------------------------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();//returns an object

for(x of f){
    console.log(x);
}

//array.entries(NONE)

//-----------------------------------------

// array.fill(value, start, end)
const fruitz = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",2,4);
//----------------------------------------------------

let numbers3 = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array = numbers3.filter(function(value) {
    return value >= 0; });

console.log(positive_array);

//Output = [0, 1, 5, 12, 19, 20]

//returns an array
//The filter array function does not mutate the array. Remember to save the filtered array in case you plan on using it later

//--------------------------------------------------------

function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); // false


//arr.every(callback(currentValue), thisArg)
//------------------------------------------------------------
function isEven(element) {
    return element % 2 == 0;
  }
  
  let randomArray = [1, 45, 8, 98, 7];
  
  let firstEven1 = randomArray.find(isEven);
  console.log(firstEven1); // 8
  
  // using arrow operator
  let firstOdd1 = randomArray.find((element) => element % 2 == 1);
  console.log(firstOdd1); // 1

//   Returns the value of the first element in the array that satisfies the given function.
//   Returns undefined if none of the elements satisfy the function.

  //   --------------------------------------------------------------------

//   Returns the index of the first element in the array that satisfies the given function.
// Returns -1 if none of the elements satisfy the function.

// function that returns even number
function isEven(element) {
    return element % 2 == 0;
  }
  
  // defining an array of integers
  let numbers = [1, 45, 8, 98, 7];
  
  // returns the index of the first even number in the array
  let firstEven = numbers.findIndex(isEven);
  
  console.log(firstEven); // 2

//-------------------------------------------------------------------------------
// Find() will return the value of the first element based on the provided condition and returns undefined if none of the elements passed the condition.
// FindIndex() will return the index of the first element based on the condition and returns -1 if none of the elements passed the condition.
//==========================================================================

// creating a new array from string
// let newArray = Array.from("abc");

// console.log(newArray);

// Output:
// [ 'a', 'b', 'c' ]



