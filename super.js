// super : keyword is used in class to call the constuctor or access the properties and method 
// a parent (superclass) 
// this=this object
// super = the parent

class Animal{
constructor(name,age){
    this.name=name;
    this.age=age;

}
move(speed){
    console.log(`this ${this.name} move at a speed of ${this.speed}mph`)
}
}

class Rabbit extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;

    }
    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.speed);
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        
        this.speed=speed;

    }
    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.speed);
    }

}
class Fish extends Animal{
    constructor(name,age,speed){
        super(name,age);
        
        this.speed;
    }
    swim(){
        console.log(`this ${this.name} can swim`)
        super.move(this.speed);
    }
}
const rabbit= new Rabbit("rabbit",10,25);
const dog= new Dog("dog",11,13);
const fish= new Fish("fish",12,20);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.speed);

rabbit.run();