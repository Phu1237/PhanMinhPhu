# Problem 3 - 99 Tech Code Challenge

## Task

Provide 3 unique implementations of the following function in TypeScript.

- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

## Solutions

### Solution 1

This function uses a loop to sum all numbers from 1 to n.

- Time Complexity: O(n) - The loop runs `n` times.
- Space Complexity: O(1) - Uses a constant amount of space.

### Solution 2

Use the mathematical formula for the sum of the first n natural numbers.

- Time Complexity: O(1) - Calculation is done in constant time.
- Space Complexity: O(1) - Uses a constant amount of space

### Solution 3

This function uses recursion to sum all numbers from 1 to n.

- Time Complexity: O(n) - There are `n` recursive calls.
- Space Complexity: O(n) - Each call adds a new frame to the call stack.

## How to run

Before running the Problem 3 solution, make sure you have the following prerequisites:

- Node.js installed on your machine.

Steps:

1. Install the necessary dependencies by running the following command in the terminal:

```bash
npm install
```

2. Run the solution by running the following command in the terminal:

```bash
npm run test
```
