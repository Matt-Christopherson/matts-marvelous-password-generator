
function generatePassword() {
  // Sends the user prompts asking for a minimum and maximum length for their password. The user's entry then becomes the value for the minLength and maxLength variables.
  let minLength = prompt("Enter minimum password length:");
  let maxLength = prompt("Enter the maximum password length:");
// Converts the values for minLength and maxLength into numbers instead of strings.
  minLength = parseInt(minLength, 10);
  maxLength = parseInt(maxLength, 10);
// Checks to make sure that the user entered numbers into the prompts and that minLength is at least 8, maxLength is at least 128, and maxLength is greater than minLength. If not, the program alerts the user and instead puts in a default min and max length.
  if (isNaN(minLength) || isNaN(maxLength) || minLength < 8 || maxLength > 128 || maxLength < minLength) {
    alert("Invalid input. Input must be a number of at least 8 and no more than 128. Length set to default.");
    minLength = 8;
    maxLength = 128;
  }
// Defines variables as true or false based on the users preferences. The program asks the user to confirm whether or not they would like to use lowercase, uppercase, numeric, and/or special characters. If they click "ok" it sets the variable to true, and if they click "cancel" it sets the variable to false.
  let includeLowers = confirm("Would you like to include lowercase characters?");
  let includeUppers = confirm("Would you like to include upercase characters?");
  let includeNumbers = confirm("Would you like to include numbers?");
  let includeSpecials = confirm("Would you like to include special characters?");
// Checks to make sure they select at least one type of character. If all variables are designated as false, then the program alerts the user and instead puts in a default set of characters types . 
  if (!includeLowers && !includeUppers && !includeNumbers && !includeSpecials) {
    alert("Invalid input. Please select at least one character type. Characters set to default.");
    includeNumbers = true;
    includeLowers = true;
    includeSpecials = true;
    includeUppers = true;
  }
// Defines variables for the four different character types.
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const specials = "`~!@#$%^&*()_-+=";
// Makes a character set that includes the character types as long as their variables are true. If the variables are false, it only includes an empty string.
  const charset = (includeLowers ? lowers: "") + (includeNumbers ? numbers: "") + (includeSpecials ? specials: "") + (includeUppers ? uppers: "");
// Makes the password a string.
  let password = "";
// Randomizes the length of the password using the parameters set by the user. 
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
// Generates the password using all the variables set in the preceding code.
  for (let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
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


