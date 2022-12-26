/*HOMEWORK #4
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it*/
function num(inputarray){
  let counter = 0 
  let max = -Infinity
while(counter<inputarray.length){
    //console.log(`${counter}`)
    //if(typeof(inputarray[counter]) == "number" )
    console.log(`${inputarray[counter]}`)
    if(inputarray[counter]>max){
        max=inputarray[counter]
    }
    //console.log(`${max}`)
    counter++
}   
  let index = 0
  let min = Infinity
 while(index<inputarray.length){
    /*if(typeof(inputarray[index]) == "number" )*/
    console.log(`${inputarray[index]}`)
    if(inputarray[index]<min){
        min=inputarray[index]
    }
    //console.log(`${min}`)
    index++
}
    console.log(max)
    console.log(min)
    result=(max)+(min)
    return result 
}
result1=num([5,6,9,11,6,100,150])
console.log(result1)

