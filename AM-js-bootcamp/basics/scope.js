//Global (name)
    //Local
        //Local
    //Local  
    //Variable shadowing

// let varOne = 'varOne'

// if(true){
//     console.log(varOne)
//     let varTwo = "varTwo"

//     if(true){
//         let varFour = 'varFour'
//     }
// }

// console.log (varOne);
// console.log(varTwo);

// let name = "Saria"

if(true){
    // let name = "Mackenzie"  //okay to declare same variable name as long as in different scopes

    if(true){
        name = "Mike"
        console.log(name)  // will get Mike when name changed inside of if block, Mackenzie if no name block
    }
}

if (true){
    console.log(name)  // will get Saria - 
}