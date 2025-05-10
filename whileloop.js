//While loop=repeat some code while some condition is true
let name="";
let loggedIn=false;
let username;
let password;
do{
    username=window.prompt("Enter your username");
    password=window.prompt("Enter your password");
    if(username==="admin"&&password==="123"){
        loggedIn=true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid username or password");
    }
}while (!loggedIn)
// do{
//     name=window.prompt("Enter your name");
// }while(name===""||name===null)
//     console.log(`Heloo ${name}`);
