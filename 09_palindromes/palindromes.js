const palindromes = function (palindromeString) {
  const lowerCaseString = palindromeString.toLowerCase();
  const removePunctuation = lowerCaseString.replace(/[^a-z]/g, "");
  const removeSpaces = removePunctuation.replace(/\s/g, "");
  const reverseString = removeSpaces.split("").reverse().join("");
  if (reverseString === removeSpaces) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
