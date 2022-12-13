/*Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well*/
function age1(years){
    let result=7*years
    return result
}

function age2(years){
    let result=years/7
    return result
}

type=prompt("dog or human")
years=parseInt(prompt("Years please"))

if (type==="dog"){
    console.log(`${years} year dogs are ${age2(years)} years human`)
}
else if(type==="human"){
    console.log(`${years} year human are ${age1(years)} years dogs`)
}
else{
    error
}