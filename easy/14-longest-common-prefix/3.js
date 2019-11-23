/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    if (!strs.length) {
        return '';
    }

    for (let i = 0; i < strs[0].length; i++) {
        // Compare one character (or column) at a time
        let currChar = strs[0][i];

        // Skip the first item
        for (let j = 1; j < strs.length; j++) {
            // i === strs[j].length checks to see if strs[0] is longer than what we are comparng with
            // strs[j][i] simply checks to see if our columns match
            if (i === strs[j].length || strs[j][i] !== currChar) {
                return strs[0].slice(0, i);
            }
        }
    }

    // The entire string was matched
    return strs[0];
};