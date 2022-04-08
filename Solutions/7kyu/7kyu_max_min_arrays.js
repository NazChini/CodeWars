// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

function solve(arr) {
  arr.sort((a, b) => a - b);
  const finalArr = [];
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (i != j) finalArr.push(arr[j], arr[i]);
    else finalArr.push(arr[i]);
  }
  return finalArr;
}

//Solution 2
function solve(arr) {
  return [...arr.sort((a, b) => a - b)].map((num, i) =>
    i % 2 ? arr.shift() : arr.pop()
  );
}
