"use strict";

// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
  strength: "strong",
  flavor: "no flavor",
  milk: "no milk",
  sugar: "without sugar",
};

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var favMovie = {
  title: "Sekula se ponovo zeni",
  director: "Dragoslav Lazic",
  genre: "artistic",
  popularity: "top one movie on IMDB searches",
  actors: ["Bata Zivoinovic", "Rados Bajic", "Milena Dravic"],
};

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

var project = function (des, progLang, gitRepo, inDev) {
  return {
    desription: des,
    programmingLanguage: progLang,
    gitRepository: gitRepo,
    isInDev: inDev,
    printRepo: function () {
      console.log("Repository is" + this.gitRepository);
    },
    checkProLang: function () {
      this.programmingLanguage === "JavaScript"
        ? console.log("Project is writen in JS")
        : console.log("No JS used");
    },
    checkIfInDev: function () {
      this.isInDev
        ? console.log("Project is in developement")
        : console.log("not in development");
    },
  };
};

var stefan = project(
  "Something that says something",
  "JavaScript",
  "stefankostic88",
  "in development"
);

var neko = project("Something that says something", "JAVA", "neko95");

console.log(stefan);
stefan.printRepo();
stefan.checkProLang();
stefan.checkIfInDev();
console.log(neko);
neko.printRepo();
neko.checkProLang();
neko.checkIfInDev();

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

var createRecipe = function (
  name,
  type,
  complexity,
  ingList,
  prepTime,
  prepInstructions
) {
  return {
    name: name,
    typeOfCuisine: type,
    complexity: complexity,
    listOfIngredients: ingList,
    prepTime: prepTime,
    preparingInstruction: prepInstructions,
    chekIfCanBePreparedUnderFeftheen: function () {
      return this.prepTime < 15 ? true : false;
    },
    changeCuisine(newType) {
      this.typeOfCuisine = newType;
    },
    removeIng(ing) {
      var newArr = [];
      for (var i = 0; i < this.listOfIngredients.length; i++) {
        if (ing !== this.listOfIngredients[i])
          newArr[newArr.length] = this.listOfIngredients[i];
      }
      this.listOfIngredients = newArr;
    },
  };
};

var burger = createRecipe(
  "Burger",
  "Fast Food",
  1,
  ["onion", "mastard", "meat", "cheese", "catchup"],
  10,
  "Grill until ready"
);
console.log(burger);
burger.changeCuisine("Vegan");
console.log(burger);
burger.changeCuisine("Something Else");
console.log(burger);

burger.removeIng("meat");
console.log(burger);
