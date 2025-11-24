// // console.log("Hello good morning.");

// // variables -> VAR LET CONST
// // old way of declaring varibales before Ecmascript(ES6)
// // var y = "Tauzee";
// // console.log(y);
// // var y = "Temi";
// // console.log(y);
// // "let" is used to declare variables that can be reassigned but cannot be redeclared in the same scope. "Let" is a block scope
// // "=" is called assignment operator

// // if (true) {
// //     let message = "Hello";
// //     console.log(message); //✅ works
// // }

// // "const" is used to declare block-scoped variables that cannot be reassigned or redeclared
// // "const" are variables that stay constant
// // "const pi" is the identifier

// // const pi = 3.14159;
// // console.log(pi);


// // let tropical;

// // tropical = "Vanilla";
// // console.log(tropical);
// // tropical = "Tea";
// // console.log(tropical);
// // tropical = "Bread";
// // console.log(tropical);

// // You must assign a value when declaring a const variable

// // const user = { name: "Ahmahd", age: 28 };
// // ✅ you can modify properties
// // console.log(user);

// // ❌ You cannot reassign the object itself
// // user = { name: "john"};
// // console.log(user);

// // 🧠 What Are Data Types?  Data types define the kind of value a variable can hold - like numbers, text, or objects.

// // JAVASCRIPT DATA TYPES OVERVIEW
// // ? Javascript has two major categories of data types:

// // -> Primitive (String, Number, Boolean, Undefined, Null, BigInt, Symbol) ❌Immutable.
// // -> Object (Object, Array, Function, Date) etc. ✅ Mutable.

// // * 1 Primitive Data Types
// // primitive types are the most basic building blocks.
// // They hold single values (not collections) and are immutable -- meaning you cant change them directly.

// // *** STRING
// // used for text
// // let name = "Teniola";
// // let message = "Hello";
// // let phrase = `My name is ${name}`; // template literal

// // ✅ Strings are immutable - you can't change characters directly:
// // let str = "Hi";
// // str

// // ✅ Number represents all numeric values (integers, decimals, etc.)


// // let age = 25;
// // console.log(age);
// // let price = 99.99;
// // console.log(price);

// // Javascript doesn't have separate types for integers(whole numbers) and floats(decimal numbers)


// // ✅ Boolean represents true or false values.
// // let isOnline = true;
// // let isAdmin = false;

// // -> Object (Reference) Data Types
// // *-> O bjects are collections of key-value pairs or complex structures.
// // *-> They are mutable and stored by reference, not by value.


// // * OBJECT
// // const user = {
// //     name: "Ahmahd",
// //     age: 28,
// //     isPresident: true
// // }
// // console.log(user.name, user.age);

// // * ARRAY
// // An ordered collection (list) of values
// // const fruits = ["Apple", "Banana", "Orange", 90, true];
// // console.log(fruits[3]);

// // Destructuring
// // const [, e, , y, t] = fruits;
// // console.log(e, y)


// // *** STRING PROPERTIES
// // length
// // Returns the number of characters in string

// // let text = "Hello world";
// // console.log(text.length);

// // ** String Methods
// // * Accessing characters
// // Returns the character at a soecified index.

// // let prLanguage = "Javascript";
// // console.log(prLanguage.chartAt(0));
// // console.log(prLanguage.chartAt(4));

// // /*** Extracting part */
// // Slice(start, end)
// // Extracts a section of a string (end not included).

// // let sentence = "How are you doing?";
// // console.log(sentence.slice(0, 5))
// // console.log(sentence.slice(5))


// // Searching & Finding
// //    **indexOf(searchvalue, startposition)
// // **Returns the first index of the specified value, or -1 if not found.

// // let text = `Hello World, Welcome to the World`;
// // console.log(text.indexOf("W"))


// // /* * -> Extracting Parts 
// // Slice (start, end)
// // Extracts a section of a string (end not included).

// // const productImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg",];

// // Show only first 3 images in main gallery, rest in thumbnail view.
// // const mainGalleryImages = productImages.slice(0, 3);
// // console.log(mainGalleryImages);

