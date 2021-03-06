# 3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

Given a string, find the length of the **longest substring** without repeating characters.

_Note: we are looking for a **substring** not a **sequence**._

## Example 1

**Input:** `abcabcbb`

**Output:** `3`

**Explanation:** `The answer is "abc", with the length of 3.`

## Example 2

**Input:** `bbbbb`

**Output:** `1`

**Explanation:** `The answer is "b", with the length of 1.`

## Example 3

**Input:** `pwwkew`

**Output:** `3`

**Explanation:** `The answer is "wke", with the length of 3.`

## Lessons

- I need to think harder about edge cases, especially on Mediums/Hards
- From a workflow perspective, keeping all edge cases helps when running my code over again
- Using a set was a far more optimal solution (`2.js`)
- Both `1.js` and `2.js` use a "sliding window" approach but the set is much better

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|300 ms|faster than 23.11% of JavaScript submissions|53.9 MB|less than 15.77% of JavaScript submissions|
|1|JavaScript|80 ms|faster than 94.15% of JavaScript submissions|38.6 MB|less than 81.64% of JavaScript submissions|
