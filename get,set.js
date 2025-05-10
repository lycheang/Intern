//getter: special method that make a property readable
//setter: special method that make a property writable

// validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width,height){
//             this.width=width;
//             this.height=height;
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width=newWidth;

//         }
//         else{
//             console.error("width must a positive number");
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height=newHeight;

//         }
//         else{
//             console.error("Height must a positive number");
//         }
//     }
//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }
//     get areas(){
//         return `${(this._width*this._height).toFixed(1)}cm`;
//     }
// }
// const rectangle= new Rectangle(100,3);


// rectangle.width=5;
// rectangle.height=6;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.areas)

class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    set firstname(newFirstname){
        if(typeof newFirstname==="string"&&newFirstname.length>0){
            this._firstname=newFirstname;
        }
        else{
            console.error("Firstname must be non-empty String")
        }
    }
    set lastname(newLastname){
        if(typeof newLastname==="string"&&newLastname.length>0){
            this._lastname=newLastname;
        }
        else{
            console.error("Lastname must be non-empty String")
        }
    }
    set age(newAge){
        if(typeof newAge==="number"&& newAge>=0){
            this._age=newAge;
        }
        else{
            console.error("Age must be positive number")
        }
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }
    get fullname(){
        return this._firstname+this._lastname;
    }

}
const person=new Person("ly","bunchheang",10)

console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age)