/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  return Math.floor(Math.pow(10, Math.log10(x) / 2));
};

const tests = [
  { expect: 2, answer: mySqrt(4) },
  { expect: 2, answer: mySqrt(8) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})