// // const thumbnailImages = productImages.slice(3);
// // console.log(thumbnailImages);


// // *** API DEVELOPMENT - Request Processing

// // * Processing File Uploads
// // Extracting file extension from uploaded file.
// // const uploadedFile = 'quarterly-report.pdf';
// // const fileExtension = uploadedFile.slice(uploadedFile.lastIndexOf('.') + 1);
// // console.log(fileExtension);


// // **Email & Notification Systems
// // Email Domain Extraction
// // const email = "tenny@company.com";
// // const domain = email.slice(email.indexOf('@') + 1);
// // console.log(domain);

// // const username = email.slice(0, email.indexOf('@'));
// // console.log(username);

// // * -> Substring(start end)
// // Similar to slice, but doesn't accept negative indexes.


// // const creditCard = "4111111111111111";
// // const maskedCard = creditCard.substring(0, 4) + "********" + creditCard.substring(12);
// // console.log(maskedCard);

// // **URL Slug Generation
// // const blogTitle = "How to Build Scalable Backend Systems in 2025";
// // const slug = blogTitle.substring(0, 47).toLowerCase().replace(/ /g, "-");
// // console.log(slug);


// // ***Array -> Javascript
// // ? What is array?
// /*
// An array is a data structure that store multiple values in a single value variable. Arrays can hold any type of data: numbers, strings, objects, even other arrays. It is hetrogenous (can hold any data type) and is denoted as "[]".
// */ 

// // *Creating arrays

// // const fruits = ['apple', 'banana', 'orange'];
// // const numbers = [1, 2, 3, 4, 5];
// // const mixed = [1, 'hello', true, null, {name: 'John'}];
// // const empty = [];

// // Array Properties
// // Length
// // Returns the number of elements in an array.

// // const colors = ['red', 'green', 'blue'];
// // console.log(colors.length);



// // * -> Array Methods
// // Adding/Removing Elements
// const animals = ['cat', 'dog'];
// animals.push('bird');

// // Add multiple elements
// animals.push('fish', 'hamster');
// // console.log(animals)




// /**
//  File Upload Tracking
//  -> Tracking uploaded files
//  */
// const uploadedFiles = [
//     {filename: 'document.pdf', size: '2.5MB'},
//     {filename: 'image.jpg', size: '1.8MB'}
// ];
// const newFile = {fileName: 'video.mp4', size: '15.2MB'};
// uploadedFiles.push(newFile)
// // console.log(uploadedFiles)

// // "Pop()" is used to remove the last element
// const fruits = ['apple', 'banana', 'orange'];
// // const removed = fruits.pop();
// // console.log(removed);
// // console.log(fruits);

// // unshift - Adds elements to the beginning.
// // const numbers = [2, 3, 4];
// // numbers.unshift(1);
// // console.log(numbers);
// // numbers.unshift(-1, 0);
// // console.log(numbers);

// // shift() - Removes the first element.
// // const colors = ['red', 'green', 'blue'];
// // const removed = colors.shift();
// // // console.log(colors);

// // // ** Searching Elements
// // // indexOf() - Finds the index of an element
// // //  ! User Authentication Check
// // // Checking if user is in blocked list
// // const blockedUsers = ['user123', 'spammer456', 'bot789'];
// // const loginAttempt = 'user123';
// // const isBlocked = blockedUsers.indexOf(loginAttempt);
// // // console.log(isBlocked);

// // // includes() - checks if an element exists
// // const pets = ['cat', 'dog', 'bird'];
// // // console.log(pets.includes('dog'));

// // .find() - Returns the first element that matches a condition.
// // .find() finds the first match A single element 
// // const numbers = [5, 12, 8, 130, 44];
// const found = numbers.find(num => num > 10);
// console.log(found);

// const users = [
//     [101, "john@ mail.com", 'active'],
//     [102, "James@mail.com", 'inactive'],
//     [102, "Astro@mail.com", 'active'],
//     [103, "mike@email.com", 'inactive'],
// ];

// // const foundUser = users.find(user => user [0] === 102);
// // console.log(foundUser);

