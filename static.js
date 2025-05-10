//static =keyword define property or method that belong 
// to a class itself rathan the objects created from that class
// (class own anythings static, not the object)

// class MathUtil{
//     static PI = 3.14;


//     static getDiamete(radius){
//         return radius * 2;
//     }
//     static getcir(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }

// }

// console.log(MathUtil.PI);

// console.log(MathUtil.getDiamete(10));
// console.log(MathUtil.getcir(10));
// console.log(MathUtil.getArea(10));

class User{
    static count = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
        User.count++;
    }
    static showUserCount(){
        console.log(`Total user: ${User.count}`);
    }
    showName(){
        console.log(`Name: ${this.name}`);
    }
    sayHello(){
        console.log(`${this.name} says hello`);
    }

}

let user1 =
 new User('Jack', 25);
let user2 =
 new User('Jill', 24);
let user3 = new User('John', 30);
let user4 = new User('Jane', 28);

user1.showName();
user1.sayHello();
user2.showName();
user2.sayHello();
user3.showName();
user3.sayHello();
user4.showName();
user4.sayHello();
User.showUserCount();