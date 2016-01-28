var language;
// gather text input value and place in 'word' variable.
var wordBox = document.getElementById("wordInput");

wordBox.addEventListener("keyup", function() {
    inputField.innerHTML = wordBox.value;
});

// set button to trigger outputField inner HTML
var outputText = document.getElementById("outputField");

// gather value of the language button currently checked and place in 'language' variable.
var languageType = document.getElementById("languageForm").languageType;
var frenchClick = document.getElementById("frenchButton");
var germanClick = document.getElementById("germanButton");
var turkishClick = document.getElementById("turkishButton");
var japaneseClick = document.getElementById("japaneseButton");

languageClick();

  function languageClick () {
    for (var i = 0; i < languageType.length; i++) {
      if (languageType[i].checked == true) {
        language = languageType[i].value;
    }
  }
};


frenchClick.addEventListener("click", languageClick);
germanClick.addEventListener("click", languageClick);
turkishClick.addEventListener("click", languageClick);
japaneseClick.addEventListener("click", languageClick);

function displayTranslation (e) {
  e.preventDefault();
  outputText.innerHTML = "";
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
    // case "Japanese"
    //   outputText.innerHTML += Translate.japanese(wordBox.value);
    //   break;
    default:
      outputText.innerHTML += "Sorry, I don't know that language.";
      break;
  };
}

var translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", displayTranslation);

translateButton.addEventListener("keydown", function(e) {
  if (e.keycode === 13 && wordBox === document.activeElement) {
    e.preventDefault();
    inputField.innerHTML = wordBox.value;
    console.log("enter");
  }
})





