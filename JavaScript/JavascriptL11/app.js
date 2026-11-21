//Call stack
function hello() {
    console.log('inside hello function');
    console.log('hello');
}
function demo(){
    console.log('calling hello function');
    hello()
}

console.log('calling demo function');
demo();
console.log('done by');

//visualization call stack
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}

console.log(three());

//Call back
setTimeout(()=>{
    console.log("call back function");
}, 2000);

console.log("Hello......");

//Call back hell
h1 = document.querySelector('h1');


function changeColor(color, delay, nextChnageColor){
    setTimeout(() => {
         h1.style.color = color;
         if(nextChnageColor) nextChnageColor();
    }, delay)
}

changeColor('red', 1000, () => {
    changeColor('Green', 1000, () => {
        changeColor('yellow', 1000)
    });
}); // call back nesting = callback hell
// changeColor('Green', 2000)
// changeColor('yellow', 3000)


//Setting up promises
function savetoDB (data, success, failure) {
    let internertSpeed = Math.floor(Math.random()*10)+1;
    if( internertSpeed > 4){
        success();
    } else{
        failure();
    }
    
}
savetoDB('promises', () =>{
    console.log('Your data was saved');
    savetoDB('helloooo', () =>{
    console.log('Your data2 was saved');
}, () =>{
    console.log('weak connection2')
})
}, () =>{
    console.log('weak connection')
})

//refactoring with promises
function savetoDBwithPro (data) {
    return new Promise((resolve, rejected) =>{
        let internertSpeed = Math.floor(Math.random()*10)+1;
    if( internertSpeed > 4){
        resolve('success: data was saved');
    } else{
        rejected("failure: wead connection");
    }
    }) 
}

//promises chaning
savetoDBwithPro('save in req').then((result) => {
    console.log("promise resolve");
    console.log(result)
    return savetoDBwithPro('save in req in 2ed time')
})
.then((result) =>{
        console.log("promise resolve *2");
        console.log(result)
        return savetoDBwithPro('save in req in 3ed time')
    })
    .then((result) =>{
        console.log("promise resolve *3")
        console.log(result)
    })
.catch((error) => {
    console.log("promise rejected");
    console.log(error)
})

//convert callback hell to promises
h2 = document.querySelector('h2')
function changeColorwithPro(color, delay){
    return new Promise((resolve, rejected) =>{
        setTimeout(() => {
         h2.style.color = color;
         resolve("color change")
    }, delay)
    })
}
changeColorwithPro('pink', 1000)
.then(() =>{
    return changeColorwithPro('blue', 1000)
})
.then(() =>{
    return changeColorwithPro('green', 1000)
})
.then(() =>{
    return changeColorwithPro('orange', 1000)
})
.catch(() =>{
    console.log("thre is something went wrong on colors")
})