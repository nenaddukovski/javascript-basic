/*HOMEWORK PART 2
How many times is a number contained in an array

Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in an array with numbers
Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
Call the function three times with different arrays.*/

function findNumber(inputArray,number){
    if(typeof(number) != "number"){
        console.log("invalid input")
        return
    }
    let timesNum=0
    for(let num of inputArray){
        if(num ===number){
            timesNum += 1
        }
        //console.log(num)
        console.log(timesNum)
    }
    console.log(`There is ${timesNum} occurrences of number ${number} in the arra`)

}
findNumber([3,5,6,5,9,5,6,5,4,5],6)
findNumber([3,6,3,5,3,9,3,5],3)
findNumber([2,9,8,7,6,5,4,2,5,8,9,6,5,2,5,8],null)