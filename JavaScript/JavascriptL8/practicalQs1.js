//Qs01
let num = [10,3,20,30,40,50,60,34 ,-45]
console.log(num.every((e)=> e/10 == 0))

//Qs02
console.log(num.reduce((min,e)=> {
    if(min<e){
        return min
    }else{
        return e
    }
}))