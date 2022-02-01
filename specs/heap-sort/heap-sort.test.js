/*
  O(nlogn)
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  // code
  createMaxHeap(array)
  for (let i = array.length - 1; i > 0; i--) {
    swap(0, i, array)
    heapify(array, 0, i)
  }
  console.log(array)
  return array;
};

const createMaxHeap = (array) => {
  // code
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length)
  }
};

const swap = (i1, i2, arr) => {
  let temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}

const heapify = (arr, index, heapSize) => {
  // code
  let left = 2 * index + 1
  let right = 2 * index + 2
  let me = arr[index]
  let biggerValue = { val: undefined, index: index }

  if (heapSize > left && arr[biggerValue.index] < arr[left]) {
    biggerValue.val = arr[left]
    biggerValue.index = left
  }

  if (heapSize > right && arr[biggerValue.index] < arr[right]) {
    biggerValue.val = arr[right]
    biggerValue.index = right
  }

  if (biggerValue.val > me) {
    swap(index, biggerValue.index, arr)
    heapify(arr, biggerValue.index, heapSize)
  }

  // DUMB WAY
  // let leftV, rightV, bigger, swapIndex = undefined
  // if (heapSize > left)
  //   leftV = arr[left]
  // if (heapSize > right)
  //   rightV = arr[right]

  // // checking which value is greater and setting value and index
  // if (leftV != undefined && rightV != undefined) {
  //   swapIndex = leftV > rightV ? left : right
  //   bigger = leftV > rightV ? leftV : rightV
  // }
  // else {
  //   bigger = leftV
  //   swapIndex = left
  // }

  // if (bigger > me) {
  //   swap(index, swapIndex, arr)
  //   heapify(arr, swapIndex, heapSize)
  // }

};

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1, 5, -2, -1, 10, 0, 2];
  heapSort(nums);
  expect(nums).toEqual([-2, -1, 0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10]);
});
