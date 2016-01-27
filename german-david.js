// module to augment allLogic class with additional method
// 27 Jan 2016
// group project

var allLogic = (function(x){
  var lexicon_german = { "merry": "froehliche",
                        "christmas": "Weihnachten",
                        "and": "und",
                        "happy": "gutes",
                        "new": "neues",
                        "year": "Jahr" };

  // create new k:v pair in x
  x.translateToGerman = function(inputText) {
    var outputString = "";
    inputText.forEach = function(currentWord) {
      outputString += lexicon_german(currentWord) + " ";
    }
    return outputString;
  };

  return x;  // return new object