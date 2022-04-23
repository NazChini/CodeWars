// Given the triangle of consecutive odd numbers:

//              1                 => sum = 1
//           3     5              => sum = 8
//        7     9    11           => sum = 27
//    13    15    17    19        => sum = 64
// 21    23    25    27    29     => sum = 125
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// FUNDAMENTALS | ARRAYS | LISTS | DATA STRUCTURES | NUMBERS | ARITHMETIC | MATHEMATICS | ALGORITHMS


function rowSumOddNumbers(n) {
  //sum of all elements in a particular n'th row = n**3
	return n ** 3
}
