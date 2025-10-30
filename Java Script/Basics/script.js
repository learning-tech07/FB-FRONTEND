
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

