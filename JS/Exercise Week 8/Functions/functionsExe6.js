"use strict";

/*

// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

// var countVowels = function (string) {
//   var count = 0;
//   for (var i = 0; i < string.length; i++) {
//     if (
//       string[i] !== "A" &&
//       string[i] !== "a" &&
//       string[i] !== "E" &&
//       string[i] !== "e" &&
//       string[i] !== "I" &&
//       string[i] !== "i" &&
//       string[i] !== "O" &&
//       string[i] !== "o" &&
//       string[i] !== "U" &&
//       string[i] !== "u"
//     ) {
//       continue;
//     }
//     count++;
//   }
//   return count;
// };
// var x = countVowels("Hello World Hello WOrld");
// console.log(x);

// var countVowels = function (string) {
//   var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
//   // console.log(string.includes("a"));
//   var count = 0;
//   for (var i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       count++;
//     }
//   }

//   return count;
// };
// var x = countVowels("Hello World Hello WOrld");
// console.log(x);


*/
/*

// 2. Write a function that combines two arrays by alternatingly taking elements.

var combineArr = function (arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i], arr2[i]);
    newArr[newArr.length] = arr1[i];
    newArr[newArr.length] = arr2[i];
  }

  return newArr;
};

var x = combineArr(["a", "b", "c"], [1, 2, 3]);
console.log(x);
*/

/*
// 3. Write a function that rotates a list by k elements.

const rotateArr = function (arr, index) {
  var newArr = [];
  for (
    var i = index, j = index - arr.length;
    i < arr.length + index;
    i++, j++
  ) {
    if (arr[i] !== undefined) {
      newArr[newArr.length] = arr[i];
    } else {
      newArr[newArr.length] = arr[j];
    }
  }

  return newArr;
};

var x = rotateArr([1, 2, 3, 4, 5, 6], 2);
console.log(x);
*/

/*
// 4. Write a function that takes a number and returns array of its digits.
const returnNums = function (num) {
  var newArr = [];
  var string = "" + num;
  for (var i = 0; i < string.length; i++) {
    newArr[newArr.length] = parseFloat(string[i]);
  }
  return newArr;
};
var x = returnNums(4558);
console.log(x);
*/
/*
// 5. Write a program that prints a multiplication table for numbers up to 12.

var multplication__12 = function (num) {
  var output = "";
  var result;
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      result = i * j;
      output += result + " ";
    }
    output += "\n";
  }
  return output;
};

var x = multplication__12(12);
console.log(x);
*/

/*
// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

var convertTofar = function (temp) {
  return temp * 1.8 + 32;
};

var x = convertTofar(30);
console.log(x);
*/

/*
// 9. Write a function to find the median element of array.
var findMedian = function (arr) {
  var result;
  for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
    result = (arr[i] + arr[j]) / 2;
  }
  return "median is " + result;
};

var x = findMedian([1, 2, 3, 4, 5, 6, 8, 9]);
console.log(x);
*/

/*
// 13. Write a function to find all the numbers greater than the average.

var greaterThanAvrage = function (arr) {
  var sum = 0;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    if (sum / arr.length > arr[i]) continue;
    newArr[newArr.length] = arr[i];
  }
  return newArr;
};

var x = greaterThanAvrage([12, 16, 5, 1, 3, 4]);
console.log(x);
*/

// 10. Write a function to find the element that occurs most frequently.

var mostOcss = function (arr) {
  //resi
};

var x = mostOcss("aaasssaaacccsssaaa");

/*
// 11. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

var getElements = function (arr) {
  if (arr.length === 0) return arr;
  var newArr = [arr[0]];
  if (arr.length % 2 === 0) newArr[1] = arr[arr.length - 1];

  for (var i = 1, j = arr.length - 2; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) continue;
    newArr[newArr.length] = arr[i];
    newArr[newArr.length] = arr[arr.length - 1];
  }
  return newArr;
};

var x = getElements(["first", 2, "midle", 5, "last"]);
console.log(x);
*/

/*
POgledaj ovo da ispravis
// 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:

var convertStringToArr = function (string) {
  var count = 0;
  var newArr = [];
  var testArr = [];
  newArr[0] = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === ",") {
      count++;
      newArr[count] = "";
    } else {
      newArr[count] += string[i];
    }
  }
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === "") continue;
    testArr[testArr.length] = newArr[i];
  }
  return testArr;
};

var printWords = function (string) {
  var input = typeof string === "string" ? convertStringToArr(string) : string;
  var stars = "";
  var count = 0;

  for (var i = 0; i < input.length + 2; i++) {
    for (var j = 0; j < 9; j++) {
      if (j !== 0 && j !== 6 && i !== 0 && i !== input.length + 1) {
        stars += " ";
        stars += input[count];
        stars += " *";
        count++;
        break;
      } else {
        stars += "*";
      }
    }
    stars += "\n";
  }
  return stars;
};

var x = printWords("Hello, World in a frame");
console.log(x);
*/

/*

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

const findMax = function (arr) {
  var max;
  for (var i = 0; i < arr.length; i++) {
    console.log();
    if (isFinite(parseInt(arr[i]))) {
      max = arr[i];
      break;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) && max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

var x = findMax(["asdasd", 5, "asd", 8, 4, "asdasd"]);
console.log(x);
*/
