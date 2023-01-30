var model = (function () {
  //App initialization

  class InitialAppState {
    constructor() {
      this.pass = 0;
      this.fail = 0;
      this.totalStudents = 0;
      this.percent = 0;
    }

    generateData() {
      this.totalStudents = this.pass + this.fail;
      this.percent = ((this.fail * 100) / this.totalStudents).toFixed(2);
    }

    getFailPercentage() {
      return this.percent;
    }
    getTotalStudents() {
      return this.totalStudents;
    }
  }

  //Model Classes

  class Subject {
    constructor(name) {
      if (name.trim() === "") throw new Error("Subject not selected");
      this.name = name;
    }
    getSubjectName() {
      return this.name;
    }
  }

  class StudentName {
    constructor(fullName) {
      if (fullName.trim() === "") throw new Error("Full name Requred");
      this.fullName = fullName;
    }

    getStudentData() {
      return this.fullName.split(" ")[0] + " " + this.fullName.split(" ")[1];
    }
  }

  class Exam {
    constructor(subject, student, grade) {
      if (!(subject instanceof Subject) || !(student instanceof StudentName))
        throw new Error("Invalid");
      this.subject = subject;
      this.student = student;
      this.grade = grade;
    }
    getExamInfo() {
      return (
        this.subject.getSubjectName() +
        ", " +
        this.student.getStudentData() +
        ", " +
        this.grade
      );
    }
    hasPassed() {
      if (this.grade > 5) return true;
      return false;
    }
  }

  class Form {
    constructor(data) {
      this.data = data;
      this.subject;
      this.student;
      this.grade;
    }

    getExam() {
      return this.data.getExamInfo();
    }

    getSubject() {
      var { subject } = this.data;
      this.subject = subject.getSubjectName();
      return this.subject;
    }
    getStudent() {
      var { student } = this.data;
      this.student = student.getStudentData();
      return this.student;
    }

    getGrade() {
      var { grade } = this.data;
      this.grade = +grade;
      return this.grade;
    }
    callAll() {
      return {
        subject: this.getSubject(),
        student: this.getStudent(),
        grade: this.getGrade(),
      };
    }

    validateForm() {
      var grade = this.getGrade();
      if (grade < 1 || grade > 10) return false;
      return true;
    }

    validation(isValid, passCounter, failCounter) {
      var passed;
      var info = this.callAll();
      if (isValid) {
        passCounter++;
        passed = true;
      } else {
        failCounter++;
        passed = false;
      }
      return { passed, info, passCounter, failCounter };
    }
  }

  var generateExam = function (data) {
    var { subject, studentName: student, grade } = data;
    return new Exam(new Subject(subject), new StudentName(student), grade);
  };

  var generateForm = function (data) {
    return new Form(data);
  };

  var state = new InitialAppState();

  return {
    state: state,
    generateExam: generateExam,
    generateForm: generateForm,
  };
})();
