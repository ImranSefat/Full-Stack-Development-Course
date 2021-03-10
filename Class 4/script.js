// variable types

// 1. string 
// 2. number 
// 3. Boolean
// 4. array
// 5. object 

let myName = "Imran"
let age = 23
let boolean = false
let courses = ["CSE490", "CSE422", 23, false, {}]
let myObject = {
    name: "",
    age: 23,
    randomThings: [],
    anotherOne: {}
}


// console.log(myName, age);



// functions 
// multiply("Imran", 23)

function multiply(name, age) {
    console.log("Name is " + name);
    console.log("Age is " + age);
}

// arrow functions 

hello = function (name) {
    return "Imran"
}

arrowData = (data) => {
    const datas = data
    // calsdasdhjlaksjdlakjsd;asd
    // AbortSignalsd
    // asd
    // asda

    return datas
}

// console.log(hello());
// console.log(arrowData(123));


// pop up message 

// alert("Website launched!")




let x = 10
const y = 2
// console.log(x * y);
x = 20

// const is not changeable 
// y = 5

// console.log(x * y);

// x = y

// if (x === y) {
//     console.log("x is equal to y");
// // }


// console.log(12 == '12'); // returns true 
// console.log(12 === '12'); //returns false 


// console.log('cats' == 'dogs');//returns false


// console.log(false == 0); // returns true 
// console.log(false === 0); // returns false  


// console.log(0 == ''); // returns true 

// console.log(null == null);

// console.log(undefined === null); // returns false 


// // NaN  -> "Not a Number"

// console.log(NaN === false);

// this is equivalent to anything





// looping 


// traditional for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }


// for (let index = 0; index < courses.length; index++) {
//     console.log(courses[index])
// }

// for each loop with arrow functions 
// courses.forEach(x => console.log(x));


let a = [1, 2, 3]
// let b = [4, 5, 6]


// join one or more arrays , returns the joined array 
// a.concat(b)

// a.forEach(element => {
//     console.log(element);

//     // 1, 2, 3 
// });

// a = a.concat(b)

// console.log("line break");

// a.forEach(element => {
//     console.log(element);

//     // 1, 2, 3 , 4, 5, 6
// });

const customObject = {
    name: "Imran",
    age: 23,
    university: "BRACU"
}

for (const key in customObject) {
    // console.log(`${key} : ${customObject[key]}`);
}


// to get all the keys 
const keys = Object.keys(customObject)

keys.forEach(x => console.log(x))


// to get all the values 
const values = Object.values(customObject)

values.forEach(x => console.log(x))


// to get data types 
console.log(typeof (values));