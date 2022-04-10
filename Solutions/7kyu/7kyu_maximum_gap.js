// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
//Topics tested: FUNDAMENTALS | NUMBERS | BASIC LANGUAGE FEATURES | ARRAYS | LOOPS | CONTROL FLOW

function maxGap(numbers) {
  const sorted = numbers.sort((a, b) => b - a);
  const diffArr = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    diffArr.push(sorted[i] - sorted[i + 1]);
  }
  return Math.max(...diffArr);
}
