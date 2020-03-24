/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    const numString = x.toString();
    return numString === numString.split('').reverse().join('');
};