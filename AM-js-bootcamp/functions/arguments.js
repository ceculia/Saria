//Multiple arguments
let add = function (a,b,c){
return a + b + c

}

let result = add(10,1,16)
console.log(result)

//Default arguments

let getScoreText = function(name = "Anonymous",score = 0){
   return  'Name: ' + name + '- Score:' + score;
   return ` Name: ${name} - Score: ${score}`
    console.log(score)
}

let scoreText = getScoreText(undefined,99)
console.log(scoreText)

//Challenge
// total, tipPercent (.5,.2,.1)
// a 25% tip on a $40 would be $10
let tipCalculator = function(total, tipPercent = .2){
    return `A ${tipPercent * 100}% tip on a $${total} would be $${total * tipPercent}`
    // Alternatively
    // let percent = tipPercent *100
    // let tip = total $ tipPercent
    // return ` A ${percent}% tip on a $${total} would be $${tip}`
}

let tipCalc = tipCalculator(50, .1)
console.log(tipCalc)
//Template String
let name = 'Kenzie'
console.log(`Hey, my name is ${name}!`) //Alternative to concatenation

