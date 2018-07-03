let restaurant = {
    name: 'Chipotle',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },// method is an object with a function
    seatParty: function(people){
         this.guestCount += people  // doesn't need a return statement
    },
    removeParty: function(seats){
        this.guestCount -=seats  //  doesn't need a return statement
    }
}

// seatParty
//removeParty
restaurant.seatParty(72)
 console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

// console.log(status)