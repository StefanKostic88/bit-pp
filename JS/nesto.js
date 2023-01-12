var sortWords = function (arr) {
  var countLetters = function (string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i] === "a" || string[i] === "A") {
        count += 1;
      }
    }
    return count;
  };

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (countLetters(arr[i]) < countLetters(arr[j])) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log("SWITCH", arr);
      }
    }
  }
  return arr;
};
var x = sortWords([
  "aaaas",
  "amazing",
  "apple",
  "JavaScript",
  "tea",
  "morning",
]);
console.log(x);
