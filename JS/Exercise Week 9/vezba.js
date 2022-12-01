// var func = function (a, b) {
//   var multy = a * b;
//   return function (a1, b1) {
//     return multy + a1 + b1;
//   };
// };

// var x = func(2, 3);

// var b = x(1, 2);
// console.log(b);

/*
var curPage = 1;
function chnagePageUp() {
  curPage++;
}

function chnagePageDOwn() {
  curPage--;
}

console.log(curPage);
chnagePageUp();
console.log(curPage);
chnagePageUp();
console.log(curPage);
chnagePageDOwn();
console.log(curPage);
chnagePageDOwn();
console.log(curPage);
*/
/*
function map(a, cb) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    var processedElement = cb(element);
    console.log(cb(element));
    // b[b.length] = processedElement;
    b[b.length] = cb(element);
  }
  return b;
}

function incrementByOne(e) {
  if (e % 2 === 0) {
    return e + 5;
  } else {
    return e + 10;
  }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var res = map(arr, incrementByOne);
console.log(res);
*/

/*



var resIncrementByOne = map(arr, incrementByOne);
console.log(resIncrementByOne);

function double(e) {
  return e * 2;
}
var resDouble = map(arr, double);
console.log(resDouble);

//write a function which takes array as input and return array of even numbers multiplied by themself
function proccess(e) {
  if (e % 2 === 0) {
    return e * e;
  }
  return e;
}



*/
/*
function filter(a, cb) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    var isConditionTrue = cb(element);
    if (isConditionTrue) {
      b[b.length] = a[i];
    }
  }

  return b;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];




function isEven(e) {
  return e % 2 === 0;
}
var resEven = filter(arr, isEven);
console.log(resEven);

function isOdd(e) {
  return e % 2 !== 0;
}
var resOdd = filter(arr, isOdd);
console.log(resOdd);

function isNegative(e) {
  return e < 0;
}
var resNegative = filter(arr, isNegative);
console.log(resNegative);

function isPositive(e) {
  return e > 0;
}
var resPositive = filter(arr, isPositive);
console.log(resPositive);
*/
/*
function filter(a, cb) {
  var b = [];
  // console.log(a, "NIZ");
  // console.log(cb, "FUNKCIJU");

  // var g = [];
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    var isValid = cb(element);

    if (isValid) {
      b[b.length] = element;
    }
  }
  console.log(b);

  return b;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

function even(num) {
  return num % 2 === 0;
}
function odd(num) {
  return num % 2 !== 0;
}

filter(arr, even);

// var tempEVEN = filter(arr)[0];
// console.log(tempEVEN);

// varOdd = filter(arr)[1];
// console.log(varOdd);

// var isConditionTrue = cb(element);
// if (isConditionTrue) {
//   b[b.length] = a[i];
// }

// if (element % 2 === 0) {
//   b[b.length] = element;
// }
// if (element % 2 !== 0) {
//   g[g.length] = element;
// }
*/
/*
var x = function (a, b) {
  var newNum = a * a + b;
  function sum(temp, num) {
    return temp + num;
  }

  return sum(newNum, 50);
};

var t = x(5, 1);
console.log(t);
*/

// function x() {}

// if (true) {
//   var a = 25;
// }

// console.log(a);

/*
var result = true; /// true


function subtract(first, second) {
  return first - second;
}

result = subtract(12, -10); // 22


result = subtract(22, 2); //20

console.log(result);
*/

/*
"use strict";

myVar = "random"; ///

function addOne(num) {
  return num + 1;
}

var result = addOne(4);

console.log(result);
*/

/*
var global = 123;

var resetGlobal = function () {
  global = -1;
};
// resetGlobal();
console.log(global);
*/

/*
// Example 3

var global = 123;

var resetGlobal = function () {
  global = -1;
};

resetGlobal; /// ignore

console.log(global);
*/

/*
// Example 4

var global = 123;

var resetGlobal = function () {
  global = arguments[0] || -1;
  // arguments = '', null, nan, undefined - false
};

resetGlobal(10);

console.log(global); // 10

resetGlobal(0);

console.log(global); // -1
*/

/*
// Example 5

"use strict";

var result = square(10);

console.log(result); /// undefined

function square(num) {
  num *= num;
  // return (num *= num);
}
///////////////////

// function square(num) {
//   num *= num;
// }
// var result;
// result = square(10);
*/

/*
// Example 6

"use strict";

var result = square(10);

console.log(result);

function square(num) {
  return (num *= num);
}
*/

/*
// Example 7
// var result;

function toString(num) {
  var result = num + "";

  return result;
}
toString(23);
// result = 23;
console.log(toString(23)); //
*/
/*
// Example 8

function toString(num) {
  "use strict";

  result = num + "";

  return result;
}

toString(num);

console.log(result);
*/

/*
// Example 9

var output = toString(0.15);

console.log(output); /// not function

var toString = function (num) {
  var result = num + "";

  return result;
};

var toString; // undefined
var output; // undefined
output = toString(0.15); //=>  undefined(0.15);
console.log(output); //greska

toString = function (num) {
  var result = num + "";

  return result;
};
*/

/*
// Example 10

var toString = function (num) {
  var result = num + "";

  return result;
};

var output = toString(0.15);

console.log(output);

var toString;
var output;
toString = function (num) {
  var result = num + "";

  return result;
};
output = toString(0.15);
console.log(output);

*/
/*
// Example 11

var toString = function (num) {
  console.log(num);
  num = num || "NEMA VREDNOSTI";

  var result = num + "";

  return result;
};

var output = toString;

console.log(output);
*/

/*
// Example 12

// 'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {
  global++;
};

incrementGlobal();

console.log(global);

console.log(typeof global);
*/

/*
// Example 13

function sum(num1, num2) {
  console.log(num1, num2);
  num1 = num1 || 0;
  num2 = num2 || 0;
  console.log(num1, num2);

  if (!num1 && !num2) {
    return -1;
  }
  return num1 + num2;
}
var sumNumbers = sum;
var result = sumNumbers();
console.log(result);

// console.log(false || "" || NaN || false || "CAO" || undefined);
console.log(true && "x" && NaN && false && "CAO" && undefined);
*/
/*
// Example 14

var x = 21;

var girl = function () {
  console.log(x); //undefined

  var x = 20;
};

girl();
*/
/*
// Example 15

function test() {
  var a;

  function foo() {
    return 2;
  }

  console.log(a);

  console.log(foo());

  var a = 1;
}

test();
*/
