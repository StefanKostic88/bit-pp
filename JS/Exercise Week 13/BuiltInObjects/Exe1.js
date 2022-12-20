"use strict";

/*
// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 > 54321

var reverseNum = function (num) {
    var str = ("" + num).split("");
    str.sort(function (a, b) {
      var num1 = parseInt(a);
      var num2 = parseInt(b);
      return num2 - num1;
    });
    var result = parseInt(str.join(""));
    return result;
  };
  
  var x = reverseNum(12345);
  console.log(typeof x, x);

  */

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” > “abeemrstw”

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;

// 4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]

// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// &#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
// &#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39;

// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;

// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;

// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;

// var addLeterrs = function (oldWord, newWord, type) {
//   // console.log("00000".replace("000", "123"));
//   var result = "";
//   var index = 0;

//   if (type === "l") {
//     index = oldWord.length - newWord.length;
//     result = oldWord.slice(0, index) + newWord;
//   }
//   if (type === "r") {
//     index = newWord.length - 1;
//     result = newWord + oldWord.slice(index, -1);
//   }

//   return result;
// };

// var x = addLeterrs("0000000", "123", "r");
// console.log(x);

// var firstLetter = function (str) {
//   //   return str.slice(0, 1).toUpperCase() + str.slice(1, -1);
//   var arr = str.split("");
//   arr[0] = arr[0].toUpperCase();
//   return arr.join("");
// };

// var x = firstLetter("js string exercises");
// console.log(x);

// var sortLeterrs = function (word) {
//   return word.toLowerCase().split("").sort().join("");
// };

// var x = sortLeterrs("Webmaster");
// console.log(x);

// 'Republic Of Serbia'

// var sortWords = function (sent) {
//   var newString = sent
//     .split(" ")
//     .map((el) => el.split("").sort().join(""))
//     .join(" ");
//   return newString;
// };
// var x = sortWords("Republic Of Serbia");
// console.log(x);

// &quot;John Snow&quot;

// var createArr = function (string) {
//   return string.split(" ");
// };
// var x = createArr("John Snow");
// console.log(x);

// var removeLast = function (string) {
//   return string.split(" ")[0] + " " + string.split(" ")[1].slice(0, 1) + ".";
// };
// var x = removeLast("John Snow");
// console.log(x);

// &quot;somerandomaddress@example.com&quot;

// var replaceMail = function (string) {
//   var index = string.indexOf("@");
//   var first = string
//     .slice(0, index)
//     .split("")
//     .map(function (el) {
//       return el.replace(el, ".");
//     })
//     .join("");
//   var second = string.slice(index);
//   return first + second;
// };

// var x = replaceMail("somerandomaddress@example.com");
// console.log(x);

var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";

var switchLetters = function (string) {
  var newArr = string.split(" ").map((el) => {
    console.log(el);
    // var temp;
    // if (UPPER.includes(el)) {
    //   temp = el.toLowerCase();
    // }
    // if (LOWER.includes(el)) {
    //   temp = el.toUpperCase();
    // }

    // return temp;
  });
  // console.log(newArr.join(""));
};

switchLetters("The Quick Brown Fox");
