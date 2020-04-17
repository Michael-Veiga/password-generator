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

// Determine Password Length
var passLength = Number(prompt("How many characters do you want your password to be?"));
while (isNan(passlength) || passlength < 8 || passlength > 128) passLength = Number(prompt("Password length must be between 8 - 128 characters."));

// User must choose what the password will contain
var wantNumbers = confirm("Do you want it to contain numbers?");
var wantUpperCase = confirm("Do you want uppercase characters?");
var wantLowerCase = confirm("Do you want lowercase characters?");
var wantSpecialCharacters = confirm("Do you want it to contain special characters?");

// If the user fails to pick a character type
while (!wantNumbers && !wantUpperCase && !wantLowerCase && !wantSpecialCharacters) {
    alert("You must select one or more character types.");
    wantNumbers = confirm("Do you want it to contain numbers?");
    wantUpperCase = confirm("Do you want uppercase characters?");
    wantLowerCase = confirm("Do you want lowercase characters?");
    wantSpecialCharacters = confirm("Do you want it to contain special characters?");
}

// Arrays of possible characters
var randomNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomUc = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var randomLc = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var randomSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Minimum for numbers, uppercase letters, lowercase letters and special characters
var minimumCount = 0;

// Empty minimums for numbers, lowerCases, upperCases & specialCharacters

var minNumbers = "";
var minLowerCases = "";
var minUpperCases = "";
var minSpecialCharacters = "";

// Generator functions
var functionArray = [
    function getNumbers() {
        return Math.floor(Math.random() * randomNum.length);
    },
    function getUpperCase() {
        return Math.floor(Math.random() * randomUc.length);
    },
    function getLowerCase() {
        return Math.floor(Math.random() * randomLc.length);
    },
    function getSpecialCharacters() {
        return Math.floor(Math.random() * randomSpecial.length);
    },
];

// Checks to see if a variable is active, and assigns it an empty minimum
if (wantNumbers) {
    minNumbers = functionArray.getNumbers();
    minimumCount++;
}
if (wantUpperCase) {
    minUpperCase = functionArray.getUpperCase();
    minimumCount++;
}
if (wantLowerCase) {
    minLowerCase = functionArray.getLowerCase();
    minimumCount++;
}
if (wantSpecialCharacters) {
    minSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
}

// Loop used to get random characters
for (let i = 0, i < parseInt(passwordLength) - minimumCount); i++)






