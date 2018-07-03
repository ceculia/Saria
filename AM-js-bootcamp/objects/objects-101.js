let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge

//name, age, location
let myBio = {
    name: 'Mackenzie',
    age: 11,
    location: 'Oak Park'
}
//generate string - Andrew is 27 and lives in Philadelphia
console.log(`${myBio.name} is ${myBio.age} and lives in ${myBio.location}`)
//Increase age by 1 and print message again
myBio.age = 12

console.log(`${myBio.name} is ${myBio.age} and lives in ${myBio.location}`)