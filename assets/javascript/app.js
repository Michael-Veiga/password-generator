// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Create an empty array for password and text
var passwordText = [];
var passwordArr = [];

// Arrays of possible characters
var randomNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomUc = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var randomLc = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var randomSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Determine Password Length
function generatePassword() {
    var passLength = Number(prompt("How many characters do you want your password to be?"));
    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
        passLength = Number(prompt("Password length must be between 8 - 128 characters."));
        console.log(passLength);
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
    // If the user fails to pick a character type
    while (!wantNumbers && !wantUpperCase && !wantLowerCase && !wantSpecialCharacters) {
        alert("You must select one or more character types.");
        wantNumbers = confirm("Do you want it to contain numbers?");
        wantUpperCase = confirm("Do you want uppercase characters?");
        wantLowerCase = confirm("Do you want lowercase characters?");
        wantSpecialCharacters = confirm("Do you want it to contain special characters?");
    }
}
// Take user responses and add them to password array
if (wantNumbers) {
    passwordArr.push(randomNum);
}

if (wantUpperCase) {
    passwordArr.push(randomUc);
}

if (wantLowerCase) {
    passwordArr.push(randomLc);
}

if (wantSpecialCharacters) {
    passwordArr.push(randomSpecial);
}

// For loop that will run through user choices
for (var i = 0; i < 2; i++) {
    passwordArr.push(getRandom(randomNum));
}

for (var i = 0; i < 2; i++) {
    passwordArr.push(getRandom(randomUc));
}

for (var i = 0; i < 2; i++) {
    passwordArr.push(getRandom(randomLc));
}

for (var i = 0; i < 2; i++) {
    passwordArr.push(getRandom(randomSpecial));
}


// Generator functions
function getRandom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var char = arr[index];
    console.log(index, char);
    return char;
}

getRandom()



// Checks to see if a variable is active, and assigns it an empty minimum
// if (wantNumbers) {
//     minNumbers = functionArray.getNumbers();
//     minimumCount++;
// }
// if (wantUpperCase) {
//     minUpperCase = functionArray.getUpperCase();
//     minimumCount++;
// }
// if (wantLowerCase) {
//     minLowerCase = functionArray.getLowerCase();
//     minimumCount++;
// }
// if (wantSpecialCharacters) {
//     minSpecialCharacters = functionArray.getSpecialCharacters();
//     minimumCount++;
// }

// Loop used to get random characters
// for (let i = 0, i < parseInt(passwordLength) - minimumCount); i++)