// // .filter() finds all matches A new array of all matching elements
// const foundUser = users.filter(user => user [2] === 'active');
// // console.log(foundUser);

/**
 Transforming Arrays
 .map() - Creates a new array by transforming each element
 */
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);

// const names = ['Thukzin', 'Ibnu', 'Tauzee', 'Ashiwaju', 'Ahmeedi'];
// const uppercase = names.map(name => name.toUpperCase());
// console.log(uppercase);

// ** slice() - Extracts a portion of an array (doesn't modify original)

// Server Load Distribution
// const servers = [
//     ['web01', 'primary', '80%'],
//     ['web02', 'primary', '75%'],
//     ['web03', 'secondary', '60%'],
//     ['web04', 'secondary', '55%'],
//     ['web05', 'backup', '10%'],
// ];
// const secondaryServers = servers.slice(2, 4);
// console.log(secondaryServers);


// ** -> .Splice() - Adds/Removes elements (modifies original)

/*
 The 'Splice()' method changes the contents of an array by;

-> removing;
-> replacing;
-> and adding elements at specific positions.

It modifies the original array (unlink slice() which returns a new one)

*/


// 🛒 Removing an item from a shopping cart.

// let cart = ['Shirt', 'Trousers', 'Shoes', 'Watch'];
// // cart.splice(1, 2);
// // console.log(cart)

// // Adding a new item to the middle of the list.
// const playlist = ['Song A', 'Song B', 'Song D'];
// playlist.splice(2, 0, 'Song C');
// console.log(playlist);

// // 🗓️ Managing a To-Do list
// let tasks = ['Wake up', 'Brush', 'Exercise', 'Breakfast',];
// tasks.splice(1, 0, 'Shower');
// console.log(tasks);


// *** JAVASCRIPT OBJECT

// An object is data structure that stores information in key value pairs.
//  Each key (also called a property) is like a label, and the value is the data stored under that label.
// let person = {
//     name: "Femi",
//     age: 25,
//     job: "Backend Engineer",
//     course: "softwareDev",
//     Tel: "08023127092",
// };
// // Accessing Object Values
// // There are two main ways access an object's value
// // * Dot notation
// console.log(person);

// // * Bracket notation
// console.log(person['job']);


// // Adding and Updating Properties
// // You can add new properties or update existing ones easily
// person.country = "Nigeria";
// person.age = 26;
// console.log(person);


// // ** Deleting Properties.
// delete person.course;
// console.log(person);


// ** Nested Objects
// let person = {
//     name: "Ahmed Asiwaju",
//     address: {
//         city: "Abuja",
//         Zip: 235939
//     },
//     hobbies: ["Campaign", "Embezzlement"]
// };
// console.log(person.hobbies[1])
// console.log(person.address.Zip)
// console.log(person.hobbies.indexOf("Campaign"));

/*
  ***-> LOOP
  A loop let's you repeat a block code multiple times - automatically.
     Types of loops in Javascript
    Loop Type (for, while, do...while, for...of, for...in)

   for-> when you know how many times to repeat.
   while-> when you don't know the exact count, but have a condition.
   do...while-> similar to 'while', but runs at least once.
   for...of-> to loop throughout arrays or strings.
   for...in-> to loop through object properties. 
 */

//    for(let i = 1; i <= 5; i++){
//      console.log(i)
//    }

// const dirtyDishes = ["plate", "bowl", "cup", "fork", "spoon"];

// for(let i = 0; i < dirtyDishes.length; i++){
//     console.log(`washing: ${dirtyDishes[i]}`);
//     console.log(`${dirtyDishes[i]} is now clean`);
// }

// // * Grocery Shopping (Working with Lists)
// // Checking items off your shopping list
// const shoppingList = ["milk", "eggs", "bread", "cheese"];
// const cart = [];

// for (let i = 0; i < shoppingList.length; i++){
//   console.log(`✔️ Added ${shoppingList[i]} to cart`)
//   cart.push(shoppingList[i]);
// }
// console.log("Cart contains:", cart);

// ** While Loop
// Runs as long as the condition is true
// let i = 0;
// while(i < 5){
//   console.log(i);
//   i++;
// }

