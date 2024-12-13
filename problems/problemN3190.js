//3190. Find Minimum Operations to Make All Elements Divisible by Three

// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.


const testCases = [
    {
        nums: [1,2,3,4]
    },
    {
        nums: [3,6,9]
    },
    {
        nums: [0,3,1,8,5,0, 46]
    }
]


var minimumOperations = function(nums) {
    
    let operations = 0;

    nums.forEach((number)=>{

        if(number % 3 !== 0){
            operations++
        }
    })
    return operations
    

};



testCases.forEach((tcase)=>{

    const result = minimumOperations(tcase.nums)
    console.log(result)
})




















// let op = 0
    

//     nums.forEach((n)=>{

//         for(let i = 1; i < n; i++){

//             switch(n % 3){
//                 case i:
//                     op++
//                     break
    
//             }

//         }

        
//     })

//     return op

