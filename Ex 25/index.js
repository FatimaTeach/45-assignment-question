//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called 
//alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "Green";
//message just the player earned 5 points
if (alien_color === 'Green') {
    console.log("\n Congratulation! You have earned 5 pointss! \n ");
}
//write version of this program that passes the if test and another that fails.
var alien_color2 = 'red';
if (alien_color2 === 'Green') {
    console.log("Congratulations! You have earned 5 points!");
}
