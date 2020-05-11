/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  if (n <= 1) {
    return '1';
  }
  
  let answer = '';
  const prev = countAndSay(n - 1);

  let count = 1;
  let index = prev.length - 1;

  while (index >= 0) {
    if (prev[index] === prev[index - 1]) {
      count++;
    } else {
      answer = `${count}${prev[index]}${answer}`;
      count = 1;
    }

    index--;
  }

  return answer;
};

const tests = [
  { expect: '1', answer: countAndSay(1) },
  { expect: '11', answer: countAndSay(2) },
  { expect: '21', answer: countAndSay(3) },
  { expect: '1211', answer: countAndSay(4) },
  { expect: '111221', answer: countAndSay(5) },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
})