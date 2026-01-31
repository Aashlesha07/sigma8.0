// console.log("Hello World");
// console.log("apana college");
let a = 10;
let b = 15;
let output = 'Your pay :' +(a+b)+ 'rupees';
console.log(output);
console.log(`Your pay : ${a+b} rupees`);
// console.log('Your pay ${a+b} rupees');
// console.log('Your pay :', a+b, 'rupees'  );

// console.log("Sum of a and b :", a+b);

let age = 18;
if (age >= 18){
    console.log('your are adult');
}else{
    console.log('your are not adult');
}


// else if statement
let marks = 14;
if (marks >= 60){
    console.log('A')
} else if (marks >= 33){
    console.log('B')
}else if (marks < 33){
    console.log('F')
}

//else statement
let color = 'white';
if (color === 'red'){
    console.log('Stop')
}else if (color === 'yellow'){
    console.log('Slow Down')
}else if (color === 'green'){
    console.log('Ready to go')
}else{
    console.log('traffic signal is broken')
}

//nested if-else
let Mark = 70;
if (Mark >= 33){
    console.log('pass');
    if (Mark >= 80){
        console.log('Grade A+')
    } else if (Mark >= 60){
        console.log('Grade A')
    }
}else {
    console.log('Butter luck next time')
}

//logical operater
let ANDT = (5 > 3) && (3 > 1); // (5 > 3) - true && (3 > 1) - true when both true ans of expression is true
console.log(ANDT);

let ANDFT = (5 > 3) && (3 < 1); // (5 > 3) - true && (3 < 1) - false when one is true and one is false ans of expression is false
console.log(ANDFT);

let ANDST = (5 < 3) && (3 > 1); // (5 < 3) - false && (3 > 1) - true when one is false and one is true ans of expression is false
console.log(ANDST);

let ANDF = (5 < 3) && (3 < 1); // (5 < 3) - false && (3 > 1) - false when both false ans of expression is false
console.log(ANDF);

//truly & falsy
if ("") {
    console.log("this is true");
}else{
    console.log("this is false")
}
if (" ") {
    console.log("this is true");
}else{
    console.log("this is false")
}

//switch statement
let traffic_signals = 'black';
switch (traffic_signals){
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('slow go');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('signal is broken');
    
}
//Alert and Prompt
// alert("Something is wrong");

// prompt('Enter your roll no.');

let first_name = prompt("Enter First Name");
let last_name = prompt("Enter Last Name");
alert("Welcome "+first_name+" "+last_name+"!")



//Javascript Level 3
//trim method
let msg = '    h   el   lo      ';
let trim_msg = msg.trim();
console.log(trim_msg)

//touppercase and tolowercase
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

//method with argument - indexOf
let str = 'ILoveCoding';
console.log(str.indexOf('c'));
console.log(str.indexOf('Love'));

//method chaning
console.log(msg.toUpperCase().trim());

//slice method
console.log(str.slice(1,5));
console.log(str.slice(5));
console.log(str.slice(-1));

//replace & repeate methde
console.log(str.replace("Love","Do"));
console.log(msg.repeat(3));

//Array
let student = ['aashlesha','sankalp','sameer'];
let info = ['aashlesha', 24, 2.515]  //multiple type