function factorial(num: number): number {
  let result: number = 1;
  for (let i: number = num; i > 1; i--) {
    result = result * i;
  }
  return result;
}

function factorialRecursion(num: number): number {
  if (num === 0) return 1;
  return num * factorialRecursion(num - 1);
}

console.log(factorial(7));
console.log(factorialRecursion(7));
