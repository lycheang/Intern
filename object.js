// object= a collect of relate property or method
//can represent real world object like car, house, person, etc
// object= {key: value}
// key= string (property name)
// value= any data type (property value) 

const person1={
    name: 'John',
    age: 30,
    isAdult: true,
    hobbies: ['reading', 'music', 'movies'],
    greet: function(){
        console.log('Hello');
    },
    sayhello : function(){
        console.log('Hello');
    },
    saygoodbye : function(){
        console.log('Goodbye');
    }


}
const person2={
    name: 'Bob',
    age: 25,
    isAdult: false,
    hobbies: ['music', 'movies'],
    greet: function(){
        console.log('Hello');
    },
    sayhello : function(){
        console.log('Hello');
    },
    saygoodbye : function(){
        console.log('Goodbye');
    }

}

console.log(person1.name);
console.log(person1.saygoodbye());
console.log(person2);