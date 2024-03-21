// Question no 13
var transports = ['Civic', 'City', 'Alto'];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
// Question 14
var guests = ['Fariha api', 'Maliha', 'Sana'];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for lunch \nThank you\n"));
});
// Question 15
var unavalible = "Maliha";
console.log("".concat(unavalible, " cant make it to lunch"));
//Replace the guest
var new_guest = "Sidra";
guests[guests.indexOf(unavalible)] = new_guest;
// New Invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for lunch \nThank you\n"));
});
