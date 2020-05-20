/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  if (n === 1) {
    return 1;
  }

  let first = 1;
  let second = 2;
  let third;

  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return second;
};

const tests = [
  { expect: 2, answer: climbStairs(2) },
  { expect: 3, answer: climbStairs(3) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})