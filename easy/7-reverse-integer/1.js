/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const string = x.toString();
  const isNegative = string[0] === '-';
  const numberArray = string.split('').reverse();

  // Remove leading zeroes
  while (numberArray[0] === '0') {
    numberArray.splice(0, 1);
  }
  
  if (isNegative) {
    numberArray.splice(numberArray.length - 1, 1);
  }
  
  const finalNumber = numberArray.join('');
  
  if (finalNumber > (Math.pow(2, 31) - 1)) {
    return 0;
  }
  
  return isNegative
    ? -1 * finalNumber
    : finalNumber;
};