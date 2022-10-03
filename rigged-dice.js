const prompt = require("prompt-sync")({sigint: true});



/* 
Working with a six sided die.

rigged side is going to be 6

1 = 1/6th
2 = 1/6th
3 = 1/6th
4 = 1/6th
5 = 1/6th
6 = 1/6th

roll a 7 sided die but tell the user its a 6 sided die
1-6 sided die with an additional 6

*/

let rigged = Number(prompt("Enter a side you would likr to rig between 1 and 6: "))

let roll = Math.ceil(Math.random()*7)//Die is 1-7

console.log("Actual roll: " + roll)
if(roll === 7){
    console.log(rigged);
}else {
    console.log(roll)
}

