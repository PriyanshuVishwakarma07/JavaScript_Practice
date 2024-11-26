function sum (a,b){
    console.log(a+b);
}

function sum (a,b){
    return a +b;
}

function printCount(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}

function printNumber(num){
    console.log("This is your number :", num);
}
printNumber("priyanshu");

function getAvg(a,b){
    let avg = (a + b)/2;
    console.log("This is average of your selected values :", avg);
}

getAvg(12,13)

function calcMulti(n){
    for (let i=n; i<=n*10; i=i+n){
        console.log(i);
    }
}


let n = prompt("write your number");
 n = parseInt(n);
    for (let i=n; i<=n*10; i=i+n){
        console.log(i);
    }

function getSum(a,b,c){
    let sum = a + b + c;
    return sum; 
}
let ans = getSum(2,2,7);
console.log(ans);


function getName(firstname, Lastname){
    let Fullname = firstname + " " + Lastname;
    return Fullname;
}

let FN = getName("Priyanshu","Vishwakarma");
console.log(FN);


Variable formate
const getMultiply = function(a,b){
    return a*b;
}

let ans = getMultiply(2,4);
console.log("You'r answer is",ans);


const squareNumber = function (num){
    return num*num;
}

let ans = squareNumber(9);
console.log(ans);

//Arrow Function
let power = (a,b) =>{
    return a**b;
}

console.log(power(2,3));