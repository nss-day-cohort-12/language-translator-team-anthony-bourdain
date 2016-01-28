var Translate = (function (oldTranslate) {
	var lexicon = { merry: "fröhlich",
                  christmas: "weihnachten",
                  and: "und",
                  happy: "glücklich",
                  new: "neu",
                  year: "jahr" };

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