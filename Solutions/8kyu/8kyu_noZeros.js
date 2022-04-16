// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//Solution 01
function noBoringZeros(n) {
  while (n % 10 === 0 && n != 0) {
    n /= 10;
  }
  return n;
}

//Solution 02
function noBoringZeros(n) {
  let str = `${n}`;
  for (let i = 0; i < `${n}`.length; i++) {
    if (str.endsWith("0")) {
      str = str.substring(0, str.length - 1);
    }
  }
  return Number(str);
}
