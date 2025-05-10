//synchoronous: function line by line consecutively in a sequnetial manner, code that wait untils for operation compelete;
//asynchorous: allow mutiple operations to be performed concurrently without waiting for doesnot block the execution
    // or allow program to continue I/O operations network request fetcing data handler with callback promise Async/Await


    function func1(callback) { 
        setTimeout(()=>{console.log("Hello");callback()},3000); //
    }
function fun2(){
    console.log("taste 1")
    console.log("taste 2")
    console.log("taste 3")
};

func1(fun2); //synchoronous call