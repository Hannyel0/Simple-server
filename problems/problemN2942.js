// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.

//Simple explanation: Find the elements in the array that contain the X value and return their index in a new array;

// Example:
// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.



const testCases = [
    {
        words: ["leet", "code"],
        x: "e"
    },
    {
        words: ["abc","bcd","aaaa","cbc"],
        x: "a"
    },
    {
        words: ["abc","bcd","aaaa","cbc"],
        x: "z"
    }
]


const findWords = (words, x) =>{

   let indexOfWord = [];
   
   words.forEach((word, i)=> word.includes(x) ? indexOfWord.push(i) : null)

   return indexOfWord
}


testCases.forEach((tcase)=>{

    const result = findWords(tcase.words, tcase.x)
    console.log(result)
})





























// const findWords = (words, x) =>{

//     return words.map((word, i)=> word.includes(x) ? i : null) 
//     .filter(i => i !== null)

// }


//Explanatino of the solution


//In this solution I just returned  the same array i has given as a parameter going thougth each element with the map function and cheking for the letter i was given as 
//a parameter  if the string contains the letter i was looking for return the index, if not just return null, since map returns a new array now we should have a new array with the indices 
//of the strings that contain the letter and null for the ones that does not, now we filter througth this new array to get rid of the null values.