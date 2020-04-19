// Create an empty array for password
var passwordArr = [];

// Arrays of possible characters
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowerArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Determine Password Length
function generatePassword() {

    var passwordString = "";

    var passLength = Number(prompt("How many characters do you want your password to be?")); {
        console.log(passLength);
        if (isNaN(passLength) || passLength < 8 || passLength > 128) {
            passLength = Number(prompt("Password length must be between 8 - 128 characters."));

        }
        // User must choose what the password will contain
        var wantNumbers = confirm("Do you want it to contain numbers?");
        console.log(wantNumbers)
        var wantUpperCase = confirm("Do you want uppercase characters?");
        console.log(wantUpperCase)
        var wantLowerCase = confirm("Do you want lowercase characters?");
        console.log(wantLowerCase)
        var wantSpecialCharacters = confirm("Do you want it to contain special characters?");
        console.log(wantSpecialCharacters)
    }
    // If the user fails to pick a character type
    while (!wantNumbers && !wantUpperCase && !wantLowerCase && !wantSpecialCharacters) {
        alert("You must select one or more character types.");
        wantNumbers = confirm("Do you want it to contain numbers?");
        wantUpperCase = confirm("Do you want uppercase characters?");
        wantLowerCase = confirm("Do you want lowercase characters?");
        wantSpecialCharacters = confirm("Do you want it to contain special characters?");
    }

    // Take user responses and add them to password array
    if (wantNumbers) {
        passwordArr.push(numArr);

    }

    if (wantUpperCase) {
        passwordArr.push(upperArr);

    }

    if (wantLowerCase) {
        passwordArr.push(lowerArr);

    }

    if (wantSpecialCharacters) {
        passwordArr.push(specialArr);
    }

    // For loop that will run through user choices
    for (var i = 0; i < passLength; i++) {

        let randomArrNum;
        let chosenCharArr;
        let randomCharNum;
        let randomChar;

        // Random Number generation
        randomArrNum = parseInt(Math.floor(Math.random() * passwordArr.length));

        chosenCharArr = passwordArr[randomArrNum];

        randomCharNum = Math.floor(Math.random() * chosenCharArr.length);
        console.log(chosenCharArr)

        randomChar = chosenCharArr[randomCharNum];
        console.log(randomChar);

        passwordString += randomChar;
    }

    password = passwordString;
    return passwordString;


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








