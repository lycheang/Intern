//callback function that is passed an an argument
//to another function.

//used to handle asynchronous operations
//1. Reading a file
//2. Network request
//3. Database operations


// "Hey when you are done with this operation, call this function"
hello(goodbye);


function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}