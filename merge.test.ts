const mergeSort = require("./merge");

test("should merge two empty arrays", () => {
  expect(mergeSort([], [])).toStrictEqual([]);
});

test("returns the first collection if the second collection is empty", () => {
  expect(mergeSort([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
});

test("returns the second collection if the first collection is empty", () => {
  expect(mergeSort([], [4, 5, 6])).toStrictEqual([4, 5, 6]);
});

test("first merges two sorted arrays", () => {
  expect(mergeSort([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("second merges two sorted arrays", () => {
  expect(mergeSort([1, 3, 5], [2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("handles collections with duplicate values", () => {
  expect(mergeSort([1, 2, 3, 3, 5], [3, 4, 6])).toStrictEqual([
    1, 2, 3, 3, 3, 4, 5, 6,
  ]);
});
