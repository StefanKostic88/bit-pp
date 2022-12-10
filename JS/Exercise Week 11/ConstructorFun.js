"use strict";
// uvek se pise velikim slovom

function Recipe(name, num) {
  this.name = name;
  this.num = num;
}

var x = new Recipe("gulsa", 50);
console.log(x);

//ako se izostavi new ispred ove fukcije, ona vraca undefined ali kreira globalne varijable

// iza zavese se radi ovo

// function Recipe(name, num) {
//     this = {};
//     this.name = name;
//     this.num = num;
//     return this;
//   }

// instanceof operator

console.log(x instanceof Recipe);

var p = {
  name: "Stefan",
};

console.log(p instanceof Recipe);
console.log(p instanceof Object);
console.log(x instanceof Object);
console.log(Array instanceof Object);
console.log(Function instanceof Object);
