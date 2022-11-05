"use strict";

/*
// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.

var a = ["1", "21", undefined, "42", 1e3, Infinity];

function convertToNum(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var curEl = parseFloat(arr[i]);
    console.log(curEl);
    if (isFinite(curEl)) {
      newArr[newArr.length] = curEl;
    }
  }
  return newArr;
}

var x = convertToNum(a);
console.log(x);
*/

/*
// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.

var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];

var result = "";

function joinStr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i] || arr[i] === 0 || arr[i] === false) {
      result += arr[i];
    }
  }
  return result;
}

var x = joinStr(a);
console.log(x);
*/
/*
// 3. Write a program to filter out falsy values from the array.

var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function falS(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

var x = falS(a);
console.log(x);
*/
/*
// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 3

var a = [NaN, 23.1, 15, false, -22.5, 4, 7, null];

function calcNum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    var curEl = parseFloat(arr[i]);
    if (!!curEl && Number.isInteger(curEl)) {
      result++;
    }
  }
  return result;
}

var x = calcNum(a);
console.log(x);
*/

/*

// 5. Write a program that calculates a number of float values in the array.

var a = [NaN, 23.1, 15, false, -22.5, 4, 7, null];

function calcNum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    var curEl = parseFloat(arr[i]);
    if (!!curEl && !Number.isInteger(curEl)) {
      result++;
    }
  }
  return result;
}

var x = calcNum(a);
console.log(x);
*/
