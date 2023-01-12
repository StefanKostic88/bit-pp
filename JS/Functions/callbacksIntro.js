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
var resEven = filter(arr, function (e) {
  return e % 2 === 0;
});
console.log(resEven);

var resOdd = filter(arr, function (e) {
  return e % 2 !== 0;
});
console.log(resOdd);

var resNegative = filter(arr, function (e) {
  return e < 0;
});
console.log(resNegative);

var resPositive = filter(arr, function (e) {
  return e > 0;
});
console.log(resPositive);

function map(a, cb) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    var processedElement = cb(element);
    b[b.length] = processedElement;
  }
  return b;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

function incrementByOne(e) {
  return e + 1;
}
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
var res = map(arr, proccess);
console.log(res);
