// VARIABLES IN GLOBAL SCOPE //
var language;
var Translate = (function() { // IIFE initializes object for methods in public scope
  return { }                  // "Translate" begins as object with zero k:v pairs
})();
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
// radio buttons//
frenchClick.addEventListener("click", languageClick);
germanClick.addEventListener("click", languageClick);
turkishClick.addEventListener("click", languageClick);
japaneseClick.addEventListener("click", languageClick);

// "translate" button
translateButton.addEventListener("click", displayTranslation);

////////////////////


// MAIN: EXECUTE ON PAGE LOAD //

languageClick(); // initialize "language" variable according to radio button defaults

///////////////////////////////


function languageClick () { // loop through radio buttons to identify which is checked
  for (var i = 0; i < languageType.length; i++) {
    if (languageType[i].checked) {
      language = languageType[i].value;
      console.log("selected",language);
    }
  }
}

function displayTranslation (e) {
  e.preventDefault();
  console.log("translating to",language);
  outputText.innerHTML = Translate[language.toLowerCase()](wordBox.value);  // eliminates switch statement!
}