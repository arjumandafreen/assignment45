

// Q::3-.Name Cases: Store a person’s name in a variable, and then print 
// that person’s name in lowercase, uppercase, and titlecase.



// ----------------------SOLUTION------------------------------//




let personName: string = "John Doe";

console.log("Lower case:"+personName.toLowerCase());

console.log("Upper case:"+personName.toUpperCase());

console.log("Title case:"+personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());





