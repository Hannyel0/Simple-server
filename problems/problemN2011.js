// 2011. Final Value of Variable After Performing Operations

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.



const testCases = [
    {
        operations: ["--X","X++","X++"]
    },
    {
        operations: ["++X","++X","X++"]
    },
    {
        operations: ["X++","++X","--X","X--"]
    }
]


var finalValueAfterOperations = function(operations) {

    let X = 0;

    operations.forEach(operation => operation.includes("++") ? X++ : X--)
    
    return X
};


testCases.forEach((tcase)=>{
    const result = finalValueAfterOperations(tcase.operations)
    console.log(result)
})

//Explanatino of the solution

//Outdated => found better solution 

//In this code i just initialized the variable x and i had to itterate throught the operations array with ForEach i passed each element in the callback function as op and cheked if op inclides
//++ and if it does i added one to the x values earlier calles and if it falls in the else statement it means that it was -- and i just dicremented the x value by 1, then returned the x variable

