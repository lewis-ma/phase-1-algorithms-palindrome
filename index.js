

function isPalindrome(word) {
  // Reverse the word and compare with the original
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

/* 
  Pseudocode:
  1. Create a variable called `reversed` and set it to the reverse of the input `word` by splitting it into an array of characters, reversing the array, and then joining the characters back together into a string
  2. Return whether `word` is equal to `reversed`
*/

/*
  Explanation:
  The function takes a single argument, `word`, which is the string to check for palindrome-ness. The function first reverses the string by splitting it into an array of characters, reversing the array, and then joining the characters back together into a string. It then returns whether the original string `word` is equal to the reversed string. If they are equal, the function returns true, indicating that `word` is a palindrome. If they are not equal, the function returns false, indicating that `word` is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
