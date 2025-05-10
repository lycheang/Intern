// element selector : method used to target and manipulate html elements 
// they allow you to select one or multiple html elements 
// from the dom (document object mode )


//1 document.getelementbyid()// element null;
//2 document.getElementClassName()// html collection
//3 document.getelemenybytagename() // html collection
//4 document.querySelector(); // first element or null
//5 document.querySelectorAll(); //nodlist  

// const myheading =document.getElementById("welcome");
// myheading.style.backgroundcolor="yellow";

const hello=document.getElementsByClassName("hello");
console.log(hello);

// hellos[0].style.backgroundcolor="red";
  


// for(let hellos of hellos){
//     hellos.style.backgroundcolor="blue"; 
// }

// Array.from(hellos).forEach(hello=>{
//     hellos.style.backgroundcolor="green";
// });

const h2ve=document.getElementsByTagName("h2");
// h2ve[0].style.backgroundColor="red";
const liele=document.getElementsByTagName("li");

// for(let h2ves of h2ve){
//     h2ves.style.backgroundColor="blue";
// }
// for (let lieles of liele){
//     lieles.style.backgroundColor="yellow";
// }

//  Array.from(h2ve).forEach(h2ves=>{h2ves.style.backgroundColor="Blue";});
// Array.from(liele).forEach(liele=>{liele.style.background="Red";});

// const element =document.querySelector(".hello");
// element.style.backgroundColor="lightblue";

// const hellos=document.querySelectorAll("li");
//  hellos[0].style.backgroundColor="blue";


const food=document.querySelectorAll("li");
food.forEach(food=>{food.style.backgroundColor="yellow";});