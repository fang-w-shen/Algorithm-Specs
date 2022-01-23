import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./styles.css";

function sort(nums) {
  snapshot(nums);

  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
    let j; // the inner counter

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert

      nums[j + 1] = nums[j];
      nums[j] = numberToInsert;
      snapshot(nums);
    }

    // do the insertion
    // nums[j + 1] = numberToInsert;
  }

  snapshot(nums);

  // let sorted = false;
  // // do {
  // // snapshot(nums);

  // nums.sort((a, b) => {
  //   snapshot(nums);
  //   return a - b;
  // });
  // // } while (sorted);
  // snapshot(nums);

  return nums;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
