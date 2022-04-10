// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

//Topics tested: FUNDAMENTALS | NUMBERS | BASIC LANGUAGE FEATURES | ARRAYS

function adjacentElementsProduct(array) {
  const productArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    productArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...productArr);
}
