//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print 
//a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.

let guestList = ["Farheen", "Fatima", "Reshma", "Zanaib", "Faryal", "Osama"]

// for (let i=0; i< guestList.length; i++){
//     console.log(`Dear ${guestList[i]} : \n you are invited to dinner \n`)
// }

// console.log("\n New List of Invitation:\n");

// for(let i=0; i< guestList.length; i++){
//     console.log(`Dear ${guestList[i]} : \n you are invited to dinner\n`)
// }

// console.log("\n Good news! We have found a bigger dinner table, so more space is avalaible. So our new guest are: \n ")

// guestList.unshift("Faryal");
// guestList.splice(2,0,"Siama" );
// guestList.push("zanaib");

// for (let i=0; i < guestList.length; i++){
//  console.log(`Dear ${guestList[i]}, \n You are invited for dinner \n`)
// }

console.log("Unfortunately, the new dinner table wont be arrive at time, so I can invite only two guests to dinner with me ")

//removing guest until only two guest are remaining
while(guestList.length > 2){
    let removed_guest = guestList.pop();  // removed the last guest from the list
    console.log(`Sorry ${removed_guest}, \n"You are no longer invited for dinner"\n`)
}

//printing invitation to the remaining two guest 
guestList.forEach((guest) => {
    console.log(`Dear ${guestList}, \n"You are still invited for dinner"\n`)
});

// removing the last two names from the list
guestList.pop();
guestList.pop();

//printing the list that confirm its empty

console.log("Final List" , guestList)




