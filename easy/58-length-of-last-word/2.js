/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  let len = 0;
  let tail = s.length - 1;

  while (tail >= 0 && s[tail] === ' ') {
    tail--;
  }

  while (tail >= 0 && s[tail] !== ' ') {
    len++;
    tail--;
  }

  return len;
};

const tests = [
  { expect: 5, answer: lengthOfLastWord('Hello World') },
  { expect: 1, answer: lengthOfLastWord('a ') },
  { expect: 1, answer: lengthOfLastWord('a') },
  { expect: 0, answer: lengthOfLastWord('') },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})