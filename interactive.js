var language = "french";
var word = "christmas";

switch(language) {
  case "french":
    document.getElementById("outputField").innerHTML += Translate.french(word);
    break;
  case "german":
    document.getElementById("outputField").innerHTML += Translate.german(word);
    break;
  case "japanese":
    document.getElementById("outputField").innerHTML += Translate.japanese(word);
    break;
  default:
    document.getElementById("outputField").innerHTML += "Sorry, I don't know that language.";
    break;
}