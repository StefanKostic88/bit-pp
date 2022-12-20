"use strict";
console.log("test 1");
console.log("test 2");
console.log("test 3");
try {
  //   console.log(b);
  var c = null;
  if (!c) {
    throw { message: "not an array" };
    // throw new Error("not an array");
  }
} catch (error) {
  //   var errNode = document.createElement("p");
  //   errNode = classList.add("err");
  //   errNode.textContent = error.message;
  //   console.log(error.message);
  // body.append(errNode);
  //   console.log(error.name);
  //   console.log(err.stack);
  console.log(error.message);
} finally {
  console.log("DONE");
}
console.log("test 4");
console.log("test 5");
console.log("test 6");

var x = ["Stefan", "Goran", "Jovan", "Radasin", "Stefan", "Goran"];

var nesto = x.reduce(function (obj, el, index, arr) {
  x.forEach((el1) => {
    var counter = 0;
    counter = el === el1 ? counter++ : counter;
    console.log(counter);
  });
  obj[el] = 0;
  //   console.log(obj);

  return obj;
}, {});
