//this =reference to the object that where this is used
// the object depend on the immerdiate context of the function where this is used
// person.name=this.name

const person1={
    name:'john',
    age:30,
    favfood:'pizza',
    display:function(){
        console.log(this.name, this.age);
    },
    iseat:function(){
        console.log(this.name, 'is eating', this.favfood);
    }
}
const person2={
    name:'jane',
    age:25,
    favfood:'burger',
    display:function(){
        console.log(this.name, this.age);
    },
    iseat:function(){
        console.log(this.name, 'is eating', this.favfood);
    }
}
console.log(person1.display());//john
console.log(person1.iseat());//john is eating pizza

console.log(person2.display());//jane
console.log(person2.iseat());//jane is eating burger