// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const count = A.reduce((acc, num) => {
    acc[num] = acc[num] ? ++acc[num] : 1
    return acc
  }, {})
  for(prop in count) {
    if(count[prop] % 2 === 1) return Number(prop)
  }
}

//Solution 2
function findOdd(A) {
  return A.find((item,index) => arr.
                                filter(ele => ele === item).length % 2)
}

//Solution 3
const findOdd = (A) => A.reduce((a, b) => a ^ b);
