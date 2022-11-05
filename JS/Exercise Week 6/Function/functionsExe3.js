"use strict ";

/*

// 1. Write a program to insert a string within a string at a particular position (default is 1,
//   beginning of a string).

function insertString(string, el, word) {
  var fiirstPartWord = "";
  var secondPartWord = "";
  for (var i = 0, j = word; i < word; i++, j++) {
    fiirstPartWord += string[i];

    if (typeof string[j] !== "undefined") {
      secondPartWord += string[j];
    }
  }

  return fiirstPartWord.trim() + " " + el + " " + secondPartWord.trim();
}

var x = insertString("My Random String", "JS", 10);

console.log(x);


function insertString(string, el, index = 0) {
  var string =
    string.slice(0, index).trim() + " " + el + " " + string.slice(index).trim();
  return string.trim();
}

var x = insertString("My Random String", "JS", 10);
console.log(x);
*/

/*
// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

var arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
function joinFalsy(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      result += " " + arr[i];
    }
  }
  return result;
}

var x = joinFalsy(arr);
console.log(x);
*/

/*
// 3. Write a program to filter out falsy values from the array.

var arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function filterFalsy(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var x = filterFalsy(arr);
console.log(x);
*/

/*
// 4. Write a function that reverses a number. The result must be a number.
var number = 12345;

function reverseNum(num) {
  if (typeof num !== "number") return "Invalid input";
  var converted = ("" + num).split("");
  var length = converted.length;
  var result = "";
  for (var i = 0, j = length - 1; i < length; i++, j--) {
    result += converted[j];
  }
  return +result;
}
var x = reverseNum(number);
console.log(x);
*/

/*
// 5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
// last &#39;n&#39; elements of the array.

var arr = [7, 9, 0, -2];
function getLastIndex(arr, index) {
  if (typeof index === "undefined") return arr[arr.length - 1];
  var lastIndex = arr.length - index;
  return arr[lastIndex];
}

var x = getLastIndex(arr, 2);
console.log(x);
*/

/*
// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.

function printVal(printNum, val = null) {
  var arr = [];
  for (var i = 0; i < printNum; i++) {
    arr.push(val);
  }
  return arr;
}
var x = printVal(6, "none");
console.log(x);
*/

/*
// 7. Write a function that says whether a number is perfect.

function checkIsPerfect(num) {
  console.log(num);
  var sum = 0;
  for (var i = 1; i <= num - 1; i++) {
    if (num % i === 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum === num ? "Number is Perfect" : "Number is not Perfect";
}

var x = checkIsPerfect(28);
console.log(x);
*/

/*

// 8.Write a function to find a word within a string.
function findWord(string, word) {
  var convertToArr = string.split(" ");
  var count = 0;
  for (var i = 0; i < convertToArr.length; i++) {
    if (convertToArr[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  var string = count < 2 ? " time" : " times";
  return "The word " + word + " is repeated " + count + string;
}

var x = findWord("The quick brown fox", "fox");
console.log(x);
var a = findWord("aa bb cc dd aa", "aa");
console.log(a);
*/

/*
// 9. Write a function to hide email address.

function hideMyEmail(email) {
  var indexOfM = email.split("").indexOf("@");
  var string = "";

  var i = 0;
  do {
    string += ".";
    i++;
  } while (email[i] !== "@");

  return string + email.slice(i);
}

var x = hideMyEmail("myEmail@bgit.rs");
console.log(x);
*/

/*
// 10. Write a program to find the most frequent item of an array.

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function mostFreq(arr) {
  var item;
  var rep = 0;
  var numofEl = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        rep++;
      }
      if (numofEl < rep) {
        numofEl = rep;
        item = arr[i];
      }
    }
    rep = 0;
  }
  return item + " is repeated " + numofEl + " times";
}

var x = mostFreq(arr);
console.log(x);
*/

// 1. Write a program to insert a string within a string at a particular position (default is 1,
//   beginning of a string).
