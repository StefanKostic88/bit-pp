"use strict";
/*
1. Write a program that checks if a given element e is in the array a.
let e = 3;
const a = [5, -4, 2, 3, 7];
let isValid = false;
for (let i = 0; i < a.length; i++) {
  if (e === a[i]) {
    isValid = true;
  }
}
let result = isValid ? "yes" : "no";

console.log(result);

///////////////
//Druga Verzija
///////////////

let e = 3;
const a = [5, -4, 2, 3, 7];
let result = "no";
for (let i = 0; i < a.length; i++) {
  if (e === a[i]) {
    result = "yes";
    break;
  }
}
console.log(result);
*/

/*
//  2. Write a program that multiplies every positive element of a given array by 2.

const arr = [-3, 11, 5, 3, 4, -8];
const newArr = [];
let sum = 0;
let multy = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    sum += arr[i];
    multy = arr[i] * 2;
    newArr.push(multy);
  }
}
console.log(sum, newArr);
*/

/*
// 3. Write a program that finds the first element larger than minimum and prints out its value.

const arr = [4, 2, 2, -1, 6];
let min = 0;
let index = 0;

for (let i = 0; i < arr.length; i++) {
  let curItem = arr[i];
  let nextItem = arr[i + 1];
  if (typeof nextItem !== "undefined") {
    min = curItem < nextItem ? curItem : nextItem;
  }
  index = arr.indexOf(min);
}
console.log(min, index);


//Drugo Resenje


const arr = [4, 2, 2, -1, 6];
let min = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min, arr.indexOf(min));


*/

/*
// 4. Write a program that finds the first element larger than minimum and prints out its value.

const arr = [4, 2, 2, -1, 6];

let min = 0;
let nextMin = 0;

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 1; j < arr.length; j++) {
    min = arr[i] < arr[j] ? arr[i] : arr[j];
    nextMin = arr[arr.indexOf(min) - 1];
  }
}
console.log(nextMin);
//////

console.log(min, nextMin);

var arr = [4, -10, 2, 2, -1, 6];
var min = arr[0];
var nextMin = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    nextMin = min;
    min = arr[i];
  }
}
console.log(min, nextMin);

*/

// 5. Write a program that calculates the sum of positive elements in the array.

// const arr = [3, 11, -5, -3, 2];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum);

/*
// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

const arr = [2, 4, -2, 7, -2, 4, 2];
// const arr = [3, 4, 12, 8];
let result = "";
for (let i = 0; i < arr.length; i++) {
  let x = 0;
  for (let j = arr.length - 1; j >= 0; j--) {
    let firstIndex = arr[i];
    let lastIndex = arr[j];

    if (arr[i] === arr[j]) {
      result = "The array is symmetric.";
    } else {
      result = "The array is not symmetric.";
    }
  }
}
console.log(result);

const arr = [2, 4, -2, 7, -2, 4, 2];
// const arr = [3, 4, 12, 8];
let result = "The array is symmetric.";
for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
  if (arr[i] !== arr[j]) {
    result = "The array is not symmetric.";
    break;
  }
}
console.log(result);
*/

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.

// const arr1 = [4, 5, 6, 2];
// const arr2 = [3, 8, 11, 9];
// const len = arr1.length;
// const newArr = [];

// for (let i = 0; i < len; i++) {
//   newArr.push(arr1[i], arr2[i]);
// }

// console.log(newArr);

/*
// 8. Write a program that concatenates two arrays.

const arr1 = [4, 5, 6, 2];
const arr2 = [3, 8, 11, 9];
const newArr = [];

let i = 0;
do {
  newArr.push(arr1[i]);
  i++;
} while (typeof arr1[i] !== "undefined");

let j = 0;
do {
  newArr.push(arr2[j]);
  j++;
} while (typeof arr2[j] !== "undefined");

console.log(newArr);
*/

/*
// 9. Write a program that deletes a given element e from the array a.

let arr = [4, 6, 2, 8, 2, 2];
let newArr = [];

const e = 2;

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  if (arr[i] !== e) {
    newArr.push(arr[i]);
  }
}
arr = newArr;
console.log(arr);
*/

// 10.Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.

// let a = [2, -2, 33, 12, 5, 8];
// const newArr = [];

// const e = 78;
// const p = 3;

// let i = 0;
// do {
//   newArr.push(a[i]);
//   i++;
// } while (i !== p);
// newArr[i] = e;
// console.log(i);

// do {
//   newArr.push(a[i]);
//   i++;
// } while (i !== a.length);

// a = newArr;
// console.log(a);
