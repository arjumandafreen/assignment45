"use strict";
// Q:32- .Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// -------------------------------SOLUTION-------------------------------------------//
let current_users = ["javeria", "sabeen", "nazia", "aalia", "sania"];
let new_users = ["laiba", "javeria", "dania", "sania", "aisha"];
let existing_users = current_users.map(user => user.toLowerCase());
for (let user of new_users) {
    let lower_user = user.toLowerCase();
    if (existing_users.includes(lower_user)) {
        console.log(`sorry, the username ${user} is already taken.Please choose a different username.`);
    }
    else {
        console.log(`Congratulations,the username ${user} is available.`);
        current_users.push(user);
        existing_users.push(lower_user);
    }
}
