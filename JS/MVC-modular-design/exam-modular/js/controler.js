(function (data, ui) {
  var formView = ui.generateFormView();

  var addExamResultsHandler = function (e) {
    e.preventDefault();
    try {
      var exam = data.generateExam(formView.colectData());
      var form = data.generateForm(exam);

      //first form validation

      if (!form.validateForm())
        throw new Error("Grade must be between 1 and 10");
      formView.clearError();
      formView.clearInputs();

      //exam validation
      var examIsValid = exam.hasPassed();

      //if valid then, then chek if exam is faild or succsess

      var { passed, info, passCounter, failCounter } = form.validation(
        examIsValid,
        model.state.pass,
        model.state.fail
      );

      //update state obj

      model.state.pass = passCounter;
      model.state.fail = failCounter;

      //Rendering changes
      formView.renderResults(passed, info, passCounter, failCounter);
      model.state.generateData();
      formView.getTotalStudents(model.state.getTotalStudents());
      formView.renderFailPercentage(model.state.getFailPercentage());
    } catch (err) {
      //errors
      formView.renderFormError();
    }
  };

  //event listeners
  formView.addExamHandler(addExamResultsHandler);
})(model, view);
