// Question 16
let guests : string[] = ["Maliha", "Maham", "Fari"]
guests.forEach(guest => {
    console.log("Great news! I found a bigger dinner table!")
})
guests.unshift("Abeer", "Zoha", "Misbah");
for (let i=0; i<guests.length; i++){
    console.log(`Dear ${guests[i]}, would you like to join me for dinner \nThank you\n`)
}
//Question 17
let guest : string[] = ["Maliha", "Maham", "Fari"]
guest.unshift("Abeer", "Zoha", "Misbah");
console.log("\nUnfortunately we can not arrange big dinner table , Only two people allow.")
while(guest.length>2){
    let remove_guest = guests.pop();
    console.log(`Sorry ${remove_guest}, I cant invite you to dinner.`);
}
guests.forEach(guest => {
       console.log(`Dear ${guest},you are still invited to dinner \nThank you\n`)
});
guest.splice(0,2)
console.log(guest)
// Question 18
let places : string[] = ["Chakwal", "Murree", "America", "Lahore"]
console.log(`original order: ${places}`);
console.log("Alphabetical order:" + [...places].sort());
console.log(`original order: ${places}`);
console.log("Reverse Alphabetical order:" + [...places].sort().reverse());
console.log(`original order: ${places}`);
places.reverse();
console.log("Reversed order:" + places);
places.reverse();
console.log(`original order: ${places}`);
places.sort();
console.log("Alphabetical order:" + places);
places.reverse();
console.log("Reversed alphabatical order:" + places);