// Assignment Code
//Make an object with all of the characters/numbers/letters
// have if statements for the prompts. When clicked ok, we are going to add that array to the main array to add those characters.

//What are the benefits of living in switzerland? I dunno but the flag is a big plus.
//Steps
// 1. 
var pass = "";
var characters = {// I lengthened them all out to give a better chance for the other types with fewer chars.
  numbers: "12345678901234567890",
  lowerLetters: "abcdefghijklmnopqrstuvwxyz",
  upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specChars: "@*&#@^#!&$!*&!*$^%#!$@!$#!"
}

var generateBtn = document.querySelector("#generate");

function randomItem(items) {

  return items[Math.floor(Math.random() * items.length)];

}
function howManyChars() {
  var passwordText = document.querySelector("#password");

  passwordText.value = "";
  var totalCharacters = window.prompt("How many characters long should your password be?");
  console.log(totalCharacters);
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

function wantUppercase(){
  var uppercase = window.confirm("Would you like uppercase letters?");
  return uppercase;
}
function wantLowercase(){
  var lowercase = window.confirm("Would you like lowercase letters?");
  return lowercase;
}
function wantNumber(){
  var number = window.confirm("Would you like numbers?");
  return number;
}
function wantSpecial(){
  var special = window.confirm("Would you like special characters?");
  return special;
}
function getPrefs() {
  var lowerCase = wantLowercase();
  if (lowerCase) {
    pass = pass + characters.lowerLetters;///Need to ask gary about this
  }

  var upperCase = wantUppercase();
  if (upperCase) {
    pass = pass + characters.upperLetters;
  }

  var numbers = wantNumber();
  if (numbers) {
    pass = pass + characters.numbers;
  }

  var specChars = wantSpecial();
  if (specChars) {
    pass = pass + characters.specChars;
  }
  //Here we will get what characters and the length of the password the user wants
  console.log(pass);
}

function generatePassword() {
  // This is going to do all the heavy lifting
}



// Write password to the #password input
function writePassword() {
  howManyChars();
  getPrefs();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
