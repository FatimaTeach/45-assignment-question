//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test 
//and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.") string ki trha act karegi koi function perform nh karegi

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car:string = "Subaru";
 console.log("\n 5 Test to Evaluate to True \n");

 //Test # 01
 console.log("Is car == 'subaru'? I predict true");
 console.log(car === 'Subaru');

 //Test # 02
console.log("Is car != Toyota ? i predict true"  )
console.log(car !== 'Toyota');

//Test # 03
console.log("Is the length of car is > 4 ? I predict true");
console.log(car.length>4);

//Test # 04
console.log("Is the length of the car is <= 6? I predict true");
console.log(car.length<=6)

//Test # 05
console.log("Does car start with S ? I predict true.");
console.log(car.startsWith(('S')));

console.log("\n Test evaluate to false \n ")

//Test # 01
console.log("Is car === honda ? I predict True ")
console.log(car === 'honda')

//Test # 02
console.log("Is car in uppercase? I predict false");
console.log(car.toUpperCase() === car)

//Test # 03
console.log(" Is car start with T? I predict false")
console.log(car.startsWith(('T')));

//Test # 04
console.log("Is car = 'honda'? i predict false");
console.log(car === 'honda');
//Test # 5
console.log("Is car = subaru? I predict true");
console.log(car === 'SubarU');
//test # 06
console.log("Is the lenght of the car =7? I predict true");
console.log(car.length === 7);
