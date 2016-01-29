// module to augment Translate class with additional method
// 27 Jan 2016
// group project

var Translate = (function (oldTranslate) {
	var lexicon = { merry: "fröhliche",
                  christmas: "Weihnachten",
                  and: "und",
                  happy: "gute",
                  new: "neues",
                  year: "Jahr" };

	oldTranslate.german = function (inputText) {
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

  return oldTranslate;
})(Translate);