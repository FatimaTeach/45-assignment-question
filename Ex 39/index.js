//39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
//creating  a function with parameters which returns a value in string
function city_country(city, country) {
    return "".concat(city, ", ").concat(country, " ");
}
//calling a function and print a returned value
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));
city_country("Tokoyo", "Japan");
console.log(city_country("Birmingham ", "England"));
city_country("Berklin", "Germany");
console.log(city_country("Genova", "Italy"));
