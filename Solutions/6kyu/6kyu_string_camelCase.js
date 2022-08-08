// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  //1. checking for non-input
  if(str.length === 0) return str
  
    //2. remove the - / _
  const words = str.split(/[-_]+/)
  
    //3. capitalize first letter of remaining words, except the first word
  for(let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
  }
    //4. join without space
  return words.join('')
}

//Solution 2 
function toCamelCase(str){
  //accessing words preceded by - or _
  const regex = /[-_]\w/gi
  return str.replace(regex, function(match) {
                            return match.charAt(1).toUpperCase()
                            })
}
