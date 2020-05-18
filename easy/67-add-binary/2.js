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
    if (aArr.length) {
      carry += +aArr.pop();
    }

    if (bArr.length) {
      carry += +bArr.pop();
    }

    answer = `${carry % 2}${answer}`;
    carry = Math.floor(carry / 2); 
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