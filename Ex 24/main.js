// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array 
var string1 = "Fatima";
var string2 = "Farheen";
var num1 = 5;
var num2 = 7;
var array = [2, 3, 4, 5, 6];
//Tests using equality and inequality
console.log('\n Tests using equality and inequality \n ');
console.log(string1 === 'Fatima');
console.log(string1 === string2);
//test using the lower case function
console.log('\n test using the lower case function \n ');
console.log(string1.toLowerCase() === 'fatima');
console.log(string2.toLowerCase() === 'Farheen');
//numerical test equality inequality
console.log('\n numerical test equality inequality \n');
console.log(1 < 2);
console.log(num1 >= num2);
// numerical test greater than and less than 
console.log('\n numerical test greater than and less than \n');
console.log(num1 < num2);
console.log(num1 > num2);
//numerical test greater than or equal to
console.log('\n numerical test greater than or equal to \n ');
console.log(num2 > num1);
console.log(num1 >= num2);
//numerical test and less than or equal to
console.log('\n numerical test and less than or equal to  \n');
console.log(num1 < num2);
console.log(num2 == num1);
//Tests using "and" and "or" operators
console.log('\n Tests using "and" and "or" operators  \n');
console.log((num1 < num2) && (num1 != num2));
console.log((num1 > 6) || (num1 == num2));
//Test whether an item is in a array
console.log('\n Test whether an item is in a array \n');
console.log(array.includes(3));
console.log(array.includes(7));
//Test whether an item is not in a array 
console.log('\n Test whether an item is not in a array  \n ');
console.log(array.includes(2));
console.log(!array.includes(6));
