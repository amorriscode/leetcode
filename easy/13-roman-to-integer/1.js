/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
  "I": 1,
  "IV": 4,
  "V": 5,
  "IX": 9,
  "X": 10,
  "XL": 40,
  "L": 50,
  "XC": 90,
  "C": 100,
  "CD": 400,
  "D": 500,
  "CM": 900,
  "M": 1000,
}

const romanToInt = (s) => {
    const romanChars = s.split('');
    const int = romanChars
      .map((romanChar, index) => {
        const hasNext = romanToIntMap[romanChar + romanChars[index + 1]];
        const hasPrevious = romanToIntMap[romanChars[index - 1] + romanChar];
        let returnVal = hasNext ? hasNext : romanToIntMap[romanChar];

        return hasPrevious ? '' : returnVal;
      })
      .filter(romanChar => romanChar)
      .reduce((prev, curr) => prev + curr, 0);

      console.log(int);
    return int;
};
