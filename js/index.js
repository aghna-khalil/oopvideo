// ENCAPSULATION DEALS LIKE NO PARAMETER

let employee={ 
    
    salary:100,
    overtime:5,
    rate:4,
    // lets call a method or function (define some logic)
    getWage: function () {
        return this.salary + (this.overtime* this.rate);   
    }
};
employee.getWage();

// DEFINE OBJECT LITERALS====================================================
// circle object
// let circle={
    // properties of function which (hold values)
    // radius:1,
    // location:{
        // x:1,
        // y:1
    // },
    //  method or function (define some logic)
    // draw: function() {
        // console.log("draw");
    // }
// };
// lets call a method /function
// circle.draw();


// DEFINE OBJECT FACTORy function=====================================
function createCircle(radius) {  
    return{
        // if key and value same reduce noise by removing value ES6 feature
        radius,
        draw: function() {
            console.log("draw");
        }
    };  
 }
const circle=createCircle(1);
circle.draw();

// DEFINE CONSTRUCTOR FUNCTION============================================
function Circle(radius) {
    this.radius=radius;
    this.draw= function(){
        console.log("draw");
    }
    
}
const another= new Circle(1);
// FUNCTIONS ARE OBJECTS==================================================
// const Circle1= new Function('radius',`
//  this.radius=radius;
// this.draw= function(){
//     console.log("draw");
// }
// `);
// const circle= new Circle1(1);    we can also call it like that  const another= new Circle(1);

// Circle.call({},1);
// Circle.apply({}, [1,2,3]);


// VALUE VS REFERENCE TYPES==================================================
// PRIMITIVE ARE INDEPENDENT
let x=10;
y=x;
x=20;
// another example of value type
let number=10;
function increase(number){
    number++;
}
increase(number);
console.log(number);
// refernce type 
let a={value:20};
b=a;
a.value=10;
// ANOTHER EXAMPLE OF REFERENCE TYPE
let obj={value:10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);


// ADDING  OR REMOVING PROPERTIES============================================
// add
circle.location={x:1};
circle['location']={x:1};
// or another way add if name in special letter 
const propertyName= "location_center";
circle[propertyName]={x:1};

// delete
delete circle.location;
delete circle['location'];
// enumerating properties=======================================================

// const Circle1= new Function('radius',`
//  this.radius=radius;
// this.draw= function(){
//     console.log("draw");
// }
// `);
// const circle= new Circle1(1);
for(let key in circle){
    console.log(key);
    // if you want value of these properties than put in bracket
    console.log(key,circle[key]);

}
// buy using operator u get values
for(let key in circle){
    if(typeof circle[key] !=='function')
    console.log(key,circle[key]);

}
// for all properties of key to show in array use object 
const keys=Object.keys(circle);
console.log(keys);
// if radius in circle message show
if ('radius' in circle )
console.log('circle has a radius ');
//  ABSTRACTION HIDE DETAILS AND SHOW ESSENTIALS
function Circle(radius) {
    // in lower line we only show essentials 
    this.radius=radius;

    this.defaultLocation={x:0,y:0};
    this.computeOptimumLocation=function(factor){
        // ..........
    }
    this.draw= function(){
        // call function inside here you can pass arguments with less change 
        // in this lower function we hide the detail
        this.computeOptimumLocation(0.1);
        console.log("draw");
    }
    
}
// const circle= new Circle(1);
circle.draw();
// instead of call the function here we call it inside the upper function it reduce the changes 


// PRIVATE MEMBERS AND METHODS 
function Circle(radius) { 
    this.radius=radius;
// we dont want default location to accesible from outside so we declare it as alocal variable where it scope limited and dies
    let defaultLocation={x:0,y:0};
    // here by the same token we convert compute method to private method
    let computeOptimumLocation=function(factor){
        // ..........
    }
    this.draw= function(){
        // here you call the private method because with this object it cant be accessible
        // let x,y; their scope limited after excution of this function their scope dies
       computeOptimumLocation(0.1);
    //    defultlocation
    // this.radius / to access the new circle members with this object
        console.log("draw");
    }
    
}
// const circle= new Circle(1);
circle.draw();

