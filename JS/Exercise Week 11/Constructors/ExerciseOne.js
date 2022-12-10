"use strict";
/*
// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

function Coffee(strength, flavour, milk, sugar) {
  this.strength = strength;
  this.flavour = flavour;
  this.milk = milk;
  this.sugar = sugar;
}

var coffee = new Coffee("Medium", "no flavor", "no milk", "no sugar");

console.log(coffee);
*/

/*
// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

function Movie(title, actors, director, genre, popularity) {
  this.title = title;
  this.actors = actors;
  this.director = director;
  this.genre = genre;
  this.popularity = popularity;
}

var myMovie = new Movie(
  "Sekula se ponovo zeni",
  "Dragoslav Lazic",
  "artistic",
  "top one movie on IMDB searches",
  ["Bata Zivoinovic", "Rados Bajic", "Milena Dravic"]
);
console.log(myMovie);
*/
/*
// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function Project(description, programmingLanguage, gitRepository, inDev) {
  this.description = description;
  this.programmingLanguage = programmingLanguage;
  this.gitRepository = gitRepository;
  this.inDev = inDev || null;
  this.printRepo = function () {
    console.log(this.gitRepository);
  };
  this.chekLang = function () {
    if (this.programmingLanguage === "JavaScript") {
      console.log("Writen in JS");
    } else {
      console.log("Not writen in JS");
    }
  };
  this.chekInDev = function () {
    if (this.inDev) {
      console.log("in development");
    } else {
      console.log("not in dev");
    }
  };
}

var project = new Project(
  "Something that says something",
  "JavaScript",
  "stefankostic88",
  "in development"
);
console.log(project);
project.chekLang();
project.chekInDev();
project.printRepo();

var proj = new Project("Something that says something", "JAVA", "neko95");
console.log(proj);
proj.chekLang();
proj.chekInDev();
proj.printRepo();

*/
/*
// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function CreateRecipe(
  name,
  type,
  complexity,
  ingList,
  prepTime,
  prepInstructions
) {
  this.name = name;
  this.typeOfCuisine = type;
  this.complexity = complexity;
  this.listOfIngredients = ingList;
  this.prepTime = prepTime;
  this.preparingInstruction = prepInstructions;
  this.printIng = function () {
    console.log(this.listOfIngredients);
  };
  this.chekIfCanBePreparedUnderFeftheen = function () {
    return this.prepTime < 15 ? true : false;
  };
  this.changeCuisine = function (newType) {
    this.typeOfCuisine = newType;
  };
  this.removeIng = function (ing) {
    var newArr = [];
    for (var i = 0; i < this.listOfIngredients.length; i++) {
      if (ing !== this.listOfIngredients[i])
        newArr[newArr.length] = this.listOfIngredients[i];
    }
    this.listOfIngredients = newArr;
  };
}

var burger = new CreateRecipe(
  "Burger",
  "Fast Food",
  1,
  ["onion", "mastard", "meat", "cheese", "catchup"],
  10,
  "Grill until ready"
);

console.log(burger);
burger.printIng();
console.log(burger.chekIfCanBePreparedUnderFeftheen());
burger.changeCuisine("Italian");
burger.removeIng("onion");
console.log(burger);

burger.printIng();
*/
