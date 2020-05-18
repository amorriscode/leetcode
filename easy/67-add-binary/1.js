/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const aArr = a.split('');
  const bArr = b.split('');
  let carry = 0;
  let answer = '';

  while (aArr.length || bArr.length || carry) {
    const currA = aArr.pop() || 0;
    const currB = bArr.pop() || 0;

    let temp = +currA + +currB + carry;
    if (temp > 1) {
      carry = 1;
    } else {
      carry = 0;
    }

    answer = `${temp % 2}${answer}`
  }

  return answer;
};

const tests = [
  { expect: '100', answer: addBinary('11', '1') },
  { expect: '10101', answer: addBinary('1010', '1011') },
  { expect: '11110', answer: addBinary('1111', '1111') },
];

tests.forEach(test => {
  console.assert(
    JSON.stringify(test.answer) === JSON.stringify(test.expect),
    `Expected ${test.answer} to equal ${test.expect}`
  );
})