# 6. ZigZag Conversion

The string `PAYPALISHIRING` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `PAHNAPLSIIGYIR`

Write the code that will take a string and make this conversion given a number of rows:

`string convert(string s, int numRows);`

## Example 1

**Input:** `s = PAYPALISHIRING`, `numRows = 3`

**Output:** `PAHNAPLSIIGYIR`

## Example 2

**Input:** `s = PAYPALISHIRING`, `numRows = 4`

**Output:** `PINALSIGYAHRPI`

**Explanation:**

```
P     I    N
A   L S  I G
Y A   H R
P     I
```

## Lessons

- `flat` is not supported on Leet Code [but seems fine on modern browsers](https://caniuse.com/#search=flat)
    - Can use `[].concat(...grid)` instead

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|100 ms|faster than 40.34% of JavaScript submissions|41.7 MB|less than 61.11% of JavaScript submissions|
