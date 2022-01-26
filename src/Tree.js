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
export default function TreeComponent() {
    const nums = _.shuffle(_.range(10));
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();
    return <TreeViz root={objs} />;
}
