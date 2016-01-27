// module to augment Translate class with additional method
// 27 Jan 2016
// group project

var Translate = (function(oldTranslate) {

  // create new k:v pair in oldTranslate
  oldTranslate.turkish = function(inputText) {
    var lexicon = { merry: "mutlu",
                    christmas: "Noeller",
                    and: "ve",
                    happy: "mutlu",
                    new: "yeni",
                    year: "yillar" };
    return lexicon[inputText];
  };

  return oldTranslate;  // return new object
})(Translate);