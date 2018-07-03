//create an array with five todos
const things = ['call plumber','create lit table', 'send gift cards', 'make doctor appt', 'code']
//you have x todos
console.log(`You have ${things.length} todos`)
//Print the first and second to last items -> Todo: walk the dog

console.log( `Todos left: ${things[0]} and ${things[things.length -2]} `)

//Delete the 3rd item
things.splice(2,1)
console.log(things)
//Add a new itemo nto the end
things.push('new activity for kids')
console.log(things)
//remove the first item from the list
things.shift()
console.log(things)

things.forEach(function(item,index){
    const num = index + 1
    console.log(` ${num}.  ${item}`)
})

for( let count =0; count < things.length; count++){
    console.log(`${count+1}: ${things[count]}`)
}