// Insertion Sort
// Builds up the sort by gradually creating a larger left half which is always sorted

function insertionSort(arr: number[]): number[] {
  for (let i: number = 1; i < arr.length; i++) {
    let currentVal: number = arr[i];
    let j: number;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([86, 52, 45, 20, 15]));
