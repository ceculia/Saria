//Function - input,code, output

let greetUser = function(){
    console.log("Welcome user!")
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
   let result = num * num;
   return result;
}

let value = square(3)
let otherValue = square(10)
console.log(value);
console.log(otherValue)

//convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function(fah){
    let celsius = (fah -32) *(5/9);
    return celsius
}
//Call a couple of times (32 -> 0) (68 -> 20)
let convertOne = convertFahrenheitToCelsius(32);
let convertTwo = convertFahrenheitToCelsius(68);
//Print the value
console.log(convertOne);
console.log(convertTwo);