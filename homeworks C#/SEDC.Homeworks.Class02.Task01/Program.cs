// See https://aka.ms/new-console-template for more information
using System.Diagnostics.Metrics;
using System;

Console.WriteLine("Hello, World!");
//task 01
//Create new console application “RealCalculator” that takes two numbers from the input and asks what
//operation would the user want to be done ( +, - , * , / ). Then it returns the result.
//Test Data:
//Enter the First number: 10//Enter the Second number: 15
//Enter the Operation: +//Expected Output:
//The result is: 25
Console.WriteLine("Please enter 2 numbers");
string input1 = Console.ReadLine();
string input2 = Console.ReadLine();
Console.WriteLine("Please enter operator +,-,* or /");
string operation = Console.ReadLine();
bool isValid1 =int.TryParse(input1, out int number1);
bool isValid2 =int.TryParse(input2, out int number2);

if(!isValid1 || !isValid2)
{
    Console.WriteLine("Wrong input");
}
if(operation == "+")
{
    Console.WriteLine(number1 + number2);
}
else if(operation == "-")
{
    Console.WriteLine(number1 - number2);
}else if(operation == "*")
{
    Console.WriteLine(number1 * number2);
}else if(operation == "/")
{
    Console.WriteLine(number1 / number2);
}
else {
    Console.WriteLine("Wrong operation");
        }

Console.ReadLine();