// ** Charging your phone
// Monitoring battery level while charging.

// let batteryLevel = 15; // starting with low battery
// const chargingRate = 8; // % per iteration.

// console.log("📱 Phone charging started...");
// while(batteryLevel < 100){
//   batteryLevel += chargingRate;
//   // batteryLevel = batteryLevel + chargingRate;

//   if(batteryLevel > 100) batteryLevel = 100;
//   console.log(`Battery: ${batteryLevel}%`);
   
//   if(batteryLevel >= 80){
//     console.log("⚡Almost full! Fast charging slowing down...");
//   }
// }
// console.log(batteryLevel);
// console.log("🔋 Battery Fully Charged!");

// ** "do...while" Loop
// Runs at least once, then, checks the conditions.
// the "do...while" loop is special because it guarantees the code runs at least once, then continues as long as the condition remains true.
// let i = 0;
// do{
//   console.log(i);
//   i++;
// } while(i < 5);

// ** Password Length Checker
// let passwords = ["123", "pass", "mySecurePass123", "abc"];
// let index = 0;
// let validPassword = "";

// do{
//   let currentPassword = passwords[index];
//   console.log(`Checking password: ${currentPassword}`);

//   if(currentPassword.length >= 8){
//     validPassword = currentPassword;
//     console.log(`Valid password found: ${validPassword}`);
//   } else{
//     console.log(`Too short! Minimum 8 characters required.`);
//   }
//   index++;
// } while(index < passwords.length && validPassword === "");


// ***ATM Withdrawal Validator
// let balance = 1000;
// let withdrawAmount = 1500;
// let attempts = 0;

// do{
//     attempts++;
//     console.log(`Attempt ${attempts}: Trying to withdraw $${withdrawAmount}`);
//     if(withdrawAmount <= balance){
//         balance -= withdrawAmount;
//         console.log(`success! withdrew $${withdrawAmount}.New balance: $${balance}`);
//         break;
//     }else{
//       console.log(`insufficient funds. Balance: $${balance}`);
//       withdrawAmount -= 200; //Reduce withdraawal amount.
//     }
// }while (withdrawAmount > 0);

// *** for...of loop (ES6)
// Used to loop through arrays, strings, map, sets, etc.
// const fruits = ["apple", "banana", "orange"];
// for(const fruit of fruits){
//   console.log(fruit);
// }

// *** Email Spam Filter
// let emails = [
//   "hello@company.com",
//   "spam@lottery.com",
//   "friend@email.com",
//   "winner@fake.com",
//   "boss@work.com",
// ];

// let spamKeywords = ["spam", "lottery", "winner", "fake"];
// for (let email of emails){
//    let isSpam = false;
//    for(let keyword of spamKeywords){
//     if(email.includes(keyword)){
//       isSpam = true;
//       break;
//     }
//    }

//    if(isSpam){
//     console.log(`❌ SPAM: ${email}`);
//    } else{
//     console.log(`✔️ INBOX: ${email}`); 
//    }
// }


// ** Conditional Statements
// Conditional statements check conditions (true/false expressions) and decide what code should run.
// In Javascript, the main conditional statements are:
/*

  *`if`
  *`if...else`
  *`else if`
  *`switch`
  *Ternary operator `? :`
  * Optional chaining + nullish coalescing (modern JS)
  
 */

  // if statement
  // Runs a block only if the condition is true.

  // let age = 20;
  // if(age >= 18){
  //   console.log("You are an adult");
  // }

  // if...else Statement
  // if the condition is true -> run block A
  // Else -> run block B

  // let age = 15;
  // if(age >= 18){
  //   console.log("Adult");
  // } else{
  //   console.log("Minor");
  // }

  // else if statement
  // * Used when you need check multiple conditions.

  // let score = 75;
  // if(score>= 90){
  //   console.log("A");
  // } else if(score >= 70){
  //   console.log("B");
  // } else if(score >= 50){
  //   console.log("C");
  // } else{
  //   console.log("Fail");
  // }

  // ** Switch Statement
  // Used when you are checking one value against many cases.
  // Cleaner than many `else if` staement.

  // let day = 3;
  // switch(day){
  //   case 1:
  //     console.log("Monday");
  //     break;
  //   case 2:
  //     console.log("Tuesday");
  //     break;
  //   case 3: 
  //     console.log("Wednesday");
  //     break;
  //   default:
  //     console.log("Invalid day");
  // }

  // * Ternary Operator `? :`.
  // Short form and  `if...else`
  // Good for simple decisions.

  // let age = 18;

  // let message = age >= 18 ? "Adult" : "Minor";

  // console.log(message);


  // *** Function in Javascript
  // A function is reusable block of code that performs a specific task.
  // You write function once, and use it many times.

  // Why use functions?

  /*
    * -> Reduce code repitition
    * -> Organize code into readable parts
    * -> Makes code reusable
    * -> Makes programs cleaner
  */


  // ** 🧱 Basic function structure.

  //      function greet(name){
  //      console.log("Hello!" + " " + name);
  //      }
  //  greet("Tahuzze");


