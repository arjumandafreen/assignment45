//Q:17-Shrinking Guest List:  You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.//

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




   //------------------------SOLUTION------------------------------------------------//





   let guestList = ["Tania Anjan","Professor Abdul Rab"," Dr.Khawer"];


   let absent_guest :string = 'Tania Anjan'
   
   let new_Guest :string = ("Laiba");
   
   
   guestList[0] = new_Guest;
   
   
   console.log(`Miss ${absent_guest} is not coming to the Party.`);
   
   console.log('Good News!we found a bigger dinner table.So we are inviting 3 more guests');
   
   guestList.unshift('Merium');
   
   guestList.splice(2 ,0 , 'Miss Saba');
   
   guestList.push('Prfessor Shermeen');
   
   guestList.forEach((guest)  => { 
   
     console.log(`Dear ${guest}, \n\nYou are cordially innvited to the Dinner Event. Please join us  for dinner  at Pearl Continental Hotel.\n\n `);
     
     });
     
   console.log('\nSorry we could not arrange big table,So only two people will be invited.');
   
   while(guestList.length > 2 ){
   
      let remove_Guest =  guestList.pop() ;
   
      console.log(` Sorry ${remove_Guest }, due to some reasons ,we  could not invite you for the dinner at Pearl Continental Hotel.`);
   }
   
   guestList.forEach((guest)  => { 
   
       console.log(`Dear ${guest}, \n\nYou are most welcome and  innvited to the Dinner Event. \n\nThank You.`);
       
   });
   
   guestList.splice(0 , 2);
   
   
   guestList.push('guestList');
   
   