class App {
  _submitInfoEl = document.getElementById("add-info-btn");
  constructor() {
    this.pass = 0;
    this.fail = 0;
  }

  controlFormHandler(handler) {
    this._submitInfoEl.addEventListener("click", function (e) {
      var subjectNameEL = document.getElementById("subject-name");
      var studentNameEl = document.getElementById("student-name");
      var studentGradeEl = document.getElementById("student-grade");
      e.preventDefault();
      handler(subjectNameEL, studentNameEl, studentGradeEl);
      subjectNameEL.value = "";
      studentNameEl.value = "";
      studentGradeEl.value = "";
    });
  }
}
