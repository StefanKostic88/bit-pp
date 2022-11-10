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

/*
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

function calcGrade(grade) {
  if (grade <= 60 && grade > 50) return 6;
  if (grade <= 70 && grade > 60) return 7;
  if (grade <= 80 && grade > 70) return 8;
  if (grade <= 90 && grade > 80) return 9;
  if (grade <= 100 && grade > 90) return 10;
  return "Failed";
}

function studentGrade(arr1, arr2) {
  var length = arr1.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += arr1[i] + " " + calcGrade(arr2[i]) + "\n";
  }
  return result;
}

var x = studentGrade(students, grades);
console.log(x);
*/

/*
//  4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.

var arr = [13, 11, 15, 5, 6, 1, 8, 12];

function sortMulty(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i] * 2;
    newArr.push(el);
  }
  return sortAccend(newArr);
}

function sortAccend(arr, length = arr.length) {
  var newArr = arr;
  if (length === 1) {
    return;
  }
  var curEl;
  var nextEl;
  for (var i = 0, j = 1; i < arr.length; i++, j++) {
    curEl = i;
    nextEl = j;
    if (newArr[curEl] > newArr[nextEl]) {
      var switchEl = newArr[curEl];
      newArr[i] = arr[nextEl];
      newArr[nextEl] = switchEl;
    }
  }
  sortAccend(newArr, length - 1);
  return newArr;
}

var x = sortMulty(arr);
console.log(x, "Sorted");

*/

/*
// 5. (skip :))Sort a previously defined array in a descending order and display it in the
// console.

var arr = [13, 11, 15, 5, 6, 1, 8, 12];
function sortDec(arr, length = arr.length) {
  console.log(length);
  var newArr = arr;
  if (length === 1) {
    return;
  }
  var curEl;
  var nextEl;
  for (var i = 0, j = 1; i < arr.length; i++, j++) {
    curEl = i;
    nextEl = j;
    if (newArr[curEl] < newArr[nextEl]) {
      var switchEl = newArr[curEl];
      newArr[i] = arr[nextEl];
      newArr[nextEl] = switchEl;
    }
  }
  sortDec(newArr, length - 1);
  return newArr;
}

var x = sortDec(arr);
console.log(x);

*/

/*
// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

function x() {
  var sumEven = 0;
  var sumOdd = 0;
  for (var i = 0, j = 500; i <= 1000; i += 2, j--) {
    sumEven += i;
    if (j % 2 !== 0) {
      sumOdd += j;
    }
  }
  return (sumEven - sumOdd) * 12.5;
}

var a = x();
console.log(a);

*/

/*
// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
//   letters) in the array and create a new string from them. Print it out in the console.

var arr = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function prinLetters(arr) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && arr[i].length > 2) {
      var firsTwoLetters = arr[i][0] + arr[i][1];
      string += firsTwoLetters;
    }
  }
  return string;
}

var x = prinLetters(arr);
console.log(x);
*/

/*
// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.

var string = "Belgrade Institute of Technology";

function reverseString(string) {
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

var x = reverseString(string);
console.log(x);

*/

/*
// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function displayCombo() {
  var result = "";
  for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= 7; j++) {
      if (i !== j) {
        result += "(" + i + ", " + j + "),";
      }
    }
    result += "\n";
  }
  return result;
}

var x = displayCombo();
console.log(x);
*/

/*
// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//   by 1 and by itself).
//   Input: 17 | 15
//   Output: true | false

function checkIfPrime(num) {
  if (num <= 0 || num === 1) return false;
  var factor = 0;
  for (var i = 0; i <= num * num; i++) {
    if (num % i === 0) {
      factor += 1;
    }
  }
  return factor === 2 ? true : false;
}

var x = checkIfPrime(17);
console.log(x);
*/

/*
// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

function checIfPalindrome(string) {
  var input = string.toLowerCase().trim().split(" ").join("");
  var isPal = true;
  for (var i = 0, j = input.length - 1; i <= j; i++, j--) {
    if (input[i] !== input[j]) {
      isPal = false;
    }
  }
  return isPal;
}

var x = checIfPalindrome("a nut for a jar of tuna");
console.log(x);
*/

/*
// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9

function findCommonDiv(num1, num2) {
  var length = num1 >= num2 ? num2 : num1;

  var common;
  for (var i = 1; i <= length; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      common = i;
    }
  }
  return common;
}
var x = findCommonDiv(192, 42);
var y = findCommonDiv(81, 9);
console.log(x, y);
*/
