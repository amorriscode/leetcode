/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  // Iterate until there are no possible solutions left
  // (the remaining length of haystack is shorter than needle)
  for (let i = 0; i < (haystack.length - needle.length) + 1; i++) {
    // Loop through the needle
    for (let j = 0; j < needle.length; j++) {
      // Match one char at a time; break if no match
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      // If we get to the end of the needle without
      // a break then we have a full match
      if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return -1;
};

const example1 = strStr('hello', 'll');
console.log(example1 === 2);

const example2 = strStr('aaaaaaa', 'bbaa');
console.log(example2 === -1);
