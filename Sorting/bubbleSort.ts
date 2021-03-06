// BubbleSort
// A sorting algorithm where the largest values bubble up to the top

function bubbleSort(arr: number[]): number[] {
  for (let i: number = arr.length; i > 0; i--) {
    for (let j: number = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
