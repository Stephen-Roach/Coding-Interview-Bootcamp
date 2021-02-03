//Fibonacci Series
// A series of numbers in which each number (Fibonacci Number) is the sum of the two preceding numbers.
// The simplest is the series 1, 1, 2, 3, 5, 8, etc.

//Recursive Solution

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
