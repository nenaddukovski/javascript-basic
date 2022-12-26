/*HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"*/
function string(inputarray){
let i=0
while(i<inputarray.length){
    console.log(`${inputarray[i]}`)
    i++
}
    console.log(`${inputarray}`)
    console.log(typeof(`${inputarray}`))
}
string(["Hello","there","students","of","sedc"])


