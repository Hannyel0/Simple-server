// 1470. Shuffle the Array


// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//Simple explanation: the array has two parts x1, x2, x3 and y1, y2 and y3, you need to shuffle the array and make it x1, y1, x2, y2 etc...



const testCases = [
    {
        nums: [2,5,1,3,4,7],
        n: 3,
        expected: [2,3,5,4,1,7]
        
    },
    {
        nums: [1,2,3,4,4,3,2,1],
        n: 4,
        expected: [1,4,2,3,3,2,4,1]
    },
    {
        nums: [1,1,2,2],
        n: 2,
        expected: [1,2,1,2]
    }
]


var shuffle = function(nums, n) {

    let newArray = []

    let j = nums.length - n

    for(let i = 0; i < n; i++){

        newArray.push(nums[i])
        newArray.push(nums[j])
        j++
    }

    return newArray
   
    
};


testCases.forEach((tcase)=>{
    const result = shuffle(tcase.nums, tcase.n)

    if(JSON.stringify(result) === JSON.stringify(tcase.expected)){
        console.log("Correct")
    }else{
        console.log("Incorrect")
    }
    console.log(result)

})