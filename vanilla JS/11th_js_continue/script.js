var arr = [45,67,89,133,56,90];
// console.log(arr);

// ADDITION::---

// arr.push(45);     // add value at the end of the array...
// arr.push(67,99);

// var y  = arr.push(55,44);   // after addition, push also returns the lenght of the array... 
// console.log(y);

// arr.unshift(33,22);  // it adds the values at the starting of array...

// var x  = arr.unshift(88,84);   // after addition, unshift also returns the lenght of the array... 
// console.log(x);

// read
// console.log(arr);


// VALUE ELIMINATION::

// arr.pop();    // it eliminates the value at the end of the array....
// console.log(arr);

// var a = arr.pop();
// console.log(a);   // pop returns the eliminated value....

// arr.shift();   // shift eliminates the value at the start of the array.... 
// console.log(arr);

// var b = arr.shift();  // shift returns the eliminated value....
// console.log(b);


// 2nd method for elimination

// arr.splice(indx,no.of value);   ---syntx
// arr.splice(1,1);
// arr.splice(2)
// console.log(arr);

// var s = arr.splice(2,2);  //splice returns the eliminated value in the form of array..
// console.log(s);


// loops :::--

// for of loop---       // for of loop is use to iterate the array...
// for (var i of arr) {
//     console.log(i*2);
// }

// enhanced loop

// arr.forEach(function(element, index){
//     console.log(element, index);
// })

// scope {------}
// let, cosnt, var
// let ---- we can change the value in let.../ it is local scopic variable
// const ---- in this the value is constant always.../ it is local scopic variable.

var z = 13;   //globle scopic var...
// {
//     var m = 41;
//     console.log(z);
//     let n = 12;
//     const v = 23;    //local scopic variables....
//     const o = 66;
//     o = 76;
//     console.log(o);
// }
// console.log(m);
// console.log(n);
// console.log(v);


// lexical environment
// hoisting...
// s()
// function s(){
//     console.log("hello");    //fully hosited 
// }

// compilastion part of javascript.......

console.log(p);
// var p = 43;      // partialy hoisting... / var is partialy hoisted
// var p;
// p = 43;

// let p = 43;     
const p = 43;    // temporal dead zone (tdz).... 


