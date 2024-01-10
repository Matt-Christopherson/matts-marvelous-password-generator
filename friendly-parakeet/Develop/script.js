// Assignment code here
function generatePassword() {
  let minLength = prompt("Enter minimum password length:");
  let maxLength = prompt("Enter the maximum password length:");

  minLength = parseInt(minLength, 10);
  maxLength = parseInt(maxLength, 10);

  if (isNaN(minLength) || isNaN(maxLength) || minLength < 8 || maxLength > 128 || maxLength < minLength) {
    alert("Invalid input. Input must be a number of at least 8 and no more than 128. Length set to default.");
    minLength = 8;
    maxLength = 128;
  }

  let includeLowers = confirm("Would you like to include lowercase characters?");
  let includeUppers = confirm("Would you like to include upercase characters?");
  let includeNumbers = confirm("Would you like to include numbers?");
  let includeSpecials = confirm("Would you like to include special characters?");

  if (!includeLowers && !includeUppers && !includeNumbers && !includeSpecials) {
    alert("Invalid input. Please select at least one character type. Characters set to default.");
    includeNumbers = true;
    includeLowers = true;
    includeSpecials = true;
    includeUppers = true;
  }

  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const specials = "`~!@#$%^&*()_-+=";

  const charset = (includeLowers ? lowers: "") + (includeNumbers ? numbers: "") + (includeSpecials ? specials: "") + (includeUppers ? uppers: "");

  let password = "";

  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

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
