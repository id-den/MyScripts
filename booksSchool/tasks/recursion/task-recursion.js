/**
 * Function for calculate the amount numbers
 * Solution use a loop
 * @param n
 * @returns {number}
 */
function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

/**
 * Function for calculate the amount numbers:
 * Solution use recursion
 * @param n
 * @returns {*}
 */
function sumToRecursion(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToRecursion(n - 1);
}
console.log(sumToRecursion(100));

/**
 * Function for calculate the amount numbers:
 * Solution use the formula
 * @param n
 * @returns {number}
 */
function sumToFormula(n) {
  return n * (n + 1) / 2;
}
console.log(sumToFormula(100));

/**
 * Function for calculate factorial n - number
 * @param n
 * @returns {number}
 */

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

function fibonachi(n) {
  return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}
console.log(fibonachi(3));
console.log(fibonachi(10));
console.log(fibonachi(20));