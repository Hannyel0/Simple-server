// 1920. Build Array from Permutation

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).


const testCases = [
    {
        nums: [0,2,1,5,3,4]
    },
    {
        nums: [5,0,1,2,3,4]
    }
]




var buildArray = function(nums) {

    let ans = []

    for(let i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]])
    }
    
    return ans
};


testCases.forEach((tcase)=>{

    const result = buildArray(tcase.nums)
    console.log(result)
})
