# 58. Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return `0`.

Note: A word is defined as a maximal substring consisting of non-space characters only.

## Example

**Input:** `"Hello World"`
**Output:** `5`

## Lessons

- I was able to improve my first solution by removing the need for a filter (`O(n)`) and trimming the input before splitting

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|52 ms|faster than 72.80% of JavaScript submissions|33.7 MB|less than 88.46% of JavaScript submissions|
|2|JavaScript|48 ms|faster than 90.33% of JavaScript submissions|34 MB|less than 15.38% of JavaScript submissions|
|3|JavaScript|48 ms|faster than 90.33% of JavaScript submissions|33.9 MB|less than 30.77% of JavaScript submissions|
