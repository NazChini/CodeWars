// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// FUNDAMENTALS | STRINGS | NUMBERS | ARRAYS

function divCon(x) {
  const strAddition = x.reduce(
    (sum, ele) => (typeof ele === "string" ? sum + +ele : sum),
    0
  );
  const numAddition = x.reduce(
    (sum, ele) => (typeof ele === "number" ? sum + ele : sum),
    0
  );
  return numAddition - strAddition;
}

//Solution 02
function divCon(x) {
  return x.reduce(
    (sum, ele) => (typeof ele === "number" ? sum + ele : sum - +ele),
    0
  );
}
