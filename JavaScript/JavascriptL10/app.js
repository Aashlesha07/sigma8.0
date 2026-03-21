// let btn = document.querySelector('#btn');
// btn.onclick = function () {
//     console.dir(btn)
// }

// let btns = document.querySelectorAll('button');

// for (bttn of btns){
//     bttn.onclick = sayclicked;
//     bttn.onmouseenter = function () {
//         console.log('mouse is hover')
//     }
// }

// function sayclicked(){
//     console.log('Say its clicked');
// }

//Event listener
// let hello = document.querySelector('#hello');

// function sayHello(){
//     console.log("Say hello And I want to say")
// }
// function saygretting(){
//     console.log("Good mornig")
// }

// hello.addEventListener('click', sayHello)
// hello.addEventListener('click', saygretting)
// hello.addEventListener('dblclick', function(){
//     console.log('you doble click on button')
// })


// event listner for elemrnt
// let heading = document.querySelector('h2');
// heading.addEventListener('mouseleave',function(){
//     console.log('leave the mouse from heading')
// })

//this key word
// let thisbtn = document.querySelector('#this')
// thisbtn.addEventListener('click',function(){
//     console.log(this)
// })

// function changeBg(){
//     console.log(this.innerText);
//     this.style.backgroundColor='pink'
// }
// heading.addEventListener('mouseenter', changeBg);
// thisbtn.addEventListener('mouseenter', changeBg);

// let input = document.querySelector('input');
// input.addEventListener('keydown', function(){
//     console.log('key =',event.key);
//     console.log('code =',event.code)
//     console.log('keypress')
// })

// input.addEventListener('keyup', function(){
//     console.log('keypress up')
// })




// form
let form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let inp = document.querySelector("input");
    console.dir(inp)
    console.log(inp.value);
})

let user = document.querySelector('#user');

user.addEventListener("change", function(){
    console.log('your value is change')
    console.log(this.value)
})

user.addEventListener("input", function(){
    console.log('your value is input')
    console.log(this.value)
})



