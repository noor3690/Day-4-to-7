var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 16
// let guests : string[] = ["Maliha", "Maham", "Fari"]
// guests.forEach(guest => {
//     console.log("Great news! I found a bigger dinner table!")
// })
// guests.unshift("Abeer", "Zoha", "Misbah");
// for (let i=0; i<guests.length; i++){
//     console.log(`Dear ${guests[i]}, would you like to join me for dinner \nThank you\n`)
// }
//Question 17
// let guests : string[] = ["Maliha", "Maham", "Fari"]
// guests.unshift("Abeer", "Zoha", "Misbah");
// console.log("\nUnfortunately we can not arrange big dinner table , Only two people allow.")
// while(guests.length>2){
//     let remove_guests = guests.pop();
//     console.log(`Sorry ${remove_guests}, I cant invite you to dinner.`);
// }
// guests.forEach(guest => {
//        console.log(`Dear ${guests},you are still invited to dinner \nThank you\n`)
// });
// guests.splice(0,2)
// console.log(guests)
// Question 18
var places = ["Chakwal", "Murree", "America", "Lahore"];
console.log("original order: ".concat(places));
console.log("Alphabetical order:" + __spreadArray([], places, true).sort());
console.log("original order: ".concat(places));
console.log("Reverse Alphabetical order:" + __spreadArray([], places, true).sort().reverse());
console.log("original order: ".concat(places));
places.reverse();
console.log("Reversed order:" + places);
places.reverse();
console.log("original order: ".concat(places));
places.sort();
console.log("Alphabetical order:" + places);
places.reverse();
console.log("Reversed alphabatical order:" + places);
