// Your task is to sum the differences between consecutive pairs in the array in descending order.
// If the array is empty or the array has only one element the result should be 0
//Topics tested: FUNDAMENTALS | ARRAYS

//Solution 01
function sumOfDifferences(arr) {
  const sorted = arr.sort((a, b) => b - a);
  const diff = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    diff.push(sorted[i] - sorted[i + 1]);
  }
  return diff.reduce((sum, num) => sum + num, 0);
}

//Solution 02
function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .map((num, i) => num - arr[i + 1] || 0)
    .reduce((sum, num) => sum + num);
}

//Solution 03
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
