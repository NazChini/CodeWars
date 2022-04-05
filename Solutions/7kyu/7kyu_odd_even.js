// Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero)
//Topics tested: FUNDAMENTALS | ARITHMETIC | MATHEMATICS |ALGORITHMS | NUMBERS

function oddOrEven(array) {
    return (array.reduce((sum, num) =>
        sum + num, 0)) % 2 === 0 ? 'even' : 'odd'
}