// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//Topics tested: ALGORITHMS | UTILITIES | STRINGS

function maskify(cc) {
  return cc.slice(0, -4).replace(/\w/gi, "#").concat(cc.slice(-4));
}

//Solution 2
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

// why not ?
//     return cc.replace(^/.(?=.{4})$/g, '#')
