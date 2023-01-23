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
