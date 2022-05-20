// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// FUNDAMENTALS | STRINGS

var isAnagram = function(test, original) {
  if(test.length != original.length) return false
  let freq1 = [...test.toLowerCase()].reduce((count, char) => {
    count[char] = (count[char] || 0) + 1
    return count
  }, {})
  let freq2 = [...original.toLowerCase()].reduce((count, char) => {
    count[char] = (count[char] || 0) + 1
    return count
  }, {})
  for(let prop in freq1) {
    if(!freq2[prop]) return false
    if(freq1[prop] !== freq2[prop]) return false
  }
  return true
};
