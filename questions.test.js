/* 
Test for Question 1 
*/
const quicksort = require("./question1");

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];

test(`should correctly sort [${input}] into [${expectedOutput}]`, () => {
  expect(quicksort(input)).toEqual(expectedOutput);
});

/* 
Test for Question 2 
*/
const maxSubarraySum = require("./question2");

describe("should find the maximum sum of sub arrays", () => {
  const arrays = [
    [[100, 200, 300, 400], 2, 700],
    [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4, 39],
    [[-3, 4, 0, -2, 6, -1], 2, 5],
  ];
  test.each(arrays)(
    "given %p and %p, returns %p",
    (inputArr, inputNum, expected) => {
      expect(maxSubarraySum(inputArr, inputNum)).toEqual(expected);
    }
  );
});

/* 
Test for Question 3
*/
const sumEvenNumbers = require("./question3");

describe("should sum up all the even values contained on the object and all it's child", () => {
  const objects = [
    [
      {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      },
      6,
    ],
    [
      {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      },
      12,
    ],
  ];

  test.each(objects)("given %p it should return %d", (inputArr, expected) => {
    expect(sumEvenNumbers(inputArr)).toEqual(expected);
  });
});
