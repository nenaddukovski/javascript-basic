/*Write a JavaScript function which accepts
 a parameter and returns its type and prints it in the console. 
 Try to call the functions 5 times for 5 different types:
object
boolean
number
string
undefined*/
function test(x){
console.log(x)
console.log(typeof(x))
}
test(7);
test(null);
test(7>5);
test("test");
test();