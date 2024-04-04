"use strict";
// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//---------------------SOLUTION-----------------------//
let guestList = ["Tania Anjan", "Professor Abdul Rab", "Khawer"];
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially innvited to the Dinner Event.Please join us for dinner at Pearl Continental Hotel.\n `);
});
let absent_guest = 'Tania Anjan';
let new_guest = 'Laiba';
guestList[0] = new_guest;
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially innvited to the Dinner Event.Please join us for dinner at Pearl Continental Hotel.\n `);
});
console.log(`Miss ${absent_guest} is not coming to the Party.`);
