
// CHAPTER # MATH METHODS
// Question# 01


document.write(`<h3>Positive integer </h3>`)
var numb=+prompt("Enter Positive integer number")
document.write(`number: ${numb}</br>`)
document.write(`round off: ${Math.round(numb)}</br>`)
document.write(`floor value: ${Math.floor(numb)}</br>`)
document.write(`ceil value: ${Math.ceil(numb)}</br><hr>`)

// Question# 02


document.write(`<h3> negative floating point
 </h3>`)

var numb=+prompt("Enter Negative floating point")
document.write(`number: ${numb}</br>`)
document.write(`round off: ${Math.round(numb)}</br>`)
document.write(`floor value: ${Math.floor(numb)}</br>`)
document.write(`ceil value: ${Math.ceil(numb)}</br><hr>`)



// Question# 03

var num=+prompt("Enter a number")

document.write(`The absolute value of ${num} is ${Math.abs(num)}</br><hr>`)

// Question# 04

document.write(`Random dice value: ${Math.floor(Math.random()*6+1)}</br><hr>`)
// Question# 05

var toss=Math.floor(Math.random()*2+1)


if(toss===1){
    document.write(` ${toss} </br> Random coin value: Heads <hr>`) 
}
else{
    document.write(` ${toss} </br> Random coin value: Tails  <hr>`) 

}
// Question# 06

document.write(`random number between 1 and 100: ${Math.floor(Math.random()*100+1)}</br><hr>`)

// Question# 07

var userWeight = prompt("enter weight")

var parseiiint = userWeight.toString()
alert("User input weight"+" "+ parseiiint)

// Question# 08

var select_num=+prompt("Choose a number from 1 to 10")
var secret_num=Math.floor(Math.random()*10+1);

if(select_num===secret_num){
    alert("Bingo! Correct answer")
}

else{
    alert("Incorrect! Try again")
}