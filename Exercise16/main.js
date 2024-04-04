"use strict";
// Q:16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//----------SOLUTION----------------//
let guestList = ["Tania Anjan", "Professor Abdul Rab", " Dr.Khawer"];
let absent_guest = 'Tania Anjan';
let new_Guest = ("Laiba");
guestList[0] = new_Guest;
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, \n\nYou are cordially innvited to the Dinner Event . Please join us  for dinner  at Pearl Continental Hotel.\n\n `);
});
console.log(`Miss ${absent_guest} is not coming to the Party.`);
console.log('Good News!we found a bigger dinner table.So we are inviting 3 more guests');
guestList.unshift('Merium');
guestList.splice(2, 0, 'Miss Saba');
guestList.push('Prfessor Shermeen');
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, \n\nYou are cordially innvited to the Dinner Event. Please join us  for dinner  at Pearl Continental Hotel.\n\n `);
});
