"use strict";

// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.

var testInput = [4, 5, 11, 9];

(function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    var temp = arr[0];
    if (arr[0] === arr[i]) {
      el = arr[arr.length - 1];
    }
    if (arr[arr.length - 1] === arr[i]) {
      el = temp;
    }
    newArr[newArr.length] = el;
  }
  console.log(newArr);
  return newArr;
})(testInput);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

(function (a, b) {
  return a * b;
})(4, 5);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

(function (string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    var el = string[i] === "m" || string[i] === "M" ? "*" : string[i];
    newString += el;
  }
  console.log(newString);
  return newString;
})("prograMming");

(function (string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      string[i] = ".";
    }
    console.log(string[i]);
  }
  //   console.log(string);
})("Pera Peric");
