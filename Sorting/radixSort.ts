// Radix Sort
// It is a special sorting algorithm that works on a list of numbers

// Get the digit of the position i
function getDigit(num: number, i: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// How many digits have a number
// We need to figure it out in order to know how many times we are going to iterante in the buckets
function countDigits(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// In a list given, return the number of digits of the largest number in the list

function maxDigits(list: number[]): number {
  let maxDigits: number = 0;
  for (let i: number = 0; i < list.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(list[i]));
  }
  return maxDigits;
}

// Radix Sort

function radixSort(arr: number[]) {
  let maxDigitsCount: number = maxDigits(arr);
  for (let i = 0; i < maxDigitsCount; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let index: number = getDigit(arr[j], i);
      buckets[index].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([329, 457, 657, 839, 436, 720, 355]));
