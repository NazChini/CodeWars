// Build a function that returns an array of integers from n to 1 where n>0.

// Solution 01 using simple for loop
const reverseSeq = n => {
  const array = [];
  for(let i = n; i > 0; i--) {
    array.push(i);
  }
  return array;
};

// Solution 02 using Array constructor
const reverseSeq = n => {
  return Array(n).fill(0).map((num, index) => n - 1);
};

//Solution 03 array methods
const reverseSeq = length => Array.from({length}, () => length--);
