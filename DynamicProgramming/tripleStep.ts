function countWays(n: number, memo: {}): number{

  if(n<0) return 0;
  else if(n===0) return 1;
  else if(memo[n]!==undefined) return memo[n];
  else memo[n] = countWays(n-1, memo) + countWays(n-2, memo)+countWays(n-3, memo);
  return memo[n];
}

console.log(countWays(3, {}));