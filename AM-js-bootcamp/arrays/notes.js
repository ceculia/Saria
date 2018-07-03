const notes = [{
        title: 'My next trip',
        body: 'I would like to go to Spain'
},
{
    title: 'Habits to work on',
    body: 'Exercise. Eat better'
},
{
    title: 'Cleanig up',
    body: 'Start with the kitchen'
}]
// //Length
// console.log(notes.length)
// //Specify which note
// console.log(notes[0])
// //Last item of array
// console.log(notes[notes.length -1])

// // Add new note
// notes.push('My new note')
// console.log(notes)

// //Remove a note
// console.log(notes.pop())
// console.log(notes)

// //Shift from the front
// console.log(notes.shift());
// console.log(notes)

// //Unshift - add to the beginning
// console.log(notes.unshift('My first note'))
// console.log(notes)

// //Splice  - 1st - index, 2nd-how many to remove
// notes.splice(1,0, "This is the new second item")

// console.log(notes)
// //replace items in array
// notes[2] = 'This is the new note 3'
// console.log(notes)

// //use forEach method - get two args - parameter and index 
// //forEach only used on arrays
// notes.forEach(function (item, index){
//     console.log(index)
//     console.log(item)
// })

// //Counting... 1
// for(let count = 0; count<3;count++){
//         console.log(count)
// }

// for(let count= notes.length -1; count >=0; count--){
//     console.log(notes[count])
// }

//find something in an array - indexOf; for array of objects findIndex
console.log(notes.indexOf('Note 3'))

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)//true
// console.log({}==={}) // false

const index = notes.findIndex(function(note,index){
    console.log(note)
    return note.title === "Habits to work on"
})

console.log(index)// findIndex not setup properly without a true/false statement