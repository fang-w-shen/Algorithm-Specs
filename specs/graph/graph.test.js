// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId                - number    - the id of the user who is the root id
  
  degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

/*
  getUser  - function - a function that returns a user's object given an ID
  
  example

  {
    id: 308,
    name: "Beatrisa Lalor",
    company: "Youtags",
    title: "Office Assistant II",
    connections: [687, 997, 437]
  }
*/
const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  // code goes here
  let queue = [myId]
  let keys = new Set([myId])
  let mostCommonJob = {}
  while (degreesOfSeparation + 1) {
    degreesOfSeparation--
    let compared = queue.length
    while (queue.length && compared) {
      compared--
      let user = getUser(queue.shift())
      mostCommonJob[user.title] = mostCommonJob[user.title] ? mostCommonJob[user.title] += 1 : 1
      let length = user.connections.length
      while (length) {
        length--
        let connection = user.connections[length]
        if (!keys.has(connection)) {
          queue.push(connection)
          keys.add(connection)
        }
      }
    }
  }

  let titles = Object.keys(mostCommonJob)
  let mostJobCount = 0
  let mostJobTitle
  for (let i = 0; i < titles.length - 1; i++) {
    let currentTitle = titles[i]
    if (mostCommonJob[currentTitle] > mostJobCount) {
      mostJobTitle = currentTitle
      mostJobCount = mostCommonJob[currentTitle]
    }
  }
  return mostJobTitle

};

// unit tests
// do not modify the below code
describe("findMostCommonTitle", function () {
  // the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
  test("user 30 with 2 degrees of separation", () => {
    expect(findMostCommonTitle(30, 2)).toBe("Librarian");
  });

  test("user 11 with 3 degrees of separation", () => {
    expect(findMostCommonTitle(11, 3)).toBe("Graphic Designer");
  });

  test("user 307 with 4 degrees of separation", () => {
    // if you're failing here with "Clinical Specialist, you're probably not filtering users who
    // appear more than once in people's connections
    expect(findMostCommonTitle(306, 4)).toBe("Pharmacist");
  });
});

describe("extra credit", function () {
  test("user 1 with 7 degrees of separation – this will traverse every user that's followed by someone else. five users are unfollowed", () => {
    expect(findMostCommonTitle(1, 7)).toBe("Geological Engineer");
  });
});
