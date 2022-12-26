/*HOMEWORK #1
Create a function called tellStory()
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the argument
Example: This is *name*. *name* is a nice person. Today they are *mood*. 
They are *activity* all day. The end.
The value that is returned from the function should be printed in the console or in alert*/
function tellStory(inputarray)
{
    console.log(`This is ${inputarray[0]}. ${inputarray[0]} is a nice person. Today they are ${inputarray[1]}. 
    They are ${inputarray[2]} all day. The end.`)

}
tellStory(["nenad","great","celebrating"])
tellStory(["ana","down","sleaping"])