// inc / dec
// short hand

// input and alerts::
// alert("This is simple alert");
   // alert("this is a  simple alert");
// var a = Number(prompt("a ")); --- that we have to define that this is not a number not a string.
   // var a = prompt("a ");
// var a = confirm("Do you want to leave the page");
   // var a  = confirm("this is conformation message to you!");

// Conditional statements::

// if-else / switch::

// if(condition){
//     statement;
// }


//simple if
// var n = Number(prompt("enter the noo:"));
// if(n > 0){
//    console.log("positive!");
// }

// simple if else
// var n = Number(prompt("enter the noo:"));
// if(n > 0){
//    console.log("positive!");
// }
// else{
//    console.log("negative!")
// }

//multiple if-else /ladder
// var n = Number(prompt("enter the noo:"));
// if(n > 0){
//    console.log("positive!");
// }
// else if(n<0){
//    console.log("negative!");
// }
// else{
//    console.log("zero!");
// }

//nested if-else
// var n = Number(prompt("enter the noo:"));
// if(n > 0){
//    if(n%2===0){
//       console.log("even!");
//    }
//    else{
//       console.log("odd!")
//    }
// }
// else if(n<0){
//    console.log("negative!");
// }
// else{
//    console.log("zero!");
// }


// ladder if-else
// var n = Number(prompt("enter the noo:"));
// if(n > 0 && n%2===0){
//       console.log("even!");
// }
// else if(n>0 && n%2!==0){
//    console.log("odd!")
// }
// else if(n<0){
//    console.log("negative!");
// }
// else{
//    console.log("zero!");
// }

var age = Number(prompt("what is your age?"));
if(age>=18){
   console.log("you are eligible");
}
else{
   console.log("you are not eligible");
}