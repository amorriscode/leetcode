# 771. Jewels and Stones

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have. Each character in `S` is a type of stone you have. You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

## Example 1

**Input:** J = "aA", S = "aAAbbbb"

**Output:** 3

## Example 2

**Input:** J = "z", S = "ZZ"

**Output:** 0

## Note

`S` and `J` will consist of letters and have length at most 50.
The characters in `J` are distinct.

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|56 ms|faster than 99.24% of JavaScript submissions|34.1 MB|less than 51.62% of JavaScript submissions|
|1|JavaScript|60 ms|faster than 98.37% of JavaScript submissions|34.1 MB|less than 46.96% of JavaScript submissions|
