function reverseString(str) {
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }
  arr.join("");
  return arr;
}

if (require.main === module) {
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Reverse any given string, such that the first letter becomes the last, the 2nd letter becomes second to last, last letter becomes first letter, etc.