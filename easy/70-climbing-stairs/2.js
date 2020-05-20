/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  if (n === 1) {
    return 1;
  }

  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

const tests = [
  { expect: 2, answer: climbStairs(2) },
  { expect: 3, answer: climbStairs(3) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})