
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

const sum = (num1, num2, ...rest) => {
    let result = num1 + num2;
    for(let i = 0; i< rest.length; i++){
        result = result + rest[i];
    }
    console.log(result);
}
sum(3,4,5,6,6,7,7,88,8,5)