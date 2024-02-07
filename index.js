const prompt = require("prompt-sync")();



//1. Object.keys() - Listing Properties:
//•	Task: Use the Object.keys() method to list all the property names (keys) of a person object.
//•	Example Object: { name: 'John', age: 30, occupation: 'Engineer' }

//1. 
// const person = { name: "Chinara", age: 30, occupation: "Teacher" };
//console.log(Object.keys(person));


//2. Object.values() - Listing Values:
//•	Task: Use the Object.values() method to list all the values of a product object.
//•	Example Object: { productId: 'p123', name: 'Laptop', price: 899 }

//2. const person = { name: "Chinara", age: 30, occupation: "Teacher" };
//console.log(Object.values(person));


//3.	Object.entries() - Converting to Array:
//•	Task: Convert a book object into an array of [key, value] pairs using Object.entries().
//•	Example Object: { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }

//3. const person = { name: "Chinara", age: 30, occupation: "Teacher" };
//console.log(Object.entries(person));


//3. const person = { name: "Chinara", age: 30, occupation: "Teacher" };

//for (const [key, value] of Object.entries(person)) {
//console.log(`${key}: ${value}`); }


//4.	Object.freeze() - Preventing Modifications:
//•	Task: Use Object.freeze() to prevent any changes to a settings object and then attempt to add, update, and delete properties.
//•	Example Object: { theme: 'dark', notifications: true }


//4. 
//const person = { name: "Chinara", age: 30, occupation: "Teacher" };

//Object.freeze(person);

//person.name = "Naiba";
//person.age = 20;

//console.log(person.age); 

//5.	Object.seal() - Allowing Only Value Modifications:
//•	Task: Use Object.seal() on a userProfile object, then try to add a new property, delete an existing property, and modify an existing property.
//•	Example Object: { username: 'user123', email: 'user123@example.com' }


//5. 
//const person = { name: "Chinara", age: 30, occupation: "Teacher" };

//Object.seal (person);

//person.location = "Landau";

//console.log (person.location);

//delete person.age;

//console.log (person.age);

//person.occupation = "Developer";

//console.log (person.occupation);

//6.	Object.assign() - Copying Properties:
//•	Task: Use Object.assign() to copy all properties from sourceObj to targetObj.
//•	Example Objects: sourceObj = { b: 2, c: 3 }, targetObj = { a: 1 }


//6. 
//const sourceObj = { b: 2, c: 3 };
//const targetObj = { a: 1 };

//const obj = Object.assign(targetObj, sourceObj);

//console.log(obj);


//7.	Object.defineProperty() - Defining a New Property:
//•	Task: Use Object.defineProperty() to add a new read-only property version to an appConfig object.
//•	Example Object: { name: 'MyApp', theme: 'light' }


//7.
//const objekt = { name: "MyApp", theme: "light" };

//Object.defineProperty(objekt, "version", {
//value: "1.0",
//writable: false,
//enumerable: true,
//configurable: true,

//});

//console.log(objekt.version);

//objekt.version = "2.0";

//console.log (objekt.version);


//8.	Object.getOwnPropertyDescriptor() - Retrieving Property Descriptors:
//•	Task: Retrieve and log the descriptor of the property age from a personDetails object.
//•	Example Object: { name: 'Alice', age: 25 }


//8.
//const objekt = { name: 'Alice', age: 25 };

//console.log(Object.getOwnPropertyDescriptor(objekt, "age"));

//9.	Object.getOwnPropertyNames() - Listing All Properties:
//•	Task: Use Object.getOwnPropertyNames() to list all properties (including non-enumerable ones) of a vehicle object.
//•	Example Object: { make: 'Toyota', model: 'Camry' }

//9.
//const objekt = { make: 'Toyota', model: 'Camry' };

//console.log(Object.getOwnPropertyNames(objekt));





//10.	Object.is() - Comparing Two Values:
//•	Task: Compare two objects for equality using Object.is() and then compare them using === to understand the difference.
//•	Example Objects: obj1 = { key: 'value' }, obj2 = { key: 'value' }

//10.

//const obj1 = { key: "value" };
//const obj2 = { key: "value" };
//if (obj1 === obj2) {
//}

//console.log(Object.is(obj1, obj2));


//1.	Create a Simple Object:
//•	Task: Define an object named book that contains the following properties: title, author, and yearPublished.
//•	Output: Use console.log() to display the entire object.

//1.
//const book = {title: "Parfum", author: "Patrick Suskind", yearPublished: 1985};

//console.log (book)



//2.	Accessing Properties:
//•	Task: Given an object representing a car with properties make, model, and year, write code to access each property individually and print them to the console.
//•	Example Object: { make: 'Toyota', model: 'Corolla', year: 2005 }


