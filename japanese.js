var Translate = (function(japaneseTranslate) {
	var englishlexicon = { merry: "merry",
							christmas: "christmas",
							and: "soshite",
							happy: "yoi",
							new: "otoshi",
							year: "wo"
						};
	
  japaneseTranslate.translateToJapanese = function(inputreference) {
    inputTextArray = inputText.split(" ");  // convert string into array of individual words
    var outputString = "";  // initialize blank string
    inputTextArray.forEach(function(currentWord) {
      if (englishlexicon[currentWord]) {  // is currentWord in the lexicon?
        outputString += englishlexicon[currentWord] + " ";  // if so, add translation of currentWord to outputString
      } else {
        outputString += "??? ";  // if not, add "???" to outputString
      }
    });
    return outputString;
  };

  return japaneseTranslate;  // return new object
})(Translate);