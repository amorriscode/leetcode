/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;
  let answer = 0;
  
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (mid <= x / mid) {
      left = mid + 1;
      answer = mid;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

const tests = [
  { expect: 2, answer: mySqrt(4) },
  { expect: 2, answer: mySqrt(8) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})