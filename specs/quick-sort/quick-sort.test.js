/* O(nlogn)

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // code goes here
  if (nums.length <= 1) {
    return nums
  }
  else {
    let pivot = nums.pop() //nums[nums.length - 1]

    let left = nums.filter((a, i) => { return (a <= pivot) })
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] == pivot) {
    //     left.push(nums[i])
    //   }
    // }
    let right = nums.filter((a, i) => { return (a > pivot) })
    // let left = []
    // let right = []
    // for (let i = 0; i < nums.length - 1; i++) {
    //   if (nums[i] < pivot) {
    //     left.push(nums[i]);
    //   } else {
    //     right.push(nums[i]);
    //   }
    // }

    //  THIS IS A STABLE VERSION OF QUICK SORT SINCE WE'RE RETAINING ORDER
    //  NOT USUALLY THE CASE
    return quickSort(left).concat(pivot, quickSort(right))
    // return [...quickSort(left), pivot, ...quickSort(right)]
  }

}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 5, 2, 1, 5, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);
  console.log(answer, '**')
  expect(answer).toEqual([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10]);
});
