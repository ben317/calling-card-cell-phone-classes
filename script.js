let card = new CallingCard(20)
console.log('cents per minutes => ' + card.centsPerMinute)
card.addDollars(1) // add 100 cents @ 20 cents/minute = 5 minutes added
console.log('minutes after adding a dollar -> ' + card.minutes);

let phone = new CellPhone(card)
phone.call("555-1111")
phone.tick()       // 1 minute elapsed
phone.tick()       // 2 minutes elapsed
phone.endCall()

phone.call("555-3333")
phone.tick()       // 3 minutes elapsed
phone.tick()       // 4 minutes elapsed
phone.tick()       // this is the end of the 5th minute, so the call is ended

phone.getHistory() // => returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"
console.log('history => ' + phone.getHistory())

card.getRemainingMinutes() // => returns 0, because all 5 minutes have been used up
console.log(card.getRemainingMinutes())