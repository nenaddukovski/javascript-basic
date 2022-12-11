/*Write a JavaScript program that will calculate the price of 30 Phones, 
where the price of one phone is $119.95 and the tax rate is 5%.

Bonus: Try to get the price and tax rate as user input.*/


/*var phones=30;
var nominal=119.95;
var taxnominal=5/100;

var tax=nominal*taxnominal;
console.log(tax);
var price=nominal-tax;
console.log(price);

var result=phones*price
console.log(result)*/
var userinput1=prompt("set the price")
var userinput2=prompt("set the tax")

var phones=30
var nominal=parseInt(userinput1);
var taxnominal=parseInt(userinput2)/100;

var tax=nominal*taxnominal;
console.log(tax);
var price=nominal-tax;
console.log(price);

var result=phones*price
console.log(result)