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


var newVal = arr.reduce(
  function (obj, el, index, arr) {
    var temp = obj.minVale;
    console.log(temp);
    if (temp > el) {
      temp = el;
    }
    obj.minVale = temp;
    obj.lastIndex = arr.lastIndexOf(temp);

    return obj;
  },
  { minVale: 0 }
);

console.log(newVal, "NEW VALUE");
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



var mostExpensive = products.reduce((product, el, index, arr) => {
  var name = el.name;
  var price = arr[0].price;
  if (price < el.price) {
    product = name;
  }
  return product.toUpperCase();
}, "");
console.log(mostExpensive);

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

/*

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

var curDate = new Date();

var dateToBirthDay = function (curDate, birthDate) {
  var time = curDate.getTime();
  var birth = new Date(birthDate).getTime();
  var result = Math.floor((birth - time) / 86400000);
  return "you have " + result + " days left until birthday";
};

var x = dateToBirthDay(curDate, "11.12.2023");
console.log(x);
*/

/*
// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

var getMiliSec = function (arr) {
  console.log(arr);
  var hourToMili = arr[0] * 60 * 60 * 1000;
  var minToMili = arr[1] * 60 * 1000;
  var secToMili = arr[2] * 1000;
  var sum = hourToMili + minToMili + secToMili;
  return sum;
};

var getDepTime = function (start, end) {
  var startArr = start.split(":").map((el) => +el);
  var endArr = end.split(":").map((el) => +el);
  var result = getMiliSec(endArr) - getMiliSec(startArr);
  var hour = Math.floor(result / 3600000);
  var min = Math.floor(result / 60000) - hour * 60;
  var sec =
    startArr[2] > endArr[2]
      ? 60 - (startArr[2] - endArr[2])
      : endArr[2] - startArr[2];

  var timeLeft = [hour, min, sec].join(":");
  return timeLeft;
};
var x = getDepTime("8:22:13", "11:22:10");
console.log(x);
*/

/*
// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

var CreateDistance = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var p1 = new CreateDistance(3, 5, 1);
var p2 = new CreateDistance(8, -5, 0);

// console.log(p1, p2);

var findDistance = function (val1, val2) {
  console.log(val1, val2);
  var distance = Math.sqrt(
    (val2.x - val1.x) ** 2 + (val2.y - val1.y) ** 2 + (val2.z - val1.z) ** 2
  );

  return distance.toFixed(2);
};

var x = findDistance(p1, p2);
console.log(x);
*/
/*
// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

var random20 = function () {
  var min = 5;
  var max = 20;
  var result = Math.round(Math.random() * (max - min)) + min;
  console.log(result);
};
var random100 = function () {
  var min = 50;
  var max = 100;
  var result = Math.round(Math.random() * (max - min)) + min;
  console.log(result);
};

random20();
random100();
var generate = function (num) {
  return Math.round(Math.random() * num);
};
var generateArr = function (num, cb) {
  return Array.from(new Array(num), () => cb(num));
};

var x = generateArr(7, generate);
console.log(x);
*/

/*
// 12. Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

var arr = [3, 6, 11, 2, 9, 1];

var shufle = function (arr) {
  var newArr = arr.sort(() => {
    return Math.random() - 0.5;
  });
  return newArr;
};

var x = shufle(arr);
console.log(x);
*/
