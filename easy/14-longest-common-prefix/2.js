/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (!strs.length) {
    return '';
  }

  let prefix = strs[0];

  // Loop through everything except the first string
  // since that is what we set our prefix to
  for (i = 1; i < strs.length; i++) {
    // Loop until we find a common prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // Reduce the prefix by 1
      prefix = prefix.slice(0, prefix.length - 1);

      if (!prefix) {
        return '';
      }
    }
  }

  return prefix;
};