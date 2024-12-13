// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

 
//Simple explanation: Given an array of intergers and an integer target add up two numbers so they are equal to the target  (Return INDICES of the right numbers)



const testCases = [
    {
        nums: [2,7,11,15],
        target: 9
    },
    {
        nums: [3,2,4],
        target: 6
    },
    {
        nums: [3,3],
        target: 6
    }
]


const twoSum = (nums, target) =>{

    const p = nums.map((n, i) => [n, i])

    p.sort((a,b) => a[0] - b[0])

    let l = 0;
    let r = p.length - 1

    while(l < r){

        const s = p[l][0] + p[r][0]

        if(s == target){

            return [p[l][1], p[r][1]]

        }else if(s < target){
            l++
        }else{
            r--
        }
    }
    
}

testCases.forEach((tcase)=>{
    const result = twoSum(tcase.nums, tcase.target)
    console.log(result)
})


//Code explanation

//In this code i have to basically just go throught the array of numbers i was given and find two number wich sum is equal to my target value, with this problem i learned more about the two
//pointers algorithm, the only thing that complicated this problem a little was that i had to return the indices of the values that add up to the target instead of the values themselves
//first thing to do is to create a new array that holds the numbers paired with their respective indices, i do this just to be able to sort the array since i will be using the two pointer
//thecnique, I just went thoutgth the array using the map function i made an array containing the nums value and its respective index value and since map returns a new array with the 
//content of the callback function now i got the smmall arrays paired with their index [n, i] inside an array [[n,i], [n,i], [n,i]] now that i have the pairs aray or P as i called it
//i used the sort function to sort the array in an ascending order, then i declared my pointer variables to apply the two pointer thecnique, one at the beggining and the other one at the end
//i went throught the whole array using a while loop and checked started adding the number that were on the pointers l and r in the position [0] because thats where my number are, then
//checked to see if the sum is equal to the target, if it is it'll return an array with the pointer with the right value [l], [r], and the position of the index wich is [1], but if it wasnt the
//right values we will chek in the else if statement if the sum if smaller than the target and if it is we will we will add 1 to the left pointer towards the bigger numbers since the array is sorted
//and if not substract one to the right pointer towards the smaller numbers.


// const p = nums.map((n, i) => [n, i])

//     p.sort((a,b) => a[0] - b[0])

//     let l = 0;
//     let r = p.length - 1

//     while(l < r){

//         const s = p[l][0] + p[r][0]

//         if(s == target){

//             return [p[l][1], p[r][1]]

//         }else if(s < target){
//             l++
//         }else{
//             r--
//         }
//     }