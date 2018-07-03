let num = 103.941

//toFixed Method - reduce to certain number after decimal point
console.log(num.toFixed(2))

//Math.round

console.log(Math.round(num))

//Math.floor - round down
console.log(Math.floor(num))

//Math.ceil - round up
console.log(Math.ceil(num))

//Math.random - random numbers
let randomNum = Math.random()
console.log(randomNum)

//Random number between 10 and 20

let min = 10
let max = 20
// 0 -10
let randomNum1 = Math.floor(Math.random() * (max-min + 1))
// 10-20
randomNum1 = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum1)

//Challenge

let makeGuess = function(correctGuess){
let min = 1
let max = 5
// 0 -10
let randomNum2 = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum2)
return randomNum2 === correctGuess

}

console.log(makeGuess(3))