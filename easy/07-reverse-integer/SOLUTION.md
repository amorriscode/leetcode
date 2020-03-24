# Solution

## Approach 1: Pop and Push Digits & Check before Overflow

### Intuition

We can build up the reverse integer one digit at a time. While doing so, we can check beforehand whether or not appending another digit would cause overflow.

### Algorithm

Reversing an integer can be done similarly to reversing a string.

We want to repeatedly "pop" the last digit off of `x` and "push" it to the back of the `rev`. In the end, `rev` will be the reverse of the `x`.

To "pop" and "push" digits without the help of some auxiliary stack/array, we can use math.

```javascript
//pop operation:
pop = x % 10;
x /= 10;

//push operation:
temp = rev * 10 + pop;
rev = temp;
```

However, this approach is dangerous, because the statement `temp = rev * 10 + pop` can cause overflow.

Luckily, it is easy to check beforehand whether or this statement would cause an overflow.

To explain, lets assume that `rev` is positive.

1. If `temp = rev * 10 + pop` causes overflow, then it must be that `rev > INTMAX / 10`
2. If `rev > INTMAX / 10`, then `temp = rev * 10 + pop` is guaranteed to overflow
3. If `rev === INTMAX / 10`, then `temp = rev * 10 + pop` will overflow if, and only if, `pop > 7`

Similar logic can be applied if `rev` is negative.

## Complexity Analysis

- **Time Complexity:** O(log(x)); there are roughly log10(x) digits in x
- **Space Complexity:** O(1)
