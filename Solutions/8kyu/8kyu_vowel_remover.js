// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//Topics tested : FUNDAMENTALS | STRINGS | PARSING | ALGORITHMS

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

//Solution 2
function shortcut(string) {
  return string
    .split("")
    .filter((letter) => !["a", "e", "i", "o", "u"].includes(letter))
    .join("");
}
