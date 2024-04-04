"use strict";
// //  Q:43-.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to
//  each magician’s name.//
//-------------------------SOLUTION------------------------//
let magicians = ['Houdini', 'David Copperfield', 'David Blaine', 'Penn and Teller'];
function copyArray(arr) {
    return [...arr];
}
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
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log('this is my original array:');
show_magicians(magicians);
console.log('this is my modified copy of  array:');
show_magicians(copyMagicianArray);
