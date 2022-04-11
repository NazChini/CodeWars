// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
//Topics tested : FUNDAMENTALS | REGULAR EXPRESSIONS | DECLARATIVE PROGRAMMING | ADVANCED LANGUAGE FEATURES | STRINGS

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

//Solution 2
function validatePIN(pin) {
  const isCorrectLength = pin.length === 4 || pin.length === 6;
  const hasOnlyNumbers = pin.match(/^\d+$/);
  return isCorrectLength && hasOnlyNumbers ? true : false;
}
