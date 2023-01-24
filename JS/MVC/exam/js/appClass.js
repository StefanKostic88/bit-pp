class App {
  _submitInfoEl = document.getElementById("add-info-btn");
  constructor() {
    this.pass = 0;
    this.fail = 0;
  }

  controlFormHandler(handler) {
    this._submitInfoEl.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
