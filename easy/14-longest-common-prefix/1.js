/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let longestPrefix = '';
  let finished = false;
  let index = 0;

  let tempPrefix = '';
  while (!finished && strs.length) {
    if (index > strs[0].length) {
      finished = true;
      break;
    } else {
      tempPrefix += strs[0][index];
    }

    const isCommonPrefix = strs.every(str => str.startsWith(tempPrefix));

    if (isCommonPrefix) {
      longestPrefix = tempPrefix;
      index++;
    } else {
      finished = true;
    }
  }

  return longestPrefix;
};