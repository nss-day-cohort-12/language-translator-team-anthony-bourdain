// GLOBAL VARIABLES //
var language;
//////////////////////

// DOM REFERENCES //
var outputText = document.getElementById("outputField");
var languageType = document.getElementById("languageForm").languageType;
var frenchClick = document.getElementById("frenchButton");
var germanClick = document.getElementById("germanButton");
var turkishClick = document.getElementById("turkishButton");
var japaneseClick = document.getElementById("japaneseButton");
var translateButton = document.getElementById("translateButton");
var wordBox = document.getElementById("wordInput");
///////////////////

// EVENT HANDLERS //
frenchClick.addEventListener("click", languageClick);
germanClick.addEventListener("click", languageClick);
turkishClick.addEventListener("click", languageClick);
japaneseClick.addEventListener("click", languageClick);

// wordBox.addEventListener("keyup", function() {
//   inputField.innerHTML = wordBox.value;
// });

translateButton.addEventListener("click", displayTranslation);
translateButton.addEventListener("keydown", function(e) {
  if (e.keycode === 13 && wordBox === document.activeElement) {
    e.preventDefault();
    inputField.innerHTML = wordBox.value;
    console.log("enter");
  }
})
////////////////////

languageClick(); // initialize "language" variable according to radio button defaults

function languageClick () {
  for (var i = 0; i < languageType.length; i++) {
    if (languageType[i].checked) {
      language = languageType[i].value;
      console.log("selected",language);
    }
  }
};

function displayTranslation (e) {
  e.preventDefault();
  outputText.innerHTML = "";
  console.log("translating to",language);
  switch(language) {
    case "French":
      outputText.innerHTML += Translate.french(wordBox.value);
      console.log("French");
      break;
    case "German":
      outputText.innerHTML += Translate.german(wordBox.value);
      console.log("German");
      break;
    case "Turkish":
      outputText.innerHTML += Translate.turkish(wordBox.value);
      break;
    case "Japanese":
      outputText.innerHTML += Translate.japanese(wordBox.value);
      break;
    default:
      outputText.innerHTML += "Sorry, I don't know that language.";
      break;
  };
}