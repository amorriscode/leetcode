/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s.length) {
    return 0;
  }

  const substrings = [];
  let currIndex = 0;
  let startingIndex = 0;
  let substring = '';

  while (currIndex !== s.length) {
    substring += s[currIndex];

    if (substring.includes(s[currIndex + 1]) || currIndex === s.length - 1) {
      substrings.push(substring);
      substring = '';
      startingIndex++;
      currIndex = startingIndex;
    } else {
      currIndex++;
    }  
  }

  return substrings.reduce((prevLength, currSubstring) => (
    prevLength < currSubstring.length 
      ? currSubstring.length 
      : prevLength
  ), 0);
};

const test1 = lengthOfLongestSubstring('abcabcbb');
console.log(test1, test1 === 3);

const test2 = lengthOfLongestSubstring('bbbbb');
console.log(test2, test2 === 1);

const test3 = lengthOfLongestSubstring('pwwkew');
console.log(test3, test3 === 3);

const test4 = lengthOfLongestSubstring('dvdf');
console.log(test4, test4 === 3);

const test5 = lengthOfLongestSubstring('a');
console.log(test5, test5 === 1);
