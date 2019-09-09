

function fib(num: number, memo: {} ): number{

  if(num===0 || num===1) return num;

  if(memo[num]===undefined){
    memo[num] = fib(num-1, memo) + fib(num-2, memo);
  }

  return memo[num];

}

console.log(fib(10, {}));

