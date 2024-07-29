//31 . No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.

let userName =["Fatima", "Farheen", "kusar", "Daniyal"]

if (userName.length===0){
    console.log("We need to find some users!")
} else {
    //using forEach loop on array
    userName.forEach(user=> {
        if(user==='Admin'){
            console.log(`Hello ${user}, would you like to see a status report? `)
        } else {
            console.log(`Hello ${user}, Thank you for loging in again. `)}
    })
}