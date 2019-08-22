// Quick Sort
// The quicksort procedure was invented bu Hoare but the partition method described below is due to N. Lomuto.

function quickSort(arr: number[]): number[] {
  // creating a copy from the array
  arr = [...arr];
  partition(arr, 0, arr.length, "init");
  return arr;
}

function partition(
  arr: number[],
  left: number,
  right: number,
  side: string
): void {
  console.log("Side: ", side);
  if (right - left <= 1) return;

  // This part could be randonmly
  const pivotIndex: number = Math.floor((right + left) / 2);
  const pivot: number = arr[pivotIndex];
  console.log("Pivot: ", pivot);

  [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
  let i = left;

  for (let j: number = left + 1; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  if (i !== left) {
    [arr[i], arr[left]] = [arr[left], arr[i]];
  }

  //
  partition(arr, left, i, "left");
  partition(arr, i + 1, right, "right");
}

const array: number[] = [2, 8, 7, 1, 3, 5, 6, 4];

console.log(quickSort(array));
console.log(array);
