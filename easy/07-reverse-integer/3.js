/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // String manipulation is fairly expensive
  let reverseNumber = 0;
  let number = Math.abs(x);
  const sign = x < 0;

  while (number) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  if (reverseNumber > 0x7FFFFFFF) {
    return 0;
  }

  return sign ? -reverseNumber : reverseNumber;
};
