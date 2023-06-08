// Todo return array equal=total
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
  const map = new Map();
  arr.forEach((item, index) => map.set(item, index));
  for (let i = 0; i < arr.length; i++) {
    const temp = total - arr[i];
    if (map.has(temp)) {
      return [arr[i], temp];
    }
  }
  return [];
};

// Todo What difficult this algoritm
// Difficult this algoritm = O(n), if my solution was with two loops, difficult would be O(n**2)
