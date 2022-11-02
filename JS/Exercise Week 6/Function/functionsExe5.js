"use strict";

/*
// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.

var arr = [3, 500, 12, 149, 53, 414, 1, 19];

function getminMax(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  return [min, max];
}

function switchPlaces(arr) {
  // var min = getminMax(arr)[0];
  // var max = getminMax(arr)[1];

  var [min, max] = getminMax(arr);
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (arr[i] === max) el = min;
    if (arr[i] === min) el = max;
    newArr.push(el);
  }
  return newArr;
}

var arr1 = switchPlaces(arr);
console.log(arr1);
*/

/*
// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.

var arr = [3, 500, -10, 149, 53, 414, 1, 19];
function divideAndAdd(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i] / 2 + 5;
    if (arr[i] <= 0) {
      el = 20;
    }
    newArr.push(el);
  }
  return newArr;
}

var arr2 = divideAndAdd(arr);
console.log(arr2);
*/

// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:

var students = [
  "Micahel",
  "Anne",
  "Frank",
  "Joe",
  "John",
  "David",
  "Mark",
  "Bill",
];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];
