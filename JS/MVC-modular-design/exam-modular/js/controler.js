(function (data, ui) {
  var btn = document.getElementById("add-info-btn");

  var _passedNumEl = document.querySelector("#passed-number");
  var _faildNumEl = document.querySelector("#faild-number");
  var _passedListEl = document.querySelector(".passed-list");
  var _faildListEl = document.querySelector(".faild-list");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    try {
      var { subject, studentName, grade } = ui.colectData();
      var exam = data.generateExam(subject, studentName, grade);
      var form = data.generateForm(exam);
      var formIsValid = form.validateForm();
      if (!formIsValid) throw new Error("Grade must be between 1 and 10");

      var isValid = exam.hasPassed();

      //form validacija 2

      if (isValid) {
        model.state.pass++;
        generateResults(_passedListEl, _passedNumEl, model.state.pass, exam);
      } else {
        model.state.fail++;
        generateResults(_faildListEl, _faildNumEl, model.state.fail, exam);
      }
    } catch (err) {
      console.log(err.message);
    }
  });
})(model, view);

var generateResults = function (inputNode, outputNode, counter, exam) {
  var li = document.createElement("li");
  li.textContent = exam.getExamInfo();
  inputNode.appendChild(li);
  outputNode.textContent = counter;
};
