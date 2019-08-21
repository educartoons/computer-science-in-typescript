// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.

function selectionSort(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    let lowest: number = i;
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let temp: number = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

console.log(selectionSort([15, 67, 08, 16, 44, 27, 12, 35]));
