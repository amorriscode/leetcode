# Solution

## Bitwise Manipulation (Solution 3)

### Concept

- If we take `XOR` of zero and some bit, it will return that bit
  - `a ^ 0 = a`
- If we take `XOR` of two same bits, it will return `0`
  - `a ^ a = 0`
- `a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b`

So we can `XOR` all bits together to find the unique number.

### Complexity Analysis

- **Time Complexity:** `O(n)`
  - We only iterate through `nums` so the time complexity is the number of elements in `nums`
- **Space Complexity:** `O(1)`
  - We just need to keep the value returned from our `XOR` operations