/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}

const romanToInt = (s) => {
  // Start with the last item so we don't
  // look ahead to an index that doesn't exist
  let result = romanToIntMap[s[s.length - 1]];
  for (let i = 0; i < s.length - 1; i++) {
    result += romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]
      ? -romanToIntMap[s[i]]
      : romanToIntMap[s[i]];
  }

  return result;
};
