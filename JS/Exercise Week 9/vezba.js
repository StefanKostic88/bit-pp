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
