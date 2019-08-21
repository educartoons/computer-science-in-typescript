// BubbleSort Optimized
// A sorting algorithm where the largest values bubble up to the top

function bubbleSort(arr: number[]): number[] {
  for (let i: number = arr.length; i > 0; i--) {
    let noSwaps: boolean;
    for (let j: number = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
