/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  const splitByWords = s.trim().split(' ');

  if (splitByWords.length) {
    return splitByWords[splitByWords.length - 1].length;
  }

  return 0;
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