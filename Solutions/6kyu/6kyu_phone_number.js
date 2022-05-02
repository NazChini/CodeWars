// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// ALGORITHMS | ARRAYS | STRINGS | LOOPS | CONTROL FLOW | BASIC LANGUAGE FEATURES | FUNDAMENTALS | FORMATTING | REGULAR EXPRESSIONS | DECLARATIVE PROGRAMMING | ADVANCED LANGUAGE FEATURES

//Solution 1
function createPhoneNumber(numbers){
  const str1 = `(${numbers.slice(0, 3).join('')}) `
  const str2 = `${numbers.slice(3, 6).join('')}-`
  const str3 = `${numbers.slice(6).join('')}`
  return str1 + str2 + str3
}

//Solution 2
function createPhoneNumber(numbers){
  let format = `(xxx) xxx-xxxx`
  for(let num of numbers) {
    format = format.replace('x', num)
  }
  return format
}
