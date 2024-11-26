//Conditional statement-- If else
let agee = 28;
if (agee >= 18){
    console.log("Welcome to our GROUP");
}
if(agee <= 78){
    console.log("You'r age is not collyfide for this GROUP");
}


//Conditional statement-- If else 2nd Example
let firstname = "Priyanshu";
if(firstname == "Priyanshu"){
    console.log(`welcome ${firstname} !`);
}

//conditional statement-- If else 3rd Example
let color = "green";
if( color == "red"){
    console.log("stop");
}
if( color == "yello"){
    console.log("slow down");
}
if( color == "green"){
    console.log("You can go now");
}

//conditional statement-- else if 
let gender = "male";
if(gender == "male"){
    console.log("Your gender is male");
}
else if (gender = "female"){
    console.log("Your gender is female");

}
else if (gender = "other"){
    console.log("You've not specified your gender");

}

//conditional statement-- else if 2nd Example
let umar = 14;
if(umar > 18){
    console.log("You can vote ");
}
else if(umar < 18){
    console.log("You cannot vote now ");
}
else if(umar == 18){
    console.log("Perfect you're age Correct 18");

}

//conditional statement-- else statement
let marks = 35;
if(marks >= 35){
    console.log(" Congratulations ! You Pass the Exam");
}
else{
    console.log("You Fail !");
}

// Practice Conditional Statement
let size = "L";
if(size == "XL"){
    console.log("price is 250");
}
else if (size == "L"){
    console.log("price is 200");
}
else if (size == "M"){
    console.log("price is 100");
}
else if (size == "S"){
    console.log("price is 50");
}

// Conditional statement -- Nested if-else
let mark = "80";
if(mark >= 35){
    console.log("You Pass the exam");
    if(marks >= 60){
        console.log("Your Grade is: A")
    }
    else {
        console.log("Grade is :B")
    }
}
else{
    console.log("Better luck next time!");
}

// Logical Oprarator
// let str = "apple";
// if((str[0] === "a") && (str.length > 3)){
//     console.log("This is a good string");
// }

let str = "apple";
if((str[0] === "a") && (str.length > 3)){
    console.log("This is a good String ")
}

// 2nd example
let iHave = "Bus";
if((iHave == "car") && (iHave == "Bus")){
    console.log(`The Answer is ${iHave}`);
}

// switch statement
let colors = "red";
switch (colors){
    case "red":
        console.log("Danger !");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default :
    console.log("light is broken");
}

//switch 2
let month = "january";
switch (month){
    case "january":
    console.log("It's first month");
    break;
    case "february":
    console.log("It's second month");
    break;
    case "march":
    console.log("It's Thired month");
    break;
    default :
    console.log("The light is broken");
}
    
// switch 3

let day = 1;
switch (day){
    case 1 :
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
    console.log("I don't know");        
}


//Alert
// alert("Something went wrong!")

// Prompt

let firstnamee = prompt("What is your name:");
let lastname = prompt("enter your last name");
console.log(firstnamee +" "+ lastname);

// trim
let msg = "               hello          ";



for(i=1; i<=5; i++){
    console.log(`This is the number: ${i}`);
}


// print odd numbers 1 t0 15
for(i=1; i<=15; i=i+2){
    console.log(`This is odd number${i}`);
}


//Print all the even numbers form 1 to 20
for(i=2; i<=20; i=i+2){
    console.log(`This is Even numbers${i}`);
}

// print table of 5
for(i=5; i<=50; i=i+5){
    console.log(i);
}

// Take input of table number to print the table
// let n = prompt("Please enter your desired value:");
// n = parseInt(n);
// for(i=n; i<=10*n; i=i+n){
//     console.log(i);
// }


// Nested loop
for(let i=1; i<=3; i++){
    for (let i=1; i<=3; i++){
        console.log(i);
    }
}

// Guess my fav movie  ----While loop

let favMovie = "avatar";
let guess = prompt("Enter my favourite movie");
while((guess != favMovie) && (guess !="quit")){
    guess = prompt("Please try again");
}
if(guess == favMovie){
    console.log("Congrats");
}
else{
    console.log("Sorry you fail")
}

// While loop

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}


// guess the favourite month ---while loop
let favMonth = "january";
let guess = prompt("Enter my favourite month");
while((guess != favMonth) && (guess != "quit")){
    guess = prompt("please try again");
}
if(guess == favMonth){
    console.log("Congratulations");
}else{
    console.log("You quit")
}

// while loop ----BREAK
let favColor = "black";
let guess = prompt("Enter my fav color");
while(guess != favColor){
    if(guess = "quit"){
        console.log("you quit");
        break;
    }
    console.log("please try again")
}
if(favColor == guess){
    console.log("congrats")
}

// while loop ----BREAK
let i = 1;
while(i<=5){
    if(i == 3){
         break;
    }
    console.log(i);
}