//21 They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

interface type {
    name:string, age:number, Profession:string
}

let OBJ:type ={name:'Fatima', age:20, Profession:'Content writer' }

console.log("\n Containing information about me \n ");
console.log(`\n My name is is : ${OBJ.name} \n `);
console.log(`\n My age is ${OBJ.age} `);
console.log(`\n I am a ${OBJ.Profession}\n`);