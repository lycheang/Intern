//setTimeout: function in Javascript that allow you to schedule
// the execution of a function after an amount of the time (milliseconds)
// times are approximate (varies based on the workload of the javascript runtime env)
// setTimeout(callback,delay)

// function sayHello(){
//     window.alert("hello");
// }

// setTimeout(sayHello,3000);


// setTimeout(function(){window.alert("hello")},3000);


//  const timeoutid=setTimeout(()=>window.alert("hello"),3000)

//  clearTimeout(timeoutid)
let timeoutid;
function startTimer(){
     timeoutid=setTimeout(()=>window.alert("hello"),5000)
    console.log("Start")

}
function clearTimer(){
    clearTimeout(timeoutid)
    console.log("Cancel")
}