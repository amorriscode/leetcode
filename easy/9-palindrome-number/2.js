/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    let temp = x;
    let reversed = [];

    // Any single positive digit is a palindrome
    if (x >= 0 && x < 10) {
        return true;
    }

    while (temp > 0) {
        temp = temp / 10;
        reversed.push(Math.round((temp - Math.floor(temp)) * 10));
        temp = Math.floor(temp);
    }

    return x === parseInt(reversed.join(''));
};
