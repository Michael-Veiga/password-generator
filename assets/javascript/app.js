//Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBTN')
generateButton.addEventListener('click,' writePassword)

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Determine Password Length
// var passLength = Number(prompt("How many characters do you want your password to be?"));
// while (isNan(passlength) || passlength < 8 || passlength > 128) = passLength = Number(prompt("Password length must be between 8 - 128 characters.")

// User must choose what the password will contain
function generatePassword() {
    var passLength = prompt("How many characters do you want your password to be?");
    console.log(passLength);
    var wantNumbers = confirm("Do you want it to contain numbers?");
    console.log(wantNumbers);
    var wantUpperCase = confirm("Do you want uppercase characters?");
    console.log(wantUpperCase);
    var wantLowerCase = confirm("Do you want lowercase characters?");
    console.log(wantLowerCase);
    var wantSpecialCharacters = confirm("Do you want it to contain special characters?");
    console.log(wantSpecialCharacters);
}
// If the user fails to pick a character type
// while (!wantNumbers && !wantUpperCase && !wantLowerCase && !wantSpecialCharacters) {
//     alert("You must select one or more character types.");
//     wantNumbers = confirm("Do you want it to contain numbers?");
//     wantUpperCase = confirm("Do you want uppercase characters?");
//     wantLowerCase = confirm("Do you want lowercase characters?");
//     wantSpecialCharacters = confirm("Do you want it to contain special characters?");
// }

// Minimum for numbers, uppercase letters, lowercase letters and special characters
var minimumCount = 0;

// Blank minimums for numbers, uppercase letters, lowercase letters and special characters
var minimumNumbers = "";
var minimumUpperCase = "";
var minimumLowerCase = "";
var minimumSpecialCharacters = "";

// Generator functions
varFunctionArray = {
    getNumbers: function () {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getUpperCase: function () {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
    },
    getLowerCase: function () {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
    },
    getSpecialCharacters: function () {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

// Must determine whats variables actually mean
if (wantNumbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;
}
if (wantUpperCase === true) {
    minimumUpperCase = functionArray[1];
    minimumCount++;
}
if (wantLowerCase === true) {
    minimumLowerCase = functionArray[2];
    minimumCount++;

}
if (wantSpecialCharacters === true) {
    minimumSpecialCharacters = functionArray[3]
    minimumCount++;

}

// Empty string for loop
var randomPasswordGenerated = "";

// Loop used to generate random characters
for (let i = 0; i < parseInt(passLength) - minimumCount); i++) {
    var numberChosen = Math.floor(Math.random() * 4);

    randomPasswordGenerated += numberChosen;
}

// Adding characters to the password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumUpperCase;
randomPasswordGenerated += minimumLowerCase;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;



