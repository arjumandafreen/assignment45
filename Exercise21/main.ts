// Q:21-They think of something you could store in a TypeScript Object. Write a program that creates Objects 
//containing these items.//


// Here I am defining interface for object
//   let person_name :string = 'Professor Kamal';

interface person{
    age: number,
    name: string,
    nationality: string,
    email:string
 
 };
 
 let person: person = {
     age: 60,
     name: 'Professor Kamal',
     nationality: 'pakistani',
     email:"example@gmail.com",
 
 };
 
 //create an object (car) in typescript
 
 interface car {
 
     make:  string;
     model: string;
     year:  number;
 };
 
 let car: car = {
  make: "Honda",
 model: "Civic",
 year:  2022,
 
 };
 
 console.log(person);
 console.log(car);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 