var view = (function () {
  var colectData = function () {
    var subjectNameEL = document.getElementById("subject-name");
    var studentNameEl = document.getElementById("student-name");
    var studentGradeEl = document.getElementById("student-grade");

    return {
      subject: subjectNameEL.value,
      studentName: studentNameEl.value,
      grade: studentGradeEl.value,
    };
  };

  return {
    colectData: colectData,
  };
})();
