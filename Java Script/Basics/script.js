
// const sum = function(c,d){
//     return c+d;
// };

// console.log(sum(3,4));

// const sum = (e,f) => {
//     return e+f;
// };

// function sum(a,b){
//     return a+b;
// }

// const greeting = (username = "stupid") =>{
//     console.log("hello ! " + username)
// };

// greeting();

// const sum = (num1, num2 ,...rest)=>{
//     console.log(num1);
//     console.log(num2);
//     console.log(rest);
// };

// sum(1,2,9,8,5,6);
// -----------------------------

// const sum = (num1, num2, ...rest) => {
//     let result = num1 + num2;
//     for(let i = 0; i< rest.length; i++){
//         result = result + rest[i];
//     }
//     console.log(result);
// }
// sum(3,4,5,6,6,7,7,88,8,5);

//-------------------------------------------------

// const start = [1,2,3,4];
// const end = [4,5,6,7];
// const newArr = start.concat(end);
// console.log(newArr);

//--------------------------------------------------------

// const start = [1 , 2, 3, 4, 5, 6, 56, 7, 24, 56, 89];
// const index = start.indexOf(56);
// console.log("index of 56 is ", index);

//-----------------------------------------------------------

// const start = [1 , 2, 3, 4, 5, 6, 56, 7, 24, 56, 89];
// const index = start.lastIndexOf(56);
// console.log("index of 56 is ", index);

//---------------------------------------------------------------

// const start = [1, 2, 3, 4, 5, 6, 56, 7, 24, 56, 89];

// const sorted = start.sort((a, b) => {
//   return a - b;
// });
// console.log(sorted); 

//----------------------------------------------------------------

// const start = [1, 2, 3, 4, 5, 6, 56, 7, 24, 56, 89];
// const double = start.filter((num) => num%2 == 0);
// console.log(double);

//-----------------------------------------------------------

// const arr = [3 , 5 , 13, 10, 7, 9];
// const firstEven = arr.find((num) => num%2 == 0);
// console.log(firstEven);

//---------------------------------------------------

// const arr = [3 , 5 , 13, 10, 7, 9];
// const firstEven = arr.findIndex((num) => num%2 == 0);
// console.log(firstEven);

//----------------------------------------------------------------
//eloquent js

// var name = "Alice";
// var name = "Bob";        //no error
// console.log(name);

// let name = "Alice";
// let name = "Bob";    //'name' has already been declared error.
// console.log(name);

//------------------------------------------------------------------
// let isOdd = (num) => num % 2 == 1;
// console.log(isOdd(3));

// const greet = (name) => console.log( "Hello, " + name + "!");
// greet("Ana");

// let add = (num1 , num2) => num1 + num2 ;
// console.log(add( 2 , 3));

// const name = "Eren";
// const age = 21;
// console.log(`Hello, my name is ${name} and I am ${age} years old, I was born in ${2025-age}.`);

// const user = "Yash";
// const points = 120;
// console.log(`Hey ${user} you have ${points} points!`);

// const person = {         //object - person
//     firstName : "Eren",
//     lastName : "Yeager",
//     age : 21,
//     introduce: function() {
//         console.log(`Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
//     },
// };
// const hisAge = "age";
// console.log(person.firstName);
// console.log(person["age"]);
// console.log(person[hisAge]);
// person.introduce();

// const person = {         //object - person
//     firstName : "Eren",
//     lastName : "Yeager",
//     age : 21,
// };
// person.birthYear = 2025 - person.age;
// person.birth = function () {
//     console.log(`Hi I was born in ${this.birthYear}.`);
// };
// person.birth();

// const fruits = ["apple" , "banana" , "kiwi" , "mango"];
// // const[firstFruit , secondFruit] = fruits ;  // two variables created
// const[firstFruit , , thirdFruit] = fruits ;
// console.log(thirdFruit);

// const a = ["2" , "5" , "7" , "9" , "4"];
// const[ ,second, , , fifth] = a ;
// console.log(second);
// console.log(fifth);

//------------OBJECT DESTRUCTURING-----------------------------------
// const person = {
//     name: "Nimki",
//     age: "21",
// };
// const{name : firstName , age : umr} = person;
// console.log(firstName);
// console.log(umr);

//-------------REST PARAMETER----------------------------------------
// const arr = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10];
// const [first, second , ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);

//--------------------SPREAD PARAMETER---------------------------------------------------
// const arr = [1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10];
// const arr2 = [11, 12 ,13];
// const r = [arr, arr2];     //array ke andar 2 array
// const result = [...arr, ...arr2];  //ek hi array me dono
// console.log(result);
// console.log(r);

//----------------------------------------------------------------
// const name = "Yash Raj";
// const age = 21;
// const person = {name , age};

//-----------------Asynchronous  JavaScript----------------------------------------------
// console.log(10);
// console.log(20);
// console.log(30);
// setTimeout(() => console.log("hello"), 2000);         //setTimeout
// console.log(40);
// console.log(50);

// let count = 0;
// const timer = setInterval(() => {
//     console.log("Tic Tic " + count);
//     count++;
//     if (count > 5) clearInterval(timer); 
// }, 1000);

let count = 10;
const timer = setInterval(() => {
    console.log("Tic Tic " + count);
    count--;
    if (count < 0) clearInterval(timer); 
    if (count < 0) console.log("Boom!");  
},
let age=23
function ageteller{
    if(age>18){
        return valid onemptied;
    }else{
        return not valid;
    }
}

