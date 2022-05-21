// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

// The array values passed in will only be strings or numbers. The only valid return values are true and false.

// Examples:

// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true
// ALGORITHMS | ARGUMENTS | BASIC LANGUAGE FEATURES | FUNDAMENTALS | FUNCTIONS | CONTROL FLOW

//Solution 01 - Frequency Counter Solution
function solution(...args){
  //1. create a freq object
  //2. loop over every array ele and count how many times it occurs in the array
  const freqOfChar = args.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1
    return count
  }, {})

  //3. loop over object, check if the count of these elements > 1, return false, otherwise true.
  for(let prop in freqOfChar) {
    if(freqOfChar[prop] > 1) {
      return true
    }
  }
  return false
}

//Solution 02 - Multiple Counters Solution
function solution(...args){
  //1. sort the array
  args.sort()
  //2. save the first ele index in a variable to compare all other ele's against
  let i = 0
  //2. loop over every array ele (starting from 2nd ele) and check if it matches the stored ele in step 1Ω
  for(let j = 1; j < args.length; j++) {
    //3. if yes, return true.
    if(args[i] === args[j]) return true
    //4. if no, update the stored variable and loop continues comparing
    i++
  }
  return false
}

//Solution 03 - With Set
function solution(...args){
   return new Set(args).size !== args.length
}
