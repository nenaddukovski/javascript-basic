// See https://aka.ms/new-console-template for more information
using static System.Net.Mime.MediaTypeNames;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System;

Console.WriteLine("Hello, World!");
//Create new console application “SwapNumbers”. Input 2 numbers from the
//console and then swap the values of the variables so that the first variable
//has the second value and the second variable the first value. Please find example below:
//Test Data:
//Input the First Number: 5
//Input the Second Number: 8
//Expected Output:
//After Swapping:
//First Number: 8
//Second Number: 5
Console.WriteLine("Please enter 2 numbers");
string input1 = Console.ReadLine();
string input2 = Console.ReadLine();
bool isValid1 = double.TryParse(input1, out double number1);
bool isValid2 = double.TryParse(input2, out double number2);
double swap;
Console.WriteLine(number1);
Console.WriteLine(number2);
if(!isValid1 || !isValid2)
{
    Console.WriteLine("Wrong input");
}
swap = number1;
number1 = number2;
number2 = swap;
Console.WriteLine(number1);
Console.WriteLine(number2);