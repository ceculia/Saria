let isAccountLocked = false
let userRole = 'admin'

if(isAccountLocked){
    console.log("Is account locked")
} else if (userRole === "admin"){
console.log("welcome admin")
} else {
    console.log("Welcome!")
}

//Challenge

let temp = 45

//It is freezing outside!
//It is hot outside!
//Go for it. It is pretty nice.

if (temp <= 32){
    console.log("It is freezing outside")
} else if (temp >=100){
    console.log("It is hot outside!")
}else {
    console.log ("Go for it. It is pretty nice.")
}

let isGuestOneVegan = true
let isGuestTwoVegan = true
//Are both vegan? Only offer up vegan dishes
// At least one isGuestTwoVegan
// Else offer up anything on the neu.

if (isGuestTwoVegan === true && isGuestOneVegan === true ){
    console.log("We have a ton of vegan dishes.")
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
    console.log( "Here are some vegan options we have.")
}else {
    console.log ("Here is our full menu.")
}