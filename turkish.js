// module to augment Translate class with additional method
// 27 Jan 2016
// group project

var Translate = (function(oldTranslate) {
  var lexicon =   { merry: "mutlu",
                    christmas: "Noeller",
                    and: "ve",
                    happy: "mutlu",
                    new: "yeni",
                    year: "yIllar" };

  // create new k:v pair in oldTranslate
  oldTranslate.turkish = function(inputText) {
    inputTextArray = inputText.split(" ");  // convert string into array of individual words
    var outputString = "";  // initialize blank string
    inputTextArray.forEach(function(currentWord) {
      if (lexicon[currentWord]) {  // is currentWord in the lexicon?
        outputString += lexicon[currentWord] + " ";  // if so, add translation of currentWord to outputString
      } else {
        outputString += "??? ";  // if not, add "???" to outputString
      }
    });
    return outputString;
  };

  return oldTranslate;  // return new object
})(Translate);