///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The Generate Password button function
function generatePassword() {
  var newPassword;

  // Prompt asking length of the password 8-128 characters and store selected response
  // While loop for user to try again if they do not select a valid length
  var length = "";

  while(length < 8 || length > 128) {
    alert("Please select a number between 8-128.");
    var length = prompt("How long would you like your password to be?");
    }

  // Confirm message to choose lowercase and store selected response
  var lowercase = confirm("Would you like lowercase letters?");
  
  // Confirm message to choose uppercase and store selected response
  var uppercase = confirm("Would you like uppercase letters?");
  
  // Confirm message to choose numeric and store selected response
  var numbers = confirm("Would you like numbers?");
  
  // Confirm message to choose special characters and store selected response
  var special = confirm("Would you like special characters?");
  
  // If statement for user to try again if they do not select any character options
  if(lowercase === false && uppercase === false && numbers === false && special === false) {
    
  }
  
  console.log(length);
  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(special);

  // Choice array made up of the elements if true; iterate
  var letterPool = [];

  // Did the user choose lowercase letters? (26) If yes, add to letterPool array.
  var lowLetters = "abcdefghijklmnopqrstuvwxyz";
  var lowLettersArr = lowLetters.split("");

  if (lowercase === true) {
    letterPool.push(...lowLettersArr);
    // console.log(letterPool);
  }

  // Did the user choose uppercase letters? (26) If yes, add to letterPool array.
  var uppLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppLettersArr = uppLetters.split("");

  if (uppercase === true) {
    letterPool.push(...uppLettersArr);
    // console.log(letterPool);
  }

  // Did the user choose numbers? (10) If yes, add to letterPool array.
  var numChar = "0123456789";
  var numCharArr = numChar.split("");

  if (numbers === true) {
    letterPool.push(...numCharArr);
    // console.log(letterPool);
  }

  // Did the user choose special characters? (28) If yes, add to letterPool array.
  var specialChar = "~`!@#$%^&*()-_=+[]{}/?:;<>,.";
  var specialCharArr = specialChar.split("");

  if (special === true) {
    letterPool.push(...specialCharArr);
    // console.log(letterPool);
  }

  // Choose a random element from within the array and add to a new array 
  console.log(letterPool);

  var randArr = [];
  for (var i = 0; i < length; i++) {
    var randomLetters = letterPool[Math.floor(Math.random()*letterPool.length)];
    randArr.push(randomLetters);
    
  }
  console.log(randArr);

  // Connect the elements from the array and return a value to be the newPassword 
  var newPassword = randArr.join("");

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
