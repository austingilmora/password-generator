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
 
function passOptions() {
 
    //How long is the password no answer not an option
    var chosen = [];
      //Ask what they want in their password
    var confirmLower = window.confirm(
      "Would you like your password to contain lowercase letters?"
    );
    if (confirmLower) {
        chosen = chosen.concat(lowercaseArr);
    }
    var confirmUpper =  window.confirm(
      "Would you like your password to contain uppercase letters?"
    );
    if (confirmUpper) {
        chosen = chosen.concat(uppercaseArr);
    }
    var confirmSymbol =  window.confirm(
      "Would you like your password to contain symbols?"
    );
    if (confirmSymbol) {
        chosen = chosen.concat(symbolArr);
    }
    var confirmNumber =  window.confirm(
      "Would you like your password to contain numbers?"
    );
    if (confirmNumber) {
        chosen = chosen.concat(numberArr);
    }
    if (!confirmLower && !confirmUpper && !confirmSymbol && !confirmNumber) {
        window.alert("You need to select at least one type of character. Please try again.")
    }
    return chosen;
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);