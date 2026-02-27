//Array methods
let arr = [1,2,3,4,5];

let print = (function(el) {
    console.log(el)
})

console.log(arr.forEach(print));


//direct pass method
let methos2=arr.forEach((el) =>{
    console.log(el)
})
console.log(methos2)


// object
let arrobj =[{
    name: 'sam',
    marks: 92
},{
    name: 'Ash',
    marks: 97
},{
    name: 'van',
    marks: 83
}]

console.log(arrobj.forEach((el)=>{
    console.log(el.marks)
}))


//map
let num = [1,2,3,4,5]
let double = num.map((el) => {
    return el*2;
})
console.log(double)

console.log(arrobj.map((el) => {
    return el.marks/10
}))

//filter
let fruit = ['apple', 'banana','watermelon'];

console.log(fruit.filter((el) => {return el == "banana"}))

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let ans = nums.filter((el) => el%2 == 0);
console.log(ans)


//every
console.log([2,4,6].every((el) => (el%2 ==0)))  //true
console.log([2,9,6].every((el) => (el%2 ==0)))  //false
//some
console.log([2,7 ,6].some((el) => (el%2 ==0)))  //true


//reduse
console.log([1,2,3,4,5].reduce((red, el) => red+el))

let arr1 = [1,4,3,6,7,8,2,9,6]
let maxm = arr1.reduce((max, el) => {
    if(max > el){
        return max;
    } else{
        return el
    }
}
    )
console.log(maxm);

//defualt parameter
// function sum(a=2,b){  wrong to make first paramer as default
function sum(a,b =2){ //this is write approch to assign defualt parameter
    return a+b
}
console.log(sum(1,3))// assign to both a and b
console.log(1)//assign to a so its provide error

//spread
let minm =[9876,67890,9876665]
console.log(Math.min(...minm))
console.log(Math.max(...minm))
console.log(...minm)

let str = "Aashlesha kharunkar";
console.log(...str);

//array literals
let odd =[1,3,5,7,9];
let even =[2,4,6,8];
let numbers = [...odd,...even,...fruit];
console.log(numbers)

//object literals
let student = {...arrobj, id:123}
console.log(student)

//conver array to object
let object = {...odd}
console.log(object)

//convert string to array
let obj = {...'hello'}
console.log(obj)


//rest
function sum(...argus){
    for(let i =0; i<argus.length; i++){
        console.log("you gave us:", argus[i])
    }
}
console.log(sum(1))
console.log(sum(12))
console.log(sum(1,2,3,4,5))

//destructuring
let names =["abc",'xyz','ert','qwe','tuy']
let [winner, runnerup, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);


//destructuring object
const studentsData ={
    name: 'xae',
    age:14,
    class:9,
    username: "xae@1234",
    password: "5678"
}

let {username,password} = studentsData;//its should same as key name
console.log(username);
let{name: studentName, city="mumbai", age} = studentsData //its to change the key name and parameter name
console.log(studentName)