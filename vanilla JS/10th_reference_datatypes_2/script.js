// var profile ={
//     name : "abhay parmar",
//     username: "abhay22",
//     age: "22",
//     place : "Bhopal",
//     Image : "C:\Users\Abhay\Desktop\gnklnsdgk\sheriyans logo.png",
// };

// // console.log(profile);

// for (const key in profile) {
//     console.log(key + "--> " + profile[key]);
// }


// creation of obj...

var obj = {};

// creation..

var obj = {
    name : "abhay",
    city: "bhopal",
    id: 7974,
    age: 34,
}

// update..

obj.age = 45;
obj.skill = "developer";

// delete..

// delete obj  --- never works. we can't delete whole object but we delete their keys and values.
delete obj.name
delete obj.age


// read
console.log(obj);


// creation of arry

// var arr  = [];

var arr = ["rahul", 56, "ujjain"];

arr[1] = 45;
// arr[3] = 6768999900087;  ---not efficient
arr[arr.length] = "coder";
arr[arr.length]  = "writer"

console.log(arr);
console.log(arr[1]);