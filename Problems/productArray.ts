// A Product Array Puzzle
// Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. Solve it without division operator and in O(n)

// Example :
// arr[] = {10, 3, 5, 6, 2}
// prod[] = {180, 600, 360, 300, 900}

// Complexity O(n^2)

function productArray(arr: number[]): number[] {
  //let newArr = Array.from({ length: arr.length }, () => 1);
  let newArr: number[] = [];
  //let index: number = 0;
  for (let j = 0; j < arr.length; j++) {
    let product: number = 1;
    for (let i = 0; i < arr.length; i++) {
      if (j !== i) {
        product = product * arr[i];
      }
    }
    newArr.push(product);
  }

  return newArr;
}

// Complexity O(n)

function productArray2(arr: number[]) {
  let arr_left: number[] = [];
  let arr_right: number[] = [];
  let arr_prod: number[] = [];

  let i: number, j: number;
  let n: number = arr.length - 1;
  arr_left[0] = 1;
  arr_right[n] = 1;

  //construct left

  for (i = 1; i <= n; i++) {
    arr_left[i] = arr[i - 1] * arr_left[i - 1];
  }

  for (j = n - 1; j >= 0; j--) {
    arr_right[j] = arr[j + 1] * arr_right[j + 1];
  }

  for (i = 0; i <= n; i++) {
    arr_prod[i] = arr_left[i] * arr_right[i];
  }
  return arr_prod;
}

console.log(productArray2([10, 3, 5, 6, 2]));
