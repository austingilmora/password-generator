// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbolArr = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var numberArr = ["1","2","3","4","5","6","7","8","9","0"];


function passLength() {
    //choose password length
    var chosenLength = window.prompt("How long do you want your password?");
    //can't be less than 8 or more than 128
    if (parseInt(chosenLength) < 8) {
        window.alert("Your password must be at least 8 characters long. Please try again.");
        return null;
    }
    if (parseInt(chosenLength) > 128) {
        window.alert("Your password can be no longer than 128 characters. Please try again.");
        return null;
    }
    //can't be not a number
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
    //add to array
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
    // can't make no choices
    if (!confirmLower && !confirmUpper && !confirmSymbol && !confirmNumber) {
        window.alert("You need to select at least one type of character. Please try again.")
    }
    return chosen;
}

function generatePassword() {
    //get the password length
    var chosenLength = passLength();
    //if there's a problem with length, stop now
    if (chosenLength === null) {
        return null;
    }
    //get the array with the choices they made
    var chosen = passOptions();

    //empty array to add the randomly selected characters
    var generated = []
 
    for (var i = 0; i < parseInt(chosenLength); i++) {
        //pick number between 0 and the length of array
        var p = Math.floor(Math.random() * chosen.length);
        //give the character at that number position
        var picked = chosen[p];
        // put that character into the array
        generated = generated.concat(picked);
    }
    //print the array
    return generated.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);