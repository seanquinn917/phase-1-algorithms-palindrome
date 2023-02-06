function isPalindrome(word) {
 let length = word.length
 for(i = 0; i<length/2; i ++) {
    if(word[i] !== word[length -1 -i])
         return false;
}
return true

}


// write a function that takes one string and returns true if string is a palindrome 
// and false if not

// input: 'dad'
// output : true

// input: 'snake'
// output: false










/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
