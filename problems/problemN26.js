// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.


const testCases = [
    {
        nums: [1,1,2]
    },
    {
        nums: [0,0,1,1,1,2,2,3,3,4]
    },
    {
        nums: [0,0,0,1,1,2,2,3,4,5,5]
    }
]


const removeDuplicates = (nums)=>{

    let k = 0;

    for(let i = 1; i < nums.length; i++){

        if(nums[i] !== nums[k]){
            k++

            nums[k] = nums[i]
        }

    
    }

    return k + 1

    

}



testCases.forEach((tcase)=>{

    const result = removeDuplicates(tcase.nums)
    console.log(result)
})

//I will write here the explanation of this code when i get the time in the future
