class StudentName {
  constructor(fullName) {
    if (fullName.trim() === "") throw new Error("Full name Requred");
    this.fullName = fullName;
  }

  getStudentData() {
    return this.fullName.split(" ")[0] + " " + this.fullName.split(" ")[1];
  }
}
