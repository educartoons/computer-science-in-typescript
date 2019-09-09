function fibonacci(num: number){
  if(num===0) return 0;
  else if(num===1) return 1;

  let memo: number[];
  let a = 0;
  let b = 1;
  for(let i=2; i<num;i++){
    let c = a + b;
    a = b;
    b = c;
  }
  return a+b;

}