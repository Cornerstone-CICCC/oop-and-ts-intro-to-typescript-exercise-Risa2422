// 2. Create a function named `isPalindrome` that takes a string as a parameter.
//    The function should return `true` if the string is a palindrome (reads the same backward as forward),
//    otherwise, return `false`.
//    Use TypeScript types to ensure the parameter and return type are properly typed.

function isPalindrome(word: string): boolean {
  const palindrome = word.split("").reverse().join("");
  return palindrome === word ? true : false;
}

// Expected output:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
