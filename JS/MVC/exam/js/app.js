var app = new App();

var controlForm = function (subjectName, studentName, studentGrade) {
  var subject = new Subject(subjectName.value);
  var student = new StudentName(studentName.value);
  var grade = studentGrade.value;
  if (+grade > 10 || +grade < 1) {
    studentGrade.style.backgroundColor = "red";
    studentGrade.placeholder = "number must be between 1 and 10";
    return;
  } else {
    studentGrade.style.backgroundColor = "";
    studentGrade.placeholder = "grade";
  }
  var exam = new Exam(subject, student, grade);
  var form = new Form(exam);
  var hasPassed = exam.hasPassed();

  if (hasPassed) {
    app.pass = form.passedExam(app.pass);
  } else {
    app.fail = form.faildExam(app.fail);
  }
};

app.controlFormHandler(controlForm);
