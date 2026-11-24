//async funstion
async function greet(){
    // throw"Something went wrong"
    return"Hello";
}
console.log(greet()); // return promise

greet().then((result)=>{
    console.log("promise is resolve with",result)
})
.catch((err)=>{
    console.log("promise is rejected with", err)
})
let demo = async() =>{
    return 5;
}
console.log(demo())

//await function 
function getNum(){
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        if(num < 3){
            reject(`number is less than 3 number ${num}`)
        }
        console.log(num);
        resolve()
    },1000);
    });
}
async function ranNum() {
    try{
    await getNum();
    await getNum();
    await getNum();
    await getNum()
    }catch(err){
        console.log(err)
    }
    console.log("only correct value")
    
}
console.log(ranNum())

//refactore change color code
h1 = document.querySelector('h1');
function changeColor(color){
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        h1.style.color = color;
        resolve("color change")
    },1000)
    })
    
}
async function changeStyle() {
    await changeColor('Green')
    await changeColor('Pink')
    await changeColor('Blue')
    changeColor('Yellow')
}
console.log(changeStyle())




//API
let jsonRps = '{"fact":"On average, cats spend 2\/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.","length":129}';

let covToJs = JSON.parse(jsonRps);  // Json data convert to javascript objects
console.log(covToJs.length);

let student ={
    name : "Manisha",
    rollNo : 01 ,
    className : "Vidhya"
};

let conToJson = JSON.stringify(student);
console.log(conToJson)

//first request
let url = 'https://catfact.ninja/fact'

fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();
})
.then((data) =>{
        console.log(data.fact);
        return fetch(url);
    })
.then((res) =>{
    return res.json()
})
.then((data2) =>{
    console.log(data2.fact)
})
.catch((err)=>{
    console.log(err)
})

//async and await

async function getFact() {
    try{
    let res = await fetch(url);
    let data = await res.json();
    console.log("data by grtfact fun", data.fact) 

    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log("data by grtfact fun", data1.fact) 
    } catch(err){
        console.log(err)
    } 
    console.log("byeee")      
}
console.log(getFact())