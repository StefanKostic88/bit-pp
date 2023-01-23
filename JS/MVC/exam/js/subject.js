class Subject {
  constructor(name) {
    if (name === "") throw new Error("Subject not selected");
    this.name = name;
  }
  getSubjectName() {
    return this.name;
  }
}
