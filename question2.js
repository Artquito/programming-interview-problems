/*
Buatlah fungsi dengan input array of number 
dan number untuk menemukan jumlah maksimum subarray 
dengan panjang angka yang dimasukan ke fungsi
Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1
*/


function maxSubarraySum(arr, subarrLength) {
  if (arr.length < subarrLength) return null;

  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < subarrLength; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let j = subarrLength; j < arr.length; j++) {
    windowSum = windowSum - arr[j - subarrLength] + arr[j];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}



module.exports = maxSubarraySum;
