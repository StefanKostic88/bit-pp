var uiModule = (function () {
  var movieTitleEl = document.querySelector("#movie-title");
  var movieLengthEl = document.querySelector("#movie-length");
  var movieGenreEl = document.querySelector("#genre-select");
  var dateInputEl = document.querySelector("#program-date");

  var moviesContainerEl = document.querySelector("#movies-container");
  var moviesListContainer = document.getElementById("movie-list");

  var programContainerEl = document.querySelector("#program-container");
  var programListContainer = document.getElementById("program-list");

  var addMovieErrorEl = document.getElementById("add-movie-error");

  var dateInputEl = document.querySelector("#program-date");

  var addMovieToProgramErrEl = document.getElementById(
    "add-movie-to-pprogram-error"
  );

  /////Methods

  var collectData = function () {
    return {
      title: movieTitleEl.value,
      length: +movieLengthEl.value,
      genre: movieGenreEl.value,
    };
  };

  var collectDate = function () {
    return dateInputEl.value;
  };

  var renderMovieList = function (movie) {
    var tempLi = document.createElement("li");
    tempLi.textContent = movie.getData();
    console.log(tempLi);
    moviesContainerEl.append(tempLi);
  };

  var renderMovieOptions = function (movieTitle, index) {
    var optionEl = document.createElement("option");
    optionEl.setAttribute("value", index);
    optionEl.textContent = movieTitle;
    moviesListContainer.append(optionEl);
  };

  var renderProgramOptions = function (program, index) {
    var tempProgramOption = document.createElement("option");
    tempProgramOption.setAttribute("value", index);
    tempProgramOption.textContent = program.getProgramOptions();
    programListContainer.append(tempProgramOption);
  };

  var renderProgramList = function (propgram, index) {
    var tempLi = document.createElement("li");
    tempLi.setAttribute("id", index);
    tempLi.textContent = propgram.getData();
    programContainerEl.append(tempLi);
  };

  var isValid = function () {
    if (!movieTitleEl.value || !movieLengthEl.value || !movieGenreEl.value) {
      return false;
    } else {
      return true;
    }
  };

  var prgoramIsNotValid = function (date) {
    if (
      new Date(date.value).getTime() < Date.now() ||
      dateInputEl.value === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  var renderError = function (errMsg) {
    addMovieErrorEl.textContent = errMsg;
  };
  var renderProgramError = function (errMsg) {
    addMovieToProgramErrEl.textContent = errMsg;
  };

  var clearInput = function () {
    addMovieErrorEl.textContent = "";
    movieTitleEl.value = "";
    movieLengthEl.value = "";
    movieGenreEl.value = "";
  };

  var collectProgramAndMovieData = function () {
    return {
      movieList: +moviesListContainer.value,
      programList: +programListContainer.value,
    };
  };

  var updateProgram = function (index, program) {
    programContainerEl.children[index].textContent = program.getData();
  };

  /////Return

  return {
    collectData: collectData,
    collectDate: collectDate,
    renderMovieList: renderMovieList,
    renderMovieOptions: renderMovieOptions,
    renderProgramOptions: renderProgramOptions,
    renderProgramList: renderProgramList,
    isValid: isValid,
    renderError: renderError,
    clearInput: clearInput,
    prgoramIsNotValid: prgoramIsNotValid,
    renderProgramError: renderProgramError,
    collectProgramAndMovieData: collectProgramAndMovieData,
    updateProgram: updateProgram,
  };
})();
