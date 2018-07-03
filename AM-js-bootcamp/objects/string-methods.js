let name = '   Saria Lofton'


//Length property
console.log(name.length) // this is a property so you do not need '()'


//Convert to upper case
console.log(name.toUpperCase())

//Covert to lower case
console.log(name.toLowerCase())

// Includes method
let password = '1abc123password098'
console.log(password.includes('password'))//true

//Trim
console.log(name.trim())

//Challenge

//isValidPassword
let isValidPassword = function(name){
    return name.length > 8 && !name.includes('password')// alternative solution
    // if(name.length > 8 && !name.includes('password')){
    //     return true;
    // }else{
    //     return false;
    // }
}
//length is more than 8 and it doesn't contain the word password

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!da34343f'))
console.log(isValidPassword('asdfpsdfdpassword'))