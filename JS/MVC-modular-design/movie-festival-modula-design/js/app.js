"use strict";

(function (data, ui) {
  var createMovieBtn = document.querySelector("#create-movie-btn");
  var createProgramBtn = document.querySelector("#create-program-btn");
  var addMovieToProgramBtn = document.querySelector(
    "#add-movie-to-program-btn"
  );

  var addNewMovie = function (e) {
    e.preventDefault();
    try {
      if (!ui.isValid())
        throw new Error("Invalid Input, all fields are required");
      var movie = data.generateMovie(ui.collectData());

      ui.renderMovieList(movie);
      var index = data.festival.addMovieToList(movie) - 1;
      ui.renderMovieOptions(movie.getTitle(), index);
      ui.clearInput();
    } catch (err) {
      ui.renderError(err.message);
    }
  };

  var addNewProgram = function (e) {
    e.preventDefault();
    try {
      //   if (
      //     new Date(dateInputEl.value).getTime() < Date.now() ||
      //     dateInputEl.value === ""
      //   ) {
      //     addProgramErrorEl.textContent = "Invalid Date";
      //     return;
      //   }

      //   var isNotValid = festival.listOfPrograms.some(function (el) {
      //     return new Date(dateInputEl.value).getTime() === el.chekIfValid();
      //   });

      //   if (isNotValid) {
      //     addProgramErrorEl.textContent = "Program Already Exists";
      //     return;
      //   }

      var program = data.generateProgram(ui.collectDate());

      if (ui.prgoramIsNotValid(ui.collectDate()))
        throw new Error("Invalid Program Input");
      var index = data.festival.addProgramToList(program) - 1;
      ui.renderProgramList(program, index);
      ui.renderProgramOptions(program, index);
    } catch (err) {
      ui.renderProgramError(err.message);
    }
  };

  var addMovieToProgramHandler = function (e) {
    e.preventDefault();

    try {
      var { movieList: movieIndex, programList: programIndex } =
        ui.collectProgramAndMovieData();
      var festival = data.festival;

      var movie = festival.listOfMovies.find(
        (el, index) => index === movieIndex
      );
      var program = festival.listOfPrograms.find(
        (el, index) => index === programIndex
      );
      program.addMovieToList(movie);
      ui.updateProgram(programIndex, program);

      //   programContainerEl.children[programIndex].textContent = program.getData();
    } catch (err) {}
  };

  createMovieBtn.addEventListener("click", addNewMovie);
  createProgramBtn.addEventListener("click", addNewProgram);
  addMovieToProgramBtn.addEventListener("click", addMovieToProgramHandler);
})(dataModule, uiModule);
