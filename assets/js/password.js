//Ask User how long do they want their password
var inputNumber = number =>{
confirm('How long do you want your password to be?')

if (isNaN(inputNumber) || inputNumber < 8 || inputNumber >= 128){
  prompt('Your password length should at least be between 8 to 128 characters long.')
  return
}

}
//Passwordd criteria variables
var upperCase = confirm('Would you like your password to include uppercase?');
var lowerCase = confirm('Would you like your password to include lowercases?');
var specialSymbols = confirm('Would you like your password to include special symbols?');
var number = confirm('Would you like you password to include numbers?')

//OWASP element call out variables using the passwordcharacter function
var UPPER_CHARACTERS = passwordCharacters(65, 90)
var LOWER_CHARACTERS = passwordCharacters(97, 122)
var NUMBERS = passwordCharacters(48,57)
var SYMBOLS = passwordCharacters(33, 47).concat(passwordCharacters(58, 64)).concat(passwordCharacters(91,96))


//To keep track of our characters from the OWASP 
var passwordCharacters = (low,high) =>{
  //This for loop allows us to take values from low to high and form an array out of them
  for(let i = low, i <= high, i++){
    //This allows us to add to the array
    array.push(i)
  }
  //Returns the array after it has looped through all the iterations of i 
  return array
}

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