//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruit = ['Strawberry', 'Cherry', 'Jamun', 'Khubani'];
if (favorite_fruit.includes('Jamun')) {
    console.log("\nYou really like Jamun\n");
}
if (favorite_fruit.includes('Cherry')) {
    console.log("\n You really like Cherry \n ");
}
if (favorite_fruit.includes('Khubani')) {
    console.log("\nYou really like Khubani\n");
}
if (favorite_fruit.includes('Banana')) {
    console.log("\nYou really like Bananas\n");
}
if (favorite_fruit.includes('Apple')) {
    console.log("\nYou really like Apple\n");
}
