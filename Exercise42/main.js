"use strict";
// //  Q:42-.Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding 
// the phrase the Great to each magician’s name. Call show_magicians() to see that the 
// list has actually been modified.
//-------------------------SOLUTION------------------------//
let magicians = ['Houdini', 'David Copperfield', 'David Blaine', 'Penn and Teller'];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'the great ' + magicians[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
