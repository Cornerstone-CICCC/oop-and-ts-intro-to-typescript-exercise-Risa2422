// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.

function countVowels(word: string): number {
  let result: number = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const ArrValue = word.split("");

  ArrValue.map((num) => {
    vowels.forEach((element) => {
      if (element === num) {
        result++;
      }
    });
  });

  return result;
}

// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
