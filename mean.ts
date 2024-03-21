// Question no 13
let transports: string[] = ['Civic', 'City', 'Alto'];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}. \nThank you\n`);
});
// Question 14
let guests: string[] = ['Fariha api', 'Maliha', 'Sana'];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for lunch \nThank you\n`)
});
// Question 15
let unavalible = "Maliha"
console.log(`${unavalible} cant make it to lunch`)
//Replace the guest
let new_guest = "Sidra"
guests[guests.indexOf(unavalible)] = new_guest
// New Invitation
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for lunch \nThank you\n`)
})