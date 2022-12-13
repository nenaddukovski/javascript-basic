/*Write a javascript function for an ATM:
The ATM should give cash. It takes as parameter the amount of money you need.
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/


var money=100000
var user=parseInt(prompt("cash amount"))
function atm(user){
    let result=money-user
    return result
}
if(user>money){
    alert("Not enough money")
}else
{
    alert(`you cashout ${user}, and on your acount left ${atm(user)}`)
}

