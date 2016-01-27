// module to augment allLogic class with additional method
// 27 Jan 2016
// group project

var allLogic = (function(x){
  var lexicon_french = { "merry": "joyeaux",
                        "christmas": "Noel",
                        "and": "et",
                        "happy": "bonne",
                        "new": "nouvelle",
                        "year": "annee" };

  // create new k:v pair in x
  x.translateToFrench = function(inputText) {
    var outputString = "";
    inputText.forEach = function(currentWord) {
      outputString += lexicon_french(currentWord) + " ";
    }
    return outputString;
  };

  return x;  // return new object