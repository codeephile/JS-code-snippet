//api fetch async/callback //

// function fetchData(url, options) {
//   // options can be an object containing headers, method, etc.
// }
// fetchData("https://api.example.com", { method: "GET", headers: { "Content-Type": "application/json" } });

-----------------------------------------

// event handler //
// let button = document.querySelector("button");
// let eventHandlers = {
//     clickHandler: function() {
//         alert("Button clicked!");
//     }
// };
// button.addEventListener("Click", eventHandlers.clickHandler);

-----------------------------------------------------

// prototype //

// function Person(name){
//     this.name = name;
// }

// Person.prototype.speak = function() {
//     console.log(this.name + ' watching TV');
// };
// Person.prototype.walk = function(){
//     console.log(this.name + ' walking in the park');
// }

// // creating instance of person
// let student = new Person("Alice");
// let teacher = new Person("Bobby");

// //accessing speak method from prototype
// student.speak();
// teacher.walk();

--------------------------------------------------------

// // constructor //

// function student(name, age, city){
//     this.name = name,
//     this.age = age,
//     this.city = city,
//     this.study = function(){
//         console.log(`${this.name} is studying`);
//     }
// }

// var student1 = new student ("alice", 20, "Los angeles");
// var student2 = new student("Bob", 21, "San francisco");
// console.log(student1.name, student1.age, student1.city);
// console.log(student2.name, student1.age, student1.city);
// student1.study();

---------------------------------------------------------
// classes //
  
// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`); //toFixed(2)
//     }

//     calculateTotal(saleTax){
//         return this.price + (this.price * saleTax);
//     }
// }

// const saleTax = 0.5;
// var product1 = new Product("IphonePro", 10.50);
// var product2 = new Product("Samsung", 10.99);
// product1.displayProduct();
// product2.displayProduct();

// const total = product1.calculateTotal(saleTax); //product2, product3 etc...
// console.log(`Total price(with tax) is $${total.toFixed(2)}`);