//2.
//const car = { make: 'Toyota', model: 'Corolla', year: 2005 }

//console.log('Make:', car.make);
//console.log('Model:', car.model);
//console.log('Year:', car.year);




//3.	Adding Properties:
//•	Task: Start with an object representing a person with properties firstName and lastName. Add two more properties to it: age and email, then print the updated object.
//•	Example Object: { firstName: 'John', lastName: 'Doe' }

//3.
//const person = { firstName: 'John', lastName: 'Doe' };

//person.age = 30;
//person.email = "john.doe@gmail.com";

//console.log (person)




//4.	Removing Properties:
//•	Task: Create an object representing a gadget with properties name, price, and category. Remove the category property from the object, and then print the updated object.
//•	Example Object: { name: 'Smartphone', price: 999, category: 'Electronics' }

//4.
//const gadget = { name: 'Smartphone', price: 999, category: 'Electronics' };

//delete gadget.category;

//console.log (gadget);



//5. Nested Objects:
//•	Task: Define an object representing a student. Inside this object, include another object named address which contains properties street, city, and zipCode. Print the student’s city by accessing it through the nested address object.
//•	Example Object: { name: 'Emily', grade: 'A', address: { street: '123 Main St', city: 'Springfield', zipCode: '65804' }}


//5.
//const student = { name: 'Emily', grade: 'A', address: { street: '123 Main St', city: 'Springfield', zipCode: '65804' }};

//console.log (student.address.city)



//6.Checking for Property Existence:
//•	Task: Create an object representing a library book with properties title, author, and ISBN. Write a function that checks whether the property ISBN exists in the object and prints a message confirming its existence or absence.
//•	Example Object: { title: '1984', author: 'George Orwell' }

//6.
//const librarybook = { title: '1984', author: 'George Orwell' };

//function propertyISBNexists(librarybook) {
//if ("ISBN" in librarybook) {
//console.log("ISBN exists:", librarybook.ISBN);
//} else {
//console.log("ISBN does not exist in the librarybook");
//}
//}
//propertyISBNexists(librarybook);





//7. Merging Objects:
//•	Task: Given two objects representing user details, merge them into a single object. The first object has properties firstName and lastName, and the second object has properties email and username. Use the spread operator or Object.assign() to perform the merge.
//•	Example Objects: { firstName: 'John', lastName: 'Doe' } and { email: 'johndoe@example.com', username: 'johndoe' }


//7.
//const user1 = { firstName: 'John', lastName: 'Doe' };
//const user2 = { email: 'johndoe@example.com', username: 'johndoe' };

//console.log(Object.assign(user1, user2));





//Class tasks

// * Car Object *
// Create a Car object with properties like make, model, and year. Add methods to this object for start (logs 'Engine started'), and stop (logs 'Engine stopped').

//const laptop = {
//model: "Acer",
//year: 2020,
//memory: "1TB",
//processor: "Core i5",
    //power: function () {
//console.log(this.model + " is running");
//},
//shutdown: function () {
//console.log(this.model + this.memory + " shutdown");
//},
//};

//laptop.power();
//laptop.shutdown();

// * Book Library *
// Create a Library object that holds an array of books. Each book will be an object with title, author, and isRead properties. Add methods to add a book to the library, remove a book, and log out all the unread books.

//const library = {
//books: [],
//addBook: function (title, author) {
//this.books.push({ title, author });
//},
//};

//library.addBook("Little prince", "Test");
//library.addBook("1984", "Gorge Owel");

//console.log(library.books);

// * Shopping Cart *
// Create a ShoppingCart object that holds an array of items. Each item should be an object with name, price, and quantity. Add methods for adding an item, removing an item, and calculating the total price of items in the cart.

//const shoppingCart = {
//carts: [],
//summary: 0,
//addCart: function (name, price, qty) {
//this.carts.push({ name, price, qty });
//},
//totalPrice: function () {
//this.carts.map((item) => {
//this.summary += item.price * item.qty;
//});
//console.log(this.summary);
//},
//};

//shoppingCart.addCart("adidas", 500, 3);
//shoppingCart.addCart("nike", 200, 2);
//shoppingCart.addCart("h&m", 100, 2);

//shoppingCart.totalPrice();







//Hometasks

// * Bank Account *
// Create a BankAccount object with properties accountNumber, ownerName, and balance. Include methods for deposit (adds to the balance), withdraw (subtracts from the balance), and getBalance (returns the balance).

