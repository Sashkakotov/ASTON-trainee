// TODO What are sorting algoritms?
// Array.prototype.sort()  inside Quick Sort O(n*log(n)),
// Bubble sort(Comb sorting, Shaker sort). O(n**2)
// Simple sort: Select Sort, Insert Sort O(n**2)
// Good sort : Quick Sort, Merge Sort, Pyramidal Sort O(n*log(n))

// Example Bubble Sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

// Example Quick Sort
const quickSort = (arr) => {
  if (arr.length === 0) return [];
  let lessArray = [];
  let moreArray = [];
  let firstItem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < firstItem) {
      lessArray.push(arr[i]);
    } else {
      moreArray.push(arr[i]);
    }
  }
  return quickSort(lessArray).concat(firstItem, quickSort(moreArray));
};
