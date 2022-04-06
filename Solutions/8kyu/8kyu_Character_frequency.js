// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

//Topics trained: FUNDAMENTALS | STRINGS

function charFreq(message) {
  return [...message].reduce((count, ele) => {
    count[ele] = count[ele] ? ++count[ele] : 1;
    return count;
  }, {});
}

//Solution 02 using AND short circuit operator
function charFreq(message) {
  return message.split("").reduce((count, ele) => {
    return (count[ele] = (count[ele] || 0) + 1) && count;
  }, {});
}
