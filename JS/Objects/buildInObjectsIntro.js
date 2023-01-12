"use strict";

//String konstruktorska funkcija

var x = "Hello";
console.log(typeof x); //str

var objString = new String("world");
console.log(typeof objString); //obj

console.log(Boolean("")); //false
console.log(Boolean(new String(""))); //true
// console.log(typeof String(33));

console.log(String({ p: 1 })); // objectObject
//poziva se metoda toString
console.log("{p:1}");

var arr = [0, 2, 5, 5, 6];

arr.pop();
arr.push(10);
arr.shift();
arr.unshift(15);
console.log(arr);

var res = arr.push(10);
console.log(res); //vraca length novog niza
res = arr.pop();
console.log(res); //vraca element koji je izbacen

var arr2 = arr.filter((el) => el < 6).map((el) => el * 2);
console.log(arr2);
