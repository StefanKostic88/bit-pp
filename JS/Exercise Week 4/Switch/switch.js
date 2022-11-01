"use strict";

var month = 4;
var results = "";
/*
if (month === 1) {
  results = "January";
} else if (month === 2) {
  results = "February";
} else if (month === 3) {
  results = "March";
} else if (month === 4) {
  results = "April";
} else if (month === 5) {
  results = "May";
} else {
  results = "None of the above";
}
*/

switch (month) {
  case 1:
    results = "January";
    break;
  case 2:
    results = "February";
    break;
  case 3:
    results = "March";
    break;
  case 4:
    results = "April";
    break;
  case 5:
    results = "May";
    break;
  case 6:
    results = "Jun";
    break;
  case 7:
    results = "July";
    break;
  case 8:
    results = "August";
    break;
  case 9:
    results = "September";
    break;
  case 10:
    results = "October";
    break;
  case 11:
    results = "November";
    break;
  case 12:
    results = "December";
    break;
  default:
    results = "Not a month ";
}

console.log(results);
