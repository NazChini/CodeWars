// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Topics tested : FUNDAMENTALS | ARITHMETIC | MATHEMATICS | ALGORITHMS | NUMBERS

function squareSum(numbers) {
    return numbers.map(num => num ** 2)
        .reduce((sum, ele) => sum + ele, 0)
}