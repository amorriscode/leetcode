/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  // Handle an array of all 9s
  digits.unshift(1);
  return digits;
};

const tests = [
  { expect: [1, 2, 4], answer: plusOne([1, 2, 3]) },
  { expect: [4, 3, 2, 2], answer: plusOne([4, 3, 2, 1]) },
  { expect: [5, 0], answer: plusOne([4, 9]) },
  { expect: [1, 0], answer: plusOne([9]) },
  { expect: [1, 0, 0], answer: plusOne([9, 9]) },
];

tests.forEach(test => {
  console.assert(
    JSON.stringify(test.answer) === JSON.stringify(test.expect),
    `Expected ${test.answer} to equal ${test.expect}`
  );
})