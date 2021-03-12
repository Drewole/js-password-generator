// Assignment Code
//Make an object with all of the characters/numbers/letters
// have if statements for the prompts. When clicked ok, we are going to add that array to the main array to add those characters.


//Steps
// 1. 
var pass = "";
var finalPass = "";
var characters = {// I lengthened them all out to give a better chance for the other types with fewer chars.
  numbers: "12345678901234567890",
  lowerLetters: "abcdefghijklmnopqrstuvwxyz",
  upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specChars: "@*&#@^#!&$!*&!*$^%#!$@!$#!"
}
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");



function howManyChars() {
  
  passwordText.placeholder = "Your Secure Password";
  passwordText.value = "";
  finalPass = "";

  var totalCharacters = window.prompt("How many characters long should your password be?");

  var parsed = parseInt(totalCharacters);

  if (isNaN(parsed)) {
    window.alert("You need to enter a number between 8 and 128");
    howManyChars();
  } else if (parsed < 8 || parsed > 128) { 
    window.alert("You need to enter a number between 8 and 128");
    howManyChars();
  } else {
    return parsed;
  }
}

//Gets the user prefs
function getPrefs() {
  var lowerCase = window.confirm("Would you like lowercase letters?");
  if (lowerCase) {
    pass = pass + characters.lowerLetters;///Need to ask gary about this
  }

  var upperCase = window.confirm("Would you like uppercase letters?");
  if (upperCase) {
    pass = pass + characters.upperLetters;
  }

  var numbers = window.confirm("Would you like numbers?");
  if (numbers) {
    pass = pass + characters.numbers;
  }

  var specChars = window.confirm("Would you like special characters?");
  if (specChars) {
    pass = pass + characters.specChars;
  }

  if (pass.length <= 0) {
    window.alert("You need to choose at least one character type.");
    getPrefs();
  } else {
    //Here we will get what characters and the length of the password the user wants
    return pass;
  }
  
}

//Puts the password together with the prefs and length
function generatePassword() {
  var passLength = howManyChars();
  var prefs = getPrefs();

  prefsLength = prefs.length;
  for (var i = 0; i < passLength; i++ ) {
    finalPass += prefs.charAt(Math.floor(Math.random() * prefsLength));
  }
  return finalPass;
  // This is going to do all the heavy lifting
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
