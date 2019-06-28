/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    // Two condititons that are NOT palindromes
    // 1. All negative numbers
    // OR
    // 2. The last digit is 0 but the first digit is not
    if (x < 0 || (x % 10 === 0 && x != 0)) {
        return false;
    }

    let reverted = 0;
    // As long as x is larger than reverted, we have more numbers to grab
    while (x > reverted) {
        reverted = reverted * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // If we have an odd number, we can remove the last digit (middle digit) to check for a palindrome
    // eg. 12321 ---> reverted === 123 ---> reverted / 10 === 12
    return x === reverted || x === Math.floor(reverted / 10);
};
