// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
//a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
// message, and a shirt of any size with a different message. 

//making a functon
function make_shirt (size:string= "Large" , printMessage:string="I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirts`)
}

//calling a function
make_shirt();

//calling a function with medium size shirt and default message

make_shirt("Medium")

//calling a function now with small siza nad different print message

make_shirt("Small", "I Love JavaScript")
