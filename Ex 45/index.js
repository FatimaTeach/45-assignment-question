//45. Cars: Write a function that stores information about 
//a car in a Object. The function should always receive a 
//manufacturer and a model name. It should then accept an 
//arbitrary number of keyword arguments. Call the function
//define a function to create a car object with optional options...
function create_car(manufacturer, model) {
    //initialize a car object with manufacturer and model 
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //add additional optons to the car objects
    options.forEach(function (options) {
        var _a = options.split(" : "), Key = _a[0], value = _a[1];
        car[Key.trim()];
    });
    return car;
}
//call the function to crate a car object
var my_car = create_car("Toyota", "Corrolla", "color:black", "sunroof :true");
//call the function to create a car object
var my_car = create_car("Toyota", "Corolla", "color:Black", "sunroof: True");
//print the variable to ensure all the information stored correctly in the car object
console.log(my_car);
