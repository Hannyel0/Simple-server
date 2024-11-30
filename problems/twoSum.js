//Given an array of intergers and an integer target sum numbsers so tshey add Dip to the target  (Return INdsDICES of the right sasssdsdss)



const  arrayOfIntegers = [1, 3, 5, 6, 8 ,45 , 85];

const target = 11;


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


console.log(twoSum(arrayOfIntegers, target))