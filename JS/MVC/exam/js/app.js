var submitInfoEl = document.getElementById("add-info-btn");
var subjectName = document.getElementById("subject-name");
var studentNameEl = document.getElementById("student-name");
var studentGradeEl = document.getElementById("student-grade");

var passedListEl = document.querySelector(".passed-list");
var faildListEl = document.querySelector(".faild-list");

var passedNumEl = document.querySelector("#passed-number");
var faildNumEl = document.querySelector("#faild-number");

var passedNumber = 0;
var faildNumber = 0;

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

  ///u form class ubaciti metodu za validaciju

  var hasPassed = exam.hasPassed();
  console.log(hasPassed);

  if (hasPassed) {
    passedNumber++;
    passedNumEl.textContent = passedNumber;
    var tempLi = document.createElement("li");
    var tempSpan = document.createElement("span");
    tempSpan.setAttribute("class", "list-item-name-passed");
    var tempSpan2 = document.createElement("span");
    tempSpan2.setAttribute("class", "list-item-grade-passed");
    tempSpan.textContent =
      subject.getSubjectName() + " " + student.getStudentData();

    tempSpan2.textContent = grade;
    tempLi.append(tempSpan);
    tempLi.append(tempSpan2);
    passedListEl.append(tempLi);
  } else {
    faildNumber++;
    faildNumEl.textContent = faildNumber;

    var tempLi = document.createElement("li");
    var tempSpan = document.createElement("span");
    tempSpan.setAttribute("class", "list-item-name-faild");
    var tempSpan2 = document.createElement("span");
    tempSpan2.setAttribute("class", "list-item-grade-faild");
    tempSpan.textContent =
      subject.getSubjectName() + " " + student.getStudentData();
    tempSpan2.textContent = grade;
    tempLi.append(tempSpan);
    tempLi.append(tempSpan2);
    faildListEl.append(tempLi);
  }
});
