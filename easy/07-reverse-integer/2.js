/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // Get rid of any negative sign with Math.abs
  // Reverse the string and join the number back together
  // +String also trims leading zeroes
  const reversedNumber = +String(Math.abs(x)).split('').reverse().join('');

  // Calculating the power is not necessary
  if (reversedNumber > 0x7FFFFFFF) {
    return 0;
  }
  
  // No need to store a isNegative variable
  // Use the original number to determine if it's negative
  return x < 0 ? -reversedNumber : reversedNumber;
};