// getter/setter
function Circle(radius) { 
    this.radius=radius;
    let defaultLocation={x:0,y:0};
   
    this.computeOptimumLocation=function(){
        return defaultLocation;
        // ..........
    };
    this.draw= function(){
     console.log("draw");
    };
    Object.defineProperty(this,'defaultLocation',{
        get: function() {
            return defaultLocation;  
        },
        set:function(value){
            if(!value.x || !value.y){
                throw new Error('invalid location.');
                
            }
            defaultLocation=value;
        }
    })
    
}
// const circle= new Circle(1);
circle.defaultLocation=1;
circle.draw();
// ==============================================ARTICLE CONCEPTS====================================
// create an object that inherits from another object
// Create a new object using Object.create()
const myObj = Object.create(null);

// Add some properties to the object
myObj.firstName = "John";
myObj.lastName = "Doe";
myObj.age = 30;
// Log the object to the console
console.log(myObj);

// object.assign() method, which allows you to add properties and methods to an object directly.
// define an object with some properties and methods
const myObject = {
    name: "John",
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  // create a new object and add properties and methods to it using Object.assign()
  const newObj = Object.assign({}, myObject, {
    email: "john@example.com",
    getInfo() {
      console.log(`My email is ${this.email}.`);
    }
  });
  // test the new object
  console.log(newObj.name); // output: "John"
  console.log(newObj.email); // output: "john@example.com"
  newObj.greet(); // output: "Hello, my name is John and I am 30 years old."
  newObj.getInfo(); // output: "My email is john@example.com."

//   create a new class that is a child of an existing class, inheriting all its properties 
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal{
    constructor(name,age,breed) 
    {
        // used to call parent class' variables and methods
        super(name,age);
        this.breed=breed;
    }
    speak(){
        console.log(`${this.name} barks.`);
    }
    describe() {
        console.log(`${this.name} is a ${this.age}-year-old ${this.breed}.`);
      }
}
const myDog = new Dog("Rufus", 3, "Golden Retriever");
myDog.speak(); // Output: "Rufus barks."
myDog.describe(); // Output: "Rufus is a 3-year-old Golden Retriever.
// static method only have access to class method static variables without using object
class MyClass {
    static staticProperty = "static property value";
    static staticMethod() {
      console.log("this is a static method");
    }
  
    instanceMethod() {
      console.log("this is an instance method");
    }
  }
  console.log(MyClass.staticProperty); // Output: "static property value"
  MyClass.staticMethod(); // Output: "this is a static method"
  const myobject = new MyClass();
  myobject.instanceMethod(); // Output: "this is an instance method" 

//   static method to create a new instance of the class:
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    static createCar(make, model) {
      return new Car(make, model);
    }
  }
  const myCar = Car.createCar("Toyota", "Corolla");
  console.log(myCar instanceof Car); // Output: true
  console.log(myCar.make); // Output: "Toyota"
  console.log(myCar.model); // Output: "Corolla"
// =================================================STOPWATCH======================================
class Stopwatch {
    constructor() {
        let startTime, endTime, running, duration = 0;

        this.start = function () {
            if (running)
                throw new Error('stopwatch already running');
            running = true;
            startTime = new Date();

        };
        this.stop = function () {
            if (!running)
                throw new Error('stopwatch already stop running');
            running = false;
            endTime = new Date();
            const seconds = ((endTime.getTime()) - (startTime.getTime()) / 1000);
            duration += seconds;

        };
        this.reset = function () {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;

        };

        Object.defineProperty(this, 'duration', {
            get: function () {
                return duration;
            }
        });

    }
}
const sw= new Stopwatch;
console.log("start duration"+ " "+ sw.duration);
console.log("start stopwatch"+ " "+sw.start());
console.log("stop stopwatch"+ " "+ sw.stop());
console.log("duration from start to stop "+ " "+ sw.duration);













