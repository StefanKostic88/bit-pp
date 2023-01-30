(function (data, ui) {
  var formView = ui.generateFormView();

  var addExamResultsHandler = function (e) {
    e.preventDefault();
    try {
      var { subject, studentName, grade } = formView.colectData();
      var exam = data.generateExam(subject, studentName, grade);
      var form = data.generateForm(exam);
      var formIsValid = form.validateForm();
      if (!formIsValid) throw new Error("Grade must be between 1 and 10");
      formView.clearError();
      formView.clearInputs();
      var examIsValid = exam.hasPassed();
      var { passed, info, passCounter, failCounter } = form.validation(
        examIsValid,
        model.state.pass,
        model.state.fail
      );
      model.state.pass = passCounter;
      model.state.fail = failCounter;
      formView.renderResults(passed, info, passCounter, failCounter);
      model.state.generateData();
      formView.getTotalStudents(model.state.getTotalStudents());
      formView.renderFailPercentage(model.state.getFailPercentage());
    } catch (err) {
      formView.renderFormError();
    }
  };
  formView.addExamHandler(addExamResultsHandler);
})(model, view);
