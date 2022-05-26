// Assignment code here
function getRandomInt (max){
  return Math.floor(Math.random() * max);
}
var passwordOptions = {
  letters:"abcdefghijklmnopqrstuvwxyz",
  special:"`~!@#$%^&*()_-+={[}}|:;'<>,./?",
  numbers:"0123456789"
}
function confirmLength(){
  passwordLength=0;
  while (passwordLength <8 || passwordLength > 128)
  passwordLength=window.prompt("Pick a password length between 8 and 128 characters long.");
}

function generatePassword(){
  var randomPassword = ""
  var characterPool =""
  confirmLength();
  var confirmLower = window.confirm("Do you want lowercase?")
  var confirmUpper = window.confirm("Do you want Uppercase?")
  var confirmSpecial = window.confirm("Do you want special characters?")
  var confirmNumbers = window.confirm("Do You want numbers?")
  if (confirmLower) {
    characterPool += passwordOptions.letters;
  }
  if (confirmUpper) {
    characterPool += passwordOptions.letters.toUpperCase();
  }
  if (confirmSpecial){
    characterPool += passwordOptions.special;
  }
  if (confirmNumbers){
    characterPool += passwordOptions.numbers;
  }
  console.log(characterPool[0]);
  for(var i = 0; i < passwordLength; i++){
    randomPassword += characterPool[getRandomInt(characterPool.length)];
  }
  return randomPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
