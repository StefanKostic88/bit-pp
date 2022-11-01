"use strict";

var stringNum = "23asdasdasd";

var number = parseInt(stringNum); //drugi parametar je za odredjivanje vrste broj
//primer 2 je za binarni broj 16 sa hexadecimalni 10decimalna osnova
console.log(typeof stringNum, typeof number, number);

var numFloat = parseFloat("11.11fff656");

console.log(numFloat);

var nan1 = isNaN(23);

console.log(nan1);
console.log(NaN === NaN);

var fin = isFinite(23);
console.log(fin);

function calcMax(a, b) {
  if (!isFinite(a) || !isFinite(b)) return "Invali Input";
  if (a > b) return a;
  if (a < b) return b;
  return "Numbers are equal";
}

var k = calcMax(9, 10);
console.log(k);
