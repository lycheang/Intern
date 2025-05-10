//class=(es6 feature) provide a more strucutred and cleaner way to work with objects compare traditional 
// constructor function ex. static keyword, encapsulation, inheritance.

// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   this.displayproduct=function(){
//     console.log(this.name + " " + this.price);
//   }

//   this.calcatotal=function(tax){
//     return this.price + (this.price * tax);
//   }
// }

// const tax=0.08;

// const product1 = new Product('phone', 500);
// const product2 = new Product('laptop', 1000);
// const product3 = new Product('tablet', 300);

// console.log(product1.displayproduct());
// console.log(product1.calcatotal(tax));
// console.log(product2.displayproduct());
// console.log(product2.calcatotal(tax));
// console.log(product3.displayproduct());
// console.log(product3.calcatotal(tax));

class product{
  constructor(name, price){
    this.name=name;
    this.price=price;
  }

  displayproduct(){
    console.log(`Product name: ${this.name}`);
    console.log(`Product price: ${this.price}`);
  }

  calcatotal(tax){
    return this.price + (this.price * tax);
  }

  
}

const tax=0.08;

const product1 = new product('phone', 500);
const product2 = new product('laptop', 1000);
const product3 = new product('tablet', 300);

product1.displayproduct();
console.log(product1.calcatotal(tax));
product2.displayproduct();
console.log(product2.calcatotal(tax));
product3.displayproduct();
console.log(product3.calcatotal(tax));