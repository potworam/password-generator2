// Assignment code here
function getRandomInt (max){
  return Math.floor(math.random()*max);
}
var passwordOptions = {
  letters:"abcdefghijklmnopqrstuvwxyz",
  special:"`~!@#$%^&*()_-+={[}}|:;'<>,./?",
  numbers:"123456789"
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
