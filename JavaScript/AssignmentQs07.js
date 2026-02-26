//Qs01
let arr = [3,1,6,8,9,5,15,76,8,24,89]
const arrayAverage = () =>{
    let sum= 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i];   
    }
    return sum/(arr.length);
}
console.log(arrayAverage());

let isEven = (n) =>{
    if(n%2 == 0){
        console.log("Its even")
    }else{
        console.log("Its odd")
    }
}
console.log(isEven(7))

//Qs03
const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }};
    setTimeout(object.logMessage(),1000);


//Qs04
let length=4;
function callback(){
    console.log(this.length);
}
constobject={
    length:5,
    method(callback){
        callback(); 
    },
}

object.method(callback,1,2);