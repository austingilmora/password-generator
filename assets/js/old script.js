// Assignment code here

var passOptions = function() {

//How long is the password no answer not an option

var passLength = window.prompt("How long do you want your password?");

  //Ask what they want in their password
var confirmLower = window.confirm(
  "Would you like your password to contain lowercase letters?"
);

var confirmUpper =  window.confirm(
  "Would you like your password to contain uppercase letters?"
);

var confirmSymbol =  window.confirm(
  "Would you like your password to contain symbols?"
);

var confirmNumber =  window.confirm(
  "Would you like your password to contain numbers?"
);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




 
console.log(passLength);

// Add choices to the function


var randomLowerCase = function() {  
  var letter = Math.floor((Math.random() * 26) + 1)

  switch (letter) {
    case 1:
      return("a")
      break;
      case 2:
      return("b")
      break;
      case 3:
      return("c")
      break;
      case 4:
      return("d")
      break;
      case 5:
      return("e")
      break;
      case 6:
      return("f")
      break;
      case 7:
      return("g")
      break;
      case 8:
      return("h")
      break;
      case 9:
      return("i")
      break;
      case 10:
      return("j")
      break;
      case 11:
      return("k")
      break;
      case 12:
      return("l")
      break;
      case 13:
      return("m")
      break;
      case 14:
      return("n")
      break;
      case 15:
      return("o")
      break;
      case 16:
      return("p")
      break;
      case 17:
      return("q")
      break;
      case 18:
      return("r")
      break;
      case 19:
      return("s")
      break;
      case 20:
      return("t")
      break;
      case 21:
      return("u")
      break;
      case 22:
      return("v")
      break;
      case 23:
      return("w")
      break;
      case 24:
      return("x")
      break;
      case 25:
      return("y")
      break;
      case 26:
      return("z")
      break;
  }
  return;
}


var randomUpperCase = function() {  
  var letter = Math.floor((Math.random() * 26) + 1)

  switch (letter) {
    case 1:
      return("A")
      break;
      case 2:
      return("B")
      break;
      case 3:
      return("C")
      break;
      case 4:
      return("D")
      break;
      case 5:
      return("E")
      break;
      case 6:
      return("F")
      break;
      case 7:
      return("G")
      break;
      case 8:
      return("H")
      break;
      case 9:
      return("I")
      break;
      case 10:
      return("J")
      break;
      case 11:
      return("K")
      break;
      case 12:
      return("L")
      break;
      case 13:
      return("M")
      break;
      case 14:
      return("N")
      break;
      case 15:
      return("O")
      break;
      case 16:
      return("P")
      break;
      case 17:
      return("Q")
      break;
      case 18:
      return("R")
      break;
      case 19:
      return("S")
      break;
      case 20:
      return("T")
      break;
      case 21:
      return("U")
      break;
      case 22:
      return("V")
      break;
      case 23:
      return("W")
      break;
      case 24:
      return("X")
      break;
      case 25:
      return("Y")
      break;
      case 26:
      return("Z")
      break;
  }
  return;
}


var randomNumber = function() {
  var number = Math.floor((Math.random() * 10) + 1)

  switch (number) {
    case 1:
      return("1")
      break;
    case 2:
      return("2")
      break;
    case 3:
      return("3")
      break;
    case 4:
      return("4")
      break;
    case 5:
      return("5")
      break;
    case 6:
      return("6")
      break;
    case 7:
      return("7")
      break;
    case 8:
      return("8")
      break;
    case 9:
      return("9")
      break;
    case 10:
      return("0")
      break; 
  }
  return;
}


var randomSymbol = function() {  
  var number = Math.floor((Math.random() * 29) + 1)

  switch (number) {
    case 1:
      return("!");
      break;
    case 2:
      return("~");
      break;
    case 3:
      return("#");
      break;
    case 4:
      return("$");
      break;
    case 5:
      return("%");
      break;
    case 6:
      return("&");
      break;
    case 7:
      return("'");
      break;
    case 8:
      return("(");
      break;
    case 9:
      return(")");
      break;
    case 10:
      return("*");
      break;
    case 11:
      return("+");
      break;
    case 12:
      return(",");
      break;
    case 13:
      return("-");
      break;
    case 14:
      return(".");
      break;
    case 15:
      return("/");
      break;
    case 16:
      return(":");
      break;
    case 17:
      return(";");
      break;
    case 18:
      return("<");
      break;
    case 19:
      return("=");
      break;
    case 20:
      return(">");
      break;
    case 21:
      return("?");
      break;
    case 22:
      return("@");
      break;
    case 23:
      return("[");
      break;
    case 24:
      return("}");
      break;
    case 25:
      return("]");
      break;
    case 26:
      return("^");
      break;
    case 27:
      return("_");
      break;
    case 28:
      return("{");
      break;
    case 29:
      return("|");
      break;
  }
  return;
}

var pass = "";

function generatePassword() {
  // var lengthSelection = passLength();
  var passOptions = passOptions();

  for (var i = 0; i < parseInt(passLength); i++) {
    //create an array with the random pieces they want in their password
    
    var choices = []

    if (passOptions.confirmLower) {
      choices.push(randomLowerCase());
    }

    if (confirmUpper === true) {
      choices.push(randomUpperCase());
    }

    if (confirmSymbol === true) {
      choices.push(randomSymbol());
    }

    if (confirmNumber ===true) {
      choices.push(randomNumber());
    }
    //choose a random number between 1-choices.length
  
    var p = Math.floor(Math.random() * choices.length);
    var picked = choices[p];
    //choose one of the values in choices
    pass.concat(' ', picked);

    //add it to the password
  
  }
  
  return pass;
}; 
makePassword();
console.log(pass);





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
