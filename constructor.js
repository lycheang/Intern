//constructor function special method for creating and initializing an object created within a class

// const car1={
//     make: 'Ford',
//     model: 'Fiesta',
//     year: 2010,
//     drive: function(){
//         console.log(`You drive this ${this.make} ${this.model}`);
//     }
// }
// const car2={
//     make: 'Chevy',
//     model: 'Camaro',
//     year: 2019,
//     drive: function(){
//         console.log(`You drive this ${this.make} ${this.model}`);
//     }
// }
// const car3={
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2015,
//     drive: function(){
//         console.log(`You drive this ${this.make} ${this.model}`);
//     }
// }
function Car(make, model, year,color){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.drive=function(){
        console.log(`You drive this ${this.make} ${this.model}`);
    }
}

const car1=new Car('Ford','Fiesta',2010,'red');
const car2=new Car('Chevy','Camaro',2019,'blue');
const car3=new Car('Toyota','Corolla',2015,'green');
console.log(car1);
car1.drive();
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car2);
car2.drive();
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car3);
car3.drive();