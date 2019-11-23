# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## Example 1

**Input:** `["flower","flow","flight"]`
**Output:** `"fl"`

## Example 2

**Input:** `["dog","racecar","car"]`
**Output:** `""`
**Explanation:** There is no common prefix among the input strings.

## Note

All given inputs are in lowercase letters `a-z`.

## Lessons

- Horizontal scanning makes more sense because you iterate through the array once
  - My frst solution iterates over the array many times with `every`
- Vertical scanning is better in the _best case_ because we only compare the _shortest_ string in the array

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|56 ms|faster than 80.28% of JavaScript submissions|34.5 MB|less than 62.50% of JavaScript submissions|
|2|JavaScript|52 ms|faster than 92.67% of JavaScript submissions|33.7 MB|less than 96.88% of JavaScript submissions|
|3|JavaScript|44 ms|faster than 99.47% of JavaScript submissions|35.2 MB|less than 34.38% of JavaScript submissions|
