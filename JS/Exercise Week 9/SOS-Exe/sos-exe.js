"use strict";

/*
// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false
var containsFive = function (string, cb) {
  for (var i = 0; i < string.length; i++) {
    if (cb(parseInt(string[i]))) return true;
  }
  return false;
};

var x = containsFive("1b589abd", function (el) {
  return el === 5;
});
console.log(x);
*/
/*
// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

var replaceJS = function (string, cb) {
  var word = "";
  var newArr = [];
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (
      string[i] === " " ||
      string[i] === ", " ||
      string[i] === string[string.length - 1]
    ) {
      newArr[newArr.length] = word;
      word = "";
    } else word += string[i];
  }

  for (var i = 0; i < newArr.length; i++) {
    if (cb(newArr[i])) {
      newArr[i] = "**";
    }
    output += newArr[i] + " ";
  }
  return output;
};

var x = replaceJS("Programming in is super JS interesting!", function (el) {
  return el === "JS";
});
console.log(x);
*/
/*
// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

var insertChar = function (string, index, char, cb) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (cb(i, index)) {
      newString += char;
    }
    newString += string[i];
  }
  return newString;
};

var x = insertChar("Goo morning!", 3, "d", function (curIndex, index) {
  return curIndex === index;
});
console.log(x);
*/

/*
// Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

var insertChar = function (string, index, cb) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (!cb(i, index)) {
      newString += string[i];
    }
  }
  return newString;
};

var x = insertChar("Goodd morning!", 3, function (curIndex, index) {
  return curIndex === index;
});
console.log(x);
*/

/*

// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

var deleteSecondEl = function (arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(i)) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
};

var x = deleteSecondEl([3, 5, 1, 8, 90, -4, 23, 1, 67], function (el) {
  return el % 2 === 0;
});
console.log(x);
*/

/*
// 6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

var replaceD = function (arr, min, max, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(i, min, max)) {
      arr[i] = arr[i] * 2;
    }
  }
  return arr;
};

var x = replaceD(
  [3, 5, 1, 8, 90, -4, 23, 1, 67],
  2,
  6,
  function (el, min, max) {
    return el >= min && el <= max;
  }
);
console.log(x);
*/

/*
// 7. Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

var checkArr = function (arr1, arr2, cb) {
  var count = 0;
  for (var i = 0; i < arr1.length; i++) {
    var rep = 0;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) rep++;
    }
    if (rep > 0) count++;
  }
  return count === arr1.length;
};

checkArr([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);
*/
/*
// 8. Write a function that sorts an array of strings by the number of appearances of the letter
// ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

var countLetters = function (string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      count += 1;
    }
  }
  return count;
};

var recFun = function (arr, count = 0, maxCount, finalArr) {
  if (count === maxCount) return finalArr;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (countLetters(arr[i]) === count) {
      newArr[newArr.length] = arr[i];
    }
  }
  count++;
  recFun(arr, count, maxCount, newArr);
  return newArr;
};

var sortWords = function (arr, cb, cb2) {
  var newArr = [];
  var output = [];
  var count = 0;
  var maxCount = 0;
  for (var i = 0; i < arr.length; i++) {
    maxCount = cb(arr[i]) > maxCount ? cb(arr[i]) : maxCount;
  }
  count = maxCount;
  maxCount += 1;
  for (var i = 0; i < maxCount; i++) {
    newArr[newArr.length] = cb2(arr, i, maxCount);
  }
  for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr[i].length; j++) {
      output[output.length] = newArr[i][j];
    }
  }
  return output;
};

var x = sortWords(
  ["aaaas", "amazing", "apple", "JavaScript", "tea", "morning"],
  countLetters,
  recFun
);
console.log(x);
*/

/*
// 11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
// 78
// 111
// 4
// 4321

var printNum = function (arr, cb) {
  var string = "";
  for (var i = 0; i < arr.length; i++) {
    var letters = "" + arr[i];
    string += cb(letters);
    string += "\n";
  }
  return string;
};

var x = printNum([78, 111, 4, 4321], function (letters) {
  var string = "";

  for (var i = 0, j = letters.length - 11; i <= 10; i++, j++) {
    if (i <= 10 - letters.length) {
      string += "*";
    } else {
      string += letters[j];
    }
  }

  return string;
});
console.log(x);
*/

/*
// 9. Write a function that prints out the date of the next day.
// Output: 25. 10. 2018.

function nextday() {
  dateObj.setDate(dateObj.getDate() + 1);
  console.log(dateObj.getDate(), dateObj.getMonth() + 1, dateObj.getFullYear());
}
nextday();
*/
/*
// 10. Write a function that prints out the date of the previous day.
// Output: 23. 10. 2018.

var dateObj = new Date();

function prevDay() {
  dateObj.setDate(dateObj.getDate() - 1);
  console.log(dateObj.getDate(), dateObj.getMonth() + 1, dateObj.getFullYear());
}
prevDay();
*/

// x("25");
// x("2555");
