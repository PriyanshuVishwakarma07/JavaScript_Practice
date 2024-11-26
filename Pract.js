let a = 10;
let b = 20;
let sum = a+b;
console.log(`The answer is ${sum}`);

let age = 1;
age += 1;
console.log(age);

let context = "ILOVECODING";
console.log(`The value of context is ${context.length}`);

//If else
let agee = 18;
if (agee == 18){
    console.log("you can vote");
}else{
    console.log("You're not eligible for Vote This year");
}

// if else
let firstname = "Priyanshu";
if (firstname == "Priyanshu"){
    console.log("You're Right");
}else{
    console.log("Your choice is wrong");
}

// else if
let clor = "red";
if(clor == "blue"){
    console.log("Your choice is blue")
}else if (clor == "red"){
    console.log("Your choice is correct");
}


// Nested if
let marks = 60;
if (marks == 60){
    console.log("You got the 1st divison");
    if(marks > 50){
        console.log("Grade : A");
    }

}else{
    console.log("You fail");
}

//logical oprator
let mars = 66;
if ((mars == 66) && (mars > 70) ){
    console.log("correct !");
}else{
    console.log("It's not that great achievement tho")
}

// truth and false
let i = 0;

// switch
let favday = "monday";
switch (favday){
    case "sunday":
    console.log("wrong");
    break;
    case "monday":
    console.log("You're are awesome ");
    break;
    default :
    console.log("It's default value");
}

let flaver = "vanila";
switch (flaver){
    case "chocholate":
        console.log("Your selected chocolate");
        break;
    case "vanila":
        console.log("You selected vanila");
        break;
    default :
    console.log("It's default flaver");
}

//alert
// alert("it's not good here");
// //prompt
// prompt("write your nmae here");
// //warn
// console.warn("Its warning");
// //error
// console.log("It's an error");

// string mathedology
let salt = "         TATA        ";
console.log(salt);
console.log(salt.trim())

//upper lower
let mouse ="Jerry";
console.log(mouse.toUpperCase());
console.log(mouse.toLowerCase());

//Parctice questions

let number = 50;
if (number % 10 == 0){
    console.log("That's perfect");
}else{
    console.log("bad");
}

// let username = prompt("Please enter your name");
// let ages = prompt("please enter your age");
// console.log(`${username} is ${ages} years old`);

let quater = 4;
switch (quater){
    case 1 :
        console.log ("january", "february", "march");
        break;
    case 2 :
        console.log("april", "march", "june");
        break;
    case 3 :
        console.log("july", "august","september");
        break;
    case 4 :
        console.log("october", "november", "december");
        break;
    default:
        console.log("its default");
}

let str = "apple";
if((str[0] == "A" || str[0] == "a") && (str.length >= 5)){
    console.log("It's Good string");
}else{
    console.log("it's Bad string")
}


// 

let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(arr.length-n);
console.log(ans);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
let strr ="";
if(strr == ""){
    console.log("String is empty");
}else{
    console.log("string is not empty")
}

let sstr = "";
if (sstr.length == 0){
    console.log("String is empty");
}else{
    console.log("string is not empty")
}

//Qs4. Write a JavaScript program to test whether the character at the given (character)index is lower case.
let char = "ndjning";
let inx = 3;
if (char[inx] == char[inx].toLowerCase()){
    console.log("correct it's in lower case");
}else{
    console.log("charrecdc is not in lower case")
}

//Qs6. Write a JavaScript program to check if an element exists in an array or not
let arrr = ["apple","mango","banana","litchi"];
let exists = arrr.includes("litchi");
if (arrr && exists){
    console.log("right")
}else{
    console.log("wrong")
}

// ifarr=[1,2,3,4,5,6,2,3]&num=2
// Result should be arr=[1,3,4,5,6,3]

let array = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i=0; i<array.length; i++){
    if(array[i] == num){
        array.splice(i, 1);
    }
}