//error = an object with that created to represent the error  ocurred, often user input or establishing a connection
//try {}= enclose close that might potentialy cause an error 
//catch {}= catch and handle any thrown erro  from try {}
// finally {}= optional  alway execute.Used mostly for clean up 
// ex Close file close connection release resouces;


// try{
//     console.log("hellow");
//     //network error 
//     //promise rejection
//     // security error 
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     //close file
//     //close connection
//     //relase connection
//     console.log("this is executed successfully")
// }

// console.log("you have reach the end")
try{
const divide= window.prompt("Enter a divide")
const divisor=window.prompt("Enter a divisor")

if(divisor==0){
throw new Error("You can not divide by zero");
}
if(isNaN(divisor)||isNaN(divisor)){
    throw new Error("Invalid input");
} 
const result=divide/divisor;
console.log(result);
}
catch(error){
    console.log(error);
}
console.log("you have reached the end");
