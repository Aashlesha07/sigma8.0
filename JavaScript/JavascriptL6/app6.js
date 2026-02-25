//funstion
function hello(){
    console.log('Hello World')
}

hello();

//practice 01
function poem(){
    console.log('twinkle twinkle littel star');
}
poem();

//practice 02
function dice(){
    console.log((Math.floor(Math.random()*6))+1)
}
dice()

//function with argument
function personInfo(name, age){
    console.log(`${name} age is ${age} `)
}
personInfo('anil', 45);

//practice 03
function avg (a,b,c){
    let cal = (a+b+c)/3;
    console.log(cal);
}

avg(1,4,10);

//practice 04
function table(n){
    for (let i=1;i<=10;i++){
        let mul = i*n;
        console.log(mul);
    }
}
table(prompt("Enter the number that you want create table"))

//Return
function sum(a,b){
    return a+b;
}

console.log(`sum of a and b ${sum(3,4)}`)

//try same funstion for sum of 3
console.log(`sum of a and b ${sum(sum(3,4),9)}`)

//practice 05
function sum1ton(n){
    for(let i=1; i<=n;i++){
        sum += i;
    }
    return sum;
}

//practice 06
let str = ["I", 'am', 'learing', 'javascript'];

function concatenation (str) {
    let emp = "";
    for(let i=0; i<=str.length-1; i++){
        emp += str[i];
        console.log(emp);
    }
    return;
}

concatenation(str);


//scope
let div = 54; //global scope

function Caldiv(a,b){
    let div = a/b;// funcion scope
    console.log(div)
}

Caldiv(9,8);
console.log(div)


//lexical scope
function outerFun(){
    let x = 10;
    let y = 4;
    function innerFun(){
        console.log(x);
    };
    innerFun();
}

outerFun();

//practice 07
let greet = 'hello'; //global
function changeGreet(){
    let greet = 'namaste';//function
    console.log(greet);
    function innerGreen(){
        console.log(greet);//lexical
    }
}
console.log(greet);
changeGreet();

//function expression
let mul = function(a,b){
    return a*b;
}
console.log(mul(7,4))


//higher order

function multiplegreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}

let greating = function(){
    console.log("hello world")
}

multiplegreet(greating, 2)


//higher order function (return)
function oddEven(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0)
            );
        }
    }else if (request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request")
    }
}

let request = "even";

//methods
const calculator ={
    add: function(a,b){
    return a+b;
    },
    sub: function(a,b){
    return a-b;
    },
    mul: function(a,b){
    return a*b;
    }
}
console.log(calculator.mul(2,4))

//methods - shorthand
const cal = {
    add(a,b){
    return a+b;
    },
    sub(a,b){
    return a-b;
    },
    mul(a,b){
    return a*b;
    }
}