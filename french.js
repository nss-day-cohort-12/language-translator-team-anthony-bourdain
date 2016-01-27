// module to augment allLogic class with additional method
// 27 Jan 2016
// group project

var Translate = (function(oldTranslate) {

  // create new k:v pair in oldTranslate
  oldTranslate.french = function(inputText) {
    var lexicon = { merry: "joyeaux",
                    christmas: "Noel",
                    and: "et",
                    happy: "bonne",
                    new: "nouvelle",
                    year: "annee" };
    return lexicon[inputText];
  };

  return oldTranslate;  // return new object
})(Translate);