// * `function` -> Keyword.
// * `greet` -> function name.
// * `()` -> parameters area.
// * `{}` -> function body.

/*

// * Function parameters & Arguments
// Parameters -> placeholders inside the function
// Arguments -> actual values you pass

*/


/*

   ****************
   function greet(name){
     console.log("Hello" + name);
   }

   greet("Teniola"); // argument: "Teniola"
   *****************

*/

// ⭐ Return statement 
// A function can return a value.

/*
    **************************
    function add(){
        return a + b;
    }
    console.log(add(5, 3)); // 8
    **************************
    Once return runs, the function stops execution.
    */

    // function returnName(){
    //   return `I'm going to the top`
    // }
    // console.log(returnName)


//  ⭐ Default Parameters
/*

   *******************
   function greet(name = "Guests"){
      console.log("Hello" + name);
   }
   greet(); // Hello Guests
   greet("Sam"); // Hello sam
   *************************

*/

// ** Types of Functions in Javascript

// * Function Declaration

// function functionName(parameters){
//         return Value;
// }

// Function Expressions
// A function stored in a variable
// const greet = function(){
//         console.log("Hi");
// }
// greet();

// const multiply = function(a, b){
//         return a * b;
// }
// console.log(multiply(5, 3)); // 15

// * Arrow Functions(ES6+)

// const functionName = (parameters) => {
//         // function body.
//         return Value;
// };

// single parameter (parenthesis optional)
// const square = x => x * x;

// No parameters
// const sayHello = () => "Hello";

// Implicit return
// const add = (a, b) => a+b;

// --- CALLING THEM ---
// console.log(square(5));
// console.log(sayHello());

// console.log(add(10, 20));

// Using Math.pow()
// let result2 = Math.pow(5, 2);
// console.log(result2); // 25

// Immediately Invoked FUnction Expressions (IIFE) a.k.a Anonymous function 
// (function(){

// })();

// or with arrow function
// (() => {
        // code  here
// });

// ** Examples
// (function(){
//         const add = (a, b) => a + b;
//         const result = add(5, 7);
//         console.log("The sum is : ", result);
// })();

// (() => {
//         const square = x => x * x;
//         const value = square(6);
//         console.log("The square is:", value);
// })();


// *** Remove Duplicates from Array:

// Write a function that takes an array with duplicate elements and returns a new array containing only the unique elements.

// Example: [1, 2, 2, 3, 4, 4, 5] should return [1, 2, 3, 4, 5].

// *** ✅ SOLUTION
// function removeDuplicates(arr){
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));




// QUESTION:
// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

// SOLUTION:
function redundant(str){
  return function(){
    return str;
  }
}
const f1 = redundant("apple");
console.log(f1());

function redundant(str){
  return function(){
    return str;
  }
}
const f2 = redundant("pear");

console.log(f2());
function redundant(str){
  return function(){
    return str;
  }
}
const f3 = redundant(" ");
console.log(f3());


// QUESTION:

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num){
  return num + 1;
}
console.log(addition(0));

function addition(num){
  return num + 1;
}
console.log(addition(9));

function addition(num){
  return num + 1;
}
console.log(addition(-5));