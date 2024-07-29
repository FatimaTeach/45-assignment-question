//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
//define a function to print each array name
function show_magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//Define AN array containing megicinas name
var megicians_name = ["Fabiha", "Fatima", "Wajiha"];
//call the function to print each megiciamns name
show_magicians(megicians_name);
