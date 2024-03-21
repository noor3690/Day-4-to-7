// Question 19
var guests = ["Maham", "Rubab", "Maliha", "Fari"];
guests.forEach(function (guest) {
    console.log("Hello! ".concat(guests, " I am inviting ").concat(guest.length, " peoples on a dinner"));
});
//Question 20
var languages = ["Arabic", "Turkish", "Chinese"];
languages.forEach(function (language) {
    console.log("I want to learn ".concat(language, " language"));
});
// Question 21
var book = {
    title: "tafseer e mastawar",
    author: "Mehmood ul Hasan Shah Khaki",
    yearPublished: 2017
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
