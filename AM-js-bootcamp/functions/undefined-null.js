//undefined for variable
let name = "Saria"
if (name === undefined){
 console.log("please provide a name")
} else {
console.log(name)
}

console.log(name)

//undefined for function arguments
// Undefined as function return default value
let square = function(num){
    console.log(num)
}

square(3)  // 3
square()  // undefined

let result = square() //undefined
console.log(result) // undefined

// Null as assigned value
let age = 23

age = null 

console.log(age) // returns null
