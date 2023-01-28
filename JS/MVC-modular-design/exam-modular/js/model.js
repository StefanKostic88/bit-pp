var model = (function () {
  class InitialAppState {
    constructor() {
      this.pass = 0;
      this.fail = 0;
    }

    getFailPercentage() {
      // ((this.pass + this.fail) * 100) / this.fail;
    }
  }

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

    getGrade() {
      var { grade } = this.data;
      this.grade = +grade;
      return this.grade;
    }

    validateForm() {
      var grade = this.getGrade();
      if (grade < 1 || grade > 10) return false;
      return true;
    }
  }

  var generateExam = function (subject, student, grade) {
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
