//Global scope (convertFahrenheitToCelcius, convertOne,convertTwo)
//Local scope (fah, celsius)
//Local scope (isFreezing)
let convertFahrenheitToCelsius = function(fah){
    let celsius = (fah -32) *(5/9);
if (celsis <= 0){
    let isFreezing = true
}

    return celsius
}
//Call a couple of times (32 -> 0) (68 -> 20)
let convertOne = convertFahrenheitToCelsius(32);
let convertTwo = convertFahrenheitToCelsius(68);
//Print the value
console.log(convertOne);
console.log(convertTwo);