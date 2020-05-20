/**
 * @param {number} n
 * @return {number}
 */
const climbStairsRecursive = (i, n, memo) => {
  if (i > n) {
    return 0;
  }

  if (i === n) {
    return 1;
  }

  if (memo.get(i) > 0) {
    return memo.get(i);
  }

  memo.set(i, climbStairsRecursive(i + 1, n, memo) + climbStairsRecursive(i + 2, n, memo));

  return memo.get(i);
}

const climbStairs = n => {
  const memo = new Map();
  return climbStairsRecursive(0, n, memo);
};

const tests = [
  { expect: 2, answer: climbStairs(2) },
  { expect: 3, answer: climbStairs(3) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})