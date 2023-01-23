var submitInfoEl = document.getElementById("add-info-btn");
var subjectName = document.getElementById("subject-name");
var studentNameEl = document.getElementById("student-name");
var studentGradeEl = document.getElementById("student-grade");

submitInfoEl.addEventListener("click", function (e) {
  e.preventDefault();

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
  console.log(form);

  //   console.log(exam.hasPassed());
  //   console.log(exam.getExamInfo());
});
