/**
 * @param {string} str
 * @return {number}
 */
const MIN_INT = -Math.pow(2, 31);
const MAX_INT = Math.pow(2, 31) - 1;

const myAtoi = (str) => {
  const trimmed = str.trim();

  const validFirstChar = trimmed[0] === '+' || trimmed[0] === '-' || Number.isInteger(+trimmed[0]);
  if (!trimmed || !validFirstChar) {
    return 0;
  }

  let int = 0;
  let start = 0;
  let digit = trimmed.length;
  const isNegative = trimmed[0] === '-';

  if (trimmed[0] === '+' || trimmed[0] === '-') {
    start++;
    digit--;
  }

  for (let i = start; i < trimmed.length; i++) {
    // We found a whitespace character
    if (trimmed[i] === ' ' || !Number.isInteger(+trimmed[i])) {
      int = int / Math.pow(10, digit);
      break;
    }

    // Decrement the digit
    digit--;

    int += trimmed[i] * Math.pow(10, digit);
  }

  const withSign = isNegative ? -int : int;

  if (withSign <= MIN_INT) {
    return MIN_INT;
  }

  if (withSign >= MAX_INT) {
    return MAX_INT;
  }

  return withSign;
};

const example1 = '42';
console.log(myAtoi(example1) === 42);

const example2 = '-42';
console.log(myAtoi(example2) === -42);

const example3 = '4193 with words';
console.log(myAtoi(example3) === 4193);

const example4 = 'words and 987';
console.log(myAtoi(example4) === 0);

const example5 = '-91283472332';
console.log(myAtoi(example5) === MIN_INT);

const example6 = '3.14';
console.log(myAtoi(example6) === 3);

const example7 = '  -0012a42';
console.log(myAtoi(example7) === -12);