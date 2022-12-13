/*Write javascript code that will get an input from 
the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig

NOTE: Use switch - case structure
*/

var year=parseInt(prompt("Your year of birth please"))
var zodiac=(year-4)%12
console.log(zodiac)
switch(zodiac){

    case 0:
    alert(" your chinese zodiac is Rat") 
    break
    case 1:
    alert(" your chinese zodiac is Ox") 
    break
    case 2:
    alert(" your chinese zodiac is Tiger") 
    break
    case 3:
    alert(" your chinese zodiac is Rabbit") 
    break
    case 4:
    alert(" your chinese zodiac is Dragon") 
    break
    case 5:
    alert(" your chinese zodiac is Snake") 
    break
    case 6:
    alert(" your chinese zodiac is Horse") 
    break
    case 7:
    alert(" your chinese zodiac is Goat") 
    break
    case 8:
    alert(" your chinese zodiac is Monkey") 
    break
    case 9:
    alert(" your chinese zodiac is Rooster") 
    break
    case 10:
    alert(" your chinese zodiac is Dog") 
    break
    case 11:
    alert(" your chinese zodiac is Pig") 
    break
    default:
    alert("no match found")
    break
}