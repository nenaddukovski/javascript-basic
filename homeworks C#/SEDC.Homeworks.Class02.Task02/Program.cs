// See https://aka.ms/new-console-template for more information
using System.Diagnostics.Metrics;
using System;

Console.WriteLine("Hello, World!");
//Task 2
//Create new console application “AverageNumber” that takes four numbers as input to calculate and print the average.
//Test Data:
//Enter the First number: 10  //Enter the Second number: 15
//Enter the third number: 20  //Enter the four number: 30
//Expected Output:  //The average of 10, 15, 20 and 30 is: 18

Console.WriteLine("Please enter 4 numbers");
string input1 = Console.ReadLine();
string input2 = Console.ReadLine();
string input3 = Console.ReadLine();
string input4 = Console.ReadLine();

bool isValid1 = double.TryParse(input1, out double number1);
bool isValid2 = double.TryParse(input2, out double number2);
bool isValid3 = double.TryParse(input3, out double number3);
bool isValid4 = double.TryParse(input4, out double number4);

double average = (number1 + number2 + number3 + number4)/4;
if(!isValid1 || !isValid2 || !isValid3 || !isValid4)
{
    Console.WriteLine("Wrong input");
}
else
{
    Console.WriteLine(average);
}
Console.ReadLine();