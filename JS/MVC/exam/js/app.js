var app = new App();

var subjectName = document.getElementById("subject-name");
var studentNameEl = document.getElementById("student-name");
var studentGradeEl = document.getElementById("student-grade");

var controlForm = function () {
  var subject = new Subject(subjectName.value);
  var student = new StudentName(studentNameEl.value);
  var grade = studentGradeEl.value;
  if (+grade > 10 || +grade < 1) {
    studentGradeEl.style.backgroundColor = "red";
    studentGradeEl.placeholder = "number must be between 1 and 10";
    return;
  } else {
    studentGradeEl.style.backgroundColor = "";
    studentGradeEl.placeholder = "grade";
  }
  var exam = new Exam(subject, student, grade);
  var form = new Form(exam);
  var hasPassed = exam.hasPassed();

  if (hasPassed) {
    app.pass = form.passedExam(app.pass);
  } else {
    app.fail = form.faildExam(app.fail);
  }
  subjectName.value = "";
  studentNameEl.value = "";
  studentGradeEl.value = "";
};

app.controlFormHandler(controlForm);
