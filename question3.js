/*
 Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
 Input :
{
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
Expected Output: 6
Input:
{
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 4}, ee: 'car'}
};
Output: 12
*/

function sumEvenNumbers(obj) {
  let totalSum = 0;

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      totalSum += sumEvenNumbers(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      totalSum += obj[key];
    }
  });

  return totalSum;
}

module.exports = sumEvenNumbers;
