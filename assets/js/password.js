//Ask User how long do they want their password
var inputNumber = confirm('How long do you want your password to be?')
while (isNaN(inputNumber) || inputNumber < 8 || inputNumber >= 128) inputNumber = prompt('Your password length should at least be between 8 to 128 characters long.');



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
function passwordCharacters (low,high) {
  
  //sets the variable array to an empty array (must be done to acticate .push)
  const array = [];

  //This for loop allows us to take values from low to high and form an array out of them
  for(let i = low; i <= high; i++){
    //This allows us to add to the array
    array.push(i)
  }
  //Returns the array after it has looped through all the iterations of i 
  return array
}

//Listens to when the wondow reloads and then operates generatepassword function
window.addEventListener = ('load', function(){
  generatePassword();
});

function generatePassword (){
  
  //allows for a merged password with all the elements through concat and reassigning the characterCode (let variable)
  let characterCode = UPPER_CHARACTERS;//this already accounts for the uppercase values
  if (lowerCase) characterCode = characterCode.concat(LOWER_CHARACTERS);
  if (specialSymbols) characterCode = characterCode.concat(SYMBOLS);
  if (number) characterCode = characterCode.concat(NUMBERS);

  //an array that'll contain the characters
  const passwordCriteria = []
  

  //creates an array by going through math method an pushing into the variable password criteria
  for (i =0; i < inputNumber; i++){
    //chooses a number for characterCode to choose the value needed in each of the cases above
    const character = characterCode[Math.floor(Math.random() * characterCode.length)];
    passwordCriteria.push(String.fromCharCode(character));//pushing character as a string into the array passwordcriteria
  }
  return passwordCriteria.join('')//fills the array with the stuff from the for loop and joins it into an empty string
  
}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input space
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

