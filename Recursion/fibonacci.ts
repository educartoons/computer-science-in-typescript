// Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1

// Given a number n, print n-th Fibonacci Number.
// Example :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// n = 9
// Result: 34

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));
