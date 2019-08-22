// Given an array and we have to calculate the product of an array

// Input : array[] = {6, 30, 7, 2, 45, 3}
// Output : 340 200

function productOfArray(arr: number[], i: number = 1): number {
  if (arr.length === 0) return 1;
  // slice method return a portion of array, in this case the whole array minus the first element
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([6, 30, 7, 2, 45, 3]));
