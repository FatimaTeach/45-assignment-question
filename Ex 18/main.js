//18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//s• 1 Print your array in its original order.
//• 2 Print your array in alphabetical order without modifying the actual list.
//• 3 Show that your array is still in its original order by printing it.
//• 4 Print your array in reverse alphabetical order without changing the order of the original list.
//• 5 Show that your array is still in its original order by printing it again.
//• 6 Reverse the order of your list. Print the array to show that its order has changed.
//• 7 Reverse the order of your list again. Print the list to show it’s back to its original order.
//• 8 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• 9 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var Places = ['sawat', 'naran', 'Kaghan', 'Islamabad', 'Lahore'];
//1 print places in the original order
console.log(Places);
//2 print in alphabetic order without modifying the actuall list
console.log(Places.sort());
//3 array is still in its original order by printing it again.
console.log(Places);
//4 Reverse the order of your list. Print the array to show that its order has changed.
console.log(Places.sort().reverse());
//5 Show that your array is still in its original order by printing it again.
console.log(Places);
//6 Reverse the order of your list. Print the array to show that its order has changed.
console.log([Places].sort().reverse());
//7 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(Places.reverse());
//8 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(Places.sort());
//9 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(Places.sort().reverse());
