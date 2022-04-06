// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return [...x.toLowerCase()].reverse().join("") === x.toLowerCase();
}
