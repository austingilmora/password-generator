// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



var randomLowerCase = function() {  
  var letter = Math.floor((Math.random() * 26) + 1)

  switch (letter) {
    case 1:
      console.log("a")
      break;
      case 2:
      console.log("b")
      break;
      case 3:
      console.log("c")
      break;
      case 4:
      console.log("d")
      break;
      case 5:
      console.log("e")
      break;
      case 6:
      console.log("f")
      break;
      case 7:
      console.log("g")
      break;
      case 8:
      console.log("h")
      break;
      case 9:
      console.log("i")
      break;
      case 10:
      console.log("j")
      break;
      case 11:
      console.log("k")
      break;
      case 12:
      console.log("l")
      break;
      case 13:
      console.log("m")
      break;
      case 14:
      console.log("n")
      break;
      case 15:
      console.log("o")
      break;
      case 16:
      console.log("p")
      break;
      case 17:
      console.log("q")
      break;
      case 18:
      console.log("r")
      break;
      case 19:
      console.log("s")
      break;
      case 20:
      console.log("t")
      break;
      case 21:
      console.log("u")
      break;
      case 22:
      console.log("v")
      break;
      case 23:
      console.log("w")
      break;
      case 24:
      console.log("x")
      break;
      case 25:
      console.log("y")
      break;
      case 26:
      console.log("z")
      break;
  }
  return;
}
console.log(randomLowerCase());

var randomUpperCase = function() {  
  var letter = Math.floor((Math.random() * 26) + 1)

  switch (letter) {
    case 1:
      console.log("A")
      break;
      case 2:
      console.log("B")
      break;
      case 3:
      console.log("C")
      break;
      case 4:
      console.log("D")
      break;
      case 5:
      console.log("E")
      break;
      case 6:
      console.log("F")
      break;
      case 7:
      console.log("G")
      break;
      case 8:
      console.log("H")
      break;
      case 9:
      console.log("I")
      break;
      case 10:
      console.log("J")
      break;
      case 11:
      console.log("K")
      break;
      case 12:
      console.log("L")
      break;
      case 13:
      console.log("M")
      break;
      case 14:
      console.log("N")
      break;
      case 15:
      console.log("O")
      break;
      case 16:
      console.log("P")
      break;
      case 17:
      console.log("Q")
      break;
      case 18:
      console.log("R")
      break;
      case 19:
      console.log("S")
      break;
      case 20:
      console.log("T")
      break;
      case 21:
      console.log("U")
      break;
      case 22:
      console.log("V")
      break;
      case 23:
      console.log("W")
      break;
      case 24:
      console.log("X")
      break;
      case 25:
      console.log("Y")
      break;
      case 26:
      console.log("Z")
      break;
  }
  return;
}
console.log(randomUpperCase())

var randomNumber = function() {
  var number = Math.floor((Math.random() * 10) + 1)

  switch (number) {
    case 1:
      console.log("1")
      break;
    case 2:
      console.log("2")
      break;
    case 3:
      console.log("3")
      break;
    case 4:
      console.log("4")
      break;
    case 5:
      console.log("5")
      break;
    case 6:
      console.log("6")
      break;
    case 7:
      console.log("7")
      break;
    case 8:
      console.log("8")
      break;
    case 9:
      console.log("9")
      break;
    case 10:
      console.log("0")
      break; 
  }
  return;
}
console.log(randomNumber());

var randomSymbol = function() {  
  var number = Math.floor((Math.random() * 29) + 1)

  switch (number) {
    case 1:
      console.log("!");
      break;
    case 2:
      console.log("~");
      break;
    case 3:
      console.log("#");
      break;
    case 4:
      console.log("$");
      break;
    case 5:
      console.log("%");
      break;
    case 6:
      console.log("&");
      break;
    case 7:
      console.log("'");
      break;
    case 8:
      console.log("(");
      break;
    case 9:
      console.log(")");
      break;
    case 10:
      console.log("*");
      break;
    case 11:
      console.log("+");
      break;
    case 12:
      console.log(",");
      break;
    case 13:
      console.log("-");
      break;
    case 14:
      console.log(".");
      break;
    case 15:
      console.log("/");
      break;
    case 16:
      console.log(":");
      break;
    case 17:
      console.log(";");
      break;
    case 18:
      console.log("<");
      break;
    case 19:
      console.log("=");
      break;
    case 20:
      console.log(">");
      break;
    case 21:
      console.log("?");
      break;
    case 22:
      console.log("@");
      break;
    case 23:
      console.log("[");
      break;
    case 24:
      console.log("}");
      break;
    case 25:
      console.log("]");
      break;
    case 26:
      console.log("^");
      break;
    case 27:
      console.log("_");
      break;
    case 28:
      console.log("{");
      break;
    case 29:
      console.log("|");
      break;
  }
  return;
}
console.log(randomSymbol());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
