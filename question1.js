/* 
1. Buatlah fungsi dengan input array of number untuk mengurutkan angka 
dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
Input : [1, 2, 4, 3, 5, 3, 2, 1]			
Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]
*/

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

module.exports = quicksort;
