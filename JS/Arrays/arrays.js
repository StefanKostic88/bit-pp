"use strict";

var arr = [2, 3, 4];
var arr2 = [false, "cao", 2, "3", [1, 2, 3]];

console.log(arr2[2]);

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr3[1][1]); //5 [x,[4,5,6], x] // 5

arr[10] = "a";

console.log(arr);

delete arr[10];
console.log(arr);
console.log(arr.length);

//delete brise element iz niza ali zadrzava length
console.log(arr.length);
