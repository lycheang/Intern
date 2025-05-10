//inheritance in javascript allow new class properties and methods from existing class(parent child)
//help with code reusability.

class Animal{
    alive = true;
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log("Animal is sleeping");
    }
}

class rabbit extends Animal{
     name='Rabbit';
    jump(){
        console.log("Rabbit is jumping");
    }
}
class Fish extends Animal{
     name='Fish';
    swim(){
        console.log("Fish is swimming");
    }
}
class Bird extends Animal{
     name='Bird';
    fly(){
        console.log("Bird is flying");
    }
}

const rabbit1 = new rabbit();
console.log(rabbit1.alive);
console.log(rabbit1.name);
rabbit1.eat();
rabbit1.jump();
rabbit1.sleep();

const fish1 = new Fish();
console.log(fish1.name);
fish1.eat();
fish1.swim();


const bird1 = new Bird();
console.log(bird1.name);
bird1.eat();
bird1.fly();

