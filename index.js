<<<<<<< HEAD
// let a=23;
// if (a>10){
//     let a=45;
//     console.log("value of a = "+a);
// }   
// console.log("value of outside block of if = "+a);

// function sum(a,b){
//     return a+b;
// }
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,100));
// }
// sumofsum();

// function info(Rollno,Name,college,branch){
//     return "Rollno: "+Rollno+" Name: "+Name+" College: "+college+" Branch: "+branch;
// }
// function myinfo(){
//     const mydata = info(123, "jishant", "ABES College", "Computer Science");
//     console.log(mydata);
// }


// function myfriendinfo(){
//     const frienddata = info(456, "Alice Smith", "XYZ College", "Mechanical Engineering");
//     console.log(frienddata);
// }

// myinfo();
// myfriendinfo();

// function generateNumbers() {
//     return Math.floor(Math.random() * 1000);
// }
// const randomNumber = generateNumbers();

// function findEvenNumbers() {
//     const number1 = generateNumbers();
//     if (randomNumber % 2 == 0) {
//         console.log(randomNumber + " is an even number.");
//     }
// }
// findEvenNumbers();

// const sum=(a,b)=>{
//     return a+b;
// }
// const result = sum(10,20);
// console.log(result);

//IIFE
// (()=>{console.log("Hey.... using IIFE")})();

// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(10,20);
//     return msg + result;
// }
// console.log(sumWithMsg(sum,"hii...sum")); 

// function login(msg, error){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(msg);
//     }
// }

// function loginHandler(username, password, clbk){
//     const myusername = "jishant";
//     const mypassword = "12345";
//     if(username == myusername && password == mypassword){
//         clbk("success",null);
//     } else {
//         clbk(null,"username or password is incorrect");
//     }
// }
// loginHandler("jishant", "1234", login);


// setTimeout(()=>{console.log("hello")
//     setTimeout(()=>{console.log("three");
//         setTimeout(()=>{console.log("four");
//             setTimeout(()=>{console.log("five");
//             setTimeout(()=>{console.log("six");
//                 setTimeout(()=>{console.log("seven");

//                 },1000)
//             },1000)
//             },1000)
//         },1000)
//     },1000)
// }, 1000)

// console.log("one");
// setTimeout(()=>{console.log("two")},5000);
// console.log("three");

function sumofSqrt(a,b){
    return Math.sqrt(a) + Math.sqrt(b);
}
function myname(){
    return "My name is Jishant";
}

console.log(sumofSqrt(16, 25) + " " + myname());
=======
// let a=23;
// if (a>10){
//     let a=45;
//     console.log("value of a = "+a);
// }   
// console.log("value of outside block of if = "+a);

// function sum(a,b){
//     return a+b;
// }
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,100));
// }
// sumofsum();

// function info(Rollno,Name,college,branch){
//     return "Rollno: "+Rollno+" Name: "+Name+" College: "+college+" Branch: "+branch;
// }
// function myinfo(){
//     const mydata = info(123, "jishant", "ABES College", "Computer Science");
//     console.log(mydata);
// }


// function myfriendinfo(){
//     const frienddata = info(456, "Alice Smith", "XYZ College", "Mechanical Engineering");
//     console.log(frienddata);
// }

// myinfo();
// myfriendinfo();

// function generateNumbers() {
//     return Math.floor(Math.random() * 1000);
// }
// const randomNumber = generateNumbers();

// function findEvenNumbers() {
//     const number1 = generateNumbers();
//     if (randomNumber % 2 == 0) {
//         console.log(randomNumber + " is an even number.");
//     }
// }
// findEvenNumbers();

// const sum=(a,b)=>{
//     return a+b;
// }
// const result = sum(10,20);
// console.log(result);

//IIFE
// (()=>{console.log("Hey.... using IIFE")})();

// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(10,20);
//     return msg + result;
// }
// console.log(sumWithMsg(sum,"hii...sum")); 

// function login(msg, error){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(msg);
//     }
// }

// function loginHandler(username, password, clbk){
//     const myusername = "jishant";
//     const mypassword = "12345";
//     if(username == myusername && password == mypassword){
//         clbk("success",null);
//     } else {
//         clbk(null,"username or password is incorrect");
//     }
// }
// loginHandler("jishant", "1234", login);


// setTimeout(()=>{console.log("hello")
//     setTimeout(()=>{console.log("three");
//         setTimeout(()=>{console.log("four");
//             setTimeout(()=>{console.log("five");
//             setTimeout(()=>{console.log("six");
//                 setTimeout(()=>{console.log("seven");

//                 },1000)
//             },1000)
//             },1000)
//         },1000)
//     },1000)
// }, 1000)

console.log("one");
setTimeout(()=>{console.log("two")},5000);
console.log("three");
>>>>>>> e7386d0925dea42d305b5c44486d0730a90fd3da
