var language = "turkish";
var word = "merry and fish new happy year";

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
  case "turkish":
    document.getElementById("outputField").innerHTML += Translate.turkish(word);
    break;
  default:
    document.getElementById("outputField").innerHTML += "Sorry, I don't know that language.";
    break;
}