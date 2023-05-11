// function sum(a,b){ 
//     return a+b;
//     // console.log(a+b);
// }

// var res = sum(1,3);

// var val = 10;


// Reference Datatypes
// array / object(object);

var arr = ["jhone",23,89099,"bhopal"];
// console.log(arr);
// console.log(arr[0]);
console.log(typeof arr);

var obj = {
    name : ["abhay","hitesh","mithlesh"],
    age : 23,
    city: "bhopal",
}

// console.log(obj);
// console.log(obj.name);
// console.log(typeof obj);
console.log(obj.name[2]);

//primitive dataypes::
var a = 12;
var b = a;
b = 34;
b = 3455;
console.log(a);
console.log(b);

//reference datatypes::
var a= [1,2,3,5,6,7];
var b =a;
a[2] = 244;

console.log(a);
console.log(b);

// var arr = [23,65,7,89,9];
// var arr2 = arr;
// arr[2] = 344;

// console.log(arr);
// console.log(arr2);