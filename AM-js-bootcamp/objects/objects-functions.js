let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}


//Create a function that will create a book

let getSummary = function (book){

        return {
            summary: `${book.title} by ${book.author}`,
            pageCountSummary: `${book.title} is ${book.pageCount} pages long`
        }


    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log (otherBookSummary.pageCountSummary)

//Challenge
//Create function - take fahreneight in - return objectw ith all three \
//Call the functions
let convertFahrenheitToCelsius = function(fah){
    let celsius = (fah -32) *(5/9);
    return celsius
}

let kelvinConversion = function(fah){
    let kelvin = (fah + 459.67)*(5/9)
    return kelvin
}
let tempFunc = function (fah){
    // let cel = (fah -32) *(5/9)
    // let kel = (fahrenheit + 459.67)*(5/9)
    return {
            fahrenheit: fah,           
            celsius: `${convertFahrenheitToCelsius(fah)}`,// or (fah -32) *(5/9)
             kelvin: `${kelvinConversion(fah)}`// or (fah + 459.67)*(5/9)
}

    }

    let kelConv = tempFunc(32)
    console.log(kelConv)