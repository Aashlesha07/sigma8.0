//Qs1
let arr = [1,2,3,4,5,6]

let square = arr.map((e)=> e*e);
let sum = square.reduce((acc,e) => acc+e);
let avg=  sum/arr.length;
console.log(avg)

//Qs2
let num = [9,78,6,56,45,76]
let more5 = num.map((e)=>e+5);
console.log(more5);

//Qs3
let strings = ['orry', 'janvi', 'sara'];
console.log(strings.map((string)=> string.toUpperCase()))

//Qs04
// function doubleAndReturnArgs(arr, ...arg){
//     arg=arr.map((e)=>e*2)
// }
// console.log(doubleAndReturnArgs([1,2,3,4,5,6]))


//Qs05

function mergeObject(obj1,obj2) {
    return ({...obj1,...obj2})
}
console.log(mergeObject({a:1,b:2,c:3},{d:1,e:2,f:3}))