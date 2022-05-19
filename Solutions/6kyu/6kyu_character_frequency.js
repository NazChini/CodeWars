// Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

// The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

//   letterFrequency('aaAabb dddDD hhcc')
// will return

//   [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
// Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.

// ALGORITHMS | STRINGS | UTILITIES

function letterFrequency(text){
  // 1. lowercase the string
  text = text.toLowerCase()
  
  //2. remove all spaces and punctuation, numbers
  text = text.replace(/[^a-z]/g, '')
  
  //3. spread the string into an array
  //4. create a counter object 
  //5. loop over every array element and record its frequency in the obj.
    let frequency = [...text].reduce((count, char) => {
      count[char] = (count[char] || 0) + 1
      return count
    }, {})
  
    //6. get key value sub pairs from object
    const arr = Object.entries(frequency)
   
    arr.sort((a, b) => {
        //7. sort the subarrays using index [1] elements
      let diff = b[1] - a[1]
      //8. if equal count, sort alphabetically
      if(diff === 0) {
        diff = (b[0] > a[0]) ? -1 : 1
      }
      return diff
    })
  return arr
}
