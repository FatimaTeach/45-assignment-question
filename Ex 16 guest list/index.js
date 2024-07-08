//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
//you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
var guestList = ["Farheen", "Fatima", "Reshma"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " : \n you are invited to dinner \n"));
}
console.log("\n New List of Invitation:\n");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], " : \n you are invited to dinner\n"));
}
console.log("\n Good news! We have found a bigger dinner table, so more space is avalaible. So our new guest are: \n ");
guestList.unshift("Faryal");
guestList.splice(2, 0, "Siama");
guestList.push("zanaib");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", \n You are invited for dinner \n"));
}
