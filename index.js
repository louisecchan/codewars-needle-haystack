// Write a function findNeedle() that takes an array full of junk
// but containing one "needle"

// After your function finds the needle it should return a message
// (as a string) that says:

// "found the needle at position " plus
// the index it found the needle

// Example(Input-- > Output);
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
// --> "found the needle at position 5"

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

// function findNeedle(haystack) {
//   let arr = haystack;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes("needle")) {
//       return "found the needle at position " + i;
//     }
//   }
// }

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") return "found the needle at position " + i;
  }
}

console.log(findNeedle(haystack));
