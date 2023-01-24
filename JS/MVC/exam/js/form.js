class Form {
  _passedNumEl = document.querySelector("#passed-number");
  _faildNumEl = document.querySelector("#faild-number");
  constructor(data) {
    this.data = data;
    this.subject;
    this.student;
    this.grade;
  }

  getSubject() {
    var { subject } = this.data;
    this.subject = subject.getSubjectName();
  }
  getStudent() {
    var { student } = this.data;
    this.student = student.getStudentData();
  }
  getGrade() {
    var { grade } = this.data;
    this.grade = grade;
  }

  passedExam(counter) {
    counter++;
    this.getSubject();
    this.getStudent();
    this.getGrade();
    this._passedNumEl.textContent = counter;
    var tempLi = document.createElement("li");
    var tempSpan = document.createElement("span");
    tempSpan.setAttribute("class", "list-item-name-passed");
    var tempSpan2 = document.createElement("span");
    tempSpan2.setAttribute("class", "list-item-grade-passed");
    tempSpan.textContent = this.subject + " " + this.student;
    tempSpan2.textContent = this.grade;
    tempLi.append(tempSpan);
    tempLi.append(tempSpan2);
    passedListEl.append(tempLi);
  }
  faildExam(counter) {
    counter++;
    this.getSubject();
    this.getStudent();
    this.getGrade();
    this._faildNumEl.textContent = counter;
    var tempLi = document.createElement("li");
    var tempSpan = document.createElement("span");
    tempSpan.setAttribute("class", "list-item-name-faild");
    var tempSpan2 = document.createElement("span");
    tempSpan2.setAttribute("class", "list-item-grade-faild");
    tempSpan.textContent = this.subject + " " + this.student;
    tempSpan2.textContent = this.grade;
    tempLi.append(tempSpan);
    tempLi.append(tempSpan2);
    faildListEl.append(tempLi);
  }
}
