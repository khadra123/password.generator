//Ask User how long do they want their password
var inputNumber = confirm('How long do you want your password to be?')

//Passwordd criteria variables
var upperCase = confirm('Would you like your password to include uppercase?');
var lowerCase = confirm('Would you like your password to include lowercases?');
var specialSymbols = confirm('Would you like your password to include special symbols?');
var number = confirm('Would you like you password to include numbers?')

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//click a button generate a password and then a series of prompts is given
//select criteria wanted
//userinput of lenght of password: 8 -128



//choose lowercase, uppercase, numeric and special characters
//answer should be validated and at least one character should be selected
//password matches generated criteria
//displayed  in an alert or written to the page