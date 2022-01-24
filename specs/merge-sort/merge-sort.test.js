#!/Users/fshen/.asdf/installs/nodejs/12.16.2/bin/node

/* O(nlogn)
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length === 1) {
    return nums;
  } else {
    let length = nums.length;
    let middle = Math.floor(length / 2);
    let a = nums.slice(0, middle);
    let b = nums.slice(middle);
    return merge(mergeSort(a), mergeSort(b));
  }
};
const merge = (a, b) => {
  let arr = [];
  // do {
  //   if (a.length == 0) {
  //     for (let i = 0; i < b.length; i++) {
  //       arr.push(b[i]);
  //     }
  //     break
  //   } else if (b.length == 0) {
  //     for (let i = 0; i < a.length; i++) {
  //       arr.push(a[i]);
  //     }
  //     break
  //   } else {
  //     if (a[0] > b[0]) {
  //       arr.push(b.shift());
  //     } else {
  //       arr.push(a.shift());
  //     }
  //   }
  // } while (a.length || b.length);

  while (a.length || b.length) {
    if (a.length == 0) {
      for (let i = 0; i < b.length; i++) {
        arr.push(b[i]);
      }
      break;
    } else if (b.length == 0) {
      for (let i = 0; i < a.length; i++) {
        arr.push(a[i]);
      }
      break;
    } else if (a[0] > b[0]) {
      arr.push(b.shift());
    } else {
      arr.push(a.shift());
    }
  }
  // if (a.length > 0) {
  //   for (let i = 0; i < a.length; i++) {
  //     arr.push(a[i]);
  //   }
  // }
  // if (b.length > 0) {
  //   for (let i = 0; i < b.length; i++) {
  //     arr.push(b[i]);
  //   }
  // }
  return arr;
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
