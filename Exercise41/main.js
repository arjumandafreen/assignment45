"use strict";
// Q:-41 .Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// -------------------------SOLUTION----------------------------------//
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicians = ['Houdini', 'David Copperfield', 'David Blaine', 'Penn and Teller'];
show_magicians(magicians);
