"use strict";

(function () {
  console.log("Hi");
  var Genre = function (name) {
    if (!name) throw new Error("Please Enter Valid Genre Name");
    this.name = name;
    this.getData = function () {
      return this.name[0].toUpperCase() + this.name.at(-1).toUpperCase();
    };
  };

  var Movie = function (title, genre, movieLength) {
    if (!title || !genre || !movieLength)
      throw new Error('"Please Enter Valid Parametar');
    if (!(genre instanceof Genre)) throw new Error("Must be a valid Genre");
    this.title = title;
    this.genre = genre;
    this.movieLength = movieLength;
    this.getData = function () {
      return (
        this.title + ", " + this.movieLength + " min, " + this.genre.getData()
      );
    };
  };

  var Program = function (date) {
    this.date = new Date(date);
    this.listOfMOvies = [];
    this.addMovie = function (movie) {
      if (!(movie instanceof Movie))
        throw new Error("Please select a valid movie");
      this.listOfMOvies.push(movie);
    };
    this.getData = function () {
      var formatedDate =
        this.date.getDate() +
        "." +
        (this.date.getMonth() + 1) +
        "." +
        this.date.getFullYear();
      var totalMoviesLength = this.listOfMOvies.reduce((acc, el) => {
        acc += el.movieLength;
        return acc;
      }, 0);

      var result =
        formatedDate + ", program duration " + totalMoviesLength + " min";
      this.listOfMOvies.forEach((movie) => {
        var movieItem =
          movie.title +
          ", " +
          movie.movieLength +
          "min, " +
          movie.genre.getData();
        result += "\n\t\t\t" + movieItem;
      });
      return result;
    };
  };

  var Festival = function (name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numverOfMoviesInProgram = function () {
      return this.listOfPrograms.reduce((acc, el) => {
        acc += el.listOfMOvies.length;
        return acc;
      }, 0);
    };
    this.addProgram = function (program) {
      if (!(program instanceof Program))
        throw new Error("Please select a valid program");
      this.listOfPrograms.push(program);
    };
    this.getData = function () {
      var result =
        this.name +
        " festival has " +
        this.numverOfMoviesInProgram() +
        " movie titles";
      this.listOfPrograms.forEach((el) => {
        result += "\n\t" + el.getData();
      });
      return result;
    };
  };

  var createMovie = function (title, leng, genre) {
    return new Movie(title, new Genre(genre), leng);
  };
  var createProgram = function (date) {
    return new Program(date);
  };

  try {
    var moviesArr = [
      { name: "Avatar", genre: "fantasy", duration: 240 },
      { name: "Saw", genre: "horror", duration: 90 },
      { name: "Matrix", genre: "action", duration: 120 },
      { name: "Rush Hour", genre: "comedy", duration: 85 },
    ];
    var programs = [{ date: "12/24/2022" }, { date: "8/24/2022" }];

    var [avatar, saw, matrix, rushHour] = moviesArr.map((el) => {
      return createMovie(el.name, el.duration, el.genre);
    });

    var [programDayOne, programDayTwo] = programs.map((el) =>
      createProgram(el.date)
    );

    programDayOne.addMovie(avatar);
    programDayOne.addMovie(saw);
    programDayTwo.addMovie(matrix);
    programDayTwo.addMovie(rushHour);
    programDayOne.getData();
    programDayTwo.getData();

    var cannes = new Festival("Cannes");
    cannes.addProgram(programDayOne);
    cannes.addProgram(programDayTwo);

    var data = cannes.getData();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
})();
