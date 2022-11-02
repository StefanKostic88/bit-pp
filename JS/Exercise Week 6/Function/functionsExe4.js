"use strict";
/*
// 1. Write a program that checks if a given element e is in the array a.

var checkIfIsInArr = function (arr, val) {
  var isPresent = "No";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      isPresent = "Yes";
      break;
    }
  }
  return isPresent;
};

var x = checkIfIsInArr([5, -4, 2, 3, 7], 3);
console.log(x);
var a = checkIfIsInArr([5, -4, 2, 18, 7], 3);
console.log(a);
*/

/*
// 2 . Write a program that multiplies every positive element of a given array by 2.

function multyPositive(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (arr[i] > 0) {
      el *= 2;
    }
    newArr.push(el);
  }
  return newArr;
}

var x = multyPositive([-3, 11, 5, 3, 4, -8]);
console.log(x);
*/

/*
// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.

function findMInandPrintIndex(arr) {
  var min = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return "Min element is " + min + ", and index is " + arr.indexOf(min);
}

var x = findMInandPrintIndex([4, 2, 2, -1, 6]);
console.log(x);
*/

/*

// 4. Write a program that finds the second smallest number and prints out its value.

function findMInAndPrintVal(arr) {
  var min = arr[0];
  var nextEl = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      nextEl = min;
      min = arr[i];
    }
  }

  return nextEl;
}

var x = findMInAndPrintVal([4, 2, 2, -1, 6]);
console.log(x);
*/

/*
// 5. Write a program that calculates the sum of positive elements in the array.

function sumPositive(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
var x = sumPositive([3, 11, -5, -3, 2]);
console.log(x);
*/

/*
// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

function isSym(arr) {
  var result = "Array is symmetric";
  for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) {
      result = "Array is not symmetric";
      break;
    }
  }
  return result;
}

var x = isSym([2, 4, -2, 7, -2, 4, 2]);
console.log(x);
var a = isSym([3, 4, 12, 8]);
console.log(a);
*/

/*
// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.

function concatArr(arr1, arr2) {
  var length = arr1.length >= arr2.length ? arr1.length : arr2.length;
  var newArr = [];
  var filteredArr = [];
  for (var i = 0; i < length; i++) {
    newArr.push(
      typeof arr1[i] !== "undefined" ? arr1[i] : null,
      typeof arr2[i] !== "undefined" ? arr2[i] : null
    );
  }
  for (var k = 0; k < newArr.length; k++) {
    if (typeof newArr[k] !== "object") {
      filteredArr.push(newArr[k]);
    }
  }
  newArr = [...filteredArr];
  return newArr;
}

var x = concatArr([4, 5, 6, 2, 5, 8], [3, 8, 11, 9]);
console.log(x);
*/

/*

// 8. Write a program that concatenates two arrays.


function concatArr(...arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}

var x = concatArr([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(x);

*/

/*
// 9. Write a program that deletes a given element e from the array a.

function delElFromArr(arr, val) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var x = delElFromArr([4, 6, 2, 8, 2, 2], 2);
console.log(x);
*/

/*
// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.

function insertEl(arr, val, index) {
  var firstArr = arr.slice(0, index);
  var secondArr = arr.slice(index);
  firstArr.push(val);

  return [...firstArr, ...secondArr];
}

var x = insertEl([2, -2, 33, 12, 5, 8], 78, 3);
console.log(x);
*/
