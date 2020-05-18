/**
 * @param {string} digits
 * @return {string[]}
 */

const numLetterMap = [
  '0',
  '1',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
];

const letterCombinations = (digits) => {
  const result = [];
  if (digits.length === 0) {
    return result;
  }

  const letterCombinationsRecursive = (current, index) => {
    if (index === digits.length) {
      result.push(current);
      return;
    }
  
    const letters = numLetterMap[+digits[index]];
    for (let i = 0; i < letters.length; i++) {
      letterCombinationsRecursive(current + letters[i], index + 1);
    }
  }

  letterCombinationsRecursive('', 0);

  return result;
};

const tests = [
  { expect: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'], answer: letterCombinations('23') },
];

tests.forEach(test => {
  console.assert(
    JSON.stringify(test.answer) === JSON.stringify(test.expect),
    `Expected ${JSON.stringify(test.answer)} to equal ${JSON.stringify(test.expect)}`
  );
})