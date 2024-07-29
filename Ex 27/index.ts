//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//First part
let alienColor1 = 'Green';
if (alienColor1==='Green') {
    console.log("Congratulations ! You have just earned 5 points");
} else if (alienColor1==='red'){
    console.log("Congratulations ! You have just earned 10 points");
} else {
console.log("Congratulations ! You have just earned 15 points")
}
//2nd part 
let alienColor2='Yellow';
if (alienColor2==='Green'){
    console.log("Congratulations ! You have just earned 5 points");
} else if (alienColor2==='Yellow'){
    console.log("Congratulations ! You have just earned 10 points");
} else {
    console.log("Congratulations ! You have just earned 15 points");
}
//3rd part
let alienColor3='Red';
if (alienColor3==='yellow'){
    console.log("Congratulatons ! You have earned 10 points!");
} else if (alienColor3==='green') {
    console.log("Congratulations ! You have just earned 5 points");
} else {
    console.log("Congratulations ! You have just earned 15 points");
}