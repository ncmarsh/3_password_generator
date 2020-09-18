// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var newPassword;

  // Prompt asking length of the password 8-128 characters and store selected response
  var passLength = prompt("How long would you like your password to be? Choose between 8-128.");

  console.log(passLength);

  // Confirm message to choose lowercase and store selected response
  var passLower = confirm("Would you like lowercase letters?");

  console.log(passLower);

  // Confirm message to choose uppercase and store selected response
  var passUpper = confirm("Would you like uppercase letters?");

  console.log(passUpper);

  // Confirm message to choose numeric and store selected response
  var passNum = confirm("Would you like numbers?");

  console.log(passNum);

  // Confirm message to choose special characters and store selected response
  var passSpecial = confirm("Would you like special characters?");

  console.log(passSpecial);

  // choice array made up of those if true; iterate
  var choice = [];

  // 26 letters lowercase
  var lowLetters = "abcdefghijklmnopqrstuvwxyz";
  var lowLettersArr = lowLetters.split("");

  if (passLower === true) {
    choice.push(...lowLettersArr);
  }

  console.log(choice);

  // 26 letters Uppercase

  // 10 numbers

  // specials

  // Math.random(); default, would need to know the length selected, then choose randomly from choice array

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
