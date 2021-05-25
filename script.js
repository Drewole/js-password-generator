({
  "plugins": ["jsdom-quokka-plugin"],
  "jsdom": {"file": "index.html"} // Located in project root
})

// Assignment Code
//Make an object with all of the characters/numbers/letters
// have if statements for the prompts. When clicked ok, we are going to add that array to the main array to add those characters.

/// This is all for the length of password slider
const slider = document.getElementById("pass-length");
const output = document.getElementById("output");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//Steps
// 1. 
let pass = "";
let finalPass = "";
const characters = {// I lengthened them all out to give a better chance for the other types with fewer chars.
  numbers: "12345678901234567890",
  lowerLetters: "abcdefghijklmnopqrstuvwxyz",
  upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specChars: "@*&#@^#!&$!*&!*$^%#!$@!$#!"
}
const passwordText = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");

function howManyChars() {
  
  passwordText.placeholder = "Your Secure Password";
  passwordText.value = "";
  finalPass = "";

  let totalCharacters = document.getElementById("pass-length").value;

  let parsed = parseInt(totalCharacters);
  return parsed;
}

//Gets the user prefs
function getPrefs() {
  let lowerCase = document.getElementById("lowercase");
  pass = ""
  if (lowerCase.checked) {
    pass = pass + characters.lowerLetters;
  }

  let upperCase = document.getElementById("uppercase");

  if (upperCase.checked) {
    pass = pass + characters.upperLetters;
  }

  let numbers = document.getElementById("numbers");

  if (numbers.checked) {
    pass = pass + characters.numbers;
  }

  let specChars = document.getElementById("special-characters");

  if (specChars.checked) {
    pass = pass + characters.specChars;
  }

  if (!specChars && !numbers && !upperCase && !lowerCase) {
    window.alert("You need to choose at least one character type.");
    getPrefs();
  } else {
    //Here we will get what characters and the length of the password the user wants
    return pass;
  }
  
}

//Puts the password together with the prefs and length
function generatePassword() {
  let passLength = howManyChars();
  let prefs = ""
  prefs = getPrefs();

  prefsLength = prefs.length;
  for (let i = 0; i < passLength; i++ ) {
    finalPass += prefs.charAt(Math.floor(Math.random() * prefsLength));
  }
  passwordText.value = finalPass;
  console.log()
  // This is going to do all the heavy lifting
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
