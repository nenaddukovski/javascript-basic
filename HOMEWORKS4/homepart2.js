/*HOMEWORK #2
Write a function that will take an array of 5 numbers as a parameter and return the sum.
Print it in the console or in alert
BONUS**: Write another function called validateNumber() t
hat checks if a number is a valid number and call it for every number. 
If one of the numbers of the array is invalid show an error message instead of a result. */
function sum(inputarray){
result=inputarray[0]+inputarray[1]+inputarray[2]+inputarray[3]+inputarray[4]
return

}
sum([2,3,4,5,6])
console.log(result)
function validateNumber(inputarray){
    let i=0
    while(i<inputarray.length){
        if(typeof(inputarray[i]) == "number" ){
        console.log(inputarray[i])
        
        }
            else if(typeof(inputarray[i]) != "number"){
            console.log("error")
        }
        i++}
    }
    

validateNumber([1,2,3,4,5])
validateNumber([2,6,5,null,10,15])
