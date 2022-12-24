"use strict";

(function () {
  console.log("Hi");
  var Genre = function (name) {
    if (!name) throw new Error("Please Enter Valid Genre Name");
    this.name = name;
  };

  var Movie = function (title, genre, movieLength) {
    if (!title || !genre || !movieLength)
      throw new Error('"Please Enter Valid Parametar');
    if (!(genre instanceof Genre)) throw new Error("Must be a valid Genre");
    this.title = title;
    this.genre = genre;
    this.movieLength = movieLength;
  };

  var Program = function (date) {
    this.date = new Date(date);
    this.listOfMOvies = [];
    this.totalMovies = this.listOfMOvies.length;
  };

  var Festival = function () {};

  try {
  } catch (err) {
    console.log(err.message);
  }
})();
