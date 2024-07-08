//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. Then use your list 
//to print a message to each person, inviting them to dinner.
// let guestList = ["Farheen", "Fatima", "Reshma"]
// for (let i=0; i< guestList.length; i++){
//     console.log(`Dear ${guestList[i]} : \n you are invited to dinner \n`)
// }
//while loop
// let i = 0;
// while (i < guestList.length) {
//     console.log(`Dear ${guestList[i]}, \n you are invited for dinner \n`)
//     i++;
// }
//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
//new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var Guest_List = ["Fatima", "Farheen", "Kusar"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List, ", \n You are invited for dinner"));
}
console.log("Unfortunately ".concat(Guest_List[0], " can not come to dinner"));
Guest_List[0] = "Reshma";
console.log(" \n NEW LIST OF INVITATION: \n ");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], ", \n You are all invited for dinner\n"));
}
// let guestList = ["Farheen", "Fatima", "Reshma"]
// for (let i=0; i< guestList.length; i++){
//     console.log(`Dear ${guestList[i]} : \n you are invited to dinner \n`)
// }
// console.log(` "Unfortunately ${guestList[2]}, can't come to dinner" `);
// guestList[2]= "Kusar";
// console.log("\n New List of Invitation:\n");
// for(let i=0; i< guestList.length; i++){
//     console.log(`Dear ${guestList[i]} : \n you are invited to dinner\n`)
// }
