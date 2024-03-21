// Question 19
let guests: string[] = ["Maham", "Rubab", "Maliha", "Fari" ]
guests.forEach(guest => {
    console.log(`Hello! ${guests} I am inviting ${guest.length} peoples on a dinner`)
})
//Question 20
let languages: string[] = ["Arabic", "Turkish", "Chinese"]
languages.forEach(language => {
    console.log(`I want to learn ${language} language`)
})
// Question 21
let book: {title: string; author: string; yearPublished: number } = {
    title: "tafseer e mastawar",
    author: "Mehmood ul Hasan Shah Khaki",
    yearPublished: 2017
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`)
