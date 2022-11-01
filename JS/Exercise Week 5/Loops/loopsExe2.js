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
*/
/*
Write a program that checks if a given element e is in the array a.
const arr = [-3, 11, 5, 3, 4, -8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    sum += arr[i];
  }
}
console.log(sum);
*/
/*
// Write a program that checks if a given element e is in the array a.

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
*/

// 4. Write a program that finds the first element larger than minimum and prints out its value.

// RESI OVO JOS JEDNOM NE VALJA
// Probaj sa deklaracijom varijabli na pozetcku
// min = arr[0]
// max = arr[0]

// i izbegnes duple petlje
// const arr = [4, 2, 2, -1, 6];

// let min = 0;
// let nextMin = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     min = arr[i] < arr[j] ? arr[i] : arr[j];
//     nextMin = arr[arr.indexOf(min) - 1];
//   }
// }
// //////

// console.log(min, nextMin);

// var arr = [4, -10, 2, 2, -1, 6];
// var min = arr[0];
// var nextMin = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     nextMin = min;
//     min = arr[i];
//   }
//   console.log(min, nextMin);
// }

// console.log(val, "value");

// console.log("next value", counter);

// 5. Write a program that calculates the sum of positive elements in the array.
// const arr = [3, 11, -5, -3, 2];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum);

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

// const arr = [2, 4, -2, 7, -2, 4, 2];
// // const arr = [3, 4, 12, 8];
// let result = "";
// for (let i = 0; i < arr.length; i++) {
//   let x = 0;
//   for (let j = arr.length - 1; j >= 0; j--) {
//     let firstIndex = arr[i];
//     let lastIndex = arr[j];

//     if (arr[i] === arr[j]) {
//       result = "The array is symmetric.";
//     } else {
//       result = "The array is not symmetric.";
//     }
//   }
// }
// console.log(result);

const arr = [2, 4, -2, 7, -2, 4, 2];
// const arr = [3, 4, 12, 8];
let result = "The array is symmetric.";
for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
  if (arr[i] !== arr[j]) {
    result = "The array is not symmetric.";
  }
}
console.log(result);

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
