class Subject {
  constructor(name) {
    if (name.trim() === "") throw new Error("Subject not selected");
    this.name = name;
  }
  getSubjectName() {
    return this.name;
  }
}