//const bankAccount = {
//accountNumber: 123,
//ownerName: "Chinara",
//balance: 10000,
//addDeposit: function (amount) {
//console.log( this.balance += amount);
//},
//addWithdraw: function (amount) {
//console.log( (this.balance -= amount) );
//},
//addGetBalance: function (amount) {
//console.log( this.balance);
//}
//};

//bankAccount.addDeposit(10000);
//bankAccount.addWithdraw(50);
//bankAccount.addGetBalance(10000);





  //1. Temperature Converter:

  //Create an object that can convert temperatures between Celsius, Fahrenheit, and Kelvin.

//const TemperatureConverter = {
  
//celsiusToFahrenheit: function(celsius) {
//return (celsius * 9/5) + 32;
//},

//fahrenheitToCelsius: function(fahrenheit) {
//return (fahrenheit - 32) * 5/9;
//},

//celsiusToKelvin: function(celsius) {
//return celsius + 273.15;
//},

//kelvinToCelsius: function(kelvin) {
//return kelvin - 273.15;
//},

//fahrenheitToKelvin: function(fahrenheit) {
//return (fahrenheit + 459.67) * 5/9;
//},

//kelvinToFahrenheit: function(kelvin) {
//return kelvin * 9/5 - 459.67;
//}
//};

//console.log(TemperatureConverter.celsiusToFahrenheit(25));
//console.log(TemperatureConverter.fahrenheitToCelsius(77));
//console.log (TemperatureConverter.celsiusToKelvin(25));
//console.log (TemperatureConverter.kelvinToCelsius(275));
//console.log (TemperatureConverter.fahrenheitToKelvin(25));
//console.log (TemperatureConverter.kelvinToFahrenheit(275));





//Password Validator:

//Create an object that validates passwords based on certain criteria (length, contains numbers, contains special characters, etc.).

//const passwordValidator = {
//length: 8,
//containsNumbers: true,
//containsSpecialCharacters: true,


//validatePassword: function() {
//if (this.length >= 8 ) {
//console.log("Password is valid");
//} else {
//console.log("Password is not valid");
//}
//},


//validateNumbers: function() {
//if (this.containsNumbers === true) {
//console.log("Password contains numbers");
//} else {
//console.log("Password doesnt contain numbers");
//}
//},

//validateCharacters: function() {
//if (this.containsSpecialCharacters === true) {
//console.log("Password contains special characters");
//} else {
//console.log("Password doesnt contain special characters");
//}
  
//}
//};

//passwordValidator.validatePassword();
//passwordValidator.validateCharacters();
//passwordValidator.validateNumbers();







//1. Rectangle Object:

//Create an object that represents a rectangle and can calculate its perimeter and area.


//const rectangle = {
//perimeter: 100,
//area: 100,

//calculateArea: function(calculate){
//console.log (this.perimeter * this.area);
//},
  
//calculatePerimeter: function(calculate) {
//console.log (2* this.perimeter + this.area);
//}

//}

//console.log(rectangle.calculateArea());
//console.log(rectangle.calculatePerimeter());




//2. Simple Todo Manager:

//Create an object to manage a to-do list. It should be able to add a task, complete a task, and display all tasks.



//const todolist = {
//tasks: [],

//addTask: function(task){
//this.tasks.push (task);
//console.log ("Task added succesfully");
//},
//completeTask: function(task) {
//this.task1 = task;
//console.log (this.task1 + " completed");
//},
//displayTask: function(task) {
//console.log(this.task1);
//},
//}
//todolist.addTask ("added");
//todolist.completeTask ("do homework");
//todolist.displayTask ("do homework");



//3. Basic Counter Object:

//Create an object that represents a counter and can increase, decrease, and reset the count.

//const counter = {
//count: 0,

//increase: function() {
//this.count++;
//console.log("Count increased to", this.count);
//},

//decrease: function() {
//this.count--;
//console.log("Count decreased to", this.count);
//},

//reset: function() {
//this.count = 0;
//console.log("Count reset to", this.count);
//}
//};

 
//counter.increase();
//counter.increase();
//counter.increase();
//counter.increase();
//counter.decrease();
//counter.reset();




//Mentor Tasks

//const person = {
//name: "Chinara",
//surname: "Hatamli",
//age: 30,
//income: 10000,


//calculateAnnualIncome: function() {
//console.log(this.income * 12);
//},

//}

//person.calculateAnnualIncome();



//const person = {
//name: "Chinara",
//surname: "Hatamli",
//age: 30,
//income: 10000,

  
//calculateAnnualIncome: function() {
//console.log(this.income * 12);
//},

//calculateAnnualwithAvans: function(amount){
//this.income += amount;
//console.log (this.income * 12);
  
//},
//}

//person.calculateAnnualIncome();
//person.calculateAnnualwithAvans (100);
//person.ComperessionAvans ();




