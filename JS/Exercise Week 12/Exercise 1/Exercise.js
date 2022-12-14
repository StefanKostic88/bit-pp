"use strict";

/*
// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1];
var newArr = [];
arr.forEach((el) => newArr.push(el, el));
console.log(newArr);
*/

/*
// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newArr = arr
  .filter((el, index) => arr.indexOf(el) === index)
  .sort((a, b) => a - b);

console.log(newArr);
*/
/*
// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

var arr = [1, 2, 9, 2, 1];

var check = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return true;
  }
};
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var x = check(arr);
console.log(x);

var arr2 = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

var newVal = arr2.reduce((cur, el, index, arr) => {
  if ((arr.length / 2) % 1 === 0) return "Error";
  var middle = Math.floor(arr.length / 2);
  if (el < arr[middle]) cur++;
  return cur;
}, 0);
console.log(newVal);
*/
/*
// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
var arr = [1, 4, -2, 11, 8, 1, -2, 3];
var newVal = arr.reduce(
  (cur, el, index, arr) => {
    var temp = cur.minVale;
    var lastIndex = arr.lastIndexOf(temp);
    if (temp > el) {
      temp = el;
    }
    return (cur = { minVale: temp, minLastIndex: lastIndex });
  },
  { minVale: 0, minLastIndex: 0 }
);

console.log(newVal);
*/

/*
// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

var arr = [2, 3, 8, -2, 11, 4];

var newVal = arr.filter((el) => el < 6);
console.log(newVal);

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

var arr = ["JavaScript", "Programming", "fun", "product"];

var newVal = arr.filter((el) => el.toLocaleLowerCase().includes("pro"));
console.log(newVal);

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

var func = function (arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

var x = func([2, 3, 8, -2, 11, 4], function (el) {
  return el < 6;
});
var y = func(["JavaScript", "Programming", "fun", "product"], function (el) {
  return el.toLocaleLowerCase().includes("pro");
});

console.log(x);
console.log(y);
*/

/*

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

var products = [];

var addProduct = function (name, price, arr) {
  arr.push({ name: name, price: price });
};

addProduct("apples", 100, products);
addProduct("milk", 80, products);
addProduct("bannanas", 150, products);

var totalAmount = products.reduce((acc, el) => (acc += el.price), 0);
// console.log(totalAmount);

var totalAmountAvg = products
  .reduce((acc, el, index, arr) => {
    acc += el.price;
    return acc / arr.length;
  }, 0)
  .toFixed(2);
console.log(totalAmountAvg);

var funcFind = function (arr) {
  var max = arr[0].price;
  products.forEach((el) => {
    if (max < el.price) {
      max = el.price;
    }
  });
  var val = arr.find((el) => el.price === max);
  return val.name.toUpperCase();
};

var mostExpensive = funcFind(products);
console.log(mostExpensive);
*/

/*
// 7.
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

var someString = "Something totalY RanDOM";
// var someString = "SOMETHING TOTAL RANDOM";

var chekUpper = function (string) {
  var arr = string.split(" ");
  var isValid = true;
  arr.forEach((el) => {
    el.split("").forEach((char) => {
      if (char.toUpperCase() !== char) {
        isValid = false;
      }
    });
  });
  return isValid;
};
var x = chekUpper(someString);
console.log(x);

var chekUpper = function (string) {
  var arr = string.split(" ");
  var isValid = false;
  arr.forEach((el) => {
    el.split("").forEach((char) => {
      if (isFinite(parseInt(char))) {
        isValid = true;
      }
    });
  });
  return isValid;
};
var y = chekUpper(someString);
console.log(y);

var validHex = function (string) {
  var output = false;
  if (string.length === 4) {
    output = /^#[0-9A-F]{3}$/i.test(string);
  }
  if (string.length === 7) {
    output = /^#[0-9A-F]{6}$/i.test(string);
  }
  return output;
};

var x = validHex("#fff");
console.log(x);

var chekInterval = function (num) {
  if (num >= 1900 && num <= 2018) return true;
  else return false;
};

var numX = chekInterval(2250);
console.log(numX);

var validator = function () {
  var stringValidator = function (string) {
    var arr = string.split(" ");
    var isValid = true;
    arr.forEach((el) => {
      el.split("").forEach((char) => {
        if (char.toUpperCase() !== char) {
          isValid = false;
        }
      });
    });
    return isValid;
  };
  var passwordValidator = function (string) {
    var arr = string.split(" ");
    var isValid = false;
    arr.forEach((el) => {
      el.split("").forEach((char) => {
        if (isFinite(parseInt(char))) {
          isValid = true;
        }
      });
    });
    return isValid;
  };
  var colorValidator = function (string) {
    var output = false;
    if (string.length === 4) {
      output = /^#[0-9A-F]{3}$/i.test(string);
    }
    if (string.length === 7) {
      output = /^#[0-9A-F]{6}$/i.test(string);
    }
    return output;
  };
  var yearValidator = function (num) {
    if (num >= 1900 && num <= 2018) return true;
    else return false;
  };
  return { stringValidator, passwordValidator, colorValidator, yearValidator };
};

var newFunc = validator();
console.log(newFunc);
*/

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days
