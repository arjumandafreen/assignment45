// Q:24-More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// SOLUTION

// • Tests for equality and inequality with strings

const string1: string  = "mango";

const string2 : string = "strawberry";

console.log(string1 ===string2);

console.log(string1 !==string2);

//  Tests using the lower case function

const lowerCaseString1 = string1.toLowerCase();

const lowerCaseString2 = string2.toLowerCase();

console.log(lowerCaseString1 === lowerCaseString2);

console.log(lowerCaseString1 !== lowerCaseString2);

//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1: number = 5;

const num2: number = 10;

console.log(num1 ===  num2 );

console.log(num1 !== num2);

console.log(num1 > num2  );

console.log(num1 < num2);

console.log( num1 >= num2);

console.log(num1 <= num2);

//  Tests using "and" and "or" operators

const condition1: boolean = true;

const condition2: boolean = false;


console.log(condition1 && condition2);

console.log(condition1 || condition2);


//  Test whether an item is in a array

const array1: number[] = [1,2,3,4];

const item1 = 2;

console.log(array1.includes(item1));

//  Test whether an item is not in a array

const  array2= ["peanuts", "almonds","pistachio"];

const item2 = "walnut";

console.log(!array2.includes(item2));





















