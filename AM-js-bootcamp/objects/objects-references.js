let myAccount = {
    name: 'Saria',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000// only when we change the property on this, will it change the myAccount
//Want to change the expenses

let addExpense = function(account, amount){
    // account = {}// by creating this object, we break the binding( or rather pointing) to the myAccount object
    account.expenses += amount;
    // console.log (account)  // 2. which changes here
}

//addIncome - to the account
let addIncome = function(account, amount){
    account.income += amount
    // console.log(account)
}
// resetAccount - reset expenses and income to zero
let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
    // console.log(account)
}
//getAccountSummary - print summary of account 
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses. `)
}
//Account for Saria has $900. $1000 -income. $100 - expenses


//addIncome
addIncome(myAccount, 300)
//addExpense
addExpense(myAccount, 50)
//addExpense
addExpense(myAccount, 150)
//getAccountSummary
getAccountSummary(myAccount)
//resetAccount
resetAccount(myAccount)
//getAccountSummary
getAccountSummary(myAccount)
// addExpense(myAccount, 2.50) //becomes pointed to myAccount
// console.log(myAccount)// two are the same because they both point to the same object in memory
//changing one is like changing the other