/**
 * @param {string} s
 * @return {boolean}
 */
const isOpen = parens => parens === '[' || parens === '{' || parens === '(';
const isValid = s => {
  const openParens = [];
  const parenPair = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  const parens = s.split('');
  const parenCounts = new Map();

  for (let i = 0; i < parens.length; i++) {
    if (isOpen(parens[i])) {
      openParens.push(parens[i]);
      parenCounts.set(parens[i], (parenCounts.get(parens[i]) || 0) + 1);
    } else {
      if (parenPair[parens[i]] !== openParens[openParens.length - 1]) {
        return false;
      }

      parenCounts.set(parens[i], (parenCounts.get(parens[i]) || 0) + 1);
      openParens.pop();
    }
  }

  if (openParens.length) {
    return false;
  }

  return true;
};

const example1 = isValid('[(])');
console.log(example1 === false);

const example2 = isValid('[()]');
console.log(example2 === true);

const example3 = isValid('()[]{}');
console.log(example3 === true);

const example4 = isValid('(]');
console.log(example4 === false);

const example5 = isValid('[');
console.log(example5 === false);