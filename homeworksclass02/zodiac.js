/*Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

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
11 - Pig */

var years=parseInt(prompt("your year of birth please"))
var zodiac=(years-4)%12
console.log(zodiac)
if(zodiac<1){
alert("your chinese zodiac is Rat")
}
else if(zodiac<2){
alert("your chinese zodiac is Ox")    
}
else if(zodiac<3){
alert("your chinese zodiac is Tiger")    
}
else if(zodiac<4){
alert("your chinese zodiac is Rabbit")    
}
else if(zodiac<5){
alert("your chinese zodiac is Dragon")    
}
else if(zodiac<6){
alert("your chinese zodiac is Snake")    
}
else if(zodiac<7){
alert("your chinese zodiac is Horse")    
}
else if(zodiac<8){
alert("your chinese zodiac is Goat")    
}
else if(zodiac<9){
alert("your chinese zodiac is Monkey")    
}
else if(zodiac<10){
alert("your chinese zodiac is Rooster")    
}
else if(zodiac<11){
alert("your chinese zodiac is Dog")    
}
else if(zodiac<12){
alert("your chinese zodiac is Pig")    
}
else{
alert("Something went wrong,try again")    
}