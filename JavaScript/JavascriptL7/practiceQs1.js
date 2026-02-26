//Qs01
let square = (a) =>(a*a);
console.log(square(4))

//Qs02
let id = setInterval(() =>{
    console.log("hello word")
},2000)

setTimeout(() =>{
    clearInterval(id);
},10000)