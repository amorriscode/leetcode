/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

const example1 = strStr('hello', 'll');
console.log(example1 === 2);

const example2 = strStr('aaaaaaa', 'bbaa');
console.log(example2 === -1);
