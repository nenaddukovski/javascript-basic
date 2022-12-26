/*HOMEWORK PART 1
Decription: The Math object allows you to perform mathematical tasks.
Math.pow(x,y); - Returns the value of x to the power of y
Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150*/

numbers=[100,101,102,]
let max = 0
function num(inputArray){

    for(let i =0 ; i < inputArray.length; i++){
    console.log(`${inputArray[i]}`);
    max += Math.pow((`${inputArray[i]}`),2)
    console.log(`${max}`)
    }
}
num(numbers)