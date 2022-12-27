/*HOMEWORK 1
WEIGHT CALCULATOR IN CHICKENS
Want to know how you wiegh in chikens? No problem!

Write a function named weightInChickens that:
Takes an input weight in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt
The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph*/
let res=document.getElementById("result")
let kilograms=parseInt(prompt(`your weight please`))
//let chickens=0.5
function weightInChickens(){
    let chickens=0.5
    let result1 = kilograms/chickens
    console.log(result1)
    res.innerText = (`Your weight is ${result1} chickens`)
    console.log(res.innerText)  
}
  
weightInChickens()