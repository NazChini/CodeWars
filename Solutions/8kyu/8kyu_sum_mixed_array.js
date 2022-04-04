// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//Topics trained: FUNDAMENTALS | STRINGS | NUMBERS | ARRAYS

//Solution 01
function sumMix(x) {
    return x.reduce((sum, ele) => sum + parseInt(ele), 0)
}

//Solution 02 - slight variation
function sumMix(x){
    return x.reduce((sum, ele) => sum + +ele, 0)
}
