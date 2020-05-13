/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  digits[digits.length - 1] += 1;

  if (digits[digits.length - 1] === 10) {
    if (digits.length > 1) {
      digits = [...plusOne(digits.slice(0, digits.length - 1)), 0];
    } else {
      digits = [1, 0];
    }
  }

  return digits;
};

const tests = [
  { expect: [1, 2, 4], answer: plusOne([1, 2, 3]) },
  { expect: [4, 3, 2, 2], answer: plusOne([4, 3, 2, 1]) },
  { expect: [5, 0], answer: plusOne([4, 9]) },
];

tests.forEach(test => {
  console.assert(
    JSON.stringify(test.answer) === JSON.stringify(test.expect),
    `Expected ${test.answer} to equal ${test.expect}`
  );
})