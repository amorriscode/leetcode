# 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

## Example 1

**Input:** `1->1->2`
**Output:** `1->2`

## Example 2

**Input:** `1->1->2->3->3`
**Output:** `1->2->3`

## Lessons

- _Sorted_ is the key word here; no extra space needed because we know a duplicate will be next if it exists

## Solutions

|Attempt|Language|Runtime|Runtime Comparison|Memory|Memory Comparison|
|:-:|:-:|:-:|:-:|:-:|:-:|
|1|JavaScript|128 ms|faster than 5.12% of JavaScript submissions|38.9 MB|less than 6.25% of JavaScript submissions|
|2|JavaScript|80 ms|faster than 18.18% of JavaScript submissions|38.6 MB|less than 6.25% of JavaScript submissions|
