//arrow function =concise way to write functions
// good for simple function use only one time parameter and one line statement(some code)

// const hello=(name,age)=>{
//   console.log(`hello ${name}`);
//   console.log(`Age ${age}`);
// }
// hello('sahil',22);
// setTimeout(hello,3000);
// function hello()
// {
//   console.log('hello');
// }
 
const num=[1,2,3,4,5,6];

const squares=num.map((element)=>Math.pow(element,2));
const cubes=num.map((element)=>Math.pow(element,3));

const even=num.filter((element)=>element%2===0);
const odd=num.filter((element)=>element%2!==0);
const total=num.reduce((acc,element)=>acc+element,0);
console.log(squares);
console.log(cubes);
console.log(even);
console.log(odd);
console.log(total);
