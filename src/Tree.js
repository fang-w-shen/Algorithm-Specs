import React from "react";
import "./tree.css";
import { TreeViz } from "./tree-visualizer";
import _ from "lodash";

// class Tree {
//     add(num) {
//         // needs this
//     }
//     toObject() {
//         // returns a root node with
//         // {
//         //   value:  <number>
//         //   left:   <object>
//         //   right:  <object>
//         //   height: <number, optional>
//         // }
//         return { value: 1, left: null, right: null, height: 1 };
//     }
// }

class Tree {
    // code goes here
    constructor(val) {
        this.node
    }
    add(val) {
        if (!this.node) {
            this.node = new Node(val)
        }
        else {
            let head = this.node
            let compared = true;
            while (compared) {
                compared = false
                if (val > head.value) {
                    if (!head.right) {
                        head.right = new Node(val)
                    }
                    else {
                        head = head.right
                        compared = true
                    }
                }
                else if (val <= head.value) {
                    if (!head.left) {
                        head.left = new Node(val)
                    }
                    else {
                        head = head.left
                        compared = true
                    }
                }
            }
            return this
        }
    }
    toObject() {
        return this.node;
    }
}

// you might consider using a Node class too
class Node {
    // code maybe goes here
    constructor(val) {
        this.right = null
        this.left = null
        this.value = val
    }
}

class Tree2 {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node2(value);
        } else {
            this.root.add(value);
        }
    }
    toJSON() {
        return JSON.stringify(this.root.serialize(), null, 4);
    }
    toObject() {
        return this.root.serialize();
    }
}

class Node2 {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.height = 0;
    }
    add(value) {
        if (value < this.value) {
            // go left

            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new Node2(value);
            }
            if (!this.right || this.right.height < this.left.height) {
                this.height = this.left.height + 1;
            }
        } else {
            // go right

            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new Node2(value);
            }
            if (!this.left || this.right.height > this.left.height) {
                this.height = this.right.height + 1;
            }
        }
        this.balance();
    }
    balance() {
        const rightHeight = this.right ? this.right.height : -1;
        const leftHeight = this.left ? this.left.height : -1;

        if (leftHeight - rightHeight >= 2) {
            const leftRightHeight = this.left.right ? this.left.right.height : -1;
            const leftLeftHeight = this.left.left ? this.left.left.height : -1;
            //double rotation

            if (leftRightHeight > leftLeftHeight) {
                this.left.rotateRR();
            }

            this.rotateLL();
        } else if (rightHeight - leftHeight >= 2) {
            const rightRightHeight = this.right.right ? this.right.right.height : -1;
            const rightLeftHeight = this.right.left ? this.right.left.height : -1;

            //double rotation
            if (rightLeftHeight > rightRightHeight) {
                this.right.rotateLL();
            }

            this.rotateRR();
        }
    }
    rotateRR() {
        const valueBefore = this.value;
        const leftBefore = this.left;
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL() {
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation() {
        if (!this.right && !this.left) {
            this.height = 0;
        } else if (
            !this.right ||
            (this.left && this.right.height < this.left.height)
        ) {
            this.height = this.left.height + 1;
        } else {
            //if (!this.left || this.right.height > this.left.height)
            this.height = this.right.height + 1;
        }
    }
    serialize() {
        const ans = { value: this.value };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        ans.height = this.height;
        return ans;
    }
}

export default function TreeComponent() {
    //TYPES OF TRAVERSALS
    /// preorder always makes exact copy if added to tree in same way
    //[8, 3, 1, 6, 4, 7, 10, 14, 13]

    // inorder always in order
    //[1, 3, 5, 6, 7, 8, 10, 13, 14]

    // postorder good for deleting all things in tree bc visits both nodes
    //[1, 4, 7, 6, 3, 13, 14, 10, 8]
    const nums = [
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
    ]//_.shuffle(_.range(100));// [3, 2, 1, 5, 4, 6] 
    const tree = new Tree();
    const tree2 = new Tree2();
    nums.map((num) => { tree.add(num); tree2.add(num) });
    const objs = tree.toObject();
    const objs2 = tree2.toObject();

    return (
        <>
            <TreeViz root={objs} />
            <TreeViz root={objs2} />
        </>
    );
}
