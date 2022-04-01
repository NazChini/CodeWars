// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//Topics tested: FUNDAMENTALS | LISTS | DATA STRUCTURES | ARRAYS

function removeEveryOther(arr){
  return arr.filter((ele, i) => i % 2 === 0);
}
