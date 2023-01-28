var createMovieBtn = document.querySelector("#create-movie-btn");
var createProgramBtn = document.querySelector("#create-program-btn");
var addMovieToProgramBtn = document.querySelector("#add-movie-to-program-btn");

var movieTitleEl = document.querySelector("#movie-title");
var movieLengthEl = document.querySelector("#movie-length");
var movieGenreEl = document.querySelector("#genre-select");

var moviesContainerEl = document.querySelector("#movies-container");
var programContainerEl = document.querySelector("#program-container");
var addMovieErrorEl = document.getElementById("add-movie-error");
var addProgramErrorEl = document.getElementById("add-program-error");
var addMovieToProgramErrEl = document.getElementById(
  "add-movie-to-pprogram-error"
);

var moviesListContainer = document.getElementById("movie-list");
var programListContainer = document.getElementById("program-list");

var dateInputEl = document.querySelector("#program-date");

var festival = new Festival();
console.log(festival);

var addNewMovie = function (e) {
  e.preventDefault();

  if (!movieTitleEl.value || !movieLengthEl.value || !movieGenreEl.value) {
    addMovieErrorEl.textContent = "Invalid Input, all fields are required";
    return;
  }

  addMovieErrorEl.textContent = "";

  var genre = new Genre(movieGenreEl.value);
  var movie = new Movie(movieTitleEl.value, +movieLengthEl.value, genre);

  var tempLi = document.createElement("li");
  tempLi.textContent = movie.getData();
  moviesContainerEl.append(tempLi);

  festival.addMovieToList(movie);

  var index = festival.listOfMovies.length - 1;

  var tempMovieOption = document.createElement("option");
  tempMovieOption.setAttribute("value", index);
  tempMovieOption.textContent = movieTitleEl.value;
  moviesListContainer.append(tempMovieOption);
};

var addNewProgram = function (e) {
  e.preventDefault();

  if (
    new Date(dateInputEl.value).getTime() < Date.now() ||
    dateInputEl.value === ""
  ) {
    addProgramErrorEl.textContent = "Invalid Date";
    return;
  }

  var isNotValid = festival.listOfPrograms.some(function (el) {
    return new Date(dateInputEl.value).getTime() === el.chekIfValid();
  });

  if (isNotValid) {
    addProgramErrorEl.textContent = "Program Already Exists";
    return;
  }

  addProgramErrorEl.textContent = "";

  var inputDate = new Program(dateInputEl.value);

  festival.addProgramToList(inputDate);
  var index = festival.listOfPrograms.length - 1;

  var tempLi = document.createElement("li");
  tempLi.setAttribute("id", index);
  tempLi.textContent = inputDate.getData();
  programContainerEl.append(tempLi);

  var index = festival.listOfPrograms.length - 1;

  var tempMovieOption = document.createElement("option");
  tempMovieOption.setAttribute("value", index);
  tempMovieOption.textContent = inputDate.getFormatedDate();
  programListContainer.append(tempMovieOption);
};

var addMovieToProgramHandler = function (e) {
  e.preventDefault();
  if (!moviesListContainer.value || !programListContainer.value) {
    addMovieToProgramErrEl.textContent = "Invalid Input";
    return;
  }
  addMovieToProgramErrEl.textContent = "";

  var movieIndex = +moviesListContainer.value;
  var programIndex = +programListContainer.value;
  var movie = festival.listOfMovies.find((el, index) => index === movieIndex);
  var program = festival.listOfPrograms.find(
    (el, index) => index === programIndex
  );

  program.addMovieToList(movie);

  uiModule.updateProgram(programIndex, program);

  // programContainerEl.children[programIndex].textContent = program.getData();
};

createMovieBtn.addEventListener("click", addNewMovie);
createProgramBtn.addEventListener("click", addNewProgram);
addMovieToProgramBtn.addEventListener("click", addMovieToProgramHandler);
