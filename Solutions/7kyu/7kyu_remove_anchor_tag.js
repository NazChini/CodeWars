// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//Topics tested : FUNDAMENTALS | REGULAR EXPRESSIONS | DECLARATIVE PROGRAMMING | ADVANCED LANGUAGE FEATURES | STRINGS

//Solution 1
function removeUrlAnchor(url) {
  return url.split("#")[0];
}

//Solution 2
function removeUrlAnchor(url) {
  return url.replace(/#.*/g, "");
}

//what if i wanted to remove everything after the hash (not including the hash?)
