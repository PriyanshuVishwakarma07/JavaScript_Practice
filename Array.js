//object

let obj = {
    name : "Priyanshu",
    class : "TYIT",
    age : 19,
    height : "5ft 3inch",
    greet : function(){
        console.log("hello ! how are you");
    }
};

console.log(obj);
obj.greet();


// Array - array is collection of items

let arr = ["priyanshu", 'a', 12, 2.5];
console.log(arr)

//access the array items      
arr[1];


// Array methods
let arr = ["priyanshu", 19,'A', 1.5, "Hello"];
arr.push("vishwakarma");
arr.pop()
arr.shift();
arr.unshift("priyanshu");
arr.slice(2,4);


console.log(arr);


// map 
let math = [9, 25, 36, 81];
let ansArray = math.map((number) => {
    return number*number;
})

console.log(ansArray);



//filter
let arr = [10,20,30,11,21,44,51];
let evenArray = arr.filter((number) =>{
    if(number%2 === 0 ){
        return true;
    }else{
        return false
    }
})

console.log(evenArray)

// 2nd

let arr = ["priya","anshu",1, 2, 5];
let ans = arr.filter((value) =>{
    if(typeof(value) == 'string'){
        return true;
    }
    else{
        return false;
    }
})

// Concat

let fruits = ["apple", "banana", "pineapple"];
let vegetables = ["brinjal", "lady-finger", "tomato"];
let total = fruits.concat(vegetables);
console.log(total);