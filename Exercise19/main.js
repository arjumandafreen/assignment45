"use strict";
// Q:19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// SO I HAVE CHOOSEN PROGRAM FROM EXERCISE NO (----14--------)   TO SOLVE Q:19
// Q:14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
let guests = ["Tania Anjan", "Professor Abdul Rab", "Khawer"];
guests.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially innvited to the Dinner Event.
    \n\n\Please join me for dinner at Pearl Continental Hotel`);
});
console.log(`We are inviting ${guests.length}people to dinner.`);
