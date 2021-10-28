// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbolArr = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var numberArr = ["1","2","3","4","5","6","7","8","9","0"];


function passLength() {
    var chosenLength = window.prompt("How long do you want your password?");
    if (parseInt(chosenLength) < 8) {
        window.alert("Your password must be at least 8 characters long. Please try again.");
        return null;
    }
    if (parseInt(chosenLength) > 128) {
        window.alert("Your password can be no longer than 128 characters. Please try again.");
        return null;
    }
    if (isNaN(parseInt(chosenLength))) {
        window.alert("This is not a number. Please try again");
        return null;
    }
    return chosenLength;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);