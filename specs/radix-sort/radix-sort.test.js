#!/Users/fshen/workspace/algorithms-exercises-forked/node_modules/.bin/jest

/* O(logn)

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
const getDigit = (num, place) => {
  return num.toString().split("").reverse().join("")[place] || 0
}
function radixSort(array) {
  // code goes here
  let copy = array
  let digits = Math.max(...array).toString().length

  let sortQueue = new Array(10).fill().map(() => [])
  for (let i = 0; i < digits; i++) {
    while (copy.length) {
      let num = copy.pop()
      let number = getDigit(num, i)
      sortQueue[number].push(num)
    }
    for (let j = 0; j < sortQueue.length; j++) {
      // for (let k = sortQueue[j].length - 1; k >= 0; k--) {
      //   copy.push(sortQueue[j][k])
      // }
      while (sortQueue[j].length) {
        copy.push(sortQueue[j].pop())

      }
    }
  }
  return copy
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  test("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  test("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
