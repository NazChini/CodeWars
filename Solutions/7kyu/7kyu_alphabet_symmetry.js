// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

//Topics tested: FUNDAMENTALS | STRINGS

//Solution 01
function solve(arr) {
  //create an array to compare the input array against
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //loop every every element of the array
  return arr.map((ele) => {
    //create an array of letters from the input string
    let eleArr = ele.toLowerCase().split("");
    let count = 0;
    //compare the two arrays
    eleArr.forEach((letter, i) => {
      if (letter === alphabet[i]) count++;
    });
    return count;
  });
}

//Solution 02
function solve(arr) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return arr.map((ele) => {
    return [...ele.toLowerCase()].filter(
      (letter, i) => i === alphabet.indexOf(letter)
    ).length;
  });
}
