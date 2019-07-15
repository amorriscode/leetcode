/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const length = s.length;
  const set = new Set();
  let answer = 0;
  let i = 0;
  let j = 0;

  // Loop through as long as there are characters left
  while (i < length && j < length) {
    if (!set.has(s[j])) {
      // Add s[j] and increment j at the same time
      set.add(s[j++]);
      answer = Math.max(answer, set.size);
    } else {
      // Remove the first letter in the set
      // and increment i
      set.delete(s[i++]);
    }
  }

  return answer;
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
