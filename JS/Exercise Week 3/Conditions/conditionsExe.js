// conditions lecture exercises
/*
1. Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.


var a = 10;
var b = 10;

var result = "";

if (a > b) {
  result = a + " is greater number";
} else if (b > a) {
  result = b + " is greater";
}
/*

/*
2. Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

var a = 10;
var result = "";
if (a % 2 === 0) {
  result = "even";
} else {
  result = "odd";
}
*/

/*
3. Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.
var a = 14;
var result = "";

if (a % 3 === 0 && a % 5 === 0) {
  result = a + " is divisible by 3 and 5";
} else {
  result = a + " is not divisible by 3 and 5";
}
*/

/* 4. Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

var product = 3 * 2 * -7;

if (product < 0) {
  console.log("sign is minus (-)");
} else {
  console.log("sign is plus(+)");
}
product < 0 ? console.log("sign is minus (-)") : console.log("sign is plus(+)");
*/
/*
5. Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

var a = 10;
var a = 7;
if (typeof a === "number") {
  if (a % 2 === 0) {
    console.log(a / 2);
  } else {
    console.log("X");
  }
}
*/
/*
6. Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
  console.log(a + " is the lagest");
} else if (b > a && b > c && b > d && b > e) {
  console.log(b + " is the lagest");
} else if (c > a && c > b && c > d && c > e) {
  console.log(c + " is the lagest");
} else if (d > a && d > b && d > c && d > e) {
  console.log(d + " is the lagest");
} else if (e > a && e > b && e > c && e > d) {
  console.log(e + " is the lagest");
}

7. Write a conditional statement to print three numbers as sorted number list.

var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c) {
  b > c ? console.log(a, b, c) : console.log(a, c, b);
} else if (b > a && b > c) {
  a > c ? console.log(b, a, c) : console.log(b, c, a);
} else if (c > a && c > b) {
  a > b ? console.log(c, a, b) : console.log(c, b, a);
}
*/

// conditions exercises
/*
1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.

var product = 3 * 2 * -7;

if (product < 0) {
  console.log("sign is minus (-)");
} else {
  console.log("sign is plus(+)");
}
product < 0 ? console.log("sign is minus (-)") : console.log("sign is plus(+)"); */

/*
2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
  console.log(a + " is the lagest");
} else if (b > a && b > c && b > d && b > e) {
  console.log(b + " is the lagest");
} else if (c > a && c > b && c > d && c > e) {
  console.log(c + " is the lagest");
} else if (d > a && d > b && d > c && d > e) {
  console.log(d + " is the lagest");
} else if (e > a && e > b && e > c && e > d) {
  console.log(e + " is the lagest");
}
*/

/* 3. Write a conditional statement to print three numbers as sorted number list.

var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c) {
  b > c ? console.log(a, b, c) : console.log(a, c, b);
} else if (b > a && b > c) {
  a > c ? console.log(b, a, c) : console.log(b, c, a);
} else if (c > a && c > b) {
  a > b ? console.log(c, a, b) : console.log(c, b, a);
}
*/

/*
4 .Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

var a = 10;
var a = 7;
if (typeof a === "number") {
  if (a % 2 === 0) {
    console.log(a / 2);
  } else {
    console.log("X");
  }
}
*/
/*
5. Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.


var a = 10;
var b = 10;

var result = "";

if (a > b) {
  result = a + " is greater number";
} else if (b > a) {
  result = b + " is greater";
}
*/
/*
6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

var celsiusVal = 60;
var fahrenheitVal = (9 * celsiusVal) / 5 + 32;
console.log(celsiusVal + " deg C is " + fahrenheitVal + " deg F");
*/

/*
7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.


var sampleInput = 11;
sampleInput = 32;
var result;
if (sampleInput < 13) {
  result = 13 - sampleInput;
} else {
  result = (sampleInput - 13) * 2;
}

console.log(result);
*/
/*
8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.

var a = 12;
var b = 5;
a = 8;
b = 8;
var result;

result = a === b ? (a + b) * 3 : a + b;
console.log(result);
*/
/*
9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.


var a = 5;
var b = 54;
var result;
a = 6;
b = 50;
a = 40;
b = 10;

// if (a === 50 || b === 50 || a + b === 50) {
//   result = true;
// } else {
//   result = false;
// }
result = a === 50 || b === 50 || a + b === 50 ? true : false;

console.log(result);
*/
/*
10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.


var a = 12;
a = 34;
a = 256;
if (a >= 20 && a <= 100) {
  console.log("20 <> 100");
} else if (a >= 100 && a <= 400) {
  console.log("100 <> 400");
} else {
  console.log("-");
}
*/
