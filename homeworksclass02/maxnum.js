/*Write javascript code that will get an input for five different numbers 
and will print the maximum number in an alert box.
Use conditional statements, do not use loops and arrays. 
Use prompt to get input and parseInt to get the number from the input.
Hint: In order to get an input five times, you must ask for input five times.*/

var input1=parseInt(prompt("your 1st number"))
var input2=parseInt(prompt("your 2nd number"))
var input3=parseInt(prompt("your 3rd number"))
var input4=parseInt(prompt("your 4th number"))
var input5=parseInt(prompt("your 5th number"))
if(input1>input2&&input1>input3&&input1>input4&&input1>input5){
    alert(input1)
}
else if(input2>input1&&input2>input3&&input2>input4&&input2>input5){
    alert(input2)
}
else if(input3>input1&&input3>input2&&input3>input4&&input3>input5){
    alert(input3)
}
else if(input4>input1&&input4>input2&&input4>input3&&input4>input5){
    alert(input4)
}
else if(input5>input1&&input5>input3&&input5>input4&&input5>input2){
    alert(input5)
}