function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // Initialize an empty Set to store seen numbers
  for (const number of array) { // Iterate over the array of numbers
    const complement = target - number; // Calculate the complement for the current number
    if (seenNumbers.has(complement)) return true; // Check if the complement exists in the Set
    seenNumbers.add(number); // Add the current number to the Set
  }
  return false; // If no pair is found, return false
}


/* 
  Write the Big O time complexity of your function here
    Time complexity: O(n)
*/

/* 
  Add your pseudocode here
    - Create an empty Set to store seen numbers
  - Iterate over the array of numbers
    - Calculate the complement for the current number
    - Check if the complement exists in the Set
      - If yes, return true
    - Add the current number to the Set
  - If no pair is found, return false
*/

/*
  Add written explanation of your solution here
  - The function iterates over the array once.
  - For each number, it calculates its complement with respect to the target.
  - If the complement exists in the Set of seen numbers, it means a pair is found, and true is returned.
  - If no pair is found after iterating through the entire array, false is returned.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
