"use strict";

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// for (let i = 1; i < 16; i++) {
//   i % 2 === 0 ? console.log("even") : console.log("Odd");
// }

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// let sum = 0;
// let multy3Sum = 0;
// let multy5Sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0) {
//     multy3Sum = i;
//     multy3Sum += multy3Sum;
//   }
//   if (i % 5 === 0) {
//     multy5Sum = i;
//     multy5Sum += multy5Sum;
//   }
//   sum = multy3Sum + multy5Sum;
// }

// 3. Write a program to compute the sum and product of an array of integers.

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let product = 1;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   product *= arr[i];
// }
// 4. Write a program which prints the elements of the following array as a single string.

// const x = ["1", "A", "B", "c", "r", true, NaN, undefined];
// let singleString = "";
// for (let i = 0; i < x.length; i++) {
//   singleString += x[i] + " ";
// }
// console.log(singleString);

// 5. Write a program that prints the elements of the following array.

// const arr = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     newArr.push(arr[i][j]);
//   }
// }
// console.log(newArr);

// 6 Write a program that outputs the sum of squares of the first 20 numbers.

// let sum = 0;
// for (let i = 1; i < 21; i++) {
//   let square = i * i;
//   console.log(square);
//   sum += square;
// }
// console.log(sum);

/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

class StudentGrades {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }
}

const mark = new StudentGrades("Mark", 80);
// console.log(mark);

const arr = [
  new StudentGrades("Mark", 80),
  new StudentGrades("Marko", 77),
  new StudentGrades("Dany", 88),
  new StudentGrades("Jhon", 95),
  new StudentGrades("Thoms", 68),
];

let result = "";
for (let i = 0; i < arr.length; i++) {
  let grade = "";
  let name = "";
  for (const [key, val] of Object.entries(arr[i])) {
    if (key === "points") {
      if (val < 60) {
        grade = "F";
      } else if (val < 70 && val >= 60) {
        grade = "D";
      } else if (val < 80 && val >= 70) {
        grade = "C";
      } else if (val < 90 && val >= 80) {
        grade = "B";
      } else if (val < 100 && val >= 90) {
        grade = "A";
      }
    }
    if (key === "name") {
      name = val;
    }
  }
  result += "---" + name + " got grade " + grade + "---\n";
}
console.log(result);
*/
// 8.Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

// for (let i = 1; i < 101; i++) {
//   let num = i;
//   if (i % 3 === 0 && i % 5 === 0) {
//     num = "FizzBizz";
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     num = "Fizz";
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     num = "Bizz";
//   }
//   console.log(num);
// }
