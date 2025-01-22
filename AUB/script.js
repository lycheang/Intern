// age1 19
// age2 "19"
//let age1=18
    
//let age2="18"
//console.log(age1===age2) //true //== equal 2 // === "strict equal //==compare only value 
                                                   // ===compare value with datatype
                        //non primitive type of datatype object.
//let button=document.getElementById("btn");
// addeventlistener build in function just use for function butt
// quote and doulbe quote same
//button.addEventListener("click",function()
//{alert("hello world")});
//dblclick 2 click 2time on button
//document.getElementById("btn").addEventListener("click",function(){
  //  let name=document.getElementById("name").value;
    //alert(`Hello ${name}`)
//});
//2 big function build in function
/*document.getElementById("btn").addEventListener("click",function(){
    let name=document.getElementById("name").value;
    Sum(name,5);
});
function Sum(a,b) {
    alert(`Result: ${parseInt(a)+b}`); 
}*/
document.getElementById("btn").addEventListener("click",function(){
    let name=document.getElementById("name").value;
    //sayName(name);
    //person.sayHello0(name);//Method function
    //person2.sayHello1(name);// object definition function
    person3.sayHello2(name);// object Method function
});
    
//----------function declaration
function sayHello(name){
    alert(`Hello ${name}`);
}
//---------function expression
const sayName=function(name){
    console.log(`Hello ${name}`);
}
document.getElementById("info-btn").addEventListener("click",function(){
    let info=document.getElementById("info").value;
    Info(info);
});
//----------Arrow function
const Info=(info)=>{
    alert(`Where do you live: ${info}`);
    console.log(`Where do you live: ${info}`);
}
//method function 
const person={
    name:"John",
    
sayHello0(name){
    alert(`Hello ${name}! My name is ${this.name}`);
    console.log(`Hello ${this.name}`);
}
};
const person2={
    firstName:"john",
    lastname:"Doe",
    age:25,
    eyeColor:"blue",

    sayHello1(name){
        alert(` ${name} Hello ${this.firstName} ${this.lastname}! My age is ${this.age} and eye color is ${this.eyeColor}`);
        console.log(` ${name} Hello ${this.firstName} ${this.lastname}`);
    }
}

const person3={
    firstName:"Jane",
    lastname:"Doe",
    age:30,
    eyeColor:"green",
    //plus last and first names
    fullname:function(){
        return `${this.firstName} ${this.lastname}`
    },
    sayHello2(name){
        alert(` ${name} Hello ${this.fullname()}! My age is ${this.age} and eye color is ${this.eyeColor}`);
        console.log(`Hello ${this.fullname()}`);
    }
}


window.onload = function () {
    console.log('Page fully loaded!');
    alert('Page fully loaded!');
  };

  // onchange
  document.getElementById('cars').onchange = function () {
    alert('You selected: ' + this.value);
  };

  // onclick
  document.getElementById('myButton').onclick = function () {
    alert('Button Clicked!');
  };

  // onmouseover and onmouseout
  const hoverText = document.getElementById('hoverText');
  hoverText.onmouseover = function () {
    this.style.color = 'red';
  };
  hoverText.onmouseout = function () {
    this.style.color = 'black';
  };

  // onkeydown
  document.getElementById('textInput').onkeydown = function (event) {
    console.log('Key pressed: ' + event.key);
  };

  

