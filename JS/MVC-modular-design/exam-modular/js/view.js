var view = (function () {
  class FromView {
    _btn = document.getElementById("add-info-btn");

    _subjectNameEL = document.getElementById("subject-name");
    _studentNameEl = document.getElementById("student-name");
    _studentGradeEl = document.getElementById("student-grade");

    _passedNumEl = document.querySelector("#passed-number");
    _faildNumEl = document.querySelector("#faild-number");
    _passedListEl = document.querySelector(".passed-list");
    _faildListEl = document.querySelector(".faild-list");
    _studentGradeEl = document.getElementById("student-grade");
    _failPercentageEl = document.getElementById("fail-percent");
    _totalStudents = document.getElementById("total-students");

    addExamHandler(handler) {
      this._btn.addEventListener("click", handler);
    }

    colectData() {
      return {
        subject: this._subjectNameEL.value,
        studentName: this._studentNameEl.value,
        grade: this._studentGradeEl.value,
      };
    }

    getInputs() {
      return [this._subjectNameEL, this._studentNameEl, this._studentGradeEl];
    }
    clearInputs() {
      this.getInputs().forEach((el) => (el.value = ""));
    }

    renderFormError() {
      this._studentGradeEl.style.backgroundColor = "red";
      this._studentGradeEl.placeholder = "number must be between 1 and 10";
      return;
    }

    clearError() {
      this._studentGradeEl.style.backgroundColor = "";
      this._studentGradeEl.placeholder = "grade";
    }

    renderFailPercentage(percent) {
      this._failPercentageEl.textContent = `${percent}%`;
    }
    getTotalStudents(students) {
      this._totalStudents.textContent = students + " students";
    }

    generateResults(obj, counter, inputNode, parentNode) {
      inputNode.textContent = counter;
      var tempLi = document.createElement("li");
      var tempSpan = document.createElement("span");
      tempSpan.setAttribute("class", "list-item-name-passed");
      var tempSpan2 = document.createElement("span");
      tempSpan2.setAttribute("class", "list-item-grade-passed");
      tempSpan.textContent = obj.subject + " " + obj.student;
      tempSpan2.textContent = obj.grade;
      tempLi.append(tempSpan);
      tempLi.append(tempSpan2);
      parentNode.append(tempLi);
    }

    renderResults(...data) {
      var [passed, info, passCounter, failCounter] = data;
      if (passed) {
        this.generateResults(
          info,
          passCounter,
          this._passedNumEl,
          this._passedListEl
        );
      } else {
        this.generateResults(
          info,
          failCounter,
          this._faildNumEl,
          this._faildListEl
        );
      }
    }
  }

  var generateFormView = function () {
    return new FromView();
  };

  return {
    generateFormView: generateFormView,
  };
})();
