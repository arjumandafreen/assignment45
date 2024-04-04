"use strict";
// // Q:37-Large Shirts: Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
//   message, and a shirt of any size with a different message.
//----------------SOLUTION------------------------//
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} shirt with the message"${message}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love python");
