// BubbleSort
// A sorting algorithm where the largest values bubble up to the top

function bubbleSort(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length; j++) {
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

//console.log(bubbleSort([37, 45, 29, 8]));
