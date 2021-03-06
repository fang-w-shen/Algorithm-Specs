//TYPES OF TRAVERSALS
/// preorder always makes exact copy if added to tree in same way
//[8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder always in order
//[1, 3, 5, 6, 7, 8, 10, 13, 14]

// postorder good for deleting all things in tree bc visits both nodes
//[1, 4, 7, 6, 3, 13, 14, 10, 8]
const preorderTraverse = (node, array, steps, count) => {
  // code goes here
  steps.push(1)
  count++
  array.push(node.value)
  if (node.left) {
    count = preorderTraverse(node.left, array, steps, count)[2]
  }
  if (node.right) {
    count = preorderTraverse(node.right, array, steps, count)[2]
  }
  return [array, steps, count]

  // steps.push(1)
  // count++
  // if (!node) return [array, steps, count]
  // array.push(node.value);
  // array = preorderTraverse(node.left, array, steps, count)[0];
  // array = preorderTraverse(node.right, array, steps, count)[0];
  // return [array, steps, count];
};

const inorderTraverse = (node, array) => {
  // code goes here
  if (node.left)
    inorderTraverse(node.left, array)

  array.push(node.value)

  if (node.right)
    inorderTraverse(node.right, array)

  return array

  // if (!node) return;
  // inorderTraverse(node.left, array);
  // array.push(node.value);
  // inorderTraverse(node.right, array);
  // return array;
};

const postorderTraverse = (node, array) => {
  // code goes here
  if (node.left)
    postorderTraverse(node.left, array)

  if (node.right)
    postorderTraverse(node.right, array)

  array.push(node.value)
  return array

  if (!node) return;
  postorderTraverse(node.left, array);
  postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

// unit tests
// do not modify the below code
describe("depth-first traversals", function () {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  };

  it("preorderTraverse", () => {
    let ans = preorderTraverse(tree, [], [], 0)
    expect(ans[0]).toEqual([
      8,
      4,
      3,
      2,
      5,
      7,
      6,
      12,
      10,
      9,
      11
    ]);
  });

  it("inorderTraverse", () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]);
  });

  it("postorderTraverse", () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2,
      3,
      6,
      7,
      5,
      4,
      9,
      11,
      10,
      12,
      8
    ]);
  